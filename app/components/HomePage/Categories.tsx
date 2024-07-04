"use client";

import React from "react";
import { Categorys } from "@/app/utils/Category";
import { useRouter } from "next/navigation";

const Categories = () => {
  const router = useRouter();
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
              onClick={() => {
                if (item.label == "All") {
                  router.push("/shop");
                } else {
                  router.push("/shop?category=" + item.label);
                }
              }}
              className=" bg-white rounded-sm border-[1px] border-[#e2e2e2] flex flex-col  gap-8 transition cursor-pointer hover:shadow-xl min-w-[150px] justify-center items-center p-8"
            >
              <item.icon className="p-0 w-[40px] h-[40px]" />
              <div className="font-medium text-sm text-center overflow-hidden p-0">
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
