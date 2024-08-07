import React from "react";
import BannerMidImg from "../../../public/img/Limited Offer.png";
import Image from "next/image";
import "./BannerMid.css";
import { useRouter } from "next/navigation";
import ExclusiveOffer from "@/public/img/exclusive offer.png";
import OfferSide from "@/public/img/offer side.png";

const BannerMid: React.FC = () => {
  const router = useRouter();

  return (
    <div
      className="flex jusitfy-center items-center bg-[#d9e1dd]  h-[250px] rounded-2xl cursor-pointer"
      onClick={() => {
        router.push("/shop");
      }}
    >
      <div className="flex-1 p-4">
        <Image
          src={ExclusiveOffer}
          alt="Flash Sale"
          width={200}
          height={200}
          onClick={() => {
            router.push("/shop");
          }}
        />
      </div>
      <div className="flex-1  flex-col justify-center">
        <p className="text-[#1E90FF] text-bold text-4xl md:text-6xl mb-2">20% OFF </p>
        <p className="text-black text-2xl md:text-2xl uppercase">Upto 10KWD</p>
        <p className="text-[#6A5ACD] text-1xl md:text-1xl">Min Spend 25KWD</p>
      </div>
      <div className="flex-1 p-4">
        <Image src={OfferSide} alt="Flash Sale" width={350} height={350} />
      </div>
    </div>
  );
};

export default BannerMid;
