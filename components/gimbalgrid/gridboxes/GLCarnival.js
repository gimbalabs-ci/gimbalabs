import { motion } from "framer-motion";
import React, { useState } from "react";
import { Bamboo, DandelionSeed } from "../../../lib/icons/svgs";
import { gdsEase12 } from "../../../lib/motion/motion";
import WithTransfer from "../WithTransfer";
import Image from "next/image";

export default function GLCarnival(props) {
  const [hov, setHov] = useState(false);
//   const ani = {
//     transition: gdsEase12,
//     rotate: !hov ? 0 : 4,
//   };
//   const ani2 = {
//     transition: gdsEase12,
//     y: !hov ? 0 : -3,
//   };
  return (
    <div className="bee-cursor-dark bg-orange-900">
      <h1 className="text-4xl text-offWhite px-5 pt-5">Gimbalabs Carnival 2023</h1>
      <h1 className="text-xl text-offWhite px-5 pb-5">Starting June 13 - click for details</h1>
      <Image src="/carnival-one.jpeg" width="2400" height="1600" style={{objectFit: "cover"}} />
    </div>
  );
}
