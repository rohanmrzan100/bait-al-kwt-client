"use client";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface TextAreaProps {
  id: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const TextArea = ({
  id,
  disabled,
  required,
  register,
  errors,
  label,
}: TextAreaProps) => {
  return (
    <div className="w-[650px] relative my-4 ">
      <textarea
        autoComplete="off"
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=""
        className={`w-full p-4 peer pt-6 outline-none bg-white font-light border-2 rounded-md transition
        disabled:opacity-70
        max-h-[150px]
        min-h-[150px]
        disabled:cursor-not-allowed
${errors[id] ? "border-rose-400" : "border-slate-300"}        
${errors[id] ? "focus:border-rose-400" : "focus:border-slate-300"}        
        `}
      />
      <label
        className={`absolute cursor-text text-md duration-150 transform -translate-y-3 z-10 top-5 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
          errors[id] ? "text-rose-500" : "text-slate-700"
        } `}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default TextArea;
