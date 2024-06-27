"use client";

import { Rating } from "@mui/material";

const ProductCardSkeleton = () => {
  return (
    <div
      role="status"
      className="w-full relative group border-[1px] shadow-lg bg-white max-w-80 animate-pulse"
    >
      <div className="max-w-80 py-3 flex flex-col gap-1 border-t-0 px-4">
        <div className="flex flex-col items-start gap-2 justify-between font-titleFont">
          <div className="h-[260px] bg-gray-400   w-full "></div>
          <div className="h-[28px] bg-gray-400   w-full "></div>

          <p>
            <Rating value={5} readOnly />
          </p>
          <div className="h-[16px] bg-gray-400  w-3/5 "></div>
          <div className="h-[32px] bg-gray-400   w-2/3 "></div>
          <div className="h-[16px] bg-gray-400   w-1/3 "></div>
        </div>
        <div>
          <p className="text-[#767676] text-[14px]"></p>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
