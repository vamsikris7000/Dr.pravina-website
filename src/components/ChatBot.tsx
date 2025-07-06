import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, X, ChevronDown, Maximize2, Minimize2 } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
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
    const apiKey = 'app-7WvYbQAq21HIN4UU4ZcBZcWw';
    const apiUrl = 'https://d22yt2oewbcglh.cloudfront.net/v1/chat-messages';

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

      // Create a bot message that we'll update as we stream
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
              
              // Update the bot message with streaming text
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
    
    // Add user message
    setMessages(prev => [...prev, {
      id: userMessageId,
      text: userMessage,
      isUser: true,
      timestamp: new Date(),
    }]);

    setInputValue("");
    setIsLoading(true);

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

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg transition-all duration-300 z-50 ${
          isOpen 
            ? 'bg-secondary hover:bg-secondary/90' 
            : 'bg-primary hover:bg-primary/90'
        }`}
        size="icon"
      >
        {isOpen ? (
          <ChevronDown className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>

      {/* Chat Panel */}
      <div
        className={`fixed transition-all duration-300 z-40 bg-card border border-border rounded-2xl shadow-2xl ${
          isExpanded 
            ? 'bottom-6 right-6 w-[50vw] h-[80vh]' 
            : 'bottom-24 right-6 w-80 h-96'
        } ${
          isOpen
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border rounded-t-2xl bg-card">
          <h3 className="font-semibold text-card-foreground">
            Questions about Joining? Ask us here.
          </h3>
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsExpanded(!isExpanded)}
              className="h-8 w-8 rounded-full hover:bg-muted"
            >
              {isExpanded ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 rounded-full hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea 
          ref={scrollAreaRef} 
          className={`flex-1 p-4 ${isExpanded ? 'h-[calc(80vh-140px)]' : 'h-64'}`}
        >
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                    message.isUser
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-muted-foreground rounded-2xl px-3 py-2 text-sm">
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

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center space-x-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="What can we help you with?"
              className="flex-1 rounded-full border-muted focus:border-primary"
              disabled={isLoading}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              size="icon"
              className="rounded-full h-10 w-10 bg-primary hover:bg-primary/90"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;