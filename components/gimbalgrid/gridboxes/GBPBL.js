import { motion } from "framer-motion";
import React, { useState } from "react";
import { ArrowRight } from "react-feather";
import WithTransfer from "../WithTransfer";

const gdsEase12 = {
  duration: 0.3,

  ease: [0.6, 0.01, -0.05, 0.9],
};
export default function GBPBL(props) {
  const expanded = props.expanded;

  const [hov, setHov] = useState(false);
  const title = {
    transition: gdsEase12,
    y: !hov ? 0 : 0,
    x: !hov ? 0 : 8,
    // rotate: !hov ? -90 : 0,
  };

  return (
    <WithTransfer {...props}>
      <div
        onMouseOver={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className=" h-full w-full grid  "
      >
        <div
          className={`${
            expanded ? "  " : " "
          } bg-black2-900 flex flex-col p-6  relative overflow-hidden`}
        >
          <div className=" h-full relative z-10 flex items-center  ">
            <motion.h2 animate={title} className="text-4xl text-blue-100 ">
              start Your Journey
            </motion.h2>
            <ArrowRight className="m-1 text-white" />
          </div>
          <div>
            {!expanded && (
              <>
                <div className="z-0 bg-blue-600 absolute inset-0 scale-50 transform translate-x-10"></div>
                <div className="z-0 bg-red-600 absolute inset-0 scale-50 transform translate-x-12"></div>

              </>
            )}
          </div>
          <div className="relative z-10 mt-auto text-white text-lg">
            Cardano Starter Kits, Plutus PBL and Gimbalabs Playground
          </div>
        </div>
      </div>
    </WithTransfer>
  );
}
