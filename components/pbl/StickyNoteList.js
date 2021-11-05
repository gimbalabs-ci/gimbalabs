import React from "react";
import CardanoLogo from "../../lib/icons/CardanoLogo";
import PlaygroundSvg from "../../lib/icons/PlaygroundSvg";
import PlutusSvg, { PlutusSvgBasic } from "../../lib/icons/PlutusSvg";
import SmallCard from "./SmallCard";

export default function StickyNoteList({ colors }) {
  return (
    <div className="w-full bg-black2-900 spacing-x py-5 lg:py-9  relative flex flex-wrap justify-center items-center lg:justify-between ">
      <SmallCard
        link={"/pbl/csk"}
        id={"BLUE"}
        textColor={"text-offWhite"}
        colors={colors.blueColors}
        title={"Starter Kits"}
        subtitle={"Go now"}
        Logo={() => <CardanoLogo className="w-7 text-black2-900" />}
      />
      <div className="ml-auto md:ml-0">
        <SmallCard
          link={"/pbl/plutus"}
          id={"ORANGE"}
          textColor={"text-offWhite"}
          colors={colors.orangeColors}
          title={"Plutus Projects"}
          subtitle={"Learn by doing"}
          Logo={() => <PlutusSvgBasic className="w-7 text-black2-900" />}
        />
      </div>
      <SmallCard
        link={"/pbl/playground"}
        id={"PINK"}
        textColor={"text-offWhite"}
        colors={colors.redColors}
        title={"Playground"}
        subtitle={"Got an idea?"}
        Logo={() => <PlaygroundSvg className="w-7 text-black2-900" />}
      />
    </div>
  );
}
