import Image from "next/image";
import { useState } from "react";
import Login from "./Login";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import Link from "next/link";
import { BsHouseFill, BsPeopleFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { BiSolidMessageDetail } from "react-icons/bi";
import Logo from "../assets/logo.svg";
import MakeWavesLogo from "../assets/logo-yamaha-make-waves.svg";

export const Navbar = () => {
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
      className="fixed top-0 z-50 flex h-28 w-full flex-wrap
      items-center justify-between overflow-hidden bg-violet-900/80
      pl-4 pr-4 text-slate-300 backdrop-blur backdrop-filter"
    >
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        <Image
          src={Logo as string}
          alt="Yamaha Music Logo"
          className="h-12 w-12 p-0"
        />
        <p className="w-full text-center">MENU</p>
      </div>
      <Image
        src={MakeWavesLogo as string}
        alt="Yamaha - make waves"
        className="hidden h-20 w-52 md:block"
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
            <Link href="/courses">
              <ListItem className="mr-20" disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <IoMdSchool className="text-slate-200" />
                  </ListItemIcon>
                  <ListItemText primary="Courses" />
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
