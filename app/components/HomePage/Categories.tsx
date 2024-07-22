"use client";

import { Categorys } from "@/app/utils/Category";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const CategorySlider = () => {
  const router = useRouter();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
  };

  return (
    <div className="my-[16px]">
      <h1 className="text-[22px] text-slate-800 font-semibold mb-[16px]">
        Categories
      </h1>
      <Slider {...settings}>
        {Categorys.map((item) => {
          return (
            <div
              key={item.label}
              onClick={() => {
                if (item.label === "All") {
                  router.push("/shop");
                } else {
                  router.push("/shop?category=" + item.label);
                }
              }}
              className="bg-white border-[1px] border-[#e2e2e2] flex flex-col gap-8 transition cursor-pointer hover:shadow-xl min-w-[150px] justify-center items-center p-8 rounded-xl shadow-lg"
            >
              <item.icon className="p-0 w-[40px] h-[40px]" />
              <div className="font-medium text-sm text-center overflow-hidden p-0">
                {item.label}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CategorySlider;
