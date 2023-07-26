import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Login from "./login";
import Link from "next/link";
import Head from "next/head";
import { Oswald } from "next/font/google";

export const merriweather = Oswald({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const Navbar = () => (
  <nav
    className="sticky top-0 z-10 flex flex-wrap items-center 
    justify-between bg-gradient-to-r from-violet-900/80 from-10% via-violet-600/80 via-50% to-violet-900/80 
    to-90% p-6
    text-slate-300 backdrop-blur backdrop-filter"
  >
    <ul className="row flex content-between	gap-x-5">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/lessons">Lessons</Link>
      </li>
      <li>
        <Link href="/teachers">Teachers</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
    <Login />
  </nav>
);

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Derby YMS - Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
