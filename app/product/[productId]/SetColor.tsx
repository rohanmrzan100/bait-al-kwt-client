"use client";
import { setColorProps } from "@/app/type";
import React from "react";

const SetColor = (props: setColorProps) => {
  return (
    <div className="font-medium text-lg flex gap-4 items-center justify-start">
      <span className="font-normal">Color:</span>
      <div className="flex gap-1">
        {props.selectedImage.map((image, index) => {
          return (
            <div
              onClick={() => props.handleColorSelect(image)}
              key={index}
              className={`h-7 w-7 rounded-full border-teal-300 flex items-center justify-center ${
                props.cartProduct.selectedImage.color === image.color
                  ? "border-[2px]"
                  : "border-none"
              }`}
            >
              <div
                style={{ background: image.colorCode }}
                className="h-5 w-5 rounded-full border-[1.25px] border-slate-300 cursor-pointer"
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SetColor;
