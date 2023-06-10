import ImgZoom from "@/components/ProductDetails/ImgZoom";
import RelatedItem from "@/components/ProductDetails/RelatedItem";
import Tabs from "@/components/ProductDetails/Tabs";
import Rate from "@/components/RateStart";
import BreadCumbs from "@/components/common/BreadCumbs";
import { francois, quickSands } from "@/utils/fonts";
import Link from "next/link";

const data = [
  {
    id: 1,
    urlImg: "/images/ig/87339849_530805007551424_292323017375800029_nlow.jpg",
  },
  {
    id: 2,
    urlImg: "/images/ig/87413583_2660130777540405_5722961474466513534_nlow.jpg",
  },
  {
    id: 3,
    urlImg: "/images/ig/85069033_185901059177965_6767010623440980864_nlow.jpg",
  },
  {
    id: 4,
    urlImg: "/images/ig/84981049_620107085435507_4260875787090681190_nlow.jpg",
  },
  {
    id: 5,
    urlImg: "/images/ig/85051426_2060664737412512_8458893884651247910_nlow.jpg",
  },
];

const PDP = () => {
  return (
    <section className="container mx-auto px-28 py-8 mb-40 ">
      <BreadCumbs />
      <div className="grid grid-cols-3 gap-10 mt-14">
        <div className="col-span-1">
          <ImgZoom/>
        </div>
        <div className="col-span-2">
          <p
            className={`mb-5 text-md font-bld text-[#486683] ${francois.className}`}
          >
            $22
          </p>
          <Rate rate={4} />
          <p className={`mt-5 ${quickSands.className}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            porro? Facilis nemo omnis totam deserunt, excepturi, ipsa dolores
            cum reiciendis dolor labore saepe. Deserunt qui dolore aperiam sunt
            obcaecati animi.
          </p>
          <div className="w-1/2 flex items-center mt-5">
            <input
              type="text"
              className="w-[20%] h-10  px-4 bg-transparent focus:outline-none border-t border-l border-b border-r border-dashed border-gray-400 "
            />
            <button className="ml-2 flex flex-row w-[50%] h-10 justify-center items-center p-[5px] bg-[#E5745D] ">
              <span className="border-dashed border-2 border-white w-full h-full flex flex-row justify-center items-center">
                <p className="text-white">ADD TO CART</p>
              </span>
            </button>
          </div>
          <div className="flex flex-row justify-start items-center space-x-1 mt-5">
            <p className={`${quickSands.className}`}>Product added!</p>
            <Link
              className={`${francois.className} text-[#486683] hover:text-[#2a3c4e]`}
              href="#"
            >
              Browse Wishlist
            </Link>{" "}
          </div>

          <div className="mt-12 border-dashed border border-gray-400 p-4">
            <div className="flex items-center justify-start py-2 px-4 border-b border-gray-400">
              <div
                className={`w-[23%] text-lg text-[#486683] ${francois.className} hover:text-[#E5745D] transition-all cursor-pointer`}
              >
                SKU:
              </div>
              <div className={`text-lg ${quickSands.className}`}>001</div>
            </div>
            <div className="flex items-center justify-start py-2 px-4 border-b border-gray-400">
              <div
                className={`w-[23%] text-lg text-[#486683] ${francois.className} hover:text-[#E5745D] transition-all cursor-pointer`}
              >
                Category:
              </div>
              <div className={`text-lg ${quickSands.className}`}>Boys</div>
            </div>
            <div className="flex items-center justify-start py-2 px-4">
              <div
                className={`w-[23%] text-lg text-[#486683] ${francois.className} hover:text-[#E5745D] transition-all cursor-pointer`}
              >
                Tags:
              </div>
              <div
                className={`text-lg flex items-center space-x-2 ${quickSands.className}`}
              >
                <span>tag1</span>
                <span>tag2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs />

      <div className="mt-[15rem] w-full">
        <h1
          className={`after-img uppercase text-4xl text-center mt-2 text-[#486683] ${francois.className} relative`}
        >
          RELATED PRODUCTS
        </h1>
        <div className="mt-20 w-full flex justify-between flex-wrap items-center">
          {data.slice(0, 4).map((cat) => (
            <RelatedItem key={cat.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PDP;
