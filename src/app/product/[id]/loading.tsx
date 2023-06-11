import Image from "next/image";
import loader from '../../../../public/images/loader.gif'

export default function Loading() {
  return (
    <div className="container mx-auto px-28 py-8 mb-40 w-full flex items-center justify-center">
      <Image className="mt-5 w-10 h-10" src={loader} alt="Logo" priority /> 
    </div>
  );
}
