import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

type AppStore = {
  navLink: string | null;
  selectedNav: number;
  products: [];
  fetchData: (from: string) => void;
  setNavLink: (by: string | null) => void;
  setSelectedNav: (by: number) => void;
};

const useAppStore = create<AppStore>()(
  devtools(
    persist(
      (set) => ({
        navLink: "Home",
        products: [],
        selectedNav: 0,
        fetchData: async (from: string) => {
          const response = await fetch(from);
          if (response.ok) {
            const data = await response.json();
            set({ products: data });
          } else {
            set({ products: [] });
          }
        },
        setNavLink: (by) => set({ navLink: by }),
        setSelectedNav: (by) => set({ selectedNav: by }),
      }),
      {
        name: "app-store",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

useAppStore.getState().fetchData("https://fakestoreapi.com/products");

export default useAppStore;
