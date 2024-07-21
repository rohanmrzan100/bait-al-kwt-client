import Image from "next/image";
import { useRouter } from "next/navigation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerImg from "../../../public/img/banner.png";
import BannerImgn1 from "../../../public/img/bannern1.png";
import BannerImgn2 from "../../../public/img/image-removebg-preview.png";

function CarouselDiv() {
  const router = useRouter();

  return (
    <Carousel
      infiniteLoop
      interval={3000}
      // showStatus={false}
      // showIndicators={false}
      // showArrows={false}
      // showThumbs={false}
      className="h-[500px] "
    >
      <div className="relative bg-gradient-to-r from-purple-300 to-purple-800 mb-8 rounded-lg h-[500px]">
        <div className="h-full w-full mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-start justify-between">
          <div className="mb-8 md:mb-0 text-center w-full md:w-[40%] flex flex-col justify-between h-full flex-1  items-start">
            <div className="flex flex-col items-start">
              <h1 className="inline text-4xl md:text-6xl font-bold text-white mb-4 m-0 p-0">
                Global Collection
              </h1>
              <h1 className="inline text-4xl md:text-6xl font-bold text-purple-900 mb-4 m-0 p-0">
                Best Price Guaranteed
              </h1>
              <p className="text-2xl font-bold mb-4 uppercase text-purple-900">
                New Arrivals
              </p>
            </div>
            <button
              onClick={() => {
                router.push("/shop");
              }}
              className="bg-purple-700 text-white text-xl py-2 px-6 rounded-xl font-semibold"
            >
              Discover More
            </button>
          </div>
          <div className="w-[40%] h-full relative overflow-hidden">
            <Image
              src={BannerImg}
              alt="Picture of the author"
              className="max-h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="relative bg-gradient-to-r from-green-300 to-green-700 mb-8 rounded-lg h-[500px]">
        <div className="h-full w-full mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-start justify-between">
          <div className="mb-8 md:mb-0 text-center w-full md:w-[40%] flex flex-col justify-between h-full items-start">
            <div className="flex flex-col items-start">
              <h1 className="inline  text-left text-4xl md:text-6xl font-bold text-white mb-4 m-0 p-0">
                Effortless Clean Awaits !
              </h1>

              <p className="text-2xl font-bold mb-4 uppercase">
                Explore Our Latest Products
              </p>
            </div>
            <button
              onClick={() => {
                router.push("/shop");
              }}
              className="bg-white text-green-700 text-xl py-2 px-6 rounded-xl font-semibold"
            >
              Browse Collection
            </button>
          </div>
          <div className="w-[40%] h-full relative overflow-hidden">
            <Image
              src={BannerImgn2}
              alt="Picture of the author"
              className="max-h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8 rounded-lg h-[500px]">
        <div className="h-full w-full mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-start justify-between">
          <div className="mb-8 md:mb-0 text-center w-full md:w-[40%] flex flex-col justify-between h-full items-start">
            <div className="flex flex-col items-start">
              <h1 className="inline text-4xl md:text-6xl font-bold text-white mb-4 m-0 p-0">
                Global Collection
              </h1>
              <h1 className="text-left inline text-4xl md:text-6xl font-bold text-white mb-4 m-0 p-0">
                Clean Smarter, Not Harder
              </h1>
              <p className="text-2xl font-bold mb-4 uppercase text-yellow-400">
                GateWay to endless selection
              </p>
            </div>
            <button
              onClick={() => {
                router.push("/shop");
              }}
              className="bg-white text-sky-500 text-xl py-2 px-6 rounded-xl font-semibold"
            >
              Shop
            </button>
          </div>
          <div className="w-[40%] h-full relative overflow-hidden">
            <Image
              src={BannerImgn1}
              alt="Picture of the author"
              className="max-h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default CarouselDiv;
