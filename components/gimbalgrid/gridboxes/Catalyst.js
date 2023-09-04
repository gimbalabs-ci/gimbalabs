import { motion } from "framer-motion";
import React, { useState } from "react";
import { Bamboo, DandelionSeed } from "../../../lib/icons/svgs";
import { gdsEase12 } from "../../../lib/motion/motion";
import WithTransfer from "../WithTransfer";
import Image from "next/image";

export default function Catalyst(props) {
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
    <div className="bee-cursor h-full bg-blue-800 text-white p-5">
      <h1 className="text-6xl">Project Catalyst Fund 10</h1>
      <p className="text-xl text-yellow-500 font-bold py-5">Voting opens on August 31!</p>
      <p className="font-semibold">
        The first Gimbalabs Catalyst Proposal was submitted during Fund1 on August 12, 2020.
      </p>
      <p className="font-semibold pt-5">
        Since then, Gimbalabs has built free education for Cardano developers, cultivated community spaces where new
        projects take root, and provided Dandelion infrastructure for free to the Cardano developer community.
      </p>
      <p className="text-xl text-yellow-500 font-bold py-5">
        Our Fund10 Proposals are designed to support a team of builders to:
      </p>
      <ul className="list-disc pl-3 ml-5">
        <li className="font-semibold">Develop the new <a href="https://andamio.io" className="text-orange-600 hover:text-orange-200">Andamio Platform</a></li>
        <li className="font-semibold">Fund a Treasury for new Cardano developers</li>
        <li className="font-semibold">Provide live support for Plutus PBL in 6+ languages</li>
      </ul>
      <p className="font-semibold pt-5">
        We have a proven track-record of using Catalyst funds to provide free, public goods that anyone can benefit from. Now, we are building tools that introduce brand new ways of using the blockchain. Catalyst funding would ensure that we remain free from the demands of venture capital and status-quo thinking. Cardano is built to change the world, and that is how we intend to use it.
      </p>
      <p className="bee-cursor-dark text-xl text-yellow-500 font-bold pt-10 hover:text-orange-300 text-right">LEARN MORE</p>
    </div>
  );
}
