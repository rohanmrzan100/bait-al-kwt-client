"use client";

import { UnUploadedImageProps } from "@/app/type";
import React, { useCallback, useEffect, useState } from "react";
import SelectImage from "./selectImage";
import Button from "../Button/Button";
interface ColorsInputProps {
  item: UnUploadedImageProps;

  addImageToState: (value: UnUploadedImageProps) => void;
  removeImageToState: (value: UnUploadedImageProps) => void;
  isProductCreated: boolean;
}
const ColorsInput = ({
  addImageToState,
  removeImageToState,
  isProductCreated,
  item,
}: ColorsInputProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (isProductCreated) {
      setIsSelected(false);
      setFile(null);
      removeImageToState(item);
    }
  }, [isProductCreated]);

  const handleFileChange = useCallback((value: File) => {
    setFile(value);
    addImageToState({
      ...item,
      image: value,
    });
  }, []);

  const handleCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(e.target.checked);

    if (!e.target.checked) {
      setFile(null);
      removeImageToState(item);
    }
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-1 border-b-[1px] border-slate-200 items-center p-2 overflow-y-auto"></div>

      <div className="flex gap-2 items-center h-[60px] justify-start ">
        <input
          id={item.color}
          type="checkbox"
          checked={isSelected}
          onChange={handleCheck}
          className="cursor-pointer"
        />
        <label htmlFor={item.color} className="font-medium cursor-pointer">
          {item.color}
        </label>
      </div>

      <>
        {isSelected && !file && (
          <div className="col-span-2 text-center">
            <SelectImage item={item} handleFileChange={handleFileChange} />
          </div>
        )}
        {file && (
          <div className="flex flex-row gap-2 px-4   text-xs col-span-2 items-center justify-between">
            <p>{file.name}</p>
            <div className="w-[70px]">
              <Button
                outline
                label="Remove"
                onClick={() => {
                  setFile(null);
                  removeImageToState(item);
                }}
              />
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default ColorsInput;
