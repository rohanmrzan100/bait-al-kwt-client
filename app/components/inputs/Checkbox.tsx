"use client";

import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
interface CheckboxProps {
  id: string;
  label: string;
  disabled?: boolean;
  register: UseFormRegister<FieldValues>;
}
const Checkbox = ({ id, label, disabled, register }: CheckboxProps) => {
  return (
    <div className="w-full flex flex-row gap-2 items-center mb-2">
      <input
        type="checkbox"
        id={id}
        disabled={disabled}
        {...register(id)}
        className="cursor-pointer"
      />
      <label htmlFor={id} className="font-medium cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
