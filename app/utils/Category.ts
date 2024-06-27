import { FaTools } from "react-icons/fa";
import { MdStorefront, MdTrolley } from "react-icons/md";
import { IoTrashBinSharp } from "react-icons/io5";
import { GiChemicalDrop, GiGloves } from "react-icons/gi";
import { PiSprayBottleBold } from "react-icons/pi";
import catgory1 from "@/public/img/category/trolly.jpg";
export const Categorys = [
  {
    label: "All",
    icon: MdStorefront,
    img: catgory1,
  },
  {
    label: "Trolley",
    icon: MdTrolley,
    img: catgory1,
  },
  {
    label: "Cleaning Tool",
    icon: FaTools,
    img: catgory1,
  },
  {
    label: "Trash Bin",
    icon: IoTrashBinSharp,
    img: catgory1,
  },
  {
    label: "Dispensers",
    icon: PiSprayBottleBold,
    img: catgory1,
  },
  {
    label: "Cleaning Chemicals",
    icon: GiChemicalDrop,
    img: catgory1,
  },
  {
    label: "Catering Consumables",
    icon: GiGloves,
    img: catgory1,
  },
];
