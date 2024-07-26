"use client";
import { BASE_URL } from "@/Constants";
import { useCart } from "@/app/hooks/useCart";
import logo from "@/public/img/logo.jpg";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import Container from "../Container";
import UserMenu from "./UserMenu";
import { RiAdminFill } from "react-icons/ri";
import { Role, User } from "@/app/type";
import { usePathname } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const { cartTotalQty } = useCart();
  const pathname = usePathname();
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  useEffect(() => {
    async function GetUser() {
      try {
        const response = await axios.get(BASE_URL + "/api/auth/success", {
          withCredentials: true,
        });
        if (response.status == 200) {
          setIsAuth(true);
          setUser(response.data.user);
        }
      } catch (error) {
        setIsAuth(false);
        setUser(null);
      }
    }
    GetUser();
  }, [isAuth]);

  useEffect(() => {
    async function GetUser() {
      try {
        const response = await axios.get(BASE_URL + "/api/auth/success", {
          withCredentials: true,
        });
        if (response.status == 200) {
          setIsAuth(true);
          setUser(response.data.user);
        }
      } catch (error) {
        setIsAuth(false);
        setUser(null);
      }
    }
    GetUser();
  }, []);

  function changeisAuth() {
    setIsAuth(!isAuth);
  }
  function changeUser() {
    setUser(null);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      searchTerm: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    if (!data.searchTerm) return router.push("/");
    router.push(`/search?q=${encodeURIComponent(data.searchTerm)}`);
    reset();
  };
  return (
    <div className="sticky top-0 w-full bg-white z-30 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex justify-between items-center">
            <Link href={"/"}>
              <Image
                src={logo}
                width={80}
                height={80}
                alt="Picture of the author"
              ></Image>
            </Link>

            <div className="relative hidden lg:flex w-full min-w-[600px] h-[50px] text-base bg-white  items-center gap-0 justify-start px-12 ">
              <input
                {...register("searchTerm")}
                className="flex-grow h-full border-gray-300 placeholder:text-black placeholder:text-[14px] bg-[#F5F5F3]  focus:outline-none focus:boreder-[0.5px] focus:border-slate-500 p-4"
                type="text"
                autoComplete="off"
                placeholder="Search your products here"
              />
              <button
                className="w-28 h-full bg-slate-800 text-slate-200 flex justify-center gap-2 font-semibold items-center"
                onClick={handleSubmit(onSubmit)}
              >
                Search <FaSearch className="w-5 h-5" />
              </button>
            </div>
            <div className="flex gap-8 mt-2 lg:mt-0 items-center pl-8 cursor-pointer relative">
              {!isAuth ? (
                <div className="hidden md:flex lg:flex gap-2 justify-start items-center">
                  <Link href={`/auth/login?returnTo=${pathname}`}>
                    <div className="flex gap-2 justify-start items-center hover:bg-slate-200 p-2 rounded-md">
                      <FaUser size={20} />
                      <p className="font-semibold ">Login</p>
                    </div>
                  </Link>
                  <div className="w-[2px] h-[24px] bg-slate-800 "></div>
                  <Link href={`/auth/register?returnTo=${pathname}`}>
                    <div className="flex gap-2 justify-start items-center hover:bg-slate-200 p-2 rounded-md">
                      <p className="font-semibold text-nowrap ">Sign Up</p>
                    </div>
                  </Link>
                </div>
              ) : (
                <UserMenu
                  isAuth={isAuth}
                  user={user}
                  changeisAuth={changeisAuth}
                  changeUser={changeUser}
                />
              )}

              {user && user.role == Role.Admin && (
                <Link href="/admin">
                  <div className="flex gap-2 justify-start items-center hover:bg-slate-200 p-2 rounded-md">
                    <RiAdminFill size={24} />
                    <p className="font-semibold">Admin</p>
                  </div>
                </Link>
              )}
              <Link href="/cart">
                <div className="relative">
                  <FaShoppingCart size={24} />
                  <span className="absolute font-titleFont top-3 -right-2 text-md font-bold w-6 h-6 flex items-center justify-center rounded-full bg-gold text-slate-700">
                    {cartTotalQty}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
