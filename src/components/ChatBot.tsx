import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, X, MessageCircle } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
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

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessageToChatbot = async (userMessage: string) => {
    const apiKey = 'app-AZ5VwFvWHU9DD9M3zZG4wcic';
    const apiUrl = 'https://dtxbmbumrjys5.cloudfront.net/v1/chat-messages';

    try {
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
          conversation_id: '',
          user: 'abc-123',
          files: [
            {
              type: 'image',
              transfer_method: 'remote_url',
              url: 'https://cloud.dify.ai/logo/logo-site.png',
            },
          ],
        }),
      });

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let fullMessage = '';

      if (!reader) {
        throw new Error('Failed to get response reader');
      }

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
      console.error('Chatbot API error:', error);
      const errorMessageId = `error-${Date.now()}`;
      setMessages(prev => [...prev, {
        id: errorMessageId,
        text: "Sorry, I'm having trouble connecting right now. Please try again later or contact us directly.",
        isUser: false,
        timestamp: new Date(),
      }]);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    const userMessageId = `user-${Date.now()}`;
    
    setMessages(prev => [...prev, {
      id: userMessageId,
      text: userMessage,
      isUser: true,
      timestamp: new Date(),
    }]);

    setInputValue("");
    setIsLoading(true);
    setIsChatOpen(true);

    try {
      await sendMessageToChatbot(userMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    if (!inputValue) {
      setIsFocused(false);
    }
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseChat();
    }
  };

  return (
    <>
      {/* Floating Chat Bar */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="relative max-w-md w-full">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className="w-full h-12 pr-12 rounded-full border-muted focus:border-primary bg-card/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            disabled={isLoading}
          />
          {!isFocused && !inputValue && (
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none select-none">
              👋 Hello there! How can we assist you?
            </div>
          )}
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            size="icon"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10 w-10 rounded-full bg-primary hover:bg-primary/90 transition-all duration-200"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Chat Modal Overlay */}
      {isChatOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={handleOverlayClick}
        >
          <div 
            className="relative w-full max-w-2xl h-[75vh] rounded-3xl shadow-2xl animate-in fade-in-0 zoom-in-95 duration-300 ease-out"
            style={{
              background: 'linear-gradient(135deg, hsl(220, 70%, 85%) 0%, hsl(280, 60%, 85%) 100%)',
              backdropFilter: 'blur(20px)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20 backdrop-blur-sm bg-white/10 rounded-t-3xl">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-lg font-semibold text-white">
                  Questions about Joining? Ask us here.
                </h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCloseChat}
                className="h-8 w-8 rounded-full hover:bg-white/20 text-white"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages Area */}
            <ScrollArea 
              ref={scrollAreaRef} 
              className="flex-1 p-6"
              style={{ height: 'calc(75vh - 140px)' }}
            >
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm backdrop-blur-sm ${
                        message.isUser
                          ? 'bg-white/90 text-gray-800 shadow-sm'
                          : 'bg-white/70 text-gray-700 shadow-sm'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white/70 text-gray-700 rounded-2xl px-4 py-3 text-sm backdrop-blur-sm shadow-sm">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-6 border-t border-white/20 backdrop-blur-sm bg-white/10 rounded-b-3xl">
              <div className="flex items-center space-x-3">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 rounded-full border-white/30 bg-white/20 text-white placeholder:text-white/70 focus:border-white/50 backdrop-blur-sm"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  size="icon"
                  className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;