import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import PageTitleWithBorder from "../shared_ui/PageTitleWithBorder";
import MenuLinks from "./MenuLinks";

export default function MenuPage() {
  return (
    <div className="w-full h-full bg-offWhite min-h-screen ">
      <PageTitleWithBorder title="Menu" />

      <div className="spacing-x mb-7 text-black2-900">
        <div className="max-w-15">
          We believe that people learn best by doing things. If you've been
          looking for an entry point into how you can participate in Cardano, we
          think you might find it here.
        </div>
      </div>
      <MenuLinks />
    </div>
  );
}
