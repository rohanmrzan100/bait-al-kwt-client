"use-client";

import React, { useEffect } from "react";
import Banner from "@/app/utils/Banner";
import SplitType from "split-type";
import { gsap } from "gsap";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Trolley from "../../../public/img/bannern1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const AnimatedText = () => {
  const router = useRouter();

  useEffect(() => {
    // to split text into characters split-text nam cha sab ko
    const texts = document.querySelectorAll(".split-text");
    texts.forEach((element) => {
      new SplitType(element);
    });

    // Apply initial transform to characters
    const characters = document.querySelectorAll(".char");
    characters.forEach((char) => {
      char.classList.add("translate-y-full");
    });

    // for characters
    gsap.to(".char", {
      y: 0,
      stagger: 0.01,
      delay: 0.01,
      duration: 0.1,
    });

    // for image
    gsap.fromTo(
      ".animated-image",
      { opacity: 0, x: 100 }, // Initial state
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" } // End state
    );

    // for button
    gsap.fromTo(
      ".animated-button",
      { opacity: 0, y: 20 }, // Initial state
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 } // End state
    );
  }, []);

  return (
    <div className="w-full h-screen relative bg-gray-800 flex justify-between items-center px-8 py-8">
      <div className="flex flex-col justify-center items-start">
        <h1
          className="split-text text-green-700 text-6xl md:text-4xl font-bold mb-4 uppercase"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          Cleaning
        </h1>
        <h1
          className="split-text text-white text-6xl md:text-4xl font-bold mb-4 uppercase"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          Tools
        </h1>
        <h6
          className="split-text text-white text-sm md:text-lg mb-4"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          Our cleaning tools are crafted for efficiency, offering reliable
          performance for every cleaning challenge.
        </h6>

        <button
          className=" animated-button bg-green-700 text-white hover:bg-green-800 font-bold py-2 px-4 rounded flex justify-center gap-2 items-center"
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

export default AnimatedText;

// import React, { useEffect } from "react";
// import Banner from "@/app/utils/Banner";
// import SplitType from "split-type";
// import { gsap } from "gsap";
// import Image from "next/image";
// import { FaArrowRight } from "react-icons/fa";
// import { useRouter } from "next/navigation";
// import Trolley from "../../../public/img/bannern1.png";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

// const AnimatedText = () => {
//   const router = useRouter();

//   useEffect(() => {
//     const context = gsap.context(() => {
//       // to split text into characters
//       const texts = document.querySelectorAll(".split-text");
//       texts.forEach((element) => {
//         new SplitType(element);
//       });

//       // Reset initial states
//       const characters = document.querySelectorAll(".char");
//       characters.forEach((char) => {
//         char.classList.add("translate-y-full");
//       });

//       // for characters
//       gsap.to(".char", {
//         y: 0,
//         stagger: 0.01,
//         delay: 0.01,
//         duration: 0.1,
//       });

//       // for image
//       gsap.fromTo(
//         ".animated-image",
//         { opacity: 0, x: 100 }, // Initial state
//         { opacity: 1, x: 0, duration: 1, ease: "power2.out" } // End state
//       );

//       // for button
//       gsap.fromTo(
//         ".animated-button",
//         { opacity: 0, y: 20 }, // Initial state
//         { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 } // End state
//       );
//     });

//     return () => {
//       context.revert(); // Clean up GSAP context on unmount
//     };
//   }, []);

//   return (
//     <div className="w-full h-screen relative bg-gray-800 flex justify-between items-center px-8 py-8">
//       <div className="flex flex-col justify-center items-start">
//         <h1
//           className="split-text text-green-700 text-6xl md:text-4xl font-bold mb-4 uppercase"
//           style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
//         >
//           Cleaning
//         </h1>
//         <h1
//           className="split-text text-white text-6xl md:text-4xl font-bold mb-4 uppercase"
//           style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
//         >
//           Tools
//         </h1>
//         <h6
//           className="split-text text-white text-sm md:text-lg mb-4"
//           style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
//         >
//           Our cleaning tools are crafted for efficiency, offering reliable
//           performance for every cleaning challenge.
//         </h6>

//         <button
//           className="animated-button bg-green-700 text-white hover:bg-green-800 font-bold py-2 px-4 rounded flex justify-center gap-2 items-center"
//           onClick={() => {
//             router.push("/shop");
//           }}
//         >
//           Browse Products <FaArrowRight />
//         </button>
//       </div>

//       <div className="flex justify-center items-center">
//         <Image
//           src={Trolley}
//           alt="Trolley"
//           className="w-full h-auto max-w-sm object-cover animated-image"
//         />
//       </div>
//     </div>
//   );
// };

// export default AnimatedText;

// "use-client";
// import React, { useEffect } from "react";
// import Banner from "@/app/utils/Banner";
// import SplitType from "split-type";
// import { gsap } from "gsap";
// import Image from "next/image";
// import { FaArrowRight } from "react-icons/fa";
// import { useRouter } from "next/navigation";
// import Trolley from "../../../public/img/image__1_-removebg-preview.png";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

// const AnimatedText = () => {
//   const router = useRouter();
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   useEffect(() => {
//     console.log("Banner Data:", Banner);
//     // to split text into characters split-text nam cha sab ko
//     const texts = document.querySelectorAll(".split-text");
//     texts.forEach((element) => {
//       new SplitType(element);
//     });

//     // Apply initial transform to characters
//     const characters = document.querySelectorAll(".char");
//     characters.forEach((char) => {
//       char.classList.add("translate-y-full");
//     });

//     // for characters
//     gsap.to(".char", {
//       y: 0,
//       stagger: 0.01,
//       delay: 0.01,
//       duration: 0.1,
//     });

//     //for image
//     gsap.fromTo(
//       ".animated-image",
//       { opacity: 0, x: 100 }, // Initial state
//       { opacity: 1, x: 0, duration: 1, ease: "power2.out" } // End state
//     );

//     // for button
//     gsap.fromTo(
//       ".animated-button",
//       { opacity: 0, y: 20 }, // Initial state
//       { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 } // End state
//     );
//   }, []);

//   return (
//     <Slider {...settings}>
//       {Banner && Banner.length > 0 ? (
//         Banner.map((item) => (
//           <div
//             key={item.h1}
//             className="w-full h-screen relative bg-gray-800 flex justify-between items-center px-8 py-8"
//           >
//             <div className="flex flex-col justify-center items-start">
//               <h1
//                 className="split-text text-green-700 text-6xl md:text-4xl font-bold mb-4"
//                 style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
//               >
//                 {item.fh1}
//               </h1>
//               <h2
//                 className="split-text text-white text-sm md:text-lg mb-4"
//                 style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
//               >
//                 {item.sh1}
//               </h2>
//               <h6
//                 className="split-text text-white text-sm md:text-lg mb-4"
//                 style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
//               >
//                 {item.h6}
//               </h6>

//               <button
//                 className=" animated-button bg-green-700 text-white hover:bg-green-800 font-bold py-2 px-4 rounded flex justify-center gap-2 items-center"
//                 onClick={() => {
//                   router.push("/shop");
//                 }}
//               >
//                 Browse Products <FaArrowRight />
//               </button>
//             </div>

//             <div className="flex justify-center items-center">
//               <img
//                 src={item.image.src}
//                 alt={`${item.h1} image`}
//                 className="w-full h-auto max-w-sm object-cover animated-image"
//               />
//             </div>
//           </div>
//         ))
//       ) : (
//         <div className="w-full h-screen flex justify-center items-center text-white">
//           <p>No banner data available.</p>
//         </div>
//       )}
//     </Slider>
//   );
// };

// export default AnimatedText;
