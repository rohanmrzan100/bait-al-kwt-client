"use client";

import { useRouter } from "next/navigation";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TextAnimate from "../Carousel/TextAnimate";
import BannerMid from "./BannerMid";

import styles from "./Banner.module.css";

const Banner = () => {
  const router = useRouter();
  return (
    <div className={styles.bannerContainer}>
      <div
        className={styles.carouselWrapper}
        // style={{
        //   backgroundImage: "url('/img/Untitled.png')",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <TextAnimate />
      </div>
      <div className={`${styles.bannerMidWrapper} hidden md:flex lg:flex`}>
        <BannerMid />
      </div>
    </div>
  );
};

export default Banner;
