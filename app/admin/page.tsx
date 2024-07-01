"use client";
import React from "react";
import { useUser } from "../hooks/useUser";
import NotAuthorized from "../components/Admin/NotAuthorized";

const Admin = () => {
  const { role } = useUser();
  console.log({ role });

  if (role == "user" || role == "") {
    return <NotAuthorized />;
  }
  return (
    <div className="pt-8 h-[600px] flex items-center justify-center text-3xl text-black">
      Comming Soon !
    </div>
  );
};

export default Admin;
