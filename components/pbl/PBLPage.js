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

export default function PBLPage() {
  const blueColors = [
    "bg-blue-600",
    "bg-blue-700",
    "bg-blue-800",
    "bg-blue-900",
  ];
  const redColors = ["bg-red-600", "bg-red-700", "bg-red-800", "bg-red-900"];
  const pinkColors = [
    "bg-pink-100",
    "bg-pink-200",
    "bg-pink-300",
    "bg-pink-400",
  ];
  const colors = { blueColors, redColors, pinkColors };
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
  const router = useRouter();
  const fromGrid = router.asPath.includes("gimbalgrid");
  return (
    <div className="relative spacing-x  bg-black2-900     ">
      {/* <div className="relative h-13">
        <div className="absolute inset-0 z-0">{heroScene}</div>
      </div> */}
      {!fromGrid && (
        <div className="flex flex-wrap justify-end items-end">
          <h1 className="gg-title text-white pt-9 pb-4 text-end ">
            Project Based Learning
          </h1>
          <div>
            <Link href="/gimbalgrid?id=0-3">
              <a>
                <button className=" gds-btn text-blue-100 border-b border-blue-100">
                  /gimbalgrid
                </button>
              </a>
            </Link>
          </div>
        </div>
      )}

      <StickyNoteList colors={colors} />
      <StarterKitsSection colors={colors} csks={csks} />
      <PlutusSection colors={colors.redColors} ppbls={ppbls} />
      <PlaygroundSection colors={colors.pinkColors} playgrounds={playgrounds} />
    </div>
  );
}
