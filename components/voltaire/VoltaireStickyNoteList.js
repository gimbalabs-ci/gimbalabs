import React from "react";
import CardanoLogo from "../../lib/icons/CardanoLogo";
import PlaygroundSvg from "../../lib/icons/PlaygroundSvg";
import CalendarSvg from "../../lib/icons/CalendarSvg";
import Tap from "../../lib/icons/Tap";
import PlutusSvg, { PlutusSvgBasic } from "../../lib/icons/PlutusSvg";
import SmallCard from "/components/pbl/SmallCard";

export default function VoltaireStickyNoteList({ colors, ignore }) {
  return (
    <div className="w-full bg-purple-900 spacing-x py-5 lg:py-9 grid sm:grid-cols-2 lg:grid-cols-3  relative ">
      {ignore != "why" && (
        <SmallCard
          link={"/voltaire-is-here/why"}
          id={"BLUE"}
          textColor={"text-offWhite"}
          colors={colors.blueColors}
          title={"Why Voltaire Matters"}
          subtitle={
            "Right now, the global Cardano Community is practicing decision making at scale. Here's why it matters."
          }
          Logo={() => <CardanoLogo className="w-7 h-7 text-black2-900" />}
        />
      )}
      {ignore != "participate" && (
        <SmallCard
          link={"/voltaire-is-here/participate"}
          id={"ORANGE"}
          textColor={"text-offWhite"}
          colors={colors.orangeColors}
          title={"How to Participate"}
          subtitle={"Global CIP-1694 are happening now. Here is how to join one."}
          Logo={() => <CalendarSvg className="w-7 h-7 text-black2-900" />}
        />
      )}

      {ignore != "prepare" && (
        <SmallCard
          link={"/voltaire-is-here/prepare"}
          id={"PINK"}
          textColor={"text-offWhite"}
          colors={colors.redColors}
          title={"How to Prepare"}
          subtitle={"What will happen at a CIP-1694 Workshop? Let's investigate the questions we are asking together."}
          Logo={() => <PlaygroundSvg className="w-7 h-7 text-black2-900" />}
        />
      )}

      {ignore != "home" && (
        <SmallCard
          link={"/voltaire-is-here"}
          id={"PINK"}
          textColor={"text-offWhite"}
          colors={colors.greenColors}
          title={"Voltaire is Here"}
          subtitle={"Get ready for a new era"}
          Logo={() => <CardanoLogo className="w-7 h-7 text-black2-900" />}
        />
      )}
    </div>
  );
}
