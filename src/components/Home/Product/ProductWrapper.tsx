/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useStore } from "@/lib/store";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import Pagination from "@/components/common/Pagination";
import { CategoryTypes, Product } from "@/lib/_mocks/types";
import { useSearchParams } from "next/navigation";
import { AnimatePresence } from "framer-motion";

const MAX_SIZE = 9;
const ProductWrapper = () => {
  const { fetchProducts, products, isLoading, setCategoriesFilter } =
    useStore();
  const [page, setPage] = useState(1);
  const searchParams = useSearchParams();
  const categoryCallBack = searchParams.get("categoryCallBack");

  const getCurrentPageData = (products: Product[]) => {
    const startIndex = (page - 1) * MAX_SIZE;
    const endIndex = startIndex + MAX_SIZE;
    return products.slice(startIndex, endIndex);
  };

  useEffect(() => {
    if (categoryCallBack) {
      switch (categoryCallBack) {
        case "For Babie":
          setCategoriesFilter(CategoryTypes.FOR_BABIES);
          break;
        case "For Boys":
          setCategoriesFilter(CategoryTypes.FOR_BOYS);
          break;
        case "For Girls":
          setCategoriesFilter(CategoryTypes.FOR_GIRLS);
          break;
        case "For Toys":
          setCategoriesFilter(CategoryTypes.FOR_TOYS);
          break;
        default:
          fetchProducts();
          break;
      }
      return;
    }
    fetchProducts();
  }, []);

  if (isLoading && products.length === 0) {
    return <p className="text-3xl">Loading</p>;
  }

  return (
    <AnimatePresence>
      <div className="grid grid-cols-3 gap-6 gap-y-12 mb-10">
        {getCurrentPageData(products).map((e) => (
          <ProductItem key={e.id} {...e} />
        ))}
      </div>
      <Pagination
        page={page}
        maxPage={Math.ceil(products.length / MAX_SIZE)}
        onPageChange={setPage}
      />
    </AnimatePresence>
  );
};

export default ProductWrapper;
