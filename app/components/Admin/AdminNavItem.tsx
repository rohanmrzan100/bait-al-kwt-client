import React from "react";
import { IconType } from "react-icons";

interface IAdminNavItem {
  selected?: boolean;
  icon: IconType;
  label: string;
}

const AdminNavItem = ({ selected, icon: Icon, label }: IAdminNavItem) => {
  return (
    <div
      className={`flex  items-center justify-center border-b-2 transition cursor-pointer text-center gap-2 p-2 px-4 hover:text-slate-800 ${
        selected
          ? "border-b-slate-800 text-slate-800"
          : "border-slate-300 text-slate-500"
      }`}
    >
      <Icon size={20} />
      <div className="font-medium text-sm text-center">{label}</div>
    </div>
  );
};

export default AdminNavItem;
