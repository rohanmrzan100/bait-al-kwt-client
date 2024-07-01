"use client";

import { ButtonProps } from "@/app/type";
import React from "react";

const Button = (props: ButtonProps) => {


  return (
    <button
      className={`flex-row-reverse disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-80 rounded-md transition w-full border-slate-700 flex justify-center items-center gap-2 
      ${props.outline ? "bg-while text-slate-700" : "bg-slate-700 text-white"} 
       ${
         props.small
           ? "text-sm py-1 px-2 font-light border-[1px]"
           : "text-md py-3 px-4 font-semibold border-2"
       } ${props.custom ? props.custom : ""}
       
       `}
      onClick={props.onClick}
    >
      {props.Icon && <props.Icon size={24} />}
      {props.label}
    </button>
  );
};

export default Button;
