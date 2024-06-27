"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDashboard, MdDns, MdFormatListBulleted, MdLibraryAdd } from "react-icons/md";
import Container from "../Container";
import AdminNavItem from "./AdminNavItem";

const AdminNav = () => {
  const pathname = usePathname();
  return (
    <div className="w-full shadow-sm top-20 border-b-[1px] pt-4 bg-slate-300">
      <Container>
        <div className="flex flex-row items-center justify-between md:justify-center gap-8 md:gap-12 overflow-x-auto flex-nowrap">
          <Link href={"/admin"}>
            <AdminNavItem
              icon={MdDashboard}
              selected={pathname == "/admin"}
              label="Summary"
            />
          </Link>
          <Link href={"/admin/add-products"}>
            <AdminNavItem
              icon={MdLibraryAdd}
              selected={pathname == "/admin/add-products"}
              label="Add Products"
            />
          </Link>
          <Link href={"/admin/manage-products"}>
            <AdminNavItem
              icon={MdDns}
              selected={pathname == "/admin/manage-products"}
              label="Manage Products"
            />
          </Link>
          <Link href={"/admin/manage-orders"}>
            <AdminNavItem
              icon={MdFormatListBulleted}
              selected={pathname == "/admin/manage-orders"}
              label="Manage Orders "
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AdminNav;
