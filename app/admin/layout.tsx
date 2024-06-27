import React from "react";
import AdminNav from "../components/Admin/AdminNav";
export const metadata = {
  title: "Bait-al-Admin",
  description: "Admin dashboard",
};
const Layout = ({ children }: { children: React.ReactNode }) => {
 

  return (
    <div>
      <div>
        <AdminNav />
      </div>
      {children}
    </div>
  );
};

export default Layout;
