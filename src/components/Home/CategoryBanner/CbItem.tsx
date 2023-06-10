"use client";
import { CategoryTypes } from "@/lib/_mocks/types";
import { useStore } from "@/lib/store";
import { clsxm } from "@/utils/classes";
import { francois } from "@/utils/fonts";
import Image from "next/image";
import { FC } from "react";

const CbItem: FC<any> = ({ id, imagen, title, category }) => {
  const { setCategoriesFilter, selectedCategory } = useStore();
  return (
    <div
      key={`cbanner-${id}`}
      className="flex flex-col items-center mb-6"
      onClick={() => setCategoriesFilter(category)}
    >
      <Image
        src={imagen}
        alt="Img"
        width={150}
        height={150}
        className="cursor-pointer hover:scale-105 transform transition-all duration-200"
      />
      <h1
        className={clsxm(
          `transition-all text-lg mt-2 ${francois.className}`,
          selectedCategory !== category && "text-[#486683]",
          selectedCategory === category && "text-[#E5745D]",
          selectedCategory === CategoryTypes.NONE && "text-[#486683]"
        )}
      >
        {title}
      </h1>
    </div>
  );
};

export default CbItem;
