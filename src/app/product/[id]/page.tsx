"use client";
import ImgZoom from "@/components/ProductDetails/ImgZoom";
import RelatedItem from "@/components/ProductDetails/RelatedItem";
import Tabs from "@/components/ProductDetails/Tabs";
import Rate from "@/components/RateStart";
import BreadCumbs from "@/components/common/BreadCumbs";
import { Product } from "@/lib/_mocks/types";
import { useStore } from "@/lib/store";
import { francois, quickSands } from "@/utils/fonts";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const PDP = async ({ params }: any) => {
  const { id } = params;
  const { getProductById } = useStore();
  const [product, setProducts] = useState<Product>(getProductById(id));

  if (!id) {
    redirect("/");
  }
  if (typeof product === "undefined") {
    redirect("/");
  }
  useEffect(() => {
    setProducts(product);
  }, []);
  return (
    <section className="container mx-auto px-28 py-8 mb-40 ">
      <BreadCumbs name={product.name || ""} category={product.category || ""} />
      <div className="grid grid-cols-3 gap-10 mt-14">
        <div className="col-span-1">
          <ImgZoom images={product.related_images} />
        </div>
        <div className="col-span-2">
          <p
            className={`mb-5 text-md font-bld text-[#486683] ${francois.className}`}
          >
            {`$${product.price}`}
          </p>
          <Rate rate={product.rate || 1} />
          <p className={`mt-5 ${quickSands.className}`}>
            {product.description}
          </p>
          <div className="w-1/2 flex items-center mt-5">
            <input
              type="text"
              className="w-[20%] h-10  px-4 bg-transparent focus:outline-none border-t border-l border-b border-r border-dashed border-gray-400 "
            />
            <button className="ml-2 flex flex-row w-[50%] h-10 justify-center items-center p-[5px] bg-[#E5745D] ">
              <span className="border-dashed border-2 border-white w-full h-full flex flex-row justify-center items-center">
                <p className="text-white">ADD TO CART</p>
              </span>
            </button>
          </div>
          <div className="flex flex-row justify-start items-center space-x-1 mt-5">
            <p className={`${quickSands.className}`}>Product added!</p>
            <Link
              className={`${francois.className} text-[#486683] hover:text-[#2a3c4e]`}
              href="#"
            >
              Browse Wishlist
            </Link>{" "}
          </div>

          <div className="mt-12 border-dashed border border-gray-400 p-4">
            <div className="flex items-center justify-start py-2 px-4 border-b border-gray-400">
              <div
                className={`w-[23%] text-lg text-[#486683] ${francois.className} hover:text-[#E5745D] transition-all cursor-pointer`}
              >
                SKU:
              </div>
              <div className={`text-lg ${quickSands.className}`}>
                {product.Sku}
              </div>
            </div>
            <div className="flex items-center justify-start py-2 px-4 border-b border-gray-400">
              <div
                className={`w-[23%] text-lg text-[#486683] ${francois.className} hover:text-[#E5745D] transition-all cursor-pointer`}
              >
                Category:
              </div>
              <div className={`text-lg ${quickSands.className}`}>
                {product.category}
              </div>
            </div>
            <div className="flex items-center justify-start py-2 px-4">
              <div
                className={`w-[23%] text-lg text-[#486683] ${francois.className} hover:text-[#E5745D] transition-all cursor-pointer`}
              >
                Tags:
              </div>
              <div
                className={`text-lg flex items-center space-x-2 ${quickSands.className}`}
              >
                {product.tags.map((e, inx) => (
                  <span key={inx}>{e}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs product={product} />

      <div className="mt-[15rem] w-full">
        <h1
          className={`after-img uppercase text-4xl text-center mt-2 text-[#486683] ${francois.className} relative`}
        >
          RELATED PRODUCTS
        </h1>
        <div className="mt-20 w-full flex justify-between space-x-5 items-center">
          {product.related_product.slice(0, 4).map((cat) => (
            <RelatedItem key={cat.id} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PDP;

// Generate static params 
// export async function generateStaticParams() {
//   const products = await fetch('https://.../products').then((res) => res.json())
 
//   return products.map((p) => ({
//     Sku: p.Sku,
//   }))
// }