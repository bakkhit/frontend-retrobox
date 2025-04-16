import { create } from "zustand";

const useStore = create((set) => ({
  PEGI: "",
  console: "",
  gender: "",
}));
