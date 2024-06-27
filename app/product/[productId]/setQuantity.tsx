"use client";
import { setQtyProps } from "@/app/type";
import React from "react";

const SetQuantity = (props: setQtyProps) => {
  const btnStyles = `border-[1.25px] border-slate-300 px-2 rounded`;
  return (
    <div className="flex gap-8 items-center font-medium text-lg">
      {props.cartCounter ? null : <div className="font-normal">Quantity</div>}
      <div className="flex gap-4 items-center text-base">
        <button className={btnStyles} onClick={props.handleQtySelectDecrease}>
          -
        </button>
        <div>{props.cartProduct.quantity}</div>
        <button className={btnStyles} onClick={props.handleQtySelectIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
