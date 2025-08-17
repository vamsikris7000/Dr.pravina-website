import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Send, X } from "lucide-react";
import VoiceChatWidget from "@/components/VoiceChatWidget";
import { chatbotEvents } from "@/lib/chatbot-events";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface RegistrationData {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  workshopName?: string;
  isComplete: boolean;
  userName?: string; // Track user's name from conversation
}

const ChatBot = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Load persistent data from localStorage
  const loadPersistentData = () => {
    try {
      const savedRegistrationData = localStorage.getItem('chatbot_registration_data');
      const savedConversationId = localStorage.getItem('chatbot_conversation_id');
      const savedMessages = localStorage.getItem('chatbot_messages');
      
      if (savedRegistrationData) {
        const parsedData = JSON.parse(savedRegistrationData);
        console.log('Loaded registration data from localStorage:', parsedData);
        return {
          registrationData: parsedData,
          conversationId: savedConversationId || '',
          messages: savedMessages ? JSON.parse(savedMessages) : [
            {
              id: "welcome",
              text: "👋 Hello there! How can we assist you?",
              isUser: false,
              timestamp: new Date(),
            },
          ]
        };
      }
    } catch (error) {
      console.error('Error loading persistent data:', error);
    }
    
    // Return default values if no saved data
    return {
      registrationData: { isComplete: false },
      conversationId: '',
      messages: [
        {
          id: "welcome",
          text: "👋 Hello there! How can we assist you?",
          isUser: false,
          timestamp: new Date(),
        },
      ]
    };
  };
  
  const initialData = loadPersistentData();
  
  const [messages, setMessages] = useState<Message[]>(initialData.messages);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [conversationId, setConversationId] = useState<string>(initialData.conversationId);
  const [registrationData, setRegistrationData] = useState<RegistrationData>(initialData.registrationData);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // No pre-warming - chatbot will initialize when user first interacts

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

  // Detect page refresh and clear conversation if it's a fresh page load
  useEffect(() => {
    const isPageRefresh = window.performance && window.performance.navigation.type === 1;
    const isFirstVisit = !localStorage.getItem('chatbot_session_started');
    
    if (isPageRefresh || isFirstVisit) {
      // Clear all conversation data for fresh start
      localStorage.removeItem('chatbot_registration_data');
      localStorage.removeItem('chatbot_conversation_id');
      localStorage.removeItem('chatbot_messages');
      
      // Mark session as started
      localStorage.setItem('chatbot_session_started', 'true');
      
      // Reset to initial state
      setConversationId('');
      setRegistrationData({ isComplete: false });
      setMessages([{
        id: "welcome",
        text: "👋 Hello there! How can we assist you?",
        isUser: false,
        timestamp: new Date(),
      }]);
      
      console.log('Fresh page load detected - conversation reset');
    } else {
      console.log('Returning to existing conversation');
    }
  }, []);

  // No pre-warming needed - chatbot initializes on first user interaction

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
          // Send the message immediately to reduce delay
          (async () => {
            setIsLoading(true);
            try {
              await sendMessageToChatbot(event.message);
            } finally {
              setIsLoading(false);
            }
            // Clear the input field after sending
            setInputValue("");
          })();
        }
      } else if (event.type === 'SEND_MESSAGE' && event.message) {
        const userMessage = {
          id: `user-${Date.now()}`,
          text: event.message,
          isUser: true,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);
        sendMessageToChatbot(event.message).finally(() => {
          setIsLoading(false);
        });
        // Clear the input field after sending
        setInputValue("");
      }
    });

    return unsubscribe;
  }, []);

  const sendMessageToChatbot = async (userMessage: string) => {
    const apiKey = import.meta.env.VITE_DIFY_API_KEY;
    if (!apiKey) {
      throw new Error('Dify API key is not configured. Please set VITE_DIFY_API_KEY environment variable.');
    }
    
    const apiUrl = window.location.hostname === 'localhost' 
      ? `${import.meta.env.VITE_DIFY_API_BASE_URL}/chat-messages`
      : '/.netlify/functions/chatbot';

    try {
      const requestBody: any = {
        inputs: {},
        query: userMessage,
        response_mode: 'streaming',
        user: 'abc-123'
      };

      // Only include conversation_id if we have one (for continuing existing conversation)
      if (conversationId) {
        requestBody.conversation_id = conversationId;
        console.log('Continuing conversation with ID:', conversationId);
      } else {
        console.log('Starting new conversation');
      }

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
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
            
            // Extract conversation ID if present and not already set
            if (data.conversation_id && !conversationId) {
              setConversationId(data.conversation_id);
              console.log('🆔 New conversation ID received:', data.conversation_id);
            } else if (data.conversation_id && conversationId) {
              console.log('🔄 Continuing with existing conversation ID:', data.conversation_id);
            }
            
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
    
    // Parse registration data from user input
    const parsedData = parseRegistrationData(userMessage);
    console.log('Parsed data from user input:', parsedData);
    
    // Update registration data immediately
    let updatedRegistrationData = registrationData;
    if (parsedData.firstName || parsedData.lastName || parsedData.phoneNumber || parsedData.workshopName || parsedData.userName) {
      updatedRegistrationData = {
        ...registrationData,
        ...parsedData
      };
      setRegistrationData(updatedRegistrationData);
      console.log('Updated registration data:', updatedRegistrationData);
    }
    
    // Add user message
    setMessages(prev => [...prev, {
      id: userMessageId,
      text: userMessage,
      isUser: true,
      timestamp: new Date(),
    }]);

    setInputValue("");
    
    // Reset textarea height, scrolling, and styling
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
      if (textarea instanceof HTMLTextAreaElement) {
        textarea.style.height = '48px';
        textarea.style.overflowY = 'hidden';
        textarea.style.borderRadius = '24px';
        textarea.style.paddingTop = '12px';
        textarea.style.paddingBottom = '12px';
      }
    });
    
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
    // Allow Shift+Enter for new lines
    if (e.key === 'Enter' && e.shiftKey) {
      // Let the default behavior happen (new line)
      return;
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

  // Save data to localStorage
  const saveToLocalStorage = (data: any, key: string) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  // Save registration data whenever it changes
  useEffect(() => {
    saveToLocalStorage(registrationData, 'chatbot_registration_data');
  }, [registrationData]);

  // Save conversation ID whenever it changes
  useEffect(() => {
    if (conversationId) {
      saveToLocalStorage(conversationId, 'chatbot_conversation_id');
    }
  }, [conversationId]);

  // Save messages whenever they change
  useEffect(() => {
    saveToLocalStorage(messages, 'chatbot_messages');
  }, [messages]);

  // Handle dialog close - don't reset conversation, just close dialog
  const handleDialogClose = (open: boolean) => {
    setIsDialogOpen(open);
    // Don't reset conversation when dialog closes - keep it persistent
    console.log('Dialog closed, conversation preserved');
  };

  // Parse user input for registration data
  const parseRegistrationData = (userInput: string): Partial<RegistrationData> => {
    const input = userInput.toLowerCase();
    const data: Partial<RegistrationData> = {};
    
    // Extract phone number (10 digits)
    const phoneMatch = userInput.match(/\b\d{10}\b/);
    if (phoneMatch) {
      data.phoneNumber = phoneMatch[0];
    }
    
    // Extract names (assuming comma-separated format like "vamsi, krishna, 7032098848")
    const parts = userInput.split(',').map(part => part.trim());
    console.log('Parsed parts:', parts);
    if (parts.length >= 2) {
      data.firstName = parts[0];
      data.lastName = parts[1];
      console.log('Extracted names:', data.firstName, data.lastName);
    }
    
    // Extract user name from "my name is" format
    const nameMatch = userInput.match(/my name is (\w+)/i);
    if (nameMatch) {
      data.userName = nameMatch[1];
    }
    
    // Extract workshop name
    const workshopKeywords = [
      'weight reset', 'pcos unplugged', 'pre-pregnancy', 'pregnancy wellness', 
      'breastfeeding', 'first foods', 'postpartum', 'confident breastfeeding'
    ];
    
    for (const keyword of workshopKeywords) {
      if (input.includes(keyword)) {
        if (input.includes('weight reset')) {
          data.workshopName = 'The Weight Reset for Women';
        } else if (input.includes('pcos')) {
          data.workshopName = 'PCOS Unplugged';
        } else if (input.includes('pre-pregnancy')) {
          data.workshopName = 'Pre-Pregnancy Power Couple';
        } else if (input.includes('pregnancy wellness')) {
          data.workshopName = 'Pregnancy Wellness Workshop';
        } else if (input.includes('breastfeeding') || input.includes('postpartum')) {
          data.workshopName = 'Confident Breastfeeding & Postpartum Healing';
        } else if (input.includes('first foods')) {
          data.workshopName = 'First Foods & Beyond';
        }
        break;
      }
    }
    
    return data;
  };

  // Check if registration is complete
  const isRegistrationComplete = (data: RegistrationData): boolean => {
    return !!(data.firstName && data.lastName && data.phoneNumber && data.workshopName);
  };

  // Auto-resize textarea with smooth transitions
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    
    // Auto-resize the textarea
    const textarea = e.target;
    textarea.style.height = 'auto';
    
    // Calculate new height with smooth expansion
    const newHeight = Math.min(textarea.scrollHeight, 128);
    textarea.style.height = newHeight + 'px';
    
    // Enable scrolling when content exceeds max height
    if (textarea.scrollHeight > 128) {
      textarea.style.overflowY = 'auto';
    } else {
      textarea.style.overflowY = 'hidden';
    }
    
    // Dynamic border radius based on content
    const contentLength = e.target.value.length;
    const lines = e.target.value.split('\n').length;
    
    if (contentLength < 10) {
      textarea.style.borderRadius = '24px'; // Very rounded for short text
    } else if (contentLength < 30 || lines > 1) {
      textarea.style.borderRadius = '20px'; // Medium rounded
    } else {
      textarea.style.borderRadius = '16px'; // Less rounded for long text
    }
    
    // Center text vertically when single line
    if (newHeight <= 48) {
      textarea.style.paddingTop = '12px';
      textarea.style.paddingBottom = '12px';
    } else {
      textarea.style.paddingTop = '8px';
      textarea.style.paddingBottom = '8px';
    }
  };

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
                  onChange={handleTextareaChange}
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
                    {(conversationId || messages.length > 1 || registrationData.firstName || registrationData.userName) ? (
                      <>
                        <span className="hidden sm:inline">💬 Continue chat...</span>
                        <span className="sm:hidden">💬 Continue...</span>
                      </>
                    ) : (
                      <>
                        <span className="hidden sm:inline">👋 Hello there! How can we assist you?</span>
                        <span className="sm:hidden">👋 Hello there!</span>
                      </>
                    )}
                  </div>
                )}
                <div className="absolute right-1 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                  {/* Phone call button - show on both mobile and desktop */}
                  <div>
                    <VoiceChatWidget variant="chatbar" />
                  </div>
                  {/* Send button */}
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    size="icon"
                    className="h-10 w-10 rounded-full bg-white shadow"
                    style={{ borderColor: '#368079', borderWidth: '1px', borderStyle: 'solid' }}
                  >
                    <Send className="h-4 w-4" style={{ color: '#368079' }} />
                  </Button>
                </div>
              </div>



            </div>
          </div>
        </div>
      )}

      {/* Chat Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent
          className="w-[95vw] max-w-[95vw] h-[90vh] max-h-[90vh] p-0 gap-0 rounded-2xl md:rounded-3xl border-0 shadow-2xl bg-white flex flex-col transition-all duration-300 ease-in-out animate-fade-in overflow-hidden font-poppins
            md:w-[75vw] md:max-w-[75vw] md:h-[75vh] md:max-h-[75vh]"
          style={{ boxShadow: '0 8px 40px 0 rgba(13, 148, 136, 0.10)' }}
        >
          <DialogHeader className="p-4 md:p-6 border-b border-teal-100 flex-shrink-0 rounded-t-2xl md:rounded-t-3xl" style={{ backgroundColor: '#F2FAF7' }}>
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gray-400"></div>
                <div className="text-xs text-gray-500 text-center">
                  Powered by <a 
                    href="https://www.xpectrum-ai.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    Xpectrum-AI
                  </a> agents
                </div>
                <div className="w-8 h-px bg-gray-400"></div>
              </div>
            </div>
            {conversationId && (
              <div className="text-xs text-teal-600 text-center mt-1 px-2">
                💬 Continuing conversation
              </div>
            )}
            {registrationData.userName && (
              <div className="text-xs text-blue-600 text-center mt-1 px-2">
                👤 Chatting with {registrationData.userName}
              </div>
            )}
            {registrationData.firstName && (
              <div className="text-xs text-green-600 text-center mt-1 px-2">
                📝 Registration in progress - {registrationData.firstName} {registrationData.lastName || ''}
              </div>
            )}
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
                    {message.isUser ? (
                      <div className="whitespace-pre-wrap">{message.text}</div>
                    ) : (
                      <div className="prose prose-sm max-w-none text-teal-900">
                        <ReactMarkdown 
                          remarkPlugins={[remarkGfm]}
                          components={{
                            p: ({children}) => <p className="mb-3 last:mb-0 leading-relaxed">{children}</p>,
                            ul: ({children}) => <ul className="list-disc list-inside mb-3 space-y-2 ml-2">{children}</ul>,
                            ol: ({children}) => <ol className="list-decimal list-inside mb-3 space-y-2 ml-2">{children}</ol>,
                            li: ({children}) => <li className="text-sm leading-relaxed">{children}</li>,
                            strong: ({children}) => <strong className="font-semibold text-teal-800">{children}</strong>,
                            em: ({children}) => <em className="italic">{children}</em>,
                            code: ({children}) => <code className="bg-teal-100 px-1 py-0.5 rounded text-xs font-mono">{children}</code>,
                            blockquote: ({children}) => <blockquote className="border-l-4 border-teal-300 pl-3 italic text-teal-700">{children}</blockquote>,
                            h1: ({children}) => <h1 className="text-lg font-bold mb-3 text-teal-800">{children}</h1>,
                            h2: ({children}) => <h2 className="text-base font-semibold mb-3 text-teal-800">{children}</h2>,
                            h3: ({children}) => <h3 className="text-sm font-semibold mb-2 text-teal-800">{children}</h3>,
                            hr: () => <hr className="border-teal-200 my-4" />
                          }}
                        >
                          {message.text}
                        </ReactMarkdown>
                      </div>
                    )}
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
              <Textarea
                value={inputValue}
                onChange={handleTextareaChange}
                onKeyDown={handleKeyPress}
                className="w-full min-h-[48px] max-h-32 pr-12 border-muted focus:border-primary bg-white shadow-sm font-poppins resize-none transition-all duration-300 ease-in-out"
                style={{
                  borderRadius: inputValue.length < 10 ? '24px' : inputValue.length < 30 ? '20px' : '16px',
                  paddingTop: '12px',
                  paddingBottom: '12px'
                }}
                placeholder="Type your message..."
                disabled={isLoading}
                rows={1}
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