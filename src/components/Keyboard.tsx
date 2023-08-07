import React from "react";

const Keyboard = () => {
  const playSound = async (note: string) => {
    await new Audio(`/sounds/${note}.m4a`).play();
  };
  return (
    <div>
      <div className="absolute flex h-52 w-full">
        <div className="-z-10 h-full w-full"></div>
        <div className="-z-10 h-full w-full"></div>
        <div className="z-20 h-full w-full bg-black hover:bg-purple-950"></div>
        <div className="z-20 h-full w-full bg-black hover:bg-purple-950"></div>
        <div className="-z-10 h-full w-full"></div>

        <div className="z-20 h-full w-full bg-black hover:bg-purple-950"></div>
        <div className="z-20 h-full w-full bg-black hover:bg-purple-950"></div>
        <div className="-z-10 h-full w-full"></div>
        <div className="-z-10 h-full w-full"></div>
        <div className="-z-10 h-full w-full"></div>
        <div className="-z-10 h-full w-full"></div>

        <div className="z-20 h-full w-full bg-black hover:bg-purple-950"></div>
        <div className="z-20 h-full w-full bg-black hover:bg-purple-950"></div>
        <div className="h-full w-full bg-slate-50"></div>
        <div className="z-20 h-full w-full bg-black hover:bg-purple-950"></div>
        <div className="z-20 h-full w-full bg-black hover:bg-purple-950"></div>
        <div className="h-full w-full bg-slate-50"></div>
        <div className="z-20 h-full w-full bg-black hover:bg-purple-950"></div>
        <div className="z-20 h-full w-full bg-black hover:bg-purple-950"></div>

        <div className="h-full w-full bg-slate-50"></div>
        <div className="h-full w-full bg-slate-50"></div>
        <div className="h-full w-full bg-slate-50"></div>
        <div className="h-full w-full bg-slate-50"></div>
        <div className="z-20 h-full w-full bg-black hover:bg-purple-950"></div>
      </div>
      <div className="flex h-96 w-full">
        <div
          className="z-10 h-full w-full border-r border-slate-950 bg-slate-50 hover:bg-purple-200"
          onMouseDown={() => void playSound("c")}
          onMouseEnter={(e) => {
            if (e.buttons === 1) {
              void playSound("c");
            }
          }}
        ></div>
        <div
          className="z-10 h-full w-full border-r border-slate-950 bg-slate-50 hover:bg-purple-200"
          onMouseDown={() => void playSound("d")}
          onMouseEnter={(e) => {
            if (e.buttons === 1) {
              void playSound("d");
            }
          }}
        ></div>

        <div
          className="z-10 h-full w-full border-r border-slate-950 bg-slate-50 hover:bg-purple-200"
          onMouseDown={() => void playSound("e")}
          onMouseEnter={(e) => {
            if (e.buttons === 1) {
              void playSound("e");
            }
          }}
        ></div>
        <div
          className="z-10 h-full w-full border-r border-slate-950 bg-slate-50 hover:bg-purple-200"
          onMouseDown={() => void playSound("f")}
          onMouseEnter={(e) => {
            if (e.buttons === 1) {
              void playSound("f");
            }
          }}
        ></div>

        <div
          className="z-10 h-full w-full border-r border-slate-950 bg-slate-50 hover:bg-purple-200"
          onMouseDown={() => void playSound("g")}
          onMouseEnter={(e) => {
            if (e.buttons === 1) {
              void playSound("g");
            }
          }}
        ></div>
        <div
          className="z-10 h-full w-full border-r border-slate-950 bg-slate-50 hover:bg-purple-200"
          onMouseDown={() => void playSound("a")}
          onMouseEnter={(e) => {
            if (e.buttons === 1) {
              void playSound("a");
            }
          }}
        ></div>

        <div
          className="z-10 h-full w-full border-r border-slate-950 bg-slate-50 hover:bg-purple-200"
          onMouseDown={() => void playSound("b")}
          onMouseEnter={(e) => {
            if (e.buttons === 1) {
              void playSound("b");
            }
          }}
        ></div>
        <div
          className="z-10 h-full w-full border-r border-slate-950 bg-slate-50 hover:bg-purple-200"
          onMouseDown={() => void playSound("c-octave")}
          onMouseEnter={(e) => {
            if (e.buttons === 1) {
              void playSound("c-octave");
            }
          }}
        ></div>
      </div>
    </div>
  );
};

export default Keyboard;
