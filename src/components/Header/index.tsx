import React from "react";
import Image from "next/image";
import logoPhoto from "@/assets/logo/logo.png";
 
import {
  HeartIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import NavLink from "./NavLink";
import { quickSands } from "@/utils/fonts";

const Header = () => {
  return (
    <header className="w-full h-auto">
      <div className="w-full text-center p-1 bg-[#E5745D]">
        <p className={`${quickSands.className} text-white`}>
          20% off all kidswear + free shipping when you spend $60 or more
        </p>
      </div>
      <div className="w-full flex justify-center ">
        <Image className="mt-5" src={logoPhoto} alt="Logo" priority />
      </div>

      <nav className="flex items-center justify-center p-4 gap-11 mt-6">
        <div className="flex items-center space-x-7 uppercase text-[#486683]">
          <NavLink href="/" label="Home" />
          <NavLink href="/shop" label="Shop features" />
          <NavLink href="/clothes" label="Clothes" />
          <NavLink href="/page" label="Page" />
          <NavLink href="/shortcodes" label="Shortcodes" />
          <NavLink href="/post-types" label="Post Types" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <span className="w-5">
              <HeartIcon className="h-6 w-6 text-[#486683] cursor-pointer" />
            </span>
          </div>
          <span className="relative">
            <ShoppingCartIcon className="h-6 w-6 text-[#486683] cursor-pointer" />
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-5 h-5 p-2 rounded-full bg-[#E5745D] text-white text-xs flex items-center justify-center">
              0
            </span>
          </span>
          <span className="w-5">
            <MagnifyingGlassIcon className="h-6 w-6 text-[#486683] cursor-pointer" />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
