import { motion } from "framer-motion";
import React, { useState } from "react";
import { gdsEase12 } from "../../../lib/motion/motion";

export default function WelcomeTo2024(props) {
  const [hov, setHov] = useState(false);
  const ani = {
    transition: gdsEase12,
    x: !hov ? 0 : -1,
    y: !hov ? 0 : 1,
  };
  const ani2 = {
    transition: gdsEase12,
    x: !hov ? 0 : 1,
    y: !hov ? 0 : -1,
  };
  return (
      <div
        onMouseOver={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className="group bg-black text-purple-100 flex flex-col justify-center h-[300px]"
      >
        <motion.p animate={ani2} className="text-6xl font-bold p-2 py-3">
          Happy New Year!
        </motion.p>
        <motion.p animate={ani} className="px-2 py-5 text-purple-100 font-bold">
          Gimbalabs is getting an upgrade. Gimbalabs PBL Governance Sessions start on Wednesday 2024-01-10. Details will be posted this week.
        </motion.p>
        <p className="text-xs font-mono p-2">updated: 2024-01-02</p>
      </div>
  );
}
