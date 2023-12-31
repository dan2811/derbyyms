"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import Logo from "../assets/logo-full.png";
import Link from "next/link";

const Login = () => {
  const { data: session } = useSession();
    return (
      <div className="flex flex-1 justify-end">
        {!session ? <button onClick={() => void signIn()}>Sign in</button> :
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
        </Link>}
      </div>
    );
};

export default Login;
