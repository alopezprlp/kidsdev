import Rate from "@/components/RateStart";
import { francois, quickSands } from "@/utils/fonts";
import Image from "next/image";
import React from "react";

const data = [
  {
    id: "1",
    urlImage: "/images/seller/for-home-15-300x300.jpg",
    name: "Rabbit casket",
    price: "17.00",
    rate: 4,
  },
  {
    id: "2",
    urlImage: "/images/seller/girls-6-300x300.jpg",
    name: "Yellow Sweatshirt",
    price: "38.00",
    rate: 4,
  },
  {
    id: "3",
    urlImage: "/images/seller/boys-3-1-300x300.jpg",
    name: "Line Sweater",
    price: "46.00",
    rate: 5,
  },
  {
    id: "4",
    urlImage: "/images/seller/boys-4-300x300.jpg",
    name: "Gray Suit",
    price: "80.00",
    rate: 3,
  },
];
const BSeller = () => {
  return (
    <div>
      <h1
        className={`uppercase text-4xl mb-4 mt-10 text-[#486683] ${francois.className}`}
      >
        Best Seller
      </h1>

      <div className="mt-4 border-dashed border border-gray-400 p-4">
        {data.map((e) => (
          <div key={`bseller-${e.id}`} className="flex items-center mb-4">
            <div className="w-1/4">
              <Image
                src={e.urlImage}
                alt="Imagen"
                className="rounded-full"
                width={80}
                height={80}
              />
            </div>
            <div className="w-3/4 ml-4">
              <h2
                className={`uppercase text-lg font-bold text-[#486683] ${quickSands.className}`}
              >
                {e.name}
              </h2>
              <Rate rate={e.rate} />

              <p
                className={`uppercase text-md font-bld text-[#486683] ${quickSands.className}`}
              >
                {`$${e.price}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BSeller;
