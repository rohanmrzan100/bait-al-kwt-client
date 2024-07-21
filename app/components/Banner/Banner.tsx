"use client";

import Image from "next/image";
import BannerImg from "@/public/img/banner.png";
import Button from "../Button/Button";
import { FaArrowRight } from "react-icons/fa";
// import { Carousel } from "react-responsive-carousel";
import  Carousel  from "../Carousel/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRouter } from "next/navigation";
import BannerMid from "./BannerMid";

const Banner = () => {
  const router = useRouter();
  return (
    // <Carousel
    //   autoPlay
    //   infiniteLoop
    //   // showStatus={false}
    //   // showIndicators={false}
    //   interval={3000}
    //   dynamicHeight
    //   // showArrows={false}
    //   // showThumbs={false}
    // >
    //   {/* Slide 1 */}

    //   <div className="relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8 max-h-[550px] rounded-lg ">
    //     <div className=" w-full  mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-start justify-between">
    //       <div className="mb-8 md:mb-0 text-center w-full md:w-[40%] flex flex-col  items-center">
    //         <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
    //           Best Price Guaranteed
    //         </h1>
    //         <p className="text-lg md:text-xl font-bold text-white mb-4">
    //           Enjoy disconts in selected items
    //         </p>
    //         <p className="text-4xl md:text-6xl font-bold mb-4 ">
    //           Get best offers
    //         </p>
    //         <Button
    //           label="Shop Now"
    //           Icon={FaArrowRight}
    //           custom="w-48"
    //           onClick={() => {
    //             router.push("/shop");
    //           }}
    //         />
    //       </div>
    //       <div className=" flex flex-col gap-0 lg:flex-row w-[40%] mt-[-50px]">
    //         <Image
    //           src={BannerImg}
    //           alt="Picture of the author"
    //           className="object-cover"
    //         ></Image>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="relative bg-gradient-to-r from-green-300 to-green-700 mb-8 max-h-[550px] rounded-lg">
    //     <div className=" w-full mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-start justify-between">
    //       <div className="mb-8 md:mb-0 text-center w-full md:w-[40%] flex flex-col items-center">
    //         <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
    //           Exclusive Launch
    //         </h1>
    //         <p className="text-lg md:text-xl font-bold text-white mb-4">
    //           Enjoy disconts in selected items
    //         </p>
    //         <p className="text-4xl md:text-6xl font-bold text-yellow-500 mb-4">
    //           Get Latest Products
    //         </p>
    //         <Button
    //           label="Shop Now"
    //           custom="w-48 "
    //           Icon={FaArrowRight}
    //           onClick={() => {
    //             router.push("/shop");
    //           }}
    //         />
    //       </div>
    //       <div className=" flex flex-col gap-0 lg:flex-row w-[40%] mt-[-50px]">
    //         <Image
    //           src={BannerImg}
    //           alt="Picture of the author"
    //           className="object-cover"
    //         ></Image>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="relative bg-gradient-to-r from-purple-300 to-purple-800 mb-8 max-h-[550px] rounded-lg">
    //     <div className=" w-full mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-start justify-between">
    //       <div className="mb-8 md:mb-0 text-center w-full md:w-[40%] flex flex-col items-center">
    //         <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
    //           Flash Sale !
    //         </h1>
    //         <p className="text-lg md:text-xl font-bold text-white mb-4">
    //           Enjoy disconts in selected items
    //         </p>
    //         <p className="text-4xl md:text-6xl font-bold text-yellow-500 mb-4">
    //           Get 15% off
    //         </p>
    //         <Button
    //           custom="w-48 "
    //           label="Shop Now"
    //           Icon={FaArrowRight}
    //           onClick={() => {
    //             router.push("/shop");
    //           }}
    //         />
    //       </div>
    //       <div className=" flex flex-col gap-0 lg:flex-row w-[40%] mt-[-50px]">
    //         <Image
    //           src={BannerImg}
    //           alt="Picture of the author"
    //           className="object-cover"
    //         ></Image>
    //       </div>
    //     </div>
    //   </div>
    // </Carousel>

    //new code

    // <div className="container"  style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    // <Carousel/>
    // <BannerMid/>

    // </div>
    <div className="banner-container">
      <div className="carousel-wrapper">
        <Carousel />
      </div>
      <div className="banner-mid-wrapper">
        <BannerMid />
      </div>
    </div>
  );
};

export default Banner;
