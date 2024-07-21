import React from "react";
import BannerMidImg from "../../../public/img/Limited Offer.png";
import Image from "next/image";
import "./BannerMid.css";
import { useRouter } from "next/navigation";

const BannerMid: React.FC = () => {
  const router = useRouter();

  return (
    // <div className="bannerMidContainer">
    //   <Image
    //     className="sale-banner"
    //     src={BannerMidImg}
    //     alt="Flash Sale"
    //     onClick={() => {
    //       router.push("/shop");
    //     }}

    //   />
    // </div>

    // <div className="bannerMidContainer">
    //   <Image
    //     className="sale-banner"
    //     src={BannerMidImg}
    //     alt="Flash Sale"
    //     onClick={() => {
    //       router.push("/shop");
    //     }}
    //     layout="responsive" // Responsive layout
    //     width={1200} // Adjust based on your design
    //     height={400} // Adjust based on your design
    //     objectFit="cover" // Cover the area
    //   />
    // </div>

    <div className="bannerMidContainer">
    <Image
      className="sale-banner"
      src={BannerMidImg}
      alt="Flash Sale"
      onClick={() => {
        router.push("/shop");
      }}
      layout="fill" // Fill the parent container
      objectFit="contain" // Maintain aspect ratio within the container
    />
  </div>
  );
};

export default BannerMid;
