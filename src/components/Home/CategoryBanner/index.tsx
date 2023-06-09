import { francois } from "@/utils/fonts";
import Image from "next/image";
import React from "react";

const data = [
  {
    id: "1",
    title: "Babby & Toddler",
    imagen: "/images/main/baby.png",
  },
  {
    id: "2",
    title: "For Girls",
    imagen: "/images/main/girl.png",
  },
  {
    id: "3",
    title: "For Boys",
    imagen: "/images/main/boy.png",
  },
  {
    id: "4",
    title: "Home & Toys",
    imagen: "/images/main/toys.png",
  },
];

const CatBanner = () => {
  return (
    <section className="mt-20 w-full h-80 border-dashed border-2 border-gray-200 flex justify-between flex-wrap items-center px-10">
      {data.map((cat) => (
        <div
          key={`cbanner-${cat.id}`}
          className="flex flex-col items-center mb-6"
        >
          <Image
            src={cat.imagen}
            alt="Img"
            width={150}
            height={150}
            className="cursor-pointer hover:scale-105 transform transition-all duration-200"
          />
          <h1
            className={`transition-all text-lg mt-2 text-[#486683] ${francois.className}`}
          >
            {cat.title}
          </h1>
        </div>
      ))}
    </section>
  );
};

export default CatBanner;
