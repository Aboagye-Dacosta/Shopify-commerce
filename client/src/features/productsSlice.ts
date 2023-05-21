import { StateCreator } from "zustand";
import { fetchData } from "../hooks/fetchData";
import { Product } from "../components/ProductItem";

export interface ProductSlice {
  products: Product[];
  setProducts: () => void;
}

const productsSlice: StateCreator<ProductSlice> = (set) => ({
  products: [],
  setProducts: async () => {
    try {
      const { data } = await fetchData.get("https://fakestoreapi.com/products");
      set({ products: data });
    } catch (error) {
      console.error(error);
    }
  },
});

export default productsSlice;
