import { gilda, quickSands } from "@/utils/fonts";

const BreadCumbs = () => {
  return (
    <div className="w-full border-dashed border-2 border-gray-200 flex justify-center content-center items-center px-10 py-8">
      <div className="flex flex-col justify-center content-center items-center">
        <h1
          className={`text-4xl text-center mt-2 mb-2 text-[#486683] ${gilda.className}`}
        >
          Blue Blouse
        </h1>
        <div className="flex content-center items-center space-x-2">
          <span
            className={`font-bold text-[#486683] ${quickSands.className}`}
          >
            Home
          </span>
          <span>:</span>
          <span
            className={`font-bold text-[#486683] ${quickSands.className}`}
          >
            Categoria
          </span>
          <span>:</span>
          <span
            className={`font-bold text-[#E5745D] ${quickSands.className}`}
          >
            Titulo del producto
          </span>
        </div>
      </div>
    </div>
  );
};

export default BreadCumbs;
