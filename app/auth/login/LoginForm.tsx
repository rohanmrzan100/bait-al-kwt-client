"use client";
import { BASE_URL } from "@/Constants";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai";
import { toast } from "react-toastify";
import Button from "../../components/Button/Button";
import Input from "../../components/inputs/Input";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const google = () => {
    window.open(`${BASE_URL}/api/auth/google`, "_self");
  };

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/api/user/login`, data, {
        withCredentials: true,
      });
      if (response.status === 200) {
        toast.success(response?.data.msg);
        window.location.href = "/";
      }
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.msg);
      } else {
        toast.error("Something Went Wrong");
      }
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <h1 className="py-4 text-3xl font-bold text-slate-700 text-center">
        Log In to Bait Al Kuwait
      </h1>
      <Button
        outline
        label="Continue with Google"
        Icon={AiOutlineGoogle}
        onClick={() => {
          google();
        }}
      />
      <hr className="bg-slate-300 w-full my-4 h-[1px]"></hr>

      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="email"
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <Button
        label={isLoading ? "Loading ..." : "Log In "}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm my-2">
        Do not have an account ?{" "}
        <Link className="underline" href={"/auth/register"}>
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
