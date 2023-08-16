import type { ReactNode } from "react";
import { Navbar } from "./NavBar";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      {/* margin and padding needed to avoid overlap on header and footer */}
      <main className="mt-28 flex flex-grow pb-10">{children}</main>
      <Footer />
    </div>
  );
};
