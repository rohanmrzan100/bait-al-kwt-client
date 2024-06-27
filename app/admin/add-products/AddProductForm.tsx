"use client";

import { BASE_URL } from "@/Constants";
import Button from "@/app/components/Button/Button";
import Category from "@/app/components/inputs/Category";
import Checkbox from "@/app/components/inputs/Checkbox";
import ColorsInput from "@/app/components/inputs/ColorsInput";
import Input from "@/app/components/inputs/Input";
import TextArea from "@/app/components/inputs/TextArea";
import { UnUploadedImageProps } from "@/app/type";
import { Categorys } from "@/app/utils/Category";
import { Colors } from "@/app/utils/Colors";
import axios from "axios";
import { getCookie, setCookie } from "cookies-next";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
const AddProductForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<UnUploadedImageProps[] | null>();
  const [isProductCreated, setIsProductCreated] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      category: "",
      images: [],
      inStock: false,
      price: "",
    },
  });

  useEffect(() => {
    setCustomValue("images", images);
  }, [images]);

  useEffect(() => {
    if (isProductCreated) {
      reset();
      setImages(null);
      setIsProductCreated(false);
    }
  }, [isProductCreated]);
  function setCustomValue(id: string, value: any) {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  }
  const category = watch("category");

  const addImageToState = useCallback((value: UnUploadedImageProps) => {
    setImages((prev) => {
      if (!prev) {
        return [value];
      }

      return [...prev, value];
    });
  }, []);
  const removeImageToState = useCallback((value: UnUploadedImageProps) => {
    setImages((prev) => {
      if (prev) {
        const filtered = prev.filter((item) => item.color !== value.color);
        return filtered;
      }
      return [];
    });
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("inStock", data.inStock);
    formData.append("price", data.price);

    data.images.forEach((image: UnUploadedImageProps, index: number) => {
      formData.append(`images-${index}`, image.image);
      formData.append(`color-${index}`, image.color);
      formData.append(`colorCode-${index}`, image.colorCode);
    });
    setIsLoading(true);
    try {
      const token = getCookie("token");

      await axios.post(`${BASE_URL}/api/product/create`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Product Added Sucessfully");
      setIsProductCreated(true);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong !");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <h1 className="py-4 text-3xl font-bold text-slate-700 text-center">
        Add Product
      </h1>

      <Input
        label="Name"
        id="name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        label="Price (KD)"
        id="price"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="number"
      />
      <TextArea
        label="Description"
        id="description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Checkbox
        id="inStock"
        register={register}
        label="This product is in stock."
      />

      <div className="w-full font-medium ">
        <div className=" font-bold my-2 mt-8  ">Select a Category</div>
        <div className="grid grid-cols-2 md:grid-cols-3 max-h-[50vh] overflow-y-auto gap-3">
          {Categorys.map((item, index) => {
            if (item.label == "All") {
              return null;
            }

            return (
              <div key={index}>
                <Category
                  onClick={(category) => setCustomValue("category", category)}
                  selected={category === item.label}
                  label={item.label}
                  icon={item.icon}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col flex-wrap gap-4 w-full my-8">
        <div>
          <div className="font-bold">
            Select Available Colors and Upload the images
          </div>
          <div className="text-sm">
            {" "}
            You must upload image for selected colors else your color selection
            will be ignored.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {Colors.map((item, index) => {
            return (
              <div key={index}>
                <ColorsInput
                  item={item}
                  addImageToState={addImageToState}
                  removeImageToState={removeImageToState}
                  isProductCreated={isProductCreated}
                />
              </div>
            );
          })}
        </div>
      </div>

      <Button
        label={isLoading ? "Loading ..." : "Add Product"}
        onClick={handleSubmit(onSubmit)}
      />
    </div>
  );
};

export default AddProductForm;
