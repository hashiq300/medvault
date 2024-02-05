import { create } from "zustand";

const chatStore = create((set) => ({
  messages: [{
    from: "bot",
    message: "Hello, I am BloomAI, your personal health assistant. How can I help you today?"
  }],
  addMessage: (from, message) => {
    set((state) => ({
      messages: [...state.messages, { from, message }],
    }));
  },
}));

export default chatStore;
