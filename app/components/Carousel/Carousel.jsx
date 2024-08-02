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
function CarouselDiv() {
  const router = useRouter();

  return (
    // <Carousel
    //   infiniteLoop
    //   interval={3000}
    //   // showStatus={false}
    //   // showIndicators={false}
    //   // showArrows={false}
    //   // showThumbs={false}
    //   className="h-[500px] "
    // >
    //   <div className="relative bg-cleanMirror mb-8 rounded-lg h-[500px]">
    //     <div className="h-full w-full mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-start justify-between">
    //       <div className="mb-8 md:mb-0 text-center w-full md:w-[40%] flex flex-col justify-between h-full items-start">
    //         <div className="flex flex-col items-start">
    //           <h1 className="inline  text-left text-4xl md:text-6xl font-bold text-white mb-4 m-0 p-0">
    //             Effortless Clean Awaits !
    //           </h1>

    //           <p className="text-2xl font-bold mb-4 uppercase">
    //             Explore Our Latest Products
    //           </p>
    //         </div>
    //         <button
    //           onClick={() => {
    //             router.push("/shop");
    //           }}
    //           className="bg-gray-800 text-white text-xl py-2 px-6 rounded-xl font-semibold"
    //         >
    //           Browse Collection
    //         </button>
    //       </div>
    //       <div className="w-[40%] h-full relative overflow-hidden">
    //         <Image
    //           src={BannerImgn2}
    //           alt="Picture of the author"
    //           className="max-h-full object-cover"
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="relative bg-noMans mb-8 rounded-lg h-[500px]">
    //     <div className="h-full w-full mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-start justify-between">
    //       <div className="mb-8 md:mb-0 text-center w-full md:w-[40%] flex flex-col justify-between h-full flex-1  items-start">
    //         <div className="flex flex-col items-start">
    //           <h1 className="inline  text-left text-4xl md:text-6xl font-bold text-gray-800 mb-4 m-0 p-0 ">
    //             New Arrivals
    //           </h1>

    //           <p className="text-2xl font-bold mb-4 uppercase">
    //             Check out our latest collection
    //           </p>
    //         </div>
    //         <button
    //           onClick={() => {
    //             router.push("/shop");
    //           }}
    //           className="bg-teal-500 text-white text-xl py-2 px-6 rounded-xl font-semibold"
    //         >
    //           Discover More
    //         </button>
    //       </div>
    //       <div className="w-[40%] h-full relative overflow-hidden">
    //         <Image
    //           src={BannerImgn1}
    //           alt="Picture of the author"
    //           className="max-h-full object-cover"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8 rounded-lg h-[500px]">
    //     <div className="h-full w-full mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-start justify-between">
    //       <div className="mb-8 md:mb-0 text-center w-full md:w-[40%] flex flex-col justify-between h-full items-start">
    //         <div className="flex flex-col items-start">
    //           <h1 className="text-left inline text-4xl md:text-6xl font-bold text-white mb-4 m-0 p-0">
    //             Clean Smarter, Not Harder
    //           </h1>
    //           <p className="text-2xl font-bold mb-4 uppercase text-yellow-400">
    //             GateWay to endless selection
    //           </p>
    //         </div>
    // <button
    //   onClick={() => {
    //     router.push("/shop");
    //   }}
    //   className="bg-white text-sky-500 text-xl py-2 px-6 rounded-xl font-semibold"
    // >
    //           Shop
    //         </button>
    //       </div>
    //       <div className="w-[40%] h-full relative overflow-hidden">
    //         <Image
    //           src={BannerImg}
    //           alt="Picture of the author"
    //           className="max-h-full object-cover"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </Carousel>

    <div className="w-full relative bg-gray-800">
      <Image
        src={Ban}
        alt="PureVis Bottle"
        className="w-full h-auto object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-between items-center px-8">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-white text-6xl md:text-4xl font-bold mb-4">
            Clean with Confidence
          </h1>
          <h2 className="text-white text-sm md:text-lg mb-4">
            Discover Bait Al Kuwait, your one-stop destination for all cleaning
            needs.
          </h2>
          <h6 className="text-white text-sm md:text-lg mb-4">
            From household to commercial solutions, our products ensure a
            spotless, hygienic environment with ease.
          </h6>

          <button
            className="bg-slate-800 text-white  hover:bg-slate-500 font-bold py-2 px-4 rounded flex justify-center gap-2 items-center"
            onClick={() => {
              router.push("/shop");
            }}
          >
            Browse Products <FaArrowRight />
          </button>
          {/* <a
            href={"/"}
            className="flex items-center text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded inline-flex items-center"
          >
            <span>Browse Products</span>
            <svg
              class="w-4"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              className="w-6 h-6 ml-2"
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a> */}
        </div>

        {/* <div className="flex flex-col items-center">
          <div className="inline-flex flex-col justify-between items-center text-center bg-white p-4 gap-3 hover:scale-110 rounded-lg shadow-xl">
            <Image
              src={trashbin}
              alt="trashbin"
              className="max-h-[100px] object-contain"
            />
            <p className="text-xl font-semibold m-0 p-0">Trashbin</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default CarouselDiv;
