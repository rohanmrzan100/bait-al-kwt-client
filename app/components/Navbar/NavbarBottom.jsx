// "use client";
// import React, { useState } from "react";
// import {
//   Bars3BottomRightIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/solid";
// import CategoriesDropDown from "./CategoriesDropdown";

// const HeaderBottom = () => {
//   let Links = [
//     { name: "HOME", link: "/" },
//     { name: "ABOUT US", link: "/about-us" },
//     { name: "CONTACT US", link: "/contact-us" },
//     { name: "SHOP", link: "/shop" },
//   ];
//   let [open, setOpen] = useState(false);

//   return (
//     <div className="w-full   left-0 shadow-md z-20 min-h-[72px]">
//       <div className="flex items-center justify-between bg-white py-4 md:px-10 px-7">
//         {/* Logo section */}
//         <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
//           <span>Bait Al Kuwait</span>
//         </div>
//         {/* Menu icon */}
//         <div
//           onClick={() => setOpen(!open)}
//           className=" top-6 cursor-pointer md:hidden w-7 h-7 "
//         >
//           {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
//         </div>
//         {/* Link items */}
//         <ul
//           className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
//             open ? "top-12" : "top-[-490px]"
//           }`}
//         >
//           {Links.map((link) => (
//             <li key={link.name} className="md:ml-8  md:my-0 my-7 font-semibold">
//               <a
//                 href={link.link}
//                 className="text-gray-800 hover:text-blue-400 duration-500"
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//           <CategoriesDropDown />
//         </ul>
//         {/* Button */}
//       </div>
//     </div>
//   );
// };

// export default HeaderBottom;

// "use client";
// import React, { useState } from "react";
// import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
// import CategoriesDropDown from "./CategoriesDropdown";

// const HeaderBottom = () => {
//   let Links = [
//     { name: "HOME", link: "/" },
//     { name: "ABOUT US", link: "/about-us" },
//     { name: "CONTACT US", link: "/contact-us" },
//     { name: "SHOP", link: "/shop" },
//   ];
//   let [open, setOpen] = useState(false);

//   return (
//     <div className="w-full left-0 shadow-md z-20 min-h-[72px]">
//       <div className="flex items-center justify-between bg-white py-4 md:px-10 px-7">
//         {/* Logo section */}
//         <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
//           <span>Bait Al Kuwait</span>
//         </div>
//         {/* Menu icon */}
//         <div
//           onClick={() => setOpen(!open)}
//           className="top-6 cursor-pointer md:hidden w-7 h-7"
//         >
//           {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
//         </div>
//         {/* Link items */}
//         <ul
//           className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${
//             open ? "top-[72px]" : "top-[-490px]"
//           } ${open && !open ? "pl-9" : "pl-0"} md:pl-0`}
//         >
//           {Links.map((link) => (
//             <li key={link.name} className="md:ml-8 md:my-0 my-7 font-semibold">
//               <a
//                 href={link.link}
//                 className="text-gray-800 hover:text-blue-400 duration-500"
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//           <CategoriesDropDown />
//         </ul>
//         {/* Button */}
//       </div>
//     </div>
//   );
// };

// export default HeaderBottom;


"use client";
import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import CategoriesDropDown from "./CategoriesDropdown";

const HeaderBottom = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/about-us" },
    { name: "CONTACT US", link: "/contact-us" },
    { name: "SHOP", link: "/shop" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="w-full left-0 shadow-md z-20 min-h-[72px]">
      <div className="flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* Logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <span>Bait Al Kuwait</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* Link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${
            open ? "top-32" : "top-[-490px]"
          } ${open && "pl-9 md:pl-0"}`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-7 font-semibold">
              <a
                href={link.link}
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <CategoriesDropDown />
        </ul>
        {/* Button */}
      </div>
    </div>
  );
};

export default HeaderBottom;

