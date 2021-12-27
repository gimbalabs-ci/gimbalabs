import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import PageTitleWithBorder from "../shared_ui/PageTitleWithBorder";

export default function StakePoolPage() {
  return (
    <div className="w-full h-full bg-offWhite min-h-screen ">
      <PageTitleWithBorder title="Gimbalabs Stake Pools" />

      <div className="spacing-x mb-7 text-black2-900">
        <div className="max-w-15">
          Stake to GMBL and PEACE to support the work of Gimbalabs and Dandelion.
        </div>
      </div>
    </div>
  );
}