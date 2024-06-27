import React from "react";

const FormWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-fit h-full flex items-center relative justify-center pb-12 pt-12 w-full">
      <div className="max-w-[800px] relative w-full flex flex-col gap-6 items-center shadow-xl shadow-slate-200  bg-white rounded-md p-4 md:p-6">
        {children}
      </div>
    </div>
  );
};

export default FormWrap;
