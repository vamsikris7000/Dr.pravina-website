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

  // Pre-warm the chatbot connection
  const preWarmChatbot = async () => {
    try {
      const apiUrl = window.location.hostname === 'localhost' 
        ? 'https://d22yt2oewbcglh.cloudfront.net/v1/chat-messages'
        : '/.netlify/functions/chatbot';
      
      const apiKey = 'app-SjuVYGo01iqolHNI7nKIsG4t';
      
      await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: {},
          query: 'Hello',
          response_mode: 'streaming',
          user: 'abc-123'
        }),
      });
    } catch (error) {
      // Silently fail pre-warm
      console.log('Pre-warm failed, continuing normally');
    }
  };

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

  // Pre-warm chatbot connection on mount
  useEffect(() => {
    preWarmChatbot();
  }, []);

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

  const sendMessageToChatbot = async (userMessage: string, currentRegistrationData?: RegistrationData) => {
    const apiKey = 'app-SjuVYGo01iqolHNI7nKIsG4t';
    const apiUrl = window.location.hostname === 'localhost' 
      ? 'https://d22yt2oewbcglh.cloudfront.net/v1/chat-messages'
      : '/.netlify/functions/chatbot';

    // Use the passed registration data or fall back to state
    const regData = currentRegistrationData || registrationData;

    // Generate contextual response if available
    const contextualResponse = generateContextualResponse(userMessage, regData);
    
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

      // If we have a contextual response, use it instead of API call
      if (contextualResponse) {
        console.log('Using contextual response:', contextualResponse);
        const botMessageId = `bot-${Date.now()}`;
        setMessages(prev => [...prev, {
          id: botMessageId,
          text: contextualResponse,
          isUser: false,
          timestamp: new Date(),
        }]);
        return;
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
      // Pass the updated registration data to sendMessageToChatbot
      await sendMessageToChatbot(userMessage, updatedRegistrationData);
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

  // Generate contextual response based on registration data
  const generateContextualResponse = (userInput: string, regData: RegistrationData): string | null => {
    const input = userInput.toLowerCase();
    console.log('Generating contextual response for:', userInput);
    console.log('Current registration data:', regData);
    
    // Handle name-related queries
    if (input.includes('my name') || input.includes('what is my name') || input.includes('tell my name')) {
      console.log('Name query detected');
      if (regData.userName) {
        return `Your name is **${regData.userName}**. How can I assist you today?`;
      } else if (regData.firstName) {
        return `Your name is **${regData.firstName} ${regData.lastName || ''}**. How can I assist you today?`;
      } else {
        return `I don't have your name on record yet. Could you please tell me your name?`;
      }
    }
    
    // Check if user is asking for workshop registration or mentioning specific workshops
    const workshopKeywords = ['register', 'registration', 'sign up', 'join', 'enroll', 'workshop'];
    const workshopNames = [
      'weight reset', 'pcos unplugged', 'pre-pregnancy', 'pregnancy wellness', 
      'breastfeeding', 'first foods', 'postpartum', 'confident breastfeeding'
    ];
    
    const isRegistrationRequest = workshopKeywords.some(keyword => input.includes(keyword));
    const hasWorkshopMention = workshopNames.some(workshop => input.includes(workshop));
    
    if (isRegistrationRequest || hasWorkshopMention) {
      // If we have complete registration data, provide payment info
      if (isRegistrationComplete(regData)) {
        return `## ✅ Registration Summary

**Name:** ${regData.firstName} ${regData.lastName}  
**Phone:** ${regData.phoneNumber}  
**Workshop:** ${regData.workshopName}  
**Price:** ₹499

---

### 💳 Payment Instructions

To complete your registration, please:

**1. Pay ₹499 via UPI** to our account

**2. Upload payment screenshot** to confirm enrollment

**3. Receive confirmation** within 24 hours

---

Your spot will be reserved once payment is received.  
Need payment details? Just ask!`;
      }
      
      // If we have partial data, ask for missing information
      if (regData.firstName && regData.lastName && regData.phoneNumber) {
        return `## 📝 Workshop Selection

**Name:** ${regData.firstName} ${regData.lastName}  
**Phone:** ${regData.phoneNumber}  
**Status:** ✅ Contact info received

---

### 🎯 Available Workshops

Please choose your workshop:

**1. 👩🏻‍⚕️ The Weight Reset for Women**
   All women 18+

**2. 🌸 PCOS Unplugged**
   Teens & young women

**3. 👫🏻 Pre-Pregnancy Power Couple**
   Couples planning pregnancy

**4. 🤰🏻 Pregnancy Wellness Workshop**
   Expecting mothers

**5. 🤱🏻 Confident Breastfeeding & Postpartum Healing**
   New moms

**6. 🍲 First Foods & Beyond**
   Moms with children 6 months to 5 years

---

**Reply with the workshop name** to continue registration.`;
      }
      
      if (regData.firstName && regData.lastName) {
        return `## 📞 Phone Number Needed

**Name:** ${regData.firstName} ${regData.lastName}  
**Status:** ⏳ Phone number pending

---

### 📱 Please provide your **10-digit phone number**

This helps us contact you for workshop details and confirmations.`;
      }
      
      if (regData.firstName) {
        return `## 👤 Complete Your Profile

**Name:** ${regData.firstName}  
**Status:** ⏳ Last name & phone needed

---

### 📝 Please provide:
**Last name** and **phone number**`;
      }
      
      // If no data yet, ask for basic info
      return `## 🎯 Workshop Registration

Welcome! I'm here to help you register for our workshops.

---

### 📋 Please provide your details:

**First name, last name, and phone number**

Once I have your details, I'll help you choose the perfect workshop!`;
    }
    
    // If user mentions a specific workshop but we don't have their data yet
    if (hasWorkshopMention && !regData.firstName) {
      // Extract the workshop name from their message
      let mentionedWorkshop = '';
      if (input.includes('weight reset')) {
        mentionedWorkshop = 'The Weight Reset for Women';
      } else if (input.includes('pcos')) {
        mentionedWorkshop = 'PCOS Unplugged';
      } else if (input.includes('pre-pregnancy')) {
        mentionedWorkshop = 'Pre-Pregnancy Power Couple';
      } else if (input.includes('pregnancy wellness')) {
        mentionedWorkshop = 'Pregnancy Wellness Workshop';
      } else if (input.includes('breastfeeding') || input.includes('postpartum')) {
        mentionedWorkshop = 'Confident Breastfeeding & Postpartum Healing';
      } else if (input.includes('first foods')) {
        mentionedWorkshop = 'First Foods & Beyond';
      }
      
      return `## 🎯 Workshop Registration

I see you're interested in **${mentionedWorkshop}**! 

📋 To register, please provide your details:
**First name, last name, and phone number**

Once I have your details, I'll help you complete the registration for ${mentionedWorkshop}.`;
    }
    
    // Check for consultation requests
    const consultationKeywords = ['consultation', 'consult', 'dr. pravina', 'doctor'];
    const isConsultationRequest = consultationKeywords.some(keyword => input.includes(keyword));
    
    if (isConsultationRequest) {
      return `## 👩‍⚕️ Consultation Booking

I can help you book a consultation with Dr. Pravina.

---

### 📋 Please provide:

**1. Main health concern**

**2. Your age**

**3. Your city**

**4. Preferred date & time**

**5. Phone number**

**6. Current lifestyle & health goals**

**7. Any symptoms you're experiencing**

**8. Previous programs tried (if any)**

---

This helps us schedule your session smoothly and provide personalized care.`;
    }
    
    // Default response for other queries
    return null;
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
                  👋 Hello there! How can we assist you?
                </div>
              )}
              <div className="absolute right-1 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                {/* Mobile phone call button */}
                <div className="lg:hidden">
                  <VoiceChatWidget />
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
          className="w-[75vw] max-w-[75vw] h-[75vh] max-h-[75vh] p-0 gap-0 rounded-3xl border-0 shadow-2xl bg-white flex flex-col transition-all duration-300 ease-in-out animate-fade-in overflow-hidden font-poppins
            sm:max-w-full sm:max-h-full sm:p-2"
          style={{ boxShadow: '0 8px 40px 0 rgba(13, 148, 136, 0.10)' }}
        >
          <DialogHeader className="p-6 border-b border-teal-100 flex-shrink-0 rounded-t-3xl" style={{ backgroundColor: '#F2FAF7' }}>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-playfair font-bold text-teal-700">
                Questions about Joining? Ask us here.
              </DialogTitle>
              {conversationId && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // Clear localStorage
                    localStorage.removeItem('chatbot_registration_data');
                    localStorage.removeItem('chatbot_conversation_id');
                    localStorage.removeItem('chatbot_messages');
                    localStorage.removeItem('chatbot_session_started');
                    
                    setConversationId('');
                    setRegistrationData({ isComplete: false });
                    setMessages([{
                      id: "welcome",
                      text: "👋 Hello there! How can we assist you?",
                      isUser: false,
                      timestamp: new Date(),
                    }]);
                    console.log('New chat started manually');
                  }}
                  className="text-xs h-8 px-3"
                >
                  New Chat
                </Button>
              )}
            </div>
            {conversationId && (
              <div className="text-xs text-teal-600 text-center mt-1">
                💬 Continuing conversation
              </div>
            )}
            {registrationData.userName && (
              <div className="text-xs text-blue-600 text-center mt-1">
                👤 Chatting with {registrationData.userName}
              </div>
            )}
            {registrationData.firstName && (
              <div className="text-xs text-green-600 text-center mt-1">
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