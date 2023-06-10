"use client";
import { Product } from "@/lib/_mocks/types";
import { francois, gilda, quickSands } from "@/utils/fonts";
import Image from "next/image";
import { FC, useState } from "react";
import { HiOutlineHeart, HiOutlineMagnifyingGlass } from "react-icons/hi2";

const ProductItem: FC<Product> = ({
  related_images,
  stock,
  category,
  name,
  price,
}) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="figure w-full h-auto relative transition-all duration-500"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={related_images[0]}
          alt="Girls"
          width={100}
          height={500}
          className="h-full w-full max-h-[17rem] object-cover transition-all duration-500"
        />
        <Image
          src={related_images[1]}
          alt="Girls"
          width={100}
          height={500}
          className={`Sirv image-hover h-full w-full max-h-[17rem] object-cover opacity-0 transition-opacity duration-200 ${
            hovered ? "opacity-100" : ""
          }`}
        />
        {stock === 0 && (
          <span
            className={`absolute top-3 right-3 rounded-full bg-white shadow-sm px-2 py-1 text-[#486683] text-sm uppercase ${francois.className}`}
          >
            OUT OF STOCK
          </span>
        )}

        <div
          className="addtocart flex justify-center items-center p-[6px]"
          style={{
            transitionDelay: hovered ? "50ms" : "2000ms",
            transform: hovered ? "translateY(0%)" : "translateY(100%)",
          }}
        >
          <span
            className={`relative w-full h-full border-dashed border-2 border-white ${francois.className} flex justify-center items-center`}
          >
            <div className="flex items-center space-x-1">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <span className="w-5">
                    <HiOutlineHeart className="h-6 w-6 text-white cursor-pointer" />
                  </span>
                </div>
                {stock > 0 && (
                  <>
                    <span className="text-white text-md cursor-pointer hover:text-[#486683]">
                      ADD TO CART
                    </span>
                    <span className="w-5">
                      <HiOutlineMagnifyingGlass className="h-6 w-6 text-white cursor-pointer" />
                    </span>
                  </>
                )}
              </div>
            </div>
          </span>
        </div>
      </div>
      <h2 className={`text-lg mt-2 text-[#F1755C] ${francois.className}`}>
        {category}
      </h2>
      <h1 className={`text-2xl mt-2 text-[#486683] ${gilda.className}`}>
        {name}
      </h1>
      {stock > 0 && (
        <p
          className={`uppercase text-md font-bld text-[#486683] ${quickSands.className}`}
        >
          {`$${price}`}
        </p>
      )}
    </div>
  );
};

export default ProductItem;
