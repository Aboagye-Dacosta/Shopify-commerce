import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type AppStore = {
  navLink: string | null;
  setNavLink: (by: string | null) => void;
};

const useAppStore = create<AppStore>()(
  devtools(
    persist(
      (set) => ({
        navLink: "Home",
        setNavLink: (by) => set({ navLink: by }),
      }),
      { name: "app-store" }
    )
  )
);

export default useAppStore;
