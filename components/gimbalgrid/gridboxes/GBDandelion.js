import { motion } from "framer-motion";
import React, { useState } from "react";
import { Bamboo, DandelionSeed } from "../../../lib/icons/svgs";
import { gdsEase12 } from "../../../lib/motion/motion";
import WithTransfer from "../WithTransfer";

export default function GBDandelion(props) {
  const [hov, setHov] = useState(false);
  const ani = {
    transition: gdsEase12,
    rotate: !hov ? 0 : 4,
  };
  const ani2 = {
    transition: gdsEase12,
    y: !hov ? 0 : -3,
  };
  return (
    <WithTransfer {...props} className="w-full">
      <div
        onMouseOver={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className="group gradient-yellow  text-green-900 flex flex-col justify-center items-center"
      >
        <div className="  p-5 m-2 relative z-10 flex flex-col justify-center items-center  ">
          <motion.div animate={ani}>
            <DandelionSeed className="text-green-900 h-9 mb-1" />
          </motion.div>
          <div className="gg-subtitle font-heading text-center flex flex-col">
            <motion.p animate={ani2} className="gg-title text-green-900">
              Dandelion
            </motion.p>{" "}
            <p>distributed infrastructure</p>
          </div>
        </div>
        <Bamboo className="text-yellow-900 absolute -left-10 -top-12 z-0" />
        <div className="gradient-green absolute inset-0 transform m-5 group-hover:scale-y-100  "></div>
      </div>
    </WithTransfer>
  );
}
