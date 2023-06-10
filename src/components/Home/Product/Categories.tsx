"use client";
import { francois } from "@/utils/fonts";
import CategoryItem from "./CategoryItem";
import { useStore } from "@/lib/store";
import { CategoryTypes } from "@/lib/_mocks/types";

const Categories = () => {
  const { getTotalForBabies, setCategoriesFilter, fetchProducts,selectedCategory } = useStore();
  return (
    <div>
      <h1
        className={`uppercase text-4xl mb-4 mt-10 text-[#486683] ${francois.className}`}
      >
        Categories
      </h1>
      <div className="border-dashed border border-gray-400 p-4">
        <div onClick={() => setCategoriesFilter(CategoryTypes.FOR_BABIES)}>
          <CategoryItem name="Babby & Toddler" quantity={getTotalForBabies()} active={CategoryTypes.FOR_BABIES === selectedCategory}/>
        </div>
        <div>
          <CategoryItem name="For Girls" quantity={2} active={CategoryTypes.FOR_GIRLS === selectedCategory}/>
        </div>
        <CategoryItem name="For Boys" quantity={2} active={CategoryTypes.FOR_BOYS === selectedCategory}/>
        <CategoryItem name="Home & Toys" quantity={2} active={CategoryTypes.FOR_TOYS === selectedCategory}/>
        <div onClick={() => fetchProducts()}>
          <CategoryItem name="ALL" quantity={0} last active={CategoryTypes.NONE === selectedCategory}/>
        </div>
      </div>
    </div>
  );
};

export default Categories;
