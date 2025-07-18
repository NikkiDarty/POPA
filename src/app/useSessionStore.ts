import { create } from 'zustand';

interface SessionState {
  theme: 'light' | 'dark';
  isLoggedIn: boolean;
  setTheme: (theme: 'light' | 'dark') => void;
  setLoggedIn: (isLoggedIn: boolean) => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  theme: 'light',
  isLoggedIn: false,
  setTheme: (theme) => set({ theme }),
  setLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
})); 