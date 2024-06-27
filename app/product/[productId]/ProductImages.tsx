"use client";

import { ImageProps, productImageProps } from "@/app/type";
import Image from "next/image";

const ProductImages = ({
  cartProduct,
  product,
  handleColorSelect,
}: productImageProps) => {
  return (
    <div className="grid grid-cols-6 gap-2 h-full  max-h-[500px] min-h-[300px] sm:min-h-[400px]">
      <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        {product.image.map((image: ImageProps, index: number) => {
          return (
            <div
              key={index}
              onClick={() => handleColorSelect(image)}
              className={`relative w-4/5 aspect-square rounded border-teal-300 ${
                cartProduct.selectedImage.color === image.color
                  ? "border-[1.25px]"
                  : "border-none"
              }`}
            >
              <Image
                src={image.image}
                alt={image.color}
                fill
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
      <div className="col-span-5 relative aspect-square">
        <Image
          src={cartProduct.selectedImage.image}
          alt={cartProduct.selectedImage.color}
          fill
          className="object-contain w-full h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]"
        />
      </div>
    </div>
  );
};

export default ProductImages;
