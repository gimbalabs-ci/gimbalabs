import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import PageTitleWithBorder from "../shared_ui/PageTitleWithBorder";

export default function GimbalTokenPage() {
  return (
    <div className="w-full h-full bg-offWhite min-h-screen ">
      <PageTitleWithBorder title="Gimbal Token" />

      <div className="spacing-x mb-7 text-black2-900">
        <h2 className="text-2xl py-4">
          Current Status
        </h2>
        <div className="max-w-15">
          Right now, a group of builders from across the Cardano ecosystem are working together to create plans for the Gimbal token. Our work is iterative, and this process will continue over seven more "Allocation Rounds".
        </div>
        <h2 className="text-2xl py-4">
          Now Live: "Allocation 0" Groups
        </h2>
        <div className="max-w-15">
          Take a look at the <a className="text-blue-700"><Link href="/pbl/tokenomics">current list of tokenomics working Groups</Link></a>.
        </div>
        <h2 className="text-2xl py-4">
          Earn Gimbals Now
        </h2>
        <div className="max-w-15">
          For now, anyone can earn Gimbal tokens by delegating to GMBL and PEACE Stake Pools.
        </div>
        <h2 className="text-2xl py-4">
          Stay Tuned
        </h2>
        <div className="max-w-15">
          Follow <a href="https://twitter.com/gimbalabs" className="text-blue-700">Gimbalabs on Twitter</a>, join us <a href="https://discord.gg/Va7DXqSSn8" className="text-blue-700">on Discord</a> or bookmark this page to keep up on details.
        </div>
      </div>
    </div>
  );
}