"use client";

import { useRouter } from "next/navigation";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "../Carousel/Carousel";
import BannerMid from "./BannerMid";

import styles from "./Banner.module.css";
import CarouselDiv from "../Carousel/Carousel";

const Banner = () => {
  const router = useRouter();
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.carouselWrapper}>
        <CarouselDiv />
      </div>
      <div className={styles.bannerMidWrapper}>
        <BannerMid />
      </div>
    </div>
  );
};

export default Banner;
