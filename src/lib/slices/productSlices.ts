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
  getProductById: (Sku: string) => Product;
}

export const createProductSlice: StateCreator<ProductSlice> = (set, get) => ({
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
    switch (category) {
      case CategoryTypes.FOR_BABIES:
        set({ products: ProductDataForBabies });
        set({ selectedCategory: CategoryTypes.FOR_BABIES });
        console.log('Hello from store',get().selectedCategory,category)
        break;

      default:
        set({ selectedCategory: CategoryTypes.NONE });
        set({ products: [] });
        break;
    }

  },
  selectedCategory: CategoryTypes.NONE,
  getTotalForBabies: () => {
    return ProductDataForBabies.length;
  },
  searchProduct: (search, products) => {
    const searchedP = filterProductsBySearch(products, search);
    set({ products: searchedP });
  },
  getProductById: (Sku) => {
    return get().allProducts.filter((p) => p.Sku === Sku)[0];
  },
});
