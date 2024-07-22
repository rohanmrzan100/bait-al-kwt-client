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
    <div className="w-full m-auto cursor-pointer">
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">Categories</h2>
        <Slider {...settings}>
          {Categorys.map((item) => (
            <div key={item.label} className="h-60">
              <div className="flex flex-col justify-between items-center text-center bg-white w-full p-4 gap-3 hover:scale-110 h-full rounded-lg shadow-xl">
                <img
                  src={item.image.src}
                  alt={`${item.label} image`}
                  className="max-h-[100px] object-contain"
                />
                <p className="text-xl font-semibold m-0 p-0">{item.label}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategorySlider;
