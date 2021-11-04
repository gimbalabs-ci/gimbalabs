import React from "react";
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
      />
      <div className="ml-auto md:ml-0">
        <SmallCard
          link={"/pbl/plutus"}
          id={"RED"}
          textColor={"text-offWhite"}
          colors={colors.pinkColors}
          title={"Plutus Projects"}
          subtitle={"Learn by doing"}
        />
      </div>
      <SmallCard
        link={"/pbl/playground"}
        id={"PINK"}
        textColor={"text-offWhite"}
        colors={colors.redColors}
        title={"Playground"}
        subtitle={"Got an idea?"}
      />
    </div>
  );
}
