import { francois } from "@/utils/fonts";
import React from "react";
import Categories from "./Categories";
import BSeller from "./BSeller";
import Newsletter from "./Newsletter";
import ProductWrapper from "./ProductWrapper";
import FormSearch from "./FormSearch";

const ProductPage = () => {
  return (
    <section className="mt-20 w-full">
      <h1
        className={`after-img uppercase text-4xl text-center mt-2 text-[#486683] ${francois.className} relative`}
      >
        New Arrivals
      </h1>
      <div className="grid grid-cols-3 gap-10 mt-20">
        <div className="col-span-1 ">
          <div className="flex flex-col">
            <FormSearch />
            <Categories />
            <BSeller />
            <Newsletter />
          </div>
        </div>
        <div className="col-span-2">
          <ProductWrapper />
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
