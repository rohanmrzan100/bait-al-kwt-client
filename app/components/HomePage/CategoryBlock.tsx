"use client";
import { IProductProps } from "@/app/type";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkeleton from "../ProductCard/ProductCardSkeleton";
import { BASE_URL } from "@/Constants";
import Slider from "react-slick";

const CategoryBlock = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<IProductProps[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getProductByCategory(category: string) {
      try {
        if (category == "All") {
          const response = await axios.get(
            BASE_URL + "/api/product/get-all-products"
          );
          setProducts(response.data);
          setIsLoading(true);
        } else {
          const response = await axios.get(
            BASE_URL + "/api/product/category/" + category
          );

          console.log(response);

          setProducts(response.data.product);
          setIsLoading(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getProductByCategory(category);
  }, []);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="my-[16px] w-full mt-20 text-center">
      <h1 className="text-[22px] text-slate-800 font-semibold mb-[16px]">
        {category == "All" ? "Just For You" : category}
      </h1>
  
      {isLoading ? (
        <Slider {...sliderSettings} className="p-4">
          {products &&
            products.slice(0, 8).map((product: IProductProps) => (
              <div key={product.id} className="px-2">
                <ProductCard {...product} />
              </div>
            ))}
        </Slider>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-4 my-4 px-2">
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </div>
      )}
    </div>
  );
};

export default CategoryBlock;
