// import React, { useState } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";
// import { FaArrowRight } from "react-icons/fa";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import BannerImg from "../../../public/img/banner.png";

// function Carousel() {
//   const router = useRouter();

//   const slides = [
//     {
//       url: BannerImg,
//       color: "lightblue",
//       text: "Flash Sale!",
//       description: "Enjoy discounts in selected items",
//       button: "Get 15% off",
//     },
//     {
//       url: BannerImg,
//       color: "lightgreen",
//       text: "New Arrivals!",
//       description: "Check out the latest collection",
//       button: "Shop Now",
//     },
//     {
//       url: BannerImg,
//       color: "lightcoral",
//       text: "Limited Time Offer!",
//       description: "Exclusive deals just for you",
//       button: "Discover More",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     console.log("Previous slide triggered");
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     console.log("Current Index:", currentIndex, "New Index:", newIndex);
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     console.log("Next slide triggered");
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     console.log("Current Index:", currentIndex, "New Index:", newIndex);
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     console.log("Go to slide triggered");
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
//       <div
//         style={{
//           backgroundColor: slides[currentIndex].color,
//         }}
//         className="w-full h-full rounded-2xl duration-500 relative flex"
//       >
//         <div className="flex-1 flex flex-col justify-center p-10 text-white z-10">
//           <h2 className="text-4xl font-bold mb-4">{slides[currentIndex].text}</h2>
//           <p className="text-xl mb-4">{slides[currentIndex].description}</p>
//           <button
//             className="px-1 py-2 bg-yellow-500 text-black rounded-lg flex items-center justify-center text-base"
//             onClick={() => {
//               router.push("/shop");
//             }}
//           >
//             <span className="mr-2">{slides[currentIndex].button}</span>
//             <FaArrowRight />
//           </button>
//         </div>
//         <div className="flex-1 relative">
//           <Image
//             src={slides[currentIndex].url}
//             alt="Carousel Image"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-r-2xl"
//           />
//         </div>
//       </div>
//       {/* Left Arrow */}
//       <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//         <BsChevronCompactLeft onClick={prevSlide} size={30} />
//       </div>
//       {/* Right Arrow */}
//       <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//         <BsChevronCompactRight onClick={nextSlide} size={30} />
//       </div>
//       <div className="flex justify-center py-2">
//         {slides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//             className={`text-2xl cursor-pointer mx-1 ${
//               currentIndex === slideIndex ? "text-black" : "text-gray-400"
//             }`}
//           >
//             <RxDotFilled />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Carousel;

// import React, { useState, useEffect } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";
// import { FaArrowRight } from "react-icons/fa";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import BannerImg from "../../../public/img/banner.png";

// function Carousel() {
//   const router = useRouter();

//   const slides = [
//     {
//       url: BannerImg,
//       color: "#5ca2d0",
//       // color:"#ff8473",
//       text: "Flash Sale!",
//       description: "Enjoy discounts in selected items",
//       button: "Get 15% off",
//     },
//     {
//       url: BannerImg,
//       color: "#FFBEA2",
//       // color:"#f49065",
//       text: "New Arrivals!",
//       description: "Check out the latest collection",
//       button: "Shop Now",
//     },
//     {
//       url: BannerImg,
//       color: "#efa280",
//       text: "Limited Time Offer!",
//       description: "Exclusive deals just for you",
//       button: "Discover More",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
//       <div
//         style={{
//           backgroundColor: slides[currentIndex].color,
//         }}
//         className="w-full h-full rounded-2xl duration-500 relative flex"
//       >
//         <div className="flex-1 flex flex-col justify-center p-10 text-white z-10">
//           <h2 className="text-4xl font-bold mb-4">{slides[currentIndex].text}</h2>
//           <p className="text-xl mb-4">{slides[currentIndex].description}</p>
//           <button
//             className="px-4 py-2 bg-yellow-500 text-black rounded-lg flex items-center justify-center text-base"
//             onClick={() => {
//               router.push("/shop");
//             }}
//           >
//             <span className="mr-2">{slides[currentIndex].button}</span>
//             <FaArrowRight />
//           </button>
//         </div>
//         <div className="flex-1 relative">
//           <Image
//             src={slides[currentIndex].url}
//             alt="Carousel Image"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-r-2xl"
//           />
//         </div>
//       </div>
//       {/* Left Arrow */}
//       <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//         <BsChevronCompactLeft onClick={prevSlide} size={30} />
//       </div>
//       {/* Right Arrow */}
//       <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//         <BsChevronCompactRight onClick={nextSlide} size={30} />
//       </div>
//       <div className="flex justify-center py-2">
//         {slides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//             className={`text-2xl cursor-pointer mx-1 ${
//               currentIndex === slideIndex ? "text-black" : "text-gray-400"
//             }`}
//           >
//             <RxDotFilled />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Carousel;

// import React, { useState, useEffect } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";
// import { FaArrowRight } from "react-icons/fa";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import BannerImg from "../../../public/img/banner.png";

// function Carousel() {
//   const router = useRouter();

