import { UnUploadedImageProps } from "@/app/type";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface SelectImagePrps {
  item?: UnUploadedImageProps;
  handleFileChange: (value: File) => void;
}
const SelectImage = ({ item, handleFileChange }: SelectImagePrps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      handleFileChange(acceptedFiles[0]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png", ".jpg"],
    },
  });
  return (
    <div
      {...getRootProps()}
      className="border-2  border-slate-400 p-2 border-dashed cursor-pointer flex items-center justify-center shadow-lg"
    >
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop Image Here ..</p> : <p>+ {item?.color} Image</p>}
    </div>
  );
};

export default SelectImage;
