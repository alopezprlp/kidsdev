import Image from "next/image";
import footerLogo from "@/assets/logo/logo-w.png";
import { francois, quickSands } from "@/utils/fonts";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Cookies from "./Cookies";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#FBB660] waves mt-60 transition-all duration-500">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center mb-4">
            <Image className="" src={footerLogo} alt="Logo" priority />
          </div>
          <div className="flex justify-center uppercase ">
            <Link
              href="/"
              className={`mr-8 transition-all text-[18px] ${francois.className} text-white hover:text-gray-300`}
            >
              shop
            </Link>
            <Link
              href="/"
              className={`mr-8 transition-all text-[18px] ${francois.className} text-white hover:text-gray-300`}
            >
              sale
            </Link>
            <Link
              href="/"
              className={`mr-8 transition-all text-[18px] ${francois.className} text-white hover:text-gray-300`}
            >
              girls
            </Link>
            <Link
              href="/"
              className={`mr-8 transition-all text-[18px] ${francois.className} text-white hover:text-gray-300`}
            >
              boys
            </Link>
            <Link
              href="/"
              className={`mr-8 transition-all text-[18px] ${francois.className} text-white hover:text-gray-300`}
            >
              lookbook
            </Link>
            <Link
              href="/"
              className={`transition-all text-[18px] ${francois.className} text-white hover:text-gray-300`}
            >
              contacts
            </Link>
          </div>
          <div className="flex justify-center uppercase pt-7 ">
            <FaFacebookF className="transition-all mr-4 text-white w-5 h-5 cursor-pointer hover:text-gray-300" />
            <FaInstagram className="transition-all mr-4 text-white w-5 h-5 cursor-pointer hover:text-gray-300" />
            <FaTwitter className="transition-all text-white w-5 h-5 cursor-pointer hover:text-gray-300" />
          </div>
          <span
            className={`flex justify-center mt-5 text-white ${quickSands.className} `}
          >
            <Link
              className={`mr-2 ${francois.className} transition-all hover:text-gray-300`}
              href="/"
            >
              {" "}
              Privacy Policy{" "}
            </Link>{" "}
            / This is a sample website - cmsmasters ©{" "}
            {` ${new Date().getFullYear()} `} / All Rights Reserved
          </span>
        </div>
      </footer>
      <Cookies />
    </>
  );
};

export default Footer;
