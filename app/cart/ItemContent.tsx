"use client";
import React from "react";
import { cartProduct } from "../type";
import { formatPrice } from "../utils/FormatPrice";
import Link from "next/link";
import { TruncateText } from "../utils/TruncateText";
import Image from "next/image";
import SetQuantity from "../product/[productId]/setQuantity";
import { useCart } from "../hooks/useCart";
interface ItemContentProps {
  item: cartProduct;
}

const ItemContent = ({ item }: ItemContentProps) => {
  const {
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
  } = useCart();
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm border-[1.5px] gap-4 border-slate-300 p-4 items-center bg-slate-100">
      <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
        <Link href={`product/${item.id}`}>
          <div className="relative w-[70px] aspect-square">
            {" "}
            <Image
              src={item.selectedImage.image}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`product/${item.id}`}>{TruncateText(item.name)}</Link>
          <div>{item.selectedImage.color}</div>
          <div className="w-[70px] ">
            <button
              className="text-slate-500 underline "
              onClick={() => {
                handleRemoveProductFromCart(item);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="justify-self-center  font-semibold">
        {formatPrice(item.price)}
      </div>
      <div className="justify-self-center">
        <SetQuantity
          cartCounter={true}
          cartProduct={item}
          handleQtySelectIncrease={() => {
            handleCartQtyIncrease(item);
          }}
          handleQtySelectDecrease={() => {
            handleCartQtyDecrease(item);
          }}
        />
      </div>
      <div className="justify-self-end font-semibold">
        {formatPrice(item.price * item.quantity)}
      </div>
    </div>
  );
};

export default ItemContent;
