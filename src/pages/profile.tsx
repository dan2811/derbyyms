import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import React from "react";
import { Footer } from "~/components/Footer";

const Profile = () => {
  const session = useSession();
  const router = useRouter();
  if (session.status === "unauthenticated") router.push("/");
  return (
    <div>
      profile
      <button onClick={() => void signOut()}>Log out</button>
      <Footer />
    </div>
  );
};

export default Profile;
