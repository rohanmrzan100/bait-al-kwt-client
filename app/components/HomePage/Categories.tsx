"use client";

import Image from "next/image";
import React from "react";
import { Categorys } from "@/app/utils/Category";

const Categories = () => {
  return (
    <div className="my-[16px]">
      <h1 className="text-[22px] text-slate-800 font-semibold mb-[16px]">
        Categories
      </h1>
      <div className="grid grid-cols-9 md:grid-cols-9 gap-1">
        {Categorys.map((item) => {
          return (
            <div
              key={item.label}
              // onClick={() => onClick(item.label)}
              className=" bg-whiterounded-sm border-[1px] border-[#e2e2e2] bg-white p-[2px] flex flex-col items-center gap-2 transition cursor-pointer hover:shadow-xl min-w-[150px] "
            >
              <Image
                src={item.img}
                alt={item.label}
                className="object-contain h-[80px] w-[80px]"
              />
              <div className="font-medium text-sm text-center overflow-hidden mx-2">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
