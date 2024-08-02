"use-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { TypeAnimation } from "react-type-animation";
import Trolley from "../../../public/img/bannern1.png";

const TextAnimate = () => {
  const router = useRouter();
  return (
    <div className="w-full h-screen relative bg-gray-800 flex  flex-col-reverse md:flex-row justify-between items-center px-8 py-8">
      <div className="flex flex-col justify-center items-start">
        <p className="text-[#F5F5F5] text-xl md:text-2xl font-bold mb-4 uppercase">
          A Complete Cleaning Products Supplier
        </p>
        {/* <p className="text-[#A3A3A3] text-4xl md:text-2xl font-bold mb-4 uppercase">
          With
        </p> */}
        <p className="text-[#218838] text-4xl md:text-7xl font-bold mb-4 uppercase">
          Clean With Confidence
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
