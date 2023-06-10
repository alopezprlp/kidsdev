import { gilda, quickSands } from "@/utils/fonts";
import Link from "next/link";
import { FC } from "react";

interface BreadcI {
  name: string;
  category: string;
}
const BreadCumbs: FC<BreadcI> = ({ name, category }) => {
  return (
    <div className="w-full border-dashed border-2 border-gray-200 flex justify-center content-center items-center px-10 py-8">
      <div className="flex flex-col justify-center content-center items-center">
        <h1
          className={`text-4xl text-center mt-2 mb-2 text-[#486683] ${gilda.className}`}
        >
          {name}
        </h1>
        <div className="flex content-center items-center space-x-2">
          <Link
            href="/"
            className={`font-bold text-[#486683] ${quickSands.className}`}
          >
            Home
          </Link>
          <span className="text-[#486683]">:</span>
          <Link
            href={{ pathname: "/", query: { categoryCallBack: category } }}
            className={`font-bold text-[#486683] ${quickSands.className} hover:text-[#E5745D]`}
          >
            {category}
          </Link>
          <span className="text-[#486683]">:</span>
          <span className={`font-bold text-[#E5745D] ${quickSands.className}`}>
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BreadCumbs;
