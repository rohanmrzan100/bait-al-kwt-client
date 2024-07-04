"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Categorys } from "@/app/utils/Category";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const CategoriesDropDown = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

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
        className="flex justify-center items-center"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : "false"}
      >
        <p className="flex items-center gap-1 h-8 px-2 border-b-2 border-transparent hover:border-white cursor-pointer text-md font-semibold">
          Categories
        </p>
        {!isOpen ? <FaChevronDown size={16} /> : <FaChevronUp size={16} />}
      </div>
      {isOpen && (
        <ul
          className="dropdown-menu z-50 absolute left-0 mt-1 border-2 shadow-xl bg-white text-slate-700 w-52 rounded-md"
          role="menu"
        >
          {Categorys.map((item) => {
            return (
              <li key={item.label}>
                <div
                  className="flex justify-start items-center font-semibold hover:text-[#dcab4f] py-2 px-4 gap-4 whitespace-no-wrap cursor-pointer"
                  onClick={() => {
                    if (item.label == "All") {
                      router.push("/shop");
                    } else {
                      router.push("/shop?category=" + item.label);
                    }

                    toggleDropdown();
                  }}
                >
                  <item.icon size={24} />
                  {item.label}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CategoriesDropDown;
