"use client";
import React from "react";
import Container from "@/app/components/Container";
import FormWrap from "@/app/components/formwrap/FormWrap";
import NotAuthorized from "@/app/components/Admin/NotAuthorized";
import { useUser } from "@/app/hooks/useUser";
import EditProductForm from "./EditProductForm";

const AddProducts = ({ params }: { params: { productId: string } }) => {
  const { role } = useUser();
  if (role == "user" || role == "") {
    return <NotAuthorized />;
  } else {
  }
  return (
    <div className="p-8">
      <Container>
        <FormWrap>
          <EditProductForm id={params.productId} />
        </FormWrap>
      </Container>
    </div>
  );
};

export default AddProducts;
