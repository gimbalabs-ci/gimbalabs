import { motion } from "framer-motion";
import React, { useState } from "react";
import { useWindowSize } from "../../../lib/hooks";
import LogoWithText from "../../brand/LogoWithText";
import WithTransfer from "../WithTransfer";

export default function TitleGroup(props) {
  return (
    <WithTransfer {...props}>
      <div className="p-6">
        <h1 className={`text-6xl mb-6 text-black2-800`}>
          Project-Based Learning
        </h1>
        <h2 className={`gg-subtitle text-black2-800`}>
          We're building and iterating on PBL courses in Cardano Development, Tokenomics, Dandelion, and DevOps.
        </h2>
        <h2 className={`gg-subtitle text-black2-800 pt-5`}>
          What do you want to build?
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
          <h3 className={`px-6 text-3xl md:text-5xl  text-pink-900`}>
            People Learning &{" "}
          </h3>
          <h3 className="px-6 mb-7 text-3xl md:text-5xl text-pink-900 bg-pink-100 w-full">
            Innovating Together
          </h3>
          <h4 className={` px-6 gg-subtitle `}>
            Not sure where to start? Pick any upcoming event and drop by.
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
