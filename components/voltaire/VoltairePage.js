import React, { useState } from "react";
import Link from "next/link";
import { texture1 } from "../../lib/icons/textures";
import Image from "next/image";
import { heroScene } from "../../lib/scenes/pbl_hero_scene";
import SmallCard from "../pbl/SmallCard";
import VoltaireStickyNoteList from "./VoltaireStickyNoteList";
import LargeCards from "../pbl/LargeCards";
import { useRouter } from "next/router";
import StarterKitsSection from "../pbl/StarterKitsSection";
import PlutusSection from "../pbl/PlutusSection";
import TokenomicsSection from "../pbl/TokenomicsSection";
import {
  blueColors,
  redColors,
  pinkColors,
  orangeColors,
  greenColors
} from "../../lib/colors/color";
import PageTitleWithBorder from "../shared_ui/PageTitleWithBorder";
import { AndamioSVG } from "../../lib/icons/AndamioSVG";
import GovernanceSection from "./GovernanceSection";
import ContributeToThis from "./ContributeToThis";

export default function VoltairePage() {
  const colors = { blueColors, redColors, pinkColors, orangeColors };

  const router = useRouter();
  const fromGrid = router.asPath.includes("gimbalgrid");
  return (
    <div className="relative  bg-offWhite text-black2-900 pt-5">
      <div className="relative px-5">
        <AndamioSVG />
        <PageTitleWithBorder
          borderColor="bg-offWhite"
          title="The Voltaire Era is Here"
          subtitle="Voltaire is the Governance Era of the Cardano blockchain"
        />
      </div>

      <GovernanceSection colors={colors} />
      <VoltaireStickyNoteList colors={colors} ignore="home" />
      <ContributeToThis />
    </div>
  );
}
