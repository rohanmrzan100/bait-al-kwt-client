"use client";
import NotAuthorized from "@/app/components/Admin/NotAuthorized";
import Container from "@/app/components/Container";
import { useUser } from "@/app/hooks/useUser";
import ManageProductsClient from "../manage-products/ManageProductsClient";

const ManageOrders = () => {
  const { role } = useUser();

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
