"use client";
import { useStore } from "@/lib/store";
import { useRef } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const FormSearch = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const inpRef = useRef<HTMLInputElement>(null);
  const { searchProduct, allProducts } = useStore();

  return (
    <form
      className="w-full flex items-center "
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        if (inpRef.current) {
          searchProduct(inpRef.current.value, allProducts);
        }
        formRef.current?.reset();
      }}
    >
      <input
        ref={inpRef}
        type="text"
        placeholder="Search..."
        className="w-full h-11 py-2 px-4 bg-transparent focus:outline-none border-t border-l border-b border-r-0 border-dashed border-gray-400 "
      />
      <button
        type="submit"
        className="flex flex-row h-11 justify-center items-center p-1 bg-[#E5745D] "
      >
        <span className="border-dashed border-2 px-[8px] py-2 border-white">
          <HiOutlineMagnifyingGlass className="h-4 w-4 text-white" />
        </span>
      </button>
    </form>
  );
};

export default FormSearch;
