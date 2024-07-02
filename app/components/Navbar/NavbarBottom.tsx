"use client";
import React from "react";
import CategoriesDropDown from "./CategoriesDropdown";
import { useRouter } from "next/navigation";
const HeaderBottom = () => {
  const router = useRouter();
  return (
    <div className="w-full h-16 bg-slate-700 text-sm text-white px-4 flex items-center">
      <p
        className="flex items-center gap-1 h-8 px-2 border-b-2 border-transparent hover:border-white cursor-pointer text-md font-semibold "
        onClick={() => {
          router.push("/");
        }}
      >
        Home
      </p>
      <div className="h-4 border-l-2 border-white mx-2"></div>

      <p
        className="flex items-center gap-1 h-8 px-2 border-b-2 border-transparent hover:border-white cursor-pointer text-md font-semibold "
        onClick={() => {
          router.push("/about-us");
        }}
      >
        About Us
      </p>
      <div className="h-4 border-l-2 border-white mx-2"></div>
      <p
        className="flex items-center gap-1 h-8 px-2 border-b-2 border-transparent hover:border-white cursor-pointer text-md font-semibold "
        onClick={() => {
          router.push("/contact-us");
        }}
      >
        Contact Us
      </p>
      <div className="h-4 border-l-2 border-white mx-2"></div>
      <p
        className="flex items-center gap-1 h-8 px-2 border-b-2 border-transparent hover:border-white cursor-pointer text-md font-semibold "
        onClick={() => {
          router.push("/shop");
        }}
      >
        Shop
      </p>
      <div className="h-4 border-l-2 border-white mx-2"></div>
      <CategoriesDropDown />
    </div>
  );
};

export default HeaderBottom;
