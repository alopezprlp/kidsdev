import { StateCreator } from "zustand";
import { CategoryTypes, Product } from "../_mocks/types";
import { ProductDataForBabies } from "../_mocks/for_babies";
import { filterProductsBySearch } from "@/utils/products";

export interface ProductSlice {
  products: Product[];
  allProducts: Product[];
  fetchProducts: () => any;
  isLoading: boolean;
  setCategoriesFilter: (category: CategoryTypes) => void;
  selectedCategory: CategoryTypes;
  getTotalForBabies: () => number;
  searchProduct: (search: string, products: Product[]) => void;
}

export const createProductSlice: StateCreator<ProductSlice> = (set) => ({
  products: [],
  allProducts: [...ProductDataForBabies],
  isLoading: false,
  fetchProducts: async () => {
    //fake fetch api
    set({ isLoading: true });
    set({ products: ProductDataForBabies });
    set({ isLoading: false });
    set({ selectedCategory: CategoryTypes.NONE });
  },
  setCategoriesFilter: async (category: CategoryTypes) => {
    set({ isLoading: true });
    switch (category) {
      case CategoryTypes.FOR_BABIES:
        set({ products: ProductDataForBabies });
        set({ selectedCategory: CategoryTypes.FOR_BABIES });
        break;

      default:
        set({ selectedCategory: CategoryTypes.NONE });
        set({ products: [] });
        break;
    }

    set({ isLoading: false });
  },
  selectedCategory: CategoryTypes.NONE,
  getTotalForBabies: () => {
    return ProductDataForBabies.length;
  },
  searchProduct: (search, products) => {
    const searchedP = filterProductsBySearch(products, search);
    set({ products: searchedP });
  },
});
