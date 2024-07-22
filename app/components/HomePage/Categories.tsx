"use client";

import { Categorys } from "@/app/utils/Category";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Categories = () => {
  const router = useRouter();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
  };

  return (
<<<<<<< HEAD
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
              className=" bg-white border-[1px] border-[#e2e2e2] flex flex-col  gap-8 transition cursor-pointer hover:shadow-xl min-w-[150px] justify-center items-center p-8 rounded-xl shadow-lg"
            >
              <item.icon className="p-0 w-[40px] h-[40px]" />
              <div className="font-medium text-sm text-center overflow-hidden p-0">
                {item.label}
=======
    <div className="w-full m-auto cursor-pointer">
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">Categories</h2>
        <Slider {...settings}>
          {Categorys.map((item) => {
            return (
              <div key={item.label} className="h-60">
                <div className="flex flex-col justify-between items-center text-center bg-white w-full p-4 gap-3 hover:scale-110 shadow-lg h-full ">
                  <img
                    src={item.image.src}
                    alt={`${item.label} image`}
                    className="max-h-[100px] object-contain "
                  />

                  <p className="text-xl font-semibold m-0 p-0">
                    {item.label}
                  </p>
                </div>
>>>>>>> b5b49e7b643ee1384918c54a7770adec89e50d16
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
