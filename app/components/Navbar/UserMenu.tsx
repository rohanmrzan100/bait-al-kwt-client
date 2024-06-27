"use client";

import { BASE_URL } from "@/Constants";
import { User } from "@/app/type";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { CiLogout } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { TbReorder } from "react-icons/tb";
interface UserMenuProps {
  isAuth: boolean;
  user: User | null;
  changeisAuth: () => void;
  changeUser: () => void;
}

const UserMenu = ({
  isAuth,
  user,
  changeisAuth,
  changeUser,
}: UserMenuProps) => {
  const router = useRouter();
  const [avatar, setAvatar] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  async function handleLogOut() {
    try {
      await axios.delete(BASE_URL + "/api/auth/logout", {
        withCredentials: true,
      });
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("Error during logout");
    } finally {
      router.push("/");
      changeisAuth();
      changeUser();
    }
  }

  useEffect(() => {
    if (user?.avatar) {
      setAvatar(user.avatar);
    } else {
      setAvatar(null);
    }
  }, [user]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div
        className="flex items-center cursor-pointer border-2 border-slate-200 hover:bg-slate-200 p-2 rounded-md  w-52"
        onClick={toggleDropdown}
        
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
      >
        <div className="flex items-center justify-between gap-2">
          {avatar ? (
            <div className="w-[32px] h-[32px] relative rounded-full">
              <Image
                src={avatar}
                alt="avatar"
                fill
                className="object-contain rounded-full"
              />
            </div>
          ) : (
            <FaUser size={20} />
          )}
          <div className="flex flex-col gap-0">
            <p className="m-0 p-0 text-sm">{user?.name}</p>
            <p className="m-0 p-0 text-sm font-semibold">Orders & Account</p>
          </div>
        </div>
        <FaCaretDown size={24} />
      </div>
      {isOpen && (
        <ul
          className="dropdown-menu z-50 absolute right-0 mt-1 border-2 shadow-xl bg-white text-slate-700 w-52 rounded-md"
          role="menu"
        >
          {!isAuth ? (
            <>
              <li role="none">
                <Link
                  className="rounded-t  font-semibold hover:text-[#dcab4f] py-2 px-4 block whitespace-no-wrap"
                  href="/auth/register"
                  role="menuitem"
                  onClick={toggleDropdown}
                >
                  Sign Up
                </Link>
              </li>
              <hr />
              <li role="none">
                <Link
                  className=" font-semibold hover:text-[#dcab4f] py-2 px-4 block whitespace-no-wrap"
                  href="/auth/login"
                  role="menuitem"
                  onClick={toggleDropdown}
                >
                  Login
                </Link>
              </li>
            </>
          ) : (
            <>
              <li role="none">
                <div
                  className="flex justify-start items-center font-semibold hover:text-[#dcab4f] py-2 px-4 gap-4 whitespace-no-wrap cursor-pointer"
                  onClick={() => {
                   router.push("/manage-profile")
                    toggleDropdown();
                  }}
                  role="menuitem"
                >
                  <VscAccount size={24} />
                  Manage My Account
                </div>
              </li>
              <li role="none">
                <div
                  className="flex justify-start items-center font-semibold hover:text-[#dcab4f] py-2 px-4 gap-4 whitespace-no-wrap cursor-pointer"
                  onClick={() => {
                    handleLogOut();
                    toggleDropdown();
                  }}
                  role="menuitem"
                >
                  <TbReorder size={24} />
                  My Order
                </div>
              </li>

              <li role="none">
                <div
                  className="flex justify-start items-center font-semibold hover:text-[#dcab4f] py-2 px-4 gap-4 whitespace-no-wrap cursor-pointer"
                  onClick={() => {
                    handleLogOut();
                    toggleDropdown();
                  }}
                  role="menuitem"
                >
                  <CiLogout size={24} />
                  Logout
                </div>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default UserMenu;
