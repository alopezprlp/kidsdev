"use client";

import { francois } from "@/utils/fonts";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-28 py-8 mb-40 text-center">
      <h2
        className={`text-4xl text-center mt-2 text-[#486683] ${francois.className}`}
      >
        Something went wrong!
      </h2>
      <button
        className="w-full h-12 p-1 flex justify-center items-center bg-white text-[#F1755C]"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
