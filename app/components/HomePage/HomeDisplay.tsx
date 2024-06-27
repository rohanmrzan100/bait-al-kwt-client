"use client";
import { GetAllProducts } from "@/app/helper/Functions";
import { IProductProps } from "@/app/type";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const HomeDisplay = () => {
  const [products, setProducts] = useState<IProductProps[] | null>(null);
  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const response = await GetAllProducts();
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllProducts();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 px-2">
      {products &&
        products.map((product: IProductProps, index) => (
          <ProductCard {...product} key={index} />
          // <div key={index}></div>
        ))}
    </div>
  );
};

export default HomeDisplay;
