"use-client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerImg from "../../../public/img/banner.png";
import BannerImgn1 from "../../../public/img/bannern1.png";
import BannerImgn2 from "../../../public/img/image-removebg-preview.png";
import Ban from "../../../public/img/bgk.webp";
import trashbin from "../../../public/img/trash bin.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "next/link";
import { TypeAnimation } from "react-type-animation";
import Trolley from "../../../public/img/bannern1.png";

const TextAnimate = () => {
  const router = useRouter();
  return (
    // <div className="w-full relative bg-gray-800">
    //   <Image
    //     src={Ban}
    //     alt="Bait Al Kuwait"
    //     className="w-full h-auto object-cover"
    //   />

    //   <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-between items-center px-8">
    //     <div className="flex flex-col justify-center items-start">
    //   <p className="text-white text-6xl md:text-4xl font-bold mb-4 uppercase">
    //     Clean
    //   </p>
    //   <p className="text-gray-400 text-4xl md:text-2xl font-bold mb-4 uppercase">
    //     With
    //   </p>
    //   <p className="text-[#28A745] text-6xl md:text-4xl font-bold mb-4 uppercase">
    //     Confidence
    //   </p>

    //   <TypeAnimation
    //     sequence={[
    //       // Same substring at the start will only be typed once, initially
    //       "We offer wide range of products including Trolleys",
    //       1000,
    //       "We offer wide range of products including Cleaning Tools",
    //       1000,
    //       "We offer wide range of products including Dispensers",
    //       1000,
    //       "We offer wide range of products including Trash Bins",
    //       1000,
    //       "We offer wide range of products including Catering Consumables",
    //     ]}
    //     speed={40}
    //     repeat={Infinity}
    //     className="text-white text-xl md:text-2xl mb-4"
    //   />

    //       <button
    //         className="bg-slate-800 text-white  hover:bg-slate-500 font-bold py-2 px-4 rounded flex justify-center gap-2 items-center mt-10"
    //         onClick={() => {
    //           router.push("/shop");
    //         }}
    //       >
    //         Browse Products <FaArrowRight />
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className="w-full h-screen relative bg-gray-800 flex justify-between items-center px-8 py-8">
      <div className="flex flex-col justify-center items-start">
        <p className="text-[#F5F5F5] text-6xl md:text-4xl font-bold mb-4 uppercase">
          Clean
        </p>
        <p className="text-[#A3A3A3] text-4xl md:text-2xl font-bold mb-4 uppercase">
          With
        </p>
        <p className="text-[#218838] text-6xl md:text-4xl font-bold mb-4 uppercase">
          Confidence
        </p>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            "We offer wide range of products including Cleaning Tools ",
            1000,
            "We offer wide range of products including Trolleys ",
            1000,
            "We offer wide range of products including Dispensers",
            1000,
            "We offer wide range of products including Trash Bins",
            1000,
            "We offer wide range of products including Catering Consumables",
          ]}
          speed={40}
          repeat={Infinity}
          className="text-white text-xl md:text-2xl mb-4"
        />
        <button
          className=" animated-button bg-green-700 text-white hover:bg-green-800 font-bold py-2 px-4 rounded flex justify-center gap-2 items-center mt-16"
          onClick={() => {
            router.push("/shop");
          }}
        >
          Browse Products <FaArrowRight />
        </button>
      </div>

      <div className="flex justify-center items-center">
        <Image
          src={Trolley}
          alt="Trolley"
          className="w-full h-auto max-w-sm object-cover animated-image"
        />
      </div>
    </div>
  );
};

export default TextAnimate;
