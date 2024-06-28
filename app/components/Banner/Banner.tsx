"use client";

import Image from "next/image";
import BannerImg from "@/public/img/banner.png"
const Banner = () => {

  console.log(process.env.NODE_ENV);
  
  return (
    <div className="relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8 min-h-[400px] ">
      <div className=" w-full mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0 text-center w-full md:w-[50%]">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Summer Sale !
          </h1>
          <p className="text-lg md:text-xl font-bold text-white mb-4">
            Enjoy disconts in selected items
          </p>
          <p className="text-4xl md:text-6xl font-bold text-yellow-500 mb-4">
            Get 15% off
          </p>
        </div>
        <div className=" flex flex-col gap-0 lg:flex-row">
          <Image
            src={BannerImg}
            alt="Picture of the author"
            className="object-contain w-[100%]  "
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
