"use client";
import { useRef } from "react";
import { francois } from "@/utils/fonts";

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      className="w-full pb-2 px-2 pt-3"
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        formRef.current?.reset();
      }}
    >
      <input
        required
        type="email"
        placeholder="Your Email address *"
        className="w-full h-12 my-4 px-4 bg-transparent border-dashed border-2 border-white focus:outline-none text-white placeholder:text-white"
      />
      <button
        type="submit"
        className="w-full h-12 p-1 flex justify-center items-center bg-white text-[#F1755C]"
      >
        <span
          className={`w-full border-dashed border-2 border-[#F1755C] p-[5px] ${francois.className} hover:text-[#486683] transition-all`}
        >
          SUBSCRIBE
        </span>
      </button>
    </form>
  );
};

export default Form;
