"use client";
import { useState } from "react";
import { clsxm } from "@/utils/classes";
import { francois, quickSands } from "@/utils/fonts";
import ReviewsSlider from "./Reviews";

const tabs = [
  {
    id: 1,
    label: "Description",
    content: () => (
      <>
        <p className={`mt-5 ${quickSands.className}`}>
          1Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, hic
          temporibus! Corporis quas sapiente labore quasi? Magnam sit explicabo
          fugit! Sed exercitationem facilis explicabo ipsa at dolor ratione
          cupiditate nesciunt.
        </p>
        <p className={`mt-5 ${quickSands.className}`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, hic
          temporibus! Corporis quas sapiente labore quasi? Magnam sit explicabo
          fugit! Sed exercitationem facilis explicabo ipsa at dolor ratione
          cupiditate nesciunt.
        </p>
      </>
    ),
  },
  {
    id: 2,
    label: "Additional Information",
    content: () => (
      <div className="mt-5 border-dashed border border-gray-400 p-4">
        <div className="flex items-center justify-start py-2 px-4 border-b border-gray-400">
          <div
            className={`w-[23%] text-lg text-[#486683] ${francois.className} hover:text-[#E5745D] transition-all cursor-pointer`}
          >
            Color:
          </div>
          <div className={`text-lg ${quickSands.className}`}>001</div>
        </div>
        <div className="flex items-center justify-start py-2 px-4 border-b border-gray-400">
          <div
            className={`w-[23%] text-lg text-[#486683] ${francois.className} hover:text-[#E5745D] transition-all cursor-pointer`}
          >
            Material:
          </div>
          <div className={`text-lg ${quickSands.className}`}>Boys</div>
        </div>
        <div className="flex items-center justify-start py-2 px-4">
          <div
            className={`w-[23%] text-lg text-[#486683] ${francois.className} hover:text-[#E5745D] transition-all cursor-pointer`}
          >
            Age:
          </div>
          <div
            className={`text-lg flex items-center space-x-2 ${quickSands.className}`}
          >
            <span>tag1</span>
            <span>tag2</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    label: "Reviews (2)",
    content: () => <ReviewsSlider />,
  },
];

type Tab = {
  id: number;
  label: string;
  content: () => JSX.Element;
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full mt-24 mb-32">
      <div className="flex justify-evenly items-center">
        {tabs.map((tab) => (
          <h1
            key={tab.id}
            className={clsxm(
              `transition-all duration-500 change uppercase text-2xl text-center mt-2 text-[#486683] ${francois.className} cursor-pointer`,
              tab === activeTab && "relative after-img"
            )}
            onClick={() => handleTabClick(tab)}
          >
            {tab.label}
          </h1>
        ))}
      </div>
      <div className="py-4 ">
        <div className="relative ">
          {tabs.map((tab) => (
            <div
              key={tab.label}
              className={clsxm(
                "absolute top-0 left-0 w-full transition-all duration-500",
                tab === activeTab ? "translate-y-0" : "translate-y-[110px]",
                tab === activeTab ? "opacity-100" : "opacity-0"
              )}
            >
              {tab.content()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
