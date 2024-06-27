import React from "react";
import { IconType } from "react-icons";
interface StatusProps {
  text: string;
  icon: IconType;
  bg: string;
  color: string;
}
const Status = ({ text, icon: Icon, bg, color }: StatusProps) => {
  return (
    <div
      className={`${bg} ${color} px-1 rounded-md flex items-center justify-center gap-1`}
    >
      {text}
      <Icon size={15} />
    </div>
  );
};

export default Status;
