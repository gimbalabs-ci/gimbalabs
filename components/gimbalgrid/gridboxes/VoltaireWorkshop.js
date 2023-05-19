import { motion } from "framer-motion";
import React, { useState } from "react";
import { Bamboo, DandelionSeed } from "../../../lib/icons/svgs";
import { gdsEase12 } from "../../../lib/motion/motion";
import WithTransfer from "../WithTransfer";
import Image from "next/image";

export default function VoltaireWorkshop(props) {
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
    <div className="bee-cursor-dark">
      <Image src="/1694-worcester.jpg" width="2400" height="1600" style={{objectFit: "cover"}} />
    </div>
  );
}
