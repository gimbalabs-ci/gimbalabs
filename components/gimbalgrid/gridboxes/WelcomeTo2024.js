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
        className="group bg-blue-800 text-yellow-400 flex flex-col justify-center items-center"
      >
        <motion.p animate={ani2} className="text-6xl font-bold p-2">
          Welcome to 2024
        </motion.p>
        <motion.p animate={ani} className="p-4 text-right text-purple-100 font-bold">
          Coming up at Gimbalabs
        </motion.p>
      </div>
  );
}
