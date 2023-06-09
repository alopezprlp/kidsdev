import { francois } from "@/utils/fonts";

const Categories = () => {
  return (
    <div>
      <h1
        className={`uppercase text-4xl mb-4 mt-10 text-[#486683] ${francois.className}`}
      >
        Categories
      </h1>
      <div className="border-dashed border border-gray-400 p-4">
        <div className="flex items-center py-2 px-4 border-b border-gray-400">
          <div
            className={`w-1/2 text-lg mt-2 text-[#486683] ${francois.className} hover:text-[#E5745D] transition-all cursor-pointer`}
          >
            Categoría 1
          </div>
          <div className="w-1/2 text-right">(100)</div>
        </div>
        <div className="flex items-center py-2 px-4 border-b border-gray-400">
          <div
            className={`w-1/2 text-lg mt-2 text-[#486683] ${francois.className} hover:text-[#E5745D] transition-all cursor-pointer`}
          >
            Categoría 2
          </div>
          <div className="w-1/2 text-right">(75)</div>
        </div>
        <div className="flex items-center py-2 px-4 border-b border-gray-400">
          <div
            className={`w-1/2 text-lg mt-2 text-[#486683] ${francois.className} hover:text-[#E5745D] transition-all cursor-pointer`}
          >
            Categoría 3
          </div>
          <div className="w-1/2 text-right">(20)</div>
        </div>
        <div className="flex items-center py-2 px-4 border-b border-gray-400">
          <div
            className={`w-1/2 text-lg mt-2 text-[#486683] ${francois.className} hover:text-[#E5745D] transition-all cursor-pointer`}
          >
            Categoría 4
          </div>
          <div className="w-1/2 text-right">(50)</div>
        </div>
        <div className="flex items-center py-2 px-4">
          <div
            className={`w-1/2 text-lg mt-2 text-[#486683] ${francois.className} hover:text-[#E5745D] transition-all cursor-pointer`}
          >
            Categoría 5
          </div>
          <div className="w-1/2 text-right">(90)</div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
