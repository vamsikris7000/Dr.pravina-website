import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Send, X } from "lucide-react";
import VoiceChatWidget from "@/components/VoiceChatWidget";
import { chatbotEvents } from "@/lib/chatbot-events";

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

  // Listen to external chatbot events
  useEffect(() => {
    const unsubscribe = chatbotEvents.subscribe((event) => {
      if (event.type === 'OPEN_CHAT') {
        setIsDialogOpen(true);
        if (event.message) {
          // Add the message to chat and send it
          const userMessage = {
            id: `user-${Date.now()}`,
            text: event.message,
            isUser: true,
            timestamp: new Date(),
          };
          setMessages(prev => [...prev, userMessage]);
          // Send the message after a short delay to ensure the chat is open
          setTimeout(() => {
            sendMessageToChatbot(event.message);
            // Clear the input field after sending
            setInputValue("");
          }, 100);
        }
      } else if (event.type === 'SEND_MESSAGE' && event.message) {
        const userMessage = {
          id: `user-${Date.now()}`,
          text: event.message,
          isUser: true,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, userMessage]);
        sendMessageToChatbot(event.message);
        // Clear the input field after sending
        setInputValue("");
      }
    });

    return unsubscribe;
  }, []);

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
    setIsDialogOpen(true); // Open dialog when sending message

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

  return (
    <>
      {/* Bottom Chat Bar - Only show when dialog is closed */}
      {!isDialogOpen && (
        <div className="fixed bottom-2 left-0 right-0 z-50 p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-row items-center justify-between gap-2 mb+2">
              <div className="relative flex-1">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className="w-full h-12 pr-12 rounded-full border-muted focus:border-primary bg-card shadow-lg"
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
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10 w-10 rounded-full bg-white border border-primary shadow"
              >
                <Send className="h-4 w-4" style={{ color: '#338B81' }} />
              </Button>
              </div>
              {/* Inline Voice Chat Widget Button */}
              <div className="ml-2 flex-shrink-0">
                <VoiceChatWidget />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent
          className="w-[75vw] max-w-[75vw] h-[75vh] max-h-[75vh] p-0 gap-0 rounded-3xl border-0 shadow-2xl bg-white flex flex-col transition-all duration-300 ease-in-out animate-fade-in overflow-hidden font-poppins
            sm:max-w-full sm:max-h-full sm:p-2"
          style={{ boxShadow: '0 8px 40px 0 rgba(13, 148, 136, 0.10)' }}
        >
          <DialogHeader className="p-6 border-b border-teal-100 flex-shrink-0 rounded-t-3xl" style={{ backgroundColor: '#F2FAF7' }}>
            <DialogTitle className="text-2xl font-playfair font-bold text-teal-700 text-center w-full">
              Questions about Joining? Ask us here.
            </DialogTitle>
            {/* Removed close button */}
          </DialogHeader>

          {/* Messages */}
          <ScrollArea 
            ref={scrollAreaRef} 
            className="flex-1 p-6 bg-white overflow-y-auto"
          >
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-base font-poppins shadow-sm ${
                      message.isUser
                        ? 'bg-teal-600 text-white'
                        : 'bg-teal-50 text-teal-900 border border-teal-100'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-teal-50 text-teal-900 rounded-2xl px-4 py-2 text-base font-poppins border border-teal-100">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Chat Input Bar inside Dialog */}
          <div className="p-6 border-t border-teal-100 flex-shrink-0" style={{ backgroundColor: '#F2FAF7' }}>
            <div className="relative flex items-center">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full h-12 pr-12 rounded-full border-muted focus:border-primary bg-white shadow-sm font-poppins"
                placeholder="Type your message..."
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                size="icon"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10 w-10 rounded-full bg-teal-600 hover:bg-teal-700 text-white shadow-md"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatBot;