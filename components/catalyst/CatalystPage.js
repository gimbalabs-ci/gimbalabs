import React, { useState } from "react";
import Link from "next/link";
import { texture1 } from "../../lib/icons/textures";
import Image from "next/image";
import { heroScene } from "../../lib/scenes/pbl_hero_scene";
import SmallCard from "../pbl/SmallCard";
import CatalystStickyNoteList from "./CatalystStickyNoteList";
import LargeCards from "../pbl/LargeCards";
import { useRouter } from "next/router";
import {
  blueColors,
  redColors,
  pinkColors,
  orangeColors,
  greenColors
} from "../../lib/colors/color";
import PageTitleWithBorder from "../shared_ui/PageTitleWithBorder";
import { AndamioSVG } from "../../lib/icons/AndamioSVG";
import ProposalsSection from "./ProposalsSection";

export default function CatalystPage() {
  const colors = { blueColors, redColors, pinkColors, orangeColors };

  const router = useRouter();
  const fromGrid = router.asPath.includes("gimbalgrid");
  return (
    <div className="relative  bg-offWhite text-black2-900 pt-5">
      <div className="relative px-5">
        <AndamioSVG />
        <PageTitleWithBorder
          borderColor="bg-offWhite"
          title="Project Catalyst Fund 10"
          subtitle="Voting opens August 31"
        />
      </div>
      <CatalystStickyNoteList colors={colors} ignore="home" />
      <ProposalsSection />
    </div>
  );
}
