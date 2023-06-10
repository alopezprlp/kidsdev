import {create} from "zustand";
import { createProductSlice, ProductSlice } from "./slices/productSlices";

type StoreState = ProductSlice;

export const useStore = create<StoreState>()((...a) => ({
  ...createProductSlice(...a),
}));
