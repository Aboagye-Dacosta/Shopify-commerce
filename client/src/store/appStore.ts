import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import productsSlice from "../features/productsSlice";
import navLinSlice from "../features/navigationSlice";
import categorySlice from "../features/categoriesSlice";

import { CategoriesSlice } from "../features/categoriesSlice";
import { ProductSlice } from "../features/productsSlice";
import { NavLinksSlice } from "../features/navigationSlice";

const useAppStore = create<ProductSlice & NavLinksSlice & CategoriesSlice>()(
  devtools(
    persist(
      (...a) => ({
        ...productsSlice(...a),
        ...navLinSlice(...a),
        ...categorySlice(...a),
      }),
      {
        name: "app-store",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

useAppStore.getState().setProducts();
useAppStore.getState().setCategories();

export default useAppStore;
