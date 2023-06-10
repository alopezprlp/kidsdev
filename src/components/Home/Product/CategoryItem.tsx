import { clsxm } from "@/utils/classes";
import { francois } from "@/utils/fonts";
import { FC } from "react";

const CategoryItem: FC<{ name: string; quantity: number; last?: boolean, active:boolean }> = ({
  name,
  quantity,
  last,
  active
}) => {
    
  return (
    <div
      className={clsxm(
        "flex items-center py-2 px-4",
        !last && "border-b border-gray-400"
      )}
    >
      <div
        className={clsxm(`w-1/2 text-lg mt-2 text-[#486683] ${francois.className} hover:text-[#E5745D] transition-all cursor-pointer`, active && 'text-[#E5745D]')}
      >
        {name}{" "}
      </div>
      <div className="w-1/2 text-right">({quantity})</div>
    </div>
  );
};

export default CategoryItem;
