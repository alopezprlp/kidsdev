import Image from "next/image";
import loader from "@/assets/img/loader.gif";

export default function Loading() {
  return (
    <div className="container mx-auto px-28 py-8 mb-60 w-full h-[20rem] flex items-center justify-center">
      <Image className="w-10 h-10" src={loader} alt="Logo" priority />
    </div>
  );
}
