import { motion } from "framer-motion";
import React, { useState } from "react";
import { useWindowSize } from "../../../lib/hooks";
import WithTransfer from "../WithTransfer";

export default function TitleGroup(props) {
  return (
    <WithTransfer {...props}>
      <h1 className={`gg-title mb-6 text-purple-500`}>
        People Learning <span className="text-purple-400">Together</span>
      </h1>
      <h2 className={`gg-subtitle text-purple-400`}>
        Our mission is to mobilize everyone in the Cardano community by creating
        tools and real-world use cases that ignite the public imagination and
        facilitate adoption.
      </h2>
    </WithTransfer>
  );
}

export function TitleGroupDark(props) {
  return (
    <WithTransfer {...props}>
      <div className="">
        <div className="h-full flex flex-col z-10 relative">
          <h3 className={`px-3 pt-3 gg-title  text-purple-600`}>
            Collaborate Launch{" "}
          </h3>
          <h3 className="px-3 mb-6 gg-title text-white bg-purple-500 w-full">
            Projects
          </h3>
          <h4 className={`px-3 gg-subtitle text-white`}>
            Our mission is to mobilize everyone in the Cardano community by
            creating tools and real-world use cases that ignite the public
            imagination and facilitate adoption.
          </h4>
          <div className="relative z-10 p-7 mt-4  bg-purple-600 text-white ">
            start now
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col z-0 ">
          <div className="w-full h-11 "></div>
          <div className=" w-full flex-1 bg-purple-500"> </div>
        </div>
      </div>
    </WithTransfer>
  );
}
