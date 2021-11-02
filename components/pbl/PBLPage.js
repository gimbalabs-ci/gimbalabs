import React, { useState } from "react";
import Link from "next/link";
import { texture1 } from "../../lib/icons/textures";
import Image from "next/image";
import { heroScene } from "../../lib/scenes/pbl_hero_scene";
import SmallCard from "../../components/pbl/SmallCard";
import StickyNoteList from "../../components/pbl/StickyNoteList";
import LargeCards from "../../components/pbl/LargeCards";
import { useRouter } from "next/router";
import StarterKitsSection from "./StarterKitsSection";
import PlutusSection from "./PlutusSection";
import PlaygroundSection from "./PlaygroundSection";
import { blueColors, redColors, pinkColors } from "../../lib/colors/color";

// STATIC PROPS
// STATIC PROPS
// STATIC PROPS
const csks = [
  {
    number: "",
    title: "",
  },
  {
    number: "006",
    title: "Transaction Metadata",
  },
  {
    number: "013",
    title: "A starter kit",
  },
  {
    number: "007",
    title: "Another one",
  },
];
const ppbls = [
  {
    number: "",
    title: "",
  },
  {
    number: "006",
    title: "Transaction Metadata",
  },
  {
    number: "013",
    title: "A starter kit",
  },
  {
    number: "007",
    title: "Another one",
  },
];
const playgrounds = [
  {
    number: "",
    title: "",
  },
  {
    number: "006",
    title: "Transaction Metadata",
  },
  {
    number: "013",
    title: "A starter kit",
  },
  {
    number: "007",
    title: "Another one",
  },
];

// PBL PAGE
// PBL PAGE
// PBL PAGE
export default function PBLPage() {
  const colors = { blueColors, redColors, pinkColors };

  const router = useRouter();
  const fromGrid = router.asPath.includes("gimbalgrid");
  return (
    <div className="relative  bg-offWhite text-black2-900   ">
      {/* <div className="relative h-13">
        <div className="absolute inset-0 z-0">{heroScene}</div>
      </div> */}
      <div className="flex pt-9  flex-col ">
        <h1 className="gg-title spacing-x text-black2-900  ">
          Project Based Learning
        </h1>
        <div className="h-1 bg-black2-900  w-full my-1 "></div>
      </div>

      <div className="flex flex-wrap justify-end items-end">
        <div>
          <Link href="/gimbalgrid">
            <a>
              <button className=" gds-btn text-blue-100 border-b border-blue-100">
                /gimbalgrid
              </button>
            </a>
          </Link>
        </div>
      </div>
      <div className="spacing-x">
        <StickyNoteList colors={colors} />
        <StarterKitsSection colors={colors} csks={csks} />
        <PlutusSection colors={colors.redColors} ppbls={ppbls} />
        <PlaygroundSection
          colors={colors.pinkColors}
          playgrounds={playgrounds}
        />
      </div>
    </div>
  );
}
