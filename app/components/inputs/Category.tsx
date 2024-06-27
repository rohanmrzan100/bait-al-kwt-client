"use client";
import React from "react";
import { IconType } from "react-icons";

interface CategoryProps {
  selected?: boolean;
  label: string;
  icon: IconType;
  onClick: (value: string) => void;
}
const Category = ({ selected, label, icon: Icon, onClick }: CategoryProps) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={` rounded-xl border-2 p-4 flex flex-col items-center gap-2 hover:border-slate-500 transition cursor-pointer ${
        selected ? "border-slate-500" : "border-slate-200"
      }`}
    >
      <Icon size={30} />
      <div className="font-medium">{label}</div>
    </div>
  );
};

export default Category;
