import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Send, X } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "👋 Hello there! How can we assist you?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const sendMessage = async (userMessage: string) => {
    if (!userMessage.trim()) return;

    // Add user message
    const userMessageId = `user-${Date.now()}`;
    setMessages(prev => [...prev, {
      id: userMessageId,
      text: userMessage,
      isUser: true,
      timestamp: new Date(),
    }]);

    setIsLoading(true);

    try {
      const apiUrl = window.location.hostname === 'localhost' 
        ? `${import.meta.env.VITE_DIFY_API_BASE_URL}/chat-messages`
        : '/.netlify/functions/chatbot';
      
      const apiKey = import.meta.env.VITE_DIFY_API_KEY;
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: {},
          query: userMessage,
          response_mode: 'streaming',
          user: 'user-' + Date.now()
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let fullMessage = '';

      if (!reader) {
        throw new Error('Failed to get response reader');
      }

      // Create bot message
      const botMessageId = `bot-${Date.now()}`;
      setMessages(prev => [...prev, {
        id: botMessageId,
        text: '',
        isUser: false,
        timestamp: new Date(),
      }]);

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n').filter(Boolean);
        
        for (const line of lines) {
          try {
            const cleanLine = line.startsWith('data: ') ? line.slice(6) : line;
            const data = JSON.parse(cleanLine);
            
            if (data.event === 'agent_message' && data.answer) {
              fullMessage += data.answer;
              
              // Update bot message with streaming text
              setMessages(prev => prev.map(msg => 
                msg.id === botMessageId 
                  ? { ...msg, text: fullMessage }
                  : msg
              ));
            }
          } catch {
            // Ignore lines that can't be parsed
          }
        }
      }
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages(prev => [...prev, {
        id: `error-${Date.now()}`,
        text: "Sorry, I'm having trouble connecting right now. Please try again later.",
        isUser: false,
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim() && !isLoading) {
      sendMessage(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleInputFocus = () => setIsFocused(true);
  const handleInputBlur = () => setIsFocused(false);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // Prevent body scroll when dialog is open
  useEffect(() => {
    if (isDialogOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDialogOpen]);

  return (
    <>
      {/* Bottom Chat Bar - Only show when dialog is closed */}
      {!isDialogOpen && (
        <div className="fixed bottom-2 left-0 right-0 z-50 p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-row items-center justify-between gap-2">
              <div className="relative flex-1">
                <Textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  className="w-full min-h-[48px] max-h-32 pr-12 bg-card shadow-lg resize-none transition-all duration-300 ease-in-out"
                  style={{ 
                    borderColor: '#368079', 
                    borderWidth: '1px', 
                    borderStyle: 'solid',
                    borderRadius: inputValue.length < 10 ? '24px' : inputValue.length < 30 ? '20px' : '16px',
                    paddingTop: '12px',
                    paddingBottom: '12px'
                  }}
                  disabled={isLoading}
                  placeholder=""
                  rows={1}
                />
                {!isFocused && !inputValue && (
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none select-none" style={{ color: '#368079' }}>
                    👋 Hello there! How can we assist you?
                  </div>
                )}
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-full p-0 bg-[#368079] hover:bg-[#2a5f5a] transition-colors"
                >
                  <Send className="h-4 w-4 text-white" />
                </Button>
              </div>
              <Button
                onClick={() => setIsDialogOpen(true)}
                className="h-12 w-12 rounded-full bg-[#368079] hover:bg-[#2a5f5a] transition-colors shadow-lg"
              >
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl h-[80vh] p-0 bg-white">
          <DialogHeader className="p-4 border-b bg-[#368079] text-white">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-lg font-semibold">
                Chat with Dr. Pravina
              </DialogTitle>
              <Button
                onClick={() => setIsDialogOpen(false)}
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          {/* Messages Area */}
          <div className="flex-1 overflow-hidden">
            <ScrollArea ref={scrollAreaRef} className="h-full p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-3 ${
                        message.isUser
                          ? 'bg-[#368079] text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <div className="prose prose-sm max-w-none">
                        <ReactMarkdown 
                          remarkPlugins={[remarkGfm]}
                          components={{
                            p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                            strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                            em: ({ children }) => <em className="italic">{children}</em>,
                            ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
                            ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
                            li: ({ children }) => <li className="text-sm">{children}</li>,
                            h1: ({ children }) => <h1 className="text-xl font-bold mb-2">{children}</h1>,
                            h2: ({ children }) => <h2 className="text-lg font-semibold mb-2">{children}</h2>,
                            h3: ({ children }) => <h3 className="text-base font-semibold mb-1">{children}</h3>,
                            blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic">{children}</blockquote>,
                            code: ({ children }) => <code className="bg-gray-200 px-1 py-0.5 rounded text-sm">{children}</code>,
                            pre: ({ children }) => <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">{children}</pre>,
                          }}
                        >
                          {message.text}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-900 rounded-lg px-4 py-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t bg-gray-50">
            <div className="flex gap-2">
              <Textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 min-h-[48px] max-h-32 resize-none"
                disabled={isLoading}
                rows={1}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="h-12 w-12 rounded-full p-0 bg-[#368079] hover:bg-[#2a5f5a] transition-colors"
              >
                <Send className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatBot;