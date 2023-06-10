import { StateCreator } from "zustand";
import { CategoryTypes, Product } from "../_mocks/types";
import { ProductDataForBabies } from "../_mocks/for_babies";
import { ProductDataForBoys } from "../_mocks/for_boys";
import { ProductDataForGirls } from "../_mocks/for_girls";
import { ProductDataForToys } from "../_mocks/for_toys";
import { filterProductsBySearch } from "@/utils/products";
import shuffle from "lodash.shuffle";
export interface ProductSlice {
  products: Product[];
  allProducts: Product[];
  fetchProducts: () => any;
  isLoading: boolean;
  setCategoriesFilter: (category: CategoryTypes) => void;
  selectedCategory: CategoryTypes;
  getTotalForBabies: () => number;
  getTotalForBoys: () => number;
  getTotalForGirls: () => number;
  getTotalForToys: () => number;
  searchProduct: (search: string, products: Product[]) => void;
  getProductById: (Sku: string) => Product;
}

export const createProductSlice: StateCreator<ProductSlice> = (set, get) => ({
  products: [],
  allProducts: shuffle([
    ...ProductDataForBabies,
    ...ProductDataForBoys,
    ...ProductDataForGirls,
    ...ProductDataForToys,
  ]),
  isLoading: false,
  fetchProducts: async () => {
    //fake fetch api
    set({ isLoading: true });
    set({
      products: shuffle([
        ...ProductDataForBabies,
        ...ProductDataForBoys,
        ...ProductDataForGirls,
        ...ProductDataForToys,
      ]),
    });
    set({ isLoading: false });
    set({ selectedCategory: CategoryTypes.NONE });
  },
  setCategoriesFilter: async (category: CategoryTypes) => {
    switch (category) {
      case CategoryTypes.FOR_BABIES:
        set({ products: [...ProductDataForBabies] });
        set({ selectedCategory: CategoryTypes.FOR_BABIES });
        break;
      case CategoryTypes.FOR_BOYS:
        set({ products: [...ProductDataForBoys] });
        set({ selectedCategory: CategoryTypes.FOR_BOYS });
        break;
      case CategoryTypes.FOR_GIRLS:
        set({ products: [...ProductDataForGirls] });
        set({ selectedCategory: CategoryTypes.FOR_GIRLS });
        break;
      case CategoryTypes.FOR_TOYS:
        set({ products: [...ProductDataForToys] });
        set({ selectedCategory: CategoryTypes.FOR_TOYS });
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
  getTotalForBoys: () => {
    return ProductDataForBoys.length;
  },
  getTotalForGirls: () => {
    return ProductDataForGirls.length;
  },
  getTotalForToys: () => {
    return ProductDataForToys.length;
  },

  searchProduct: (search, products) => {
    const searchedP = filterProductsBySearch(products, search);
    set({ products: searchedP });
  },
  getProductById: (Sku) => {
    return get().allProducts.filter((p) => p.Sku === Sku)[0];
  },
});
