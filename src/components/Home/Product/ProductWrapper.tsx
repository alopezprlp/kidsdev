"use client";
import { useStore } from "@/lib/store";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import Pagination from "@/components/common/Pagination";
import { Product } from "@/lib/_mocks/types";

const MAX_SIZE = 9;
const ProductWrapper = () => {
  const { fetchProducts, products, isLoading } = useStore();
  const [page, setPage] = useState(1);

  const getCurrentPageData = (products: Product[]) => {
    const startIndex = (page - 1) * MAX_SIZE;
    const endIndex = startIndex + MAX_SIZE;
    return products.slice(startIndex, endIndex);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading && products.length === 0) {
    return <p className="text-3xl">Loading</p>;
  }

  return (
    <>
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
    </>
  );
};

export default ProductWrapper;
