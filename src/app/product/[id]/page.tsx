import ProductPage from "@/components/ProductDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details",
};
export default function Home() {
  return <ProductPage/>
}
