import GirlImg from "../../../../public/images/main/girls-power.webp";

import { francois, quickSands, gilda } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import Categories from "./Categories";
import BSeller from "./BSeller";
import Newsletter from "./Newsletter";
import ProductItem from "./ProductItem";

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
            <div className="w-full flex items-center ">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full h-11 py-2 px-4 bg-transparent focus:outline-none border-t border-l border-b border-r-0 border-dashed border-gray-400 "
              />
              <button className="flex flex-row h-11 justify-center items-center p-1 bg-[#E5745D] ">
                <span className="border-dashed border-2 px-[8px] py-2 border-white">
                  <HiOutlineMagnifyingGlass className="h-4 w-4 text-white" />
                </span>
              </button>
            </div>
            <Categories />

            <BSeller />

            <Newsletter />
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-3 gap-6 gap-y-12">
            {Array.from({ length: 9 }, (_, idx) => {
              return (
                <ProductItem key={idx}/>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
