import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import WithTransfer from "../WithTransfer";

export default function DandelionContrib(props) {
  return (
    <WithTransfer {...props} className="w-full">
      <a href="https://contrib.dandelion.link" target="_blank">
        <div className="group bg-purple-500  text-white flex flex-row justify-center items-center">
            <div className="gg-subtitle font-heading text-center flex flex-col">
            <Image
              src="/dandelion-contributor-badge.png"
              width="183"
              height="175"
              />
            </div>
            <div className="gg-subtitle font-heading text-center flex flex-col px-5">
              <p className="text-yellow-400"> MINT A DANDELION</p>
              <p className="pb-2">contribution token</p>
              <p className="text-sm">support a free service for Cardano developers</p>
            </div>
        </div>
      </a>
    </WithTransfer>
  );
}
