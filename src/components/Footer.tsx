import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import Keyboard from "./Keyboard";
import { MdDragHandle } from "react-icons/md";
import { SwipeableDrawer } from "@mui/material";
import React, { useState } from "react";
import { Global } from "@emotion/react";
export const Footer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const drawerBleed = 64;
  return (
    <React.Fragment>
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleed}px)`,
            overflow: "visible",
          },
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleed}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        className="bg-transparent"
      >
        <div
          className="visible absolute -top-10 left-0 right-0 flex flex-col bg-violet-900/80 backdrop-blur backdrop-filter"
          onClick={() => toggleDrawer(true)}
        >
          <MdDragHandle
            size={40}
            className="place-self-center text-pink-400/80"
          />
        </div>
        <div className="flex h-fit w-full flex-col bg-violet-900/80 backdrop-blur backdrop-filter">
          <div className="flex w-full justify-around p-6">
            <Link href="https://www.facebook.com/DerbyYMS" target="blank">
              <BsFacebook
                className="text-slate-400 duration-500 hover:text-slate-100"
                size={40}
              />
            </Link>
            <Link href="https://www.instagram.com/derbyyms" target="blank">
              <BsInstagram
                className="text-slate-400 duration-500 hover:text-slate-100"
                size={40}
              />
            </Link>
            <Link
              href="https://youtube.com/@DerbyYamahaMusicSchool"
              target="blank"
            >
              <BsYoutube
                className="text-slate-400 duration-500 hover:text-slate-100"
                size={40}
              />
            </Link>
          </div>
        </div>
        <Keyboard />
      </SwipeableDrawer>
    </React.Fragment>
  );
};
