import { StateCreator } from "zustand";
import { fetchData } from "../hooks/fetchData";

export interface CategoriesSlice {
  categories: string[];
  setCategories: () => void;
}

const categorySlice: StateCreator<CategoriesSlice> = (set) => ({
  categories: [],
  setCategories: async () => {
    try {
      const { data } = await fetchData.get(
        "https://fakestoreapi.com/products/categories"
      );
      set({ categories: data });
    } catch (error) {
      console.log("🚀 ~ file: categoriesSlice.ts:14 ~ error:", error);
    }
  },
});

export default categorySlice;
