// context/Boutique.filter.ts
import { create } from "zustand";

interface BoutiqueState {
  PEGI: string[];
  Console: string[];
  Gender: string[];
  togglePEGI: (value: string) => void;
  toggleConsole: (value: string) => void;
  toggleGender: (value: string) => void;
}

const toggleHelper = (arr: string[], value: string): string[] =>
  arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];

const useBoutiqueStore = create<BoutiqueState>((set) => ({
  PEGI: [],
  Console: [],
  Gender: [],
  togglePEGI: (value) =>
    set((state) => ({ PEGI: toggleHelper(state.PEGI, value) })),
  toggleConsole: (value) =>
    set((state) => ({ Console: toggleHelper(state.Console, value) })),
  toggleGender: (value) =>
    set((state) => ({ Gender: toggleHelper(state.Gender, value) })),
}));

export default useBoutiqueStore;
