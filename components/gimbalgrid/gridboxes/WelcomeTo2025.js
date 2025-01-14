import { motion } from "framer-motion";
import React, { useState } from "react";
import { gdsEase12 } from "../../../lib/motion/motion";
import Link from "next/link";

export default function WelcomeTo2025(props) {
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
        Welcome to Gimbalabs
      </motion.p>
      <motion.p animate={ani} className="px-2 py-5 text-purple-100 font-bold">
        Right now, we are running several PBL courses in the Andamio platform ([andamio.io](https://app.andamio.io/course)), running weekly live coding sessions, and hosting Gimbalabs Open
        Spaces.
      </motion.p>
      <Link href="/calendar">
        <p className="text-amber-400 text-center">Learn More</p>
      </Link>
      <p className="text-xs font-mono p-2">updated: 2025-01-14</p>
    </div>
  );
}
