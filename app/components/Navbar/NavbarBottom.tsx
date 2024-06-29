import { Categorys } from "@/app/utils/Category";
import React from "react";
import { LuMenu } from "react-icons/lu";

const HeaderBottom = () => {
  return (
    <div className="w-full h-16 bg-slate-700 text-sm text-white px-4 flex items-center">
      {Categorys.map((category: any) => (
        <p
          key={category.id}
          className="flex items-center gap-1 h-8 px-2 border-b-2 border-transparent hover:border-white cursor-pointer duration-300"
        >
          {category.label == "All" && <LuMenu />}
          {category.label}
        </p>
      ))}
    </div>
  );
};

export default HeaderBottom;