//   const slides = [
//     {
//       url: BannerImg,
//       color: "#5ca2d0",
//       text: "Flash Sale!",
//       description: "Enjoy discounts in selected items",
//       button: "Get 15% off",
//     },
//     {
//       url: BannerImg,
//       color: "#FFBEA2",
//       text: "New Arrivals!",
//       description: "Check out the latest collection",
//       button: "Shop Now",
//     },
//     {
//       url: BannerImg,
//       color: "#efa280",
//       text: "Limited Time Offer!",
//       description: "Exclusive deals just for you",
//       button: "Discover More",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
//       <div
//         style={{
//           backgroundColor: slides[currentIndex].color,
//         }}
//         className="w-full h-full rounded-2xl duration-500 relative flex"
//       >
//         <div className="flex-1 flex flex-col justify-center p-10 text-white z-10">
//           <h2 className="text-6xl font-bold mb-4">{slides[currentIndex].text}</h2>
//           <p className="text-2xl mb-6">{slides[currentIndex].description}</p>
//           <button
//             className="px-8 py-4 bg-yellow-500 text-black rounded-lg flex items-center justify-center text-xl"
//             onClick={() => {
//               router.push("/shop");
//             }}
//           >
//             <span className="mr-2">{slides[currentIndex].button}</span>
//             <FaArrowRight />
//           </button>
//         </div>
//         <div className="flex-1 relative">
//           <Image
//             src={slides[currentIndex].url}
//             alt="Carousel Image"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-r-2xl"
//           />
//         </div>
//       </div>
//       {/* Left Arrow */}
//       <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//         <BsChevronCompactLeft onClick={prevSlide} size={30} />
//       </div>
//       {/* Right Arrow */}
//       <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//         <BsChevronCompactRight onClick={nextSlide} size={30} />
//       </div>
//       <div className="flex justify-center py-2">
//         {slides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//             className={`text-2xl cursor-pointer mx-1 ${
//               currentIndex === slideIndex ? "text-black" : "text-gray-400"
//             }`}
//           >
//             <RxDotFilled />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Carousel;

// import React, { useState, useEffect } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";
// import { FaArrowRight } from "react-icons/fa";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import BannerImg from "../../../public/img/banner.png";
// import BannerImg2 from "../../../public/img/banner2.png";

// function Carousel() {
//   const router = useRouter();

//   const slides = [
//     {
//       url: BannerImg,
//       color: "#5ca2d0",
//       text: "Flash Sale!",
//       description: "Enjoy discounts in selected items",
//       button: "Get 15% off",
//     },
//     {
//       url: BannerImg2,
//       color: "#FFBEA2",
//       text: "New Arrivals!",
//       description: "Check out the latest collection",
//       button: "Shop Now",
//     },
//     {
//       url: BannerImg,
//       color: "#efa280",
//       text: "Limited Time Offer!",
//       description: "Exclusive deals just for you",
//       button: "Discover More",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <div className="max-w-[1400px] h-[780px] w-full m-auto py-4 px-4 relative group">
//       <div
//         style={{
//           backgroundColor: slides[currentIndex].color,
//         }}
//         className="w-full h-full rounded-2xl duration-500 relative flex"
//       >
//         <div className="flex-1 flex flex-col justify-center p-10 text-white z-10">
//           <h2 className="text-6xl font-bold mb-4">{slides[currentIndex].text}</h2>
//           <p className="text-2xl mb-6">{slides[currentIndex].description}</p>
//           <button
//             className="w-[200px] px-4 py-2 bg-yellow-500 text-black rounded-lg flex items-center justify-center text-xl"
//             onClick={() => {
//               router.push("/shop");
//             }}
//           >
//             <span className="mr-2">{slides[currentIndex].button}</span>
//             <FaArrowRight />
//           </button>
//         </div>
//         <div className="flex-1 relative">
//           <Image
//             src={slides[currentIndex].url}
//             alt="Carousel Image"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-r-2xl"
//           />
//         </div>
//       </div>
//       {/* Left Arrow */}
//       <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//         <BsChevronCompactLeft onClick={prevSlide} size={30} />
//       </div>
//       {/* Right Arrow */}
//       <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//         <BsChevronCompactRight onClick={nextSlide} size={30} />
//       </div>
//       <div className="flex justify-center py-2">
//         {slides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//             className={`text-2xl cursor-pointer mx-1 ${
//               currentIndex === slideIndex ? "text-black" : "text-gray-400"
//             }`}
//           >
//             <RxDotFilled />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Carousel;

import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BannerImg from "../../../public/img/banner.png";
import BannerImgn2 from "../../../public/img/bannern2.png";
import BannerImgn1 from "../../../public/img/bannern1.png";


function Carousel() {
  const router = useRouter();

  const slides = [
    {
      url: BannerImgn1,
      color: "#D7D5D3",
      text: "Effortless Clean Awaits!",
      description: "Explore Our Latest Products",
      button: "See the Collection",
    },
    {
      url: BannerImgn2,
      color: "#1399f2",
      text: "Elevate Your Dining!",
      description: "Explore Our Stylish Cutlery",
      button: "Browse Collection",
    },

    {
      url: BannerImg,
      color: "#8BA9BF",
      text: "Clean Smarter, Not Harder",
      description: "Revolutionize Your Routine",
      button: "Discover More",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="max-w-[1400px] h-[628px] w-full m-auto py-4 px-4 relative group">
      <div
        style={{
          backgroundColor: slides[currentIndex].color,
        }}
        className="w-full h-full rounded-2xl duration-500 relative flex"
      >
        <div className="flex-1 flex flex-col justify-center p-6 text-white z-10">
          <h2 className="text-4xl font-bold mb-2">
            {slides[currentIndex].text}
          </h2>
          <p className="text-lg mb-4">{slides[currentIndex].description}</p>
          <button
            className="w-[200px] px-4 py-2 bg-yellow-500 text-black rounded-lg flex items-center justify-center text-base"
            onClick={() => {
              router.push("/shop");
            }}
          >
            <span className="mr-2">{slides[currentIndex].button}</span>
            <FaArrowRight />
          </button>
        </div>
        <div className="flex-1 relative">
          <Image
            src={slides[currentIndex].url}
            alt="Carousel Image"
            layout="fill"
            objectFit="cover"
            className="rounded-r-2xl"
          />
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer mx-1 ${
              currentIndex === slideIndex ? "text-black" : "text-gray-400"
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
