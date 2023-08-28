import React from "react";
import CardanoLogo from "../../lib/icons/CardanoLogo";
import PlaygroundSvg from "../../lib/icons/PlaygroundSvg";
import CalendarSvg from "../../lib/icons/CalendarSvg";
import Tap from "../../lib/icons/Tap";
import PlutusSvg, { PlutusSvgBasic } from "../../lib/icons/PlutusSvg";
import SmallCard from "/components/pbl/SmallCard";

export default function CatalystStickyNoteList({ colors, ignore }) {
  return (
    <div className="w-full bg-purple-900 spacing-x py-5 lg:py-9 grid sm:grid-cols-2 lg:grid-cols-3  relative ">
      {ignore != "why" && (
        <SmallCard
          link={"https://www.andamio.io/fund10"}
          id={"BLUE"}
          textColor={"text-offWhite"}
          colors={colors.blueColors}
          title={"Andamio"}
          subtitle={
            "Andamio is a learning and onboarding platform built for organizations solving big problems."
          }
          Logo={() => <CardanoLogo className="w-7 h-7 text-black2-900" />}
        />
      )}
      {ignore != "participate" && (
        <SmallCard
          link={"https://projectcatalyst.io/get-involved/become-a-voter"}
          id={"ORANGE"}
          textColor={"text-offWhite"}
          colors={colors.orangeColors}
          title={"How to Vote"}
          subtitle={"Learn about voting at ProjectCatalyst.io"}
          Logo={() => <CalendarSvg className="w-7 h-7 text-black2-900" />}
        />
      )}

      {ignore != "prepare" && (
        <SmallCard
          link={"https://www.lidonation.com/en/proposals/cardano-starter-kits-apis-f2"}
          id={"PINK"}
          textColor={"text-offWhite"}
          colors={colors.redColors}
          title={"Gimbalabs Fund2 Proposal"}
          subtitle={"Read the first funded Gimbalabs proposal."}
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
