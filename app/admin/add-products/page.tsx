"use client";

import React from "react";
import AddProductForm from "./AddProductForm";
import Container from "@/app/components/Container";
import FormWrap from "@/app/components/formwrap/FormWrap";
import NotAuthorized from "@/app/components/Admin/NotAuthorized";
import { useUser } from "@/app/hooks/useUser";

const AddProducts = () => {
  const { role } = useUser();
  if (role == "user" || role == "") {
    return <NotAuthorized />;
  } else {
  }
  return (
    <div className="p-8">
      <Container>
        <FormWrap>
          <AddProductForm />
        </FormWrap>
      </Container>
    </div>
  );
};

export default AddProducts;
