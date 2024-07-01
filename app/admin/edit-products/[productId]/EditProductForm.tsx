"use client";

import { BASE_URL } from "@/Constants";
import { IProductProps } from "@/app/type";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const EditProductForm = ({ id }: { id: string }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState<IProductProps | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      inStock: false,
      price: "",
    },
  });

  useEffect(() => {
    async function getProductById(id: string) {
      try {
        const response = await axios.post(
          BASE_URL + "/api/product/get-product",
          { id }
        );
        const fetchedProduct = response.data.product;
        setProduct(fetchedProduct);

        setValue("name", fetchedProduct.name);
        setValue("description", fetchedProduct.description);
        setValue("inStock", fetchedProduct.inStock);
        setValue("price", fetchedProduct.price);
      } catch (error) {
        console.log(error);
      }
    }
    getProductById(id);
  }, [id, setValue]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("inStock", data.inStock);
    formData.append("price", data.price);
    formData.append("id", id);

    setIsLoading(true);
    try {
      const token = getCookie("token");
      await axios.post(
        `${BASE_URL}/api/product/update-product`,
        {
          name: data.name,
          description: data.description,
          inStock: data.inStock,
          price: parseFloat(data.price),
          id: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Product Updated Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
      router.push("/admin/manage-products");
    }
  };

  return (
    product && (
      <div className="px-8 w-full">
        <h1 className="py-4 text-3xl font-bold text-slate-700 text-center">
          Edit Product
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg mx-auto"
        >
          <div className="relative my-4">
            <input
              autoComplete="off"
              {...register("name", { required: true })}
              placeholder="Product Name"
              type="text"
              className={`w-full p-4 peer pt-6 outline-none bg-white font-light border-2 rounded-md transition
                ${errors.name ? "border-rose-400" : "border-slate-300"}
                ${
                  errors.name
                    ? "focus:border-rose-400"
                    : "focus:border-slate-300"
                }`}
            />
            <label
              className={`absolute cursor-text text-md duration-150 transform -translate-y-3 z-10 top-5 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
                errors.name ? "text-rose-500" : "text-slate-700"
              }`}
              htmlFor="name"
            >
              Product Name
            </label>
          </div>
          <div className="relative my-4">
            <textarea
              autoComplete="off"
              {...register("description", { required: true })}
              placeholder="Product Description"
              className={`w-full p-4 peer pt-6 outline-none bg-white font-light border-2 rounded-md transition
                ${errors.description ? "border-rose-400" : "border-slate-300"}
                ${
                  errors.description
                    ? "focus:border-rose-400"
                    : "focus:border-slate-300"
                }`}
            />
            <label
              className={`absolute cursor-text text-md duration-150 transform -translate-y-3 z-10 top-5 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
                errors.description ? "text-rose-500" : "text-slate-700"
              }`}
              htmlFor="description"
            >
              Product Description
            </label>
          </div>
          <div className="relative my-4">
            <input
              autoComplete="off"
              {...register("price", { required: true })}
              placeholder="Product Price"
              type="number"
              className={`w-full p-4 peer pt-6 outline-none bg-white font-light border-2 rounded-md transition
                ${errors.price ? "border-rose-400" : "border-slate-300"}
                ${
                  errors.price
                    ? "focus:border-rose-400"
                    : "focus:border-slate-300"
                }`}
            />
            <label
              className={`absolute cursor-text text-md duration-150 transform -translate-y-3 z-10 top-5 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
                errors.price ? "text-rose-500" : "text-slate-700"
              }`}
              htmlFor="price"
            >
              Product Price
            </label>
          </div>
          <div className="relative my-4">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                {...register("inStock")}
                className="form-checkbox"
              />
              <span className="text-md text-slate-700">In Stock</span>
            </label>
          </div>
          <button
            className="flex-row-reverse disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-80 rounded-md transition w-full border-slate-700 flex justify-center items-center gap-2 
            text-md py-3 px-4 font-semibold border-2
            bg-slate-700 text-white
            "
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading ..." : "Edit Product"}
          </button>
        </form>
      </div>
    )
  );
};

export default EditProductForm;
