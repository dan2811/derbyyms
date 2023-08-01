"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import Logo from "../assets/logo-full.png";
import Link from "next/link";

const Login = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex">
        <Link href="/profile">
          <div className="group flex items-center">
            <Image
              className="max-w-40 mr-3 max-h-40 rounded-full"
              src={session.user.image ?? Logo}
              alt="Landscape picture"
              width={40}
              height={40}
            />
            <p className="place-self-center">{session.user.name}</p>
          </div>
        </Link>
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
