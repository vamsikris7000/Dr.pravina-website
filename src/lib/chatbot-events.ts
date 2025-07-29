// Chatbot event system for triggering chatbot from other components
type ChatbotEvent = {
  type: 'OPEN_CHAT' | 'SEND_MESSAGE';
  message?: string;
};

class ChatbotEventManager {
  private listeners: ((event: ChatbotEvent) => void)[] = [];

  subscribe(listener: (event: ChatbotEvent) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  emit(event: ChatbotEvent) {
    this.listeners.forEach(listener => listener(event));
  }

  openChat(message?: string) {
    this.emit({
      type: 'OPEN_CHAT',
      message
    });
  }

  sendMessage(message: string) {
    this.emit({
      type: 'SEND_MESSAGE',
      message
    });
  }
}

export const chatbotEvents = new ChatbotEventManager(); 