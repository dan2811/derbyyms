import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

import React from "react";
import { Footer } from "~/components/Footer";

const Profile = () => {
  const handleSignOut = () => {
    const logout = async () => await signOut({ redirect: true, callbackUrl: "/" });
    void logout();
    redirect("/");
  }
  return (
    <div>
      profile
      <button onClick={handleSignOut}>Log out</button>
      <Footer />
    </div>
  );
};

export default Profile;
