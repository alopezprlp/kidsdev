import React from "react";
import Image from "next/image";
import logoPhoto from "@/assets/logo/logo.png";
import Link from "next/link";
import {
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
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
      <Link href="/" className="w-full flex justify-center ">
        <Image className="mt-5" src={logoPhoto} alt="Logo" priority />
      </Link>

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
              <HiOutlineHeart className="h-6 w-6 text-[#486683] cursor-pointer" />
            </span>
          </div>
          <span className="relative">
            <HiOutlineShoppingCart className="h-6 w-6 text-[#486683] cursor-pointer" />
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-5 h-5 p-2 rounded-full bg-[#E5745D] text-white text-xs flex items-center justify-center">
              0
            </span>
          </span>
          <Link href="#productPage" className="w-5">
            <HiOutlineMagnifyingGlass className="h-6 w-6 text-[#486683] cursor-pointer" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
