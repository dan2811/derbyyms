import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import React from "react";

const Profile = () => {
  const session = useSession();
  const router = useRouter();
  if (session.status === "unauthenticated") router.push("/");
  return (
    <div>
      profile
      <button onClick={() => void signOut()}>Log out</button>
    </div>
  );
};

export default Profile;
