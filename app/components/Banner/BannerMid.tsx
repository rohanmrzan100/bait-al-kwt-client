import React from "react";
import BannerMidImg from "../../../public/img/Limited Offer.png";
import Image from "next/image";
import "./BannerMid.css";
import { useRouter } from "next/navigation";

const BannerMid: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bannerMidContainer">
      <Image
        className="sale-banner hidden md:flex lg:flex "
        src={BannerMidImg}
        alt="Flash Sale"
        onClick={() => {
          router.push("/shop");
        }}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

export default BannerMid;
