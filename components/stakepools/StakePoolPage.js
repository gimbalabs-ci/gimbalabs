import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import PageTitleWithBorder from "../shared_ui/PageTitleWithBorder";

export default function StakePoolPage() {
  return (
    <div className="w-full h-full bg-offWhite min-h-screen ">
      <PageTitleWithBorder title="Gimbalabs Stake Pools" />

      <div className="spacing-x mb-7 text-black2-900">
        <div className="">
          <p className="text-xl py-5">
            You can claim gimbal tokens by staking with certain pools.
          </p>
          <p className="text-xl py-5">
            When you stake to GMBL and PEACE pools, you can <a href="https://dripdropz.io/explore-projects/gimbal" className="text-orange-800 font-bold">claim Gimbal tokens on DripDropz</a>
          </p>
          <p className="text-xl py-5">
            SmartClaimz distribution Coming Soon
          </p>
        </div>
      </div>
    </div>
  );
}