"use client";

import { useRouter } from "next/navigation";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "../Carousel/Carousel";
import BannerMid from "./BannerMid";
import TextAnimate from "../Carousel/TextAnimate"

import styles from "./Banner.module.css";
import CarouselDiv from "../Carousel/Carousel";

const Banner = () => {
  const router = useRouter();
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.carouselWrapper}>
        <TextAnimate/>
      </div>
      <div className={ `${styles.bannerMidWrapper} hidden md:flex lg:flex`}>
        <BannerMid />
      </div>
    </div>
  );
};

export default Banner;
