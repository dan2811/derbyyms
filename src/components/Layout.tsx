import Footer from "./Footer";
import type { ReactNode } from "react";
import { Navbar } from "./NavBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
