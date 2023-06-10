"use client";
import { francois } from "@/utils/fonts";
import CategoryItem from "./CategoryItem";
import { useStore } from "@/lib/store";
import { CategoryTypes } from "@/lib/_mocks/types";

const Categories = () => {
  const {
    getTotalForBabies,
    setCategoriesFilter,
    fetchProducts,
    selectedCategory,
    getTotalForBoys,
    getTotalForGirls,
    getTotalForToys,
  } = useStore();
  return (
    <div>
      <h1
        className={`uppercase text-4xl mb-4 mt-10 text-[#486683] ${francois.className}`}
      >
        Categories
      </h1>
      <div className="border-dashed border border-gray-400 p-4">
        <div onClick={() => setCategoriesFilter(CategoryTypes.FOR_BABIES)}>
          <CategoryItem
            name="Babby & Toddler"
            quantity={getTotalForBabies()}
            active={CategoryTypes.FOR_BABIES === selectedCategory}
          />
        </div>

        <div onClick={() => setCategoriesFilter(CategoryTypes.FOR_GIRLS)}>
          <CategoryItem
            name="For Girls"
            quantity={getTotalForGirls()}
            active={CategoryTypes.FOR_GIRLS === selectedCategory}
          />
        </div>

        <div onClick={() => setCategoriesFilter(CategoryTypes.FOR_BOYS)}>
          <CategoryItem
            name="For Boys"
            quantity={getTotalForBoys()}
            active={CategoryTypes.FOR_BOYS === selectedCategory}
          />
        </div>

        <div onClick={() => setCategoriesFilter(CategoryTypes.FOR_TOYS)}>
          <CategoryItem
            name="Home & Toys"
            quantity={getTotalForToys()}
            active={CategoryTypes.FOR_TOYS === selectedCategory}
          />
        </div>
        
        <div onClick={() => fetchProducts()}>
          <CategoryItem
            name="ALL"
            quantity={getTotalForToys() + getTotalForBoys() + getTotalForGirls() + getTotalForBabies()}
            last
            active={CategoryTypes.NONE === selectedCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
