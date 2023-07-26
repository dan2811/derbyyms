import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import Logo from "../assets/logo-full.png";
import Link from "next/link";

const Login = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex">
        <div className="group flex items-center">
          <Image
            className="max-w-40 mr-3 max-h-40 rounded-full"
            src={session.user.image ?? Logo}
            alt="Landscape picture"
            width={40}
            height={40}
          />
          <p className="place-self-center">{session.user.name}</p>
          <div className="hidden w-40 flex-col bg-slate-100 text-black drop-shadow-lg group-hover:flex peer-hover:flex">
            <Link href="/profile">Profile</Link>
            <button onClick={() => void signOut()}>Sign out</button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => void signIn()}>Sign in</button>
    </div>
  );
};

export default Login;
