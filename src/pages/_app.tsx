import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Login from "./login";
import Link from "next/link";
import Head from "next/head";
import { Oswald } from "next/font/google";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import MakeWavesLogo from "../assets/logo-yamaha-make-waves.svg";
import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import { BsHouseFill, BsPeopleFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { BiSolidMessageDetail } from "react-icons/bi";

export const merriweather = Oswald({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(open);
    };
  return (
    <nav
      className="sticky top-0 z-10 flex flex-wrap items-center 
    justify-between bg-gradient-to-r from-violet-900/80 from-10% via-violet-600/80 via-50% to-violet-900/80 
    to-90% p-6
    text-slate-300 backdrop-blur backdrop-filter"
    >
      <div>
        <Image
          src={Logo as string}
          alt="Yamaha Music Logo"
          className="h-12 p-0 text-slate-100"
          onClick={() => setOpen(!open)}
        />
        <p className="w-full text-center">MENU</p>
      </div>
      <Image
        src={MakeWavesLogo as string}
        alt="Yamaha - make waves"
        className="hidden h-20 md:block "
      />
      <Login />
      <SwipeableDrawer
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          sx={{ width: "auto" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          className="h-full bg-violet-600/80 text-slate-200"
        >
          <List>
            <Link href="/">
              <ListItem className="mr-20" disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <BsHouseFill className="text-slate-200" />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link href="/lessons">
              <ListItem className="mr-20" disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <IoMdSchool className="text-slate-200" />
                  </ListItemIcon>
                  <ListItemText primary="Lessons" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link href="/teachers">
              <ListItem className="mr-20" disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <BsPeopleFill className="text-slate-200" />
                  </ListItemIcon>
                  <ListItemText primary="Teachers" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link href="/contact">
              <ListItem className="mr-20" disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <BiSolidMessageDetail className="text-slate-200" />
                  </ListItemIcon>
                  <ListItemText primary="Contact" />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Box>
      </SwipeableDrawer>
    </nav>
  );
};

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
