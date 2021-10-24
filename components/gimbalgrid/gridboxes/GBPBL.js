import { motion } from "framer-motion";
import React, { useState } from "react";
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
    x: !hov ? -9 : 0,
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
          } bg-black2-900 flex flex-col p-5  relative overflow-hidden`}
        >
          <div className=" h-full relative z-10 flex items-center justify-end ">
            <motion.h2 animate={title} className="text-5xl text-blue-100 ">
              Project Based Learning
            </motion.h2>
          </div>
          <div>
            <div className="relative z-10 mt-auto text-blue-200 text-lg">
              <p className="">
                Here you can describe the PBL Page with a few sentances with a
                few sentances
              </p>
            </div>
            {!expanded && (
              <>
                <div className="z-0 bg-blue-600 absolute inset-0 scale-50 transform translate-x-10"></div>
                <div className="z-0 bg-red-600 absolute inset-0 scale-50 transform translate-x-12"></div>
                \
              </>
            )}
          </div>
        </div>
      </div>
    </WithTransfer>
  );
}
