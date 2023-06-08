"use client";
import { FC } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { clsxm } from "@/utils/classes";
import { francois } from "@/utils/fonts";

interface NavLinkProps {
  href: string;
  label: string;
}
const NavLink: FC<NavLinkProps> = ({ href, label }) => {
  const segment = useSelectedLayoutSegment();

  return (
    <Link
      href={href}
      className={clsxm(
        `transition-all text-[18px] ${francois.className}`,
        !segment && href === "/" && "active text-[#E5745D]",
        segment && href.includes(segment) && "active text-[#E5745D]"
      )}
    >
      {label}
    </Link>
  );
};

export default NavLink;
