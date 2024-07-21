import { FaTools } from "react-icons/fa";
import { MdStorefront, MdTrolley } from "react-icons/md";
import { IoTrashBinSharp } from "react-icons/io5";
import { GiChemicalDrop, GiGloves } from "react-icons/gi";
import { PiSprayBottleBold } from "react-icons/pi";
import catgory1 from "@/public/img/category/trolly.jpg";
import trolley from "../../public/img/trolley.jpg";
import cleaningTool from "../../public/img/cleaning tools.jpg";
import trashbin from "../../public/img/trash bin.jpg";
import dispensers from "../../public/img/dispenser.jpg";
import cleaningChemicals from "../../public/img/cleaning chemicals.jpg";
import cateringConsumables from "../../public/img/catering consumables.jpg"
export const Categorys = [
  // {
  //   label: "All",
  //   icon: MdStorefront,
  //   img: catgory1,
    
  // },
  {
    label: "Trolley",
    icon: MdTrolley,
    img: catgory1,
    image:trolley
  },
  {
    label: "Cleaning Tool",
    icon: FaTools,
    img: catgory1,
    image:cleaningTool
  },
  {
    label: "Trash Bin",
    icon: IoTrashBinSharp,
    img: catgory1,
    image:trashbin
  },
  {
    label: "Dispensers",
    icon: PiSprayBottleBold,
    img: catgory1,
    image:dispensers
  },
  {
    label: "Cleaning Chemicals",
    icon: GiChemicalDrop,
    img: catgory1,
    image:cleaningChemicals
  },
  {
    label: "Catering Consumables",
    icon: GiGloves,
    img: catgory1,
    image:cateringConsumables
  },
];
