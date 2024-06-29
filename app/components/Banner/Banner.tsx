"use client";

import Image from "next/image";
import BannerImg from "@/public/img/banner.png";
import Button from "../Button/Button";
import { FaArrowRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      interval={3000}
    >
      {/* Slide 1 */}

      <div className="relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8 max-h-[600px] ">
        <div className=" w-full mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 text-center w-full md:w-[40%]">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Summer Sale !
            </h1>
            <p className="text-lg md:text-xl font-bold text-white mb-4">
              Enjoy disconts in selected items
            </p>
            <p className="text-4xl md:text-6xl font-bold text-yellow-500 mb-4 ">
              Get 15% off
            </p>
            <Button
              label="Shop Now"
              Icon={FaArrowRight}
              custom=""
              onClick={() => {}}
            />
          </div>
          <div className=" flex flex-col gap-0 lg:flex-row w-[40%]">
            <Image
              src={BannerImg}
              alt="Picture of the author"
              className="object-cover"
            ></Image>
          </div>
        </div>
      </div>
      {/* Slide 2 */}
      <div className="relative bg-gradient-to-r from-green-300 to-green-700 mb-8 max-h-[600px] ">
        <div className=" w-full mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 text-center w-full md:w-[40%]">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Summer Sale !
            </h1>
            <p className="text-lg md:text-xl font-bold text-white mb-4">
              Enjoy disconts in selected items
            </p>
            <p className="text-4xl md:text-6xl font-bold text-yellow-500 mb-4">
              Get 15% off
            </p>
            <Button label="Shop Now" Icon={FaArrowRight} onClick={() => {}} />
          </div>
          <div className=" flex flex-col gap-0 lg:flex-row w-[40%]">
            <Image
              src={BannerImg}
              alt="Picture of the author"
              className="object-cover"
            ></Image>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="relative bg-gradient-to-r from-purple-300 to-purple-800 mb-8 max-h-[600px] ">
        <div className=" w-full mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 text-center w-full md:w-[40%]">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Summer Sale !
            </h1>
            <p className="text-lg md:text-xl font-bold text-white mb-4">
              Enjoy disconts in selected items
            </p>
            <p className="text-4xl md:text-6xl font-bold text-yellow-500 mb-4">
              Get 15% off
            </p>
            <Button label="Shop Now" Icon={FaArrowRight} onClick={() => {}} />
          </div>
          <div className=" flex flex-col gap-0 lg:flex-row w-[40%]">
            <Image
              src={BannerImg}
              alt="Picture of the author"
              className="object-cover"
            ></Image>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
