import { motion } from "framer-motion";
import React, { useState } from "react";
import { Bamboo, DandelionSeed } from "../../../lib/icons/svgs";
import { gdsEase12 } from "../../../lib/motion/motion";
import WithTransfer from "../WithTransfer";
import Image from "next/image";

export default function Voltaire(props) {
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
    <div className="bee-cursor-dark h-full bg-orange-300 p-5">
      <h1 className="text-6xl">Voltaire Is Here</h1>
      <p>You are invited to participate in the dawn of Cardano Governance. Here is how.</p>
    </div>
  );
}
