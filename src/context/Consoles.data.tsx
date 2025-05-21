import { create } from "zustand";

interface Console {
  fetchedConsoles: {
    id: number;
    name: string;
    image: string;
    description?: string;
    images?: { src: string }[];
  }[];
  setConsole: (consoles: Console["fetchedConsoles"]) => void;
}

export const useConsoleStore = create<Console>((set) => ({
  fetchedConsoles: [],
  setConsole: (consoles) => set({ fetchedConsoles: consoles }),
}));
