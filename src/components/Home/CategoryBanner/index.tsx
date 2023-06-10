import { CategoryTypes } from "@/lib/_mocks/types";
import CbItem from "./CbItem";

const data = [
  {
    id: "1",
    title: "Babby & Toddler",
    imagen: "/images/main/baby.png",
    category: CategoryTypes.FOR_BABIES,
    active: false,
  },
  {
    id: "2",
    title: "For Girls",
    imagen: "/images/main/girl.png",
    category: CategoryTypes.FOR_GIRLS,
    active: false,
  },
  {
    id: "3",
    title: "For Boys",
    imagen: "/images/main/boy.png",
    category: CategoryTypes.FOR_BOYS,
    active: false,
  },
  {
    id: "4",
    title: "Home & Toys",
    imagen: "/images/main/toys.png",
    category: CategoryTypes.FOR_TOYS,
    active: false,
  },
];

const CatBanner = () => {
  return (
    <section className="mt-20 w-full h-80 border-dashed border-2 border-gray-200 flex justify-between flex-wrap items-center px-10">
      {data.map((cat) => (
        <CbItem key={cat.id} {...cat} />
      ))}
    </section>
  );
};

export default CatBanner;
