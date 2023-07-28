import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import PurpleLogo from "../assets/logo-waves.svg";
import Image from "next/image";
export const Footer = () => {
  return (
    <div
      className="absolute h-80 w-full bg-gradient-to-r from-violet-900/80 from-10% via-violet-600/80 via-50% to-violet-900/80 
    to-90% backdrop-blur backdrop-filter"
    >
      <BsFacebook />
      <BsInstagram />
      <BsYoutube />
      <Image src={PurpleLogo as string} alt="Logo" />
    </div>
  );
};
