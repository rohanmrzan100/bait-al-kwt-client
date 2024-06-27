"use client";
import NotAuthorized from "@/app/components/Admin/NotAuthorized";
import Container from "@/app/components/Container";
import { useUser } from "@/app/hooks/useUser";
import React, { useEffect, useState } from "react";
import ManageProductsClient from "../manage-products/ManageProductsClient";
import { IProductProps } from "@/app/type";
import { GetAllProducts } from "@/app/helper/Functions";

const ManageOrders = () => {
  const { role } = useUser();
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
  if (role == "user" || role == "") {
    return <NotAuthorized />;
  }
  return (
    <div className="pt-8">
      <Container>
        <ManageProductsClient />
      </Container>
    </div>
  );
};

export default ManageOrders;
