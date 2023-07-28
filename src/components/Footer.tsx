import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import PurpleLogoWithText from "../assets/logo-with-text.svg";
import Image from "next/image";
import Link from "next/link";
export const Footer = () => {
  return (
    <div
      className="absolute h-80 w-full bg-gradient-to-r from-violet-900/80 from-10% via-violet-600/80 via-50% to-violet-900/80 
    to-90% backdrop-blur backdrop-filter"
    >
      <div className="flex w-full justify-around p-6">
        <Link href="https://www.facebook.com/DerbyYMS" target="blank">
          <BsFacebook className="text-slate-100" size={50} />
        </Link>
        <Link href="https://www.instagram.com/derbyyms" target="blank">
          <BsInstagram className="text-slate-100" size={50} />
        </Link>
        <Link href="https://youtube.com/@DerbyYamahaMusicSchool" target="blank">
          <BsYoutube className="text-slate-100" size={50} />
        </Link>
      </div>
    </div>
  );
};
