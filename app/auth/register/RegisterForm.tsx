"use client";
import { BASE_URL } from "@/Constants";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai";
import { toast } from "react-toastify";
import Button from "../../components/Button/Button";
import Input from "../../components/inputs/Input";
const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
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
      const response = await axios.post(`${BASE_URL}/api/user/register`, data);
      console.log({ response });

      if (response.status === 201) {
        toast.success(response.data.msg);
        router.push("/auth/login");
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
        Sign up to Bait Al Kuwait
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
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="text"
      />
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
        label={isLoading ? "Loading ..." : "Sign Up"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm my-2">
        Already have an account ?{" "}
        <Link className="underline" href={"/auth/login"}>
          Log In
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
