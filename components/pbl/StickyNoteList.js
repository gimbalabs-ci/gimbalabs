import React from "react";
import CardanoLogo from "../../lib/icons/CardanoLogo";
import PlaygroundSvg from "../../lib/icons/PlaygroundSvg";
import PlutusSvg, { PlutusSvgBasic } from "../../lib/icons/PlutusSvg";
import SmallCard from "./SmallCard";

export default function StickyNoteList({ colors }) {
  return (
    <div className="w-full bg-black2-900 spacing-x py-5 lg:py-9 grid sm:grid-cols-2 lg:grid-cols-3  relative ">
      <SmallCard
        link={"/pbl/csk"}
        id={"BLUE"}
        textColor={"text-offWhite"}
        colors={colors.blueColors}
        title={"Cardano Starter Kits"}
        subtitle={"Videos and documentation to help kick off your learning journey."}
        Logo={() => <CardanoLogo className="w-7 h-7 text-black2-900" />}
      />
      <SmallCard
        link={"/pbl/plutus"}
        id={"ORANGE"}
        textColor={"text-offWhite"}
        colors={colors.orangeColors}
        title={"Plutus PBL"}
        subtitle={"Gain full stack experience building on Plutus by collaborating on projects."}
        Logo={() => <PlutusSvgBasic className="w-7 h-7 text-black2-900" />}
      />
      <SmallCard
        link={"/pbl/tokenomics"}
        id={"PINK"}
        textColor={"text-offWhite"}
        colors={colors.redColors}
        title={"Tokenomics PBL"}
        subtitle={"Join a network of innovators committed to creating new models."}
        Logo={() => <PlaygroundSvg className="w-7 h-7 text-black2-900" />}
      />
    </div>
  );
}
