import { StateCreator } from "zustand";

export interface NavLinksSlice {
  navLink: string | null;
  selectedNav: number;
  setNavLink: (navLink: string | null) => void;
  setSelectedNav: (navLink: number) => void;
}

const navLinSlice: StateCreator<NavLinksSlice> = (set) => ({
  navLink: "Home",
  selectedNav: 0,
  setNavLink: (navLink) => set({ navLink }),
  setSelectedNav: (by) => set({ selectedNav: by }),
});

export default navLinSlice;
