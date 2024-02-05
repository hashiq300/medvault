import { create } from "zustand";

const userStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  isLoaded: false,
  setIsLoaded: (isLoaded) => set({ isLoaded }),
}));

export default userStore;
