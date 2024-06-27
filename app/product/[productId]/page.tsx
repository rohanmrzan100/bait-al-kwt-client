"use client";
import Container from "@/app/components/Container";
import { products } from "@/app/utils/data";
import React, { useState, useEffect } from "react";
import ProductDetails from "./ProductDetails";
import { IProductProps } from "@/app/type";
import axios from "axios";
import { BASE_URL } from "@/Constants";
import { toast } from "react-toastify";

const ProductPage = ({ params }: { params: { productId: string } }) => {
  const [product, setProduct] = useState<IProductProps | null>(null);

  useEffect(() => {
    axios
      .post(BASE_URL + "/api/product/get-product", {
        id: params.productId,
      })
      .then((res) => {
        console.log(res.data.product);
        setProduct(res.data.product);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something Went Wrong !");
      });
  }, [params.productId]);

  return (
    <div className="p-8">
      <Container>{product && <ProductDetails product={product} />}</Container>
    </div>
  );
};

export default ProductPage;
