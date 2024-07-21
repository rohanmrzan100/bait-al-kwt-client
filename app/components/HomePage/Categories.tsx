"use client";

import React from "react";
import { Categorys } from "@/app/utils/Category";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";
interface Category {
  label: string;
  icon: React.ComponentType;
  img: StaticImageData;
  image: StaticImageData;
}
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Categories = () => {
  const router = useRouter();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    // <div className="my-[16px]">
    //   <h1 className="text-[22px] text-slate-800 font-semibold mb-[16px]">
    //     Categories
    //   </h1>
    //   <div className="grid grid-cols-9 md:grid-cols-9 gap-1">
    //     {Categorys.map((item) => {
    //       return (
    //         <div
    //           key={item.label}
    //           onClick={() => {
    //             if (item.label == "All") {
    //               router.push("/shop");
    //             } else {
    //               router.push("/shop?category=" + item.label);
    //             }
    //           }}
    //           className=" bg-white rounded-sm border-[1px] border-[#e2e2e2] flex flex-col  gap-8 transition cursor-pointer hover:shadow-xl min-w-[150px] justify-center items-center p-8"
    //         >
    //           <item.icon className="p-0 w-[40px] h-[40px]" />
    //           <div className="font-medium text-sm text-center overflow-hidden p-0">
    //             {item.label}
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>

    //new code
    // <div className="w-full m-auto cursor-pointer">
    //   <div className="mt-20 text-center">
    //     <h2 className="text-3xl font-semibold mb-6">Categories</h2>
    //     <Slider {...settings}>
    //       {Categorys.map((item) => {
    //         return (
    //           <div
    //             className="bg-white max-h-[400px] text-black rounded-xl flex flex-col justify-between"
    //             key={item.label}
    //           >
    //             <div
    //               className="h-56 rounded-t-xl flex justify-center items-center overflow-hidden"
    //               onClick={() => {
    //                 router.push("/shop?category=" + item.label);
    //               }}
    //             >
    //               <img
    //                 src={item.image.src}
    //                 alt={`${item.label} image`}
    //                 className="h-full w-full object-cover"
    //               />
    //             </div>
    //             <div className="flex flex-col justify-center items-center gap-4 p-4">
    //               <p className="text-xl font-semibold">{item.label}</p>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </Slider>
    //   </div>
    // </div>

 

    <div className="w-full m-auto cursor-pointer">
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">Categories</h2>
        <Slider {...settings}>
          {Categorys.map((item) => {
            return (
              <div
                className="bg-white max-h-[350px] text-black rounded-xl flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                key={item.label}
              >
                <div
                  className="h-48 rounded-t-xl flex justify-center items-center overflow-hidden"
                  onClick={() => {
                    router.push("/shop?category=" + item.label);
                  }}
                >
                  <img
                    src={item.image.src}
                    alt={`${item.label} image`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl font-semibold">{item.label}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
