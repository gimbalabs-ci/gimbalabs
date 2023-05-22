import React from "react";
import CardanoLogo from "../../lib/icons/CardanoLogo";
import PlaygroundSvg from "../../lib/icons/PlaygroundSvg";
import PlutusSvg, { PlutusSvgBasic } from "../../lib/icons/PlutusSvg";
import SmallCard from "./SmallCard";

export default function StickyNoteList({ colors }) {
  return (
    <div className="w-full bg-black2-900 spacing-x py-5 lg:py-9 grid sm:grid-cols-2 lg:grid-cols-3  relative ">
      <SmallCard
        link={"/pbl/playground"}
        id={"PINK"}
        textColor={"text-offWhite"}
        colors={colors.redColors}
        title={"Gimbalabs Playground"}
        subtitle={"The weekly meeting for our network of innovators committed to creating new models."}
        Logo={() => <PlaygroundSvg className="w-7 h-7 text-black2-900" />}
      />
      <SmallCard
        link={"https://plutuspbl.io"}
        id={"ORANGE"}
        textColor={"text-offWhite"}
        colors={colors.orangeColors}
        title={"Plutus PBL 2023"}
        subtitle={"Gain full stack experience building on Plutus with our Project-Based Learning approach."}
        Logo={() => <PlutusSvgBasic className="w-7 h-7 text-black2-900" />}
      />
      <SmallCard
        link={"/pbl/tokenomics"}
        id={"BLUE"}
        textColor={"text-offWhite"}
        colors={colors.blueColors}
        title={"Tokenomics PBL"}
        subtitle={"Our long-term project in exploring the value of a community token, without the hype."}
        Logo={() => <CardanoLogo className="w-7 h-7 text-black2-900" />}
      />
    </div>
  );
}
