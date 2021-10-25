import { motion } from "framer-motion";
import React, { useState } from "react";
import { useWindowSize } from "../../../lib/hooks";
import WithTransfer from "../WithTransfer";

export default function TitleGroup(props) {
  return (
    <WithTransfer {...props}>
      <div className="p-5">
        <h1 className={`gg-title mb-6 text-black2-800`}>
          People Learning <span className="text-black2-800">Together</span>
        </h1>
        <h2 className={`gg-subtitle text-black2-800`}>
          Our mission is to mobilize everyone in the Cardano community by
          creating tools and real-world use cases that ignite the public
          imagination and facilitate adoption.
        </h2>
      </div>
    </WithTransfer>
  );
}

export function TitleGroupDark(props) {
  return (
    <WithTransfer {...props}>
      <div className="py-5 text-pink-900">
        <div className="h-full flex flex-col z-10 relative">
          <h3 className={`px-5 text-3xl md:text-6xl  text-pink-900`}>
            Collaborate Launch{" "}
          </h3>
          <h3 className="px-5 mb-7 text-3xl md:text-6xl text-pink-900 bg-pink-100 w-full">
            Projects
          </h3>
          <h4 className={` px-5 gg-subtitle `}>
            Our mission is to mobilize everyone in the Cardano community by
            creating tools and real-world use cases that ignite the public
            imagination and facilitate adoption.
          </h4>
          <div className="relative z-10 p-7 mt-8  bg-pink-400  ">start now</div>
        </div>
        <div className="absolute inset-0 flex flex-col z-0 ">
          <div className="w-full h-11 "></div>
          <div className=" w-full flex-1 bg-pink-300"> </div>
        </div>
      </div>
    </WithTransfer>
  );
}
