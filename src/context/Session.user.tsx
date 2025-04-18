import { create } from "zustand";

interface SessionState {
  token: string | null;
  user: {
    id: number;
    name: string;
    email: string;
  };
  setUser: (user: { id: number; name: string; email: string }) => void;
  setToken: (token: string | null) => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  token: null,
  user: {
    id: 0,
    name: "",
    email: "",
  },
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
}));
