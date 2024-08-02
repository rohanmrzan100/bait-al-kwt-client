"use client";

import { useCart } from "@/app/hooks/useCart";
import { IProductProps, cartProduct } from "@/app/type";
import { formatPrice } from "@/app/utils/FormatPrice";
import { TruncateText } from "@/app/utils/TruncateText";
import { BASE_URL } from "@/Constants";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";

const ProductCard = (props: IProductProps) => {
  let productRating = 0;
  if (props.review) {
    productRating =
      props.review.reduce((acc, item) => acc + item.rating, 0) /
      props.review.length;
  }
  const router = useRouter();
  function handleViewDetails() {
    router.push(`/product/${props.id}`);
  }
  const [cartProducts, setCartProducts] = useState<cartProduct>({
    id: props.id,
    name: props.name,
    description: props.description,
    category: props.category,
    selectedImage: props.image[0],
    quantity: 1,
    price: props.price,
  });

  const { handleAddProductToCart, cartProduct, cartTotalQty } = useCart();
  console.log(props);
  return (
    <div className="w-full relative group border-[1px] shadow-lg bg-white  min-w-[275px] ">
      <div className="max-h-80 relative overflow-hidden">
        <div className="relative w-full h-52 ">
          {" "}
          {/* Added height class */}
          <Image
            fill
            alt={props.name}
            src={BASE_URL + props.image[0].image}
            className="object-contain"
            sizes="100%"
          />
        </div>
        <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            <li
              className="text-[#767676] hover:text-[#DCAB4F] text-md font-normal border-b-[1px] border-b-gray-200 hover:border-b-[#DCAB4F] flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full h-1/2"
              onClick={() => handleAddProductToCart(cartProducts)}
            >
              Add to Cart
              <span>
                <FaShoppingCart className="scale-150" />
              </span>
            </li>
            <li
              className="text-[#767676] hover:text-[#DCAB4F] text-md font-medium border-b-[1px] border-b-gray-200 hover:border-b-[#DCAB4F] flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full h-1/2 "
              onClick={handleViewDetails}
            >
              View Details
              <span className="text-lg">
                <MdOutlineLabelImportant className="scale-150" />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className=" py-6 flex flex-col gap-1 border-t-0 px-4">
        <div className="flex flex-col items-start gap-2 justify-between font-title">
          <h2 className="text-lg text-primeColor font-semibold text-left">
            {TruncateText(props.name)}
          </h2>
          <p>
            <Rating value={productRating} readOnly></Rating>
          </p>
          <p className="text-md">{props.review.length} review</p>
          <p className="text-gold text-xl font-semibold">
            {formatPrice(props.price)}
          </p>
        </div>
        <div className=" text-left">
          <p className="text-[#767676] text-[14px]">{props.image[0].color}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
