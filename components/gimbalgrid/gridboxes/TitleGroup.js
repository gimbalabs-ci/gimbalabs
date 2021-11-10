import { motion } from "framer-motion";
import React, { useState } from "react";
import { useWindowSize } from "../../../lib/hooks";
import LogoWithText from "../../brand/LogoWithText";
import WithTransfer from "../WithTransfer";

export default function TitleGroup(props) {
  return (
    <WithTransfer {...props}>
      <div className="p-6">
        <h1 className={`gg-title mb-6 text-black2-800`}>
          People Learning <span className="text-black2-800">Together</span>
        </h1>
        <h2 className={`gg-subtitle text-black2-800`}>
        We envision a world where as many people as possible are empowered to solve problems using the Cardano protocol.
        </h2>
      </div>
    </WithTransfer>
  );
}

export function TitleGroupDark(props) {
  return (
    <WithTransfer {...props}>
      <div className="py-6 text-pink-900">
        <div className="h-full flex flex-col z-10 relative">
          <h3 className={`px-6 text-3xl md:text-6xl  text-pink-900`}>
            Collaborate Launch{" "}
          </h3>
          <h3 className="px-6 mb-7 text-3xl md:text-6xl text-pink-900 bg-pink-100 w-full">
            Projects
          </h3>
          <h4 className={` px-6 gg-subtitle `}>
          Our mission is to mobilize everyone to develop tools and applications through a unique experience of co-creation that facilitates adoption of the Cardano protocol, reveals new possibilities, and ignites the public imagination worldwide.
          </h4>
          {/* <div className="relative z-10 p-7 mt-8  bg-pink-400  ">start now</div> */}
        </div>
        <div className="absolute inset-0 flex flex-col z-0 ">
          <div className="w-full h-11 "></div>
          <div className=" w-full flex-1 bg-pink-300"> </div>
        </div>
      </div>
    </WithTransfer>
  );
}
