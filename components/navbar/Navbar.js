import React from "react";
import Logo from "../brand/Logo";
import LogoWithText from "../brand/LogoWithText";

export default function Navbar({ navbarBg = "bg-black2-900" }) {
  const textColor =
    navbarBg === "bg-black2-900" ? "text-offWhite" : "text-black2-900";
  return (
    <div className={`${navbarBg} ${textColor}`}>
      <div className="spacing-x py-3 flex items-center justify-between">
        <div>
          <Logo className="" />
          {/* <LogoWithText className="text-offWhite" /> */}
        </div>
        <div>
          <Hamburger navbarBg={navbarBg} />
        </div>
      </div>
    </div>
  );
}

const Hamburger = ({ navbarBg }) => {
  const color = navbarBg === "bg-black2-900" ? "bg-offWhite" : "bg-black2-900";
  return (
    <div
      role="button"
      className=" group rounded    h-full flex flex-col justify-center items-center"
    >
      <div className={`h-1 ${color} group-hover:bg-pink-300 w-6 my-1 `}></div>
      <div className={`h-1 ${color} group-hover:bg-pink-300 w-6 my-1 `}></div>
      <div className={`h-1 ${color} group-hover:bg-pink-300 w-6 my-1 `}></div>
    </div>
  );
};
