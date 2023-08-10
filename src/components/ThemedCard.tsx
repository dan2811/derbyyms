import React from "react";

const ThemedCard = (props: React.PropsWithChildren) => {
  return (
    <div className="flex h-full w-full skew-x-12 rounded-lg bg-gradient-to-r from-violet-900/80 to-pink-400/80 text-slate-300 duration-500 hover:translate-x-1 hover:cursor-default hover:text-white">
      <div className="h-full w-full -skew-x-12">{props.children}</div>
    </div>
  );
};

export default ThemedCard;
