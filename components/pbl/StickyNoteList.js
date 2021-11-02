import React from "react";
import SmallCard from "./SmallCard";

export default function StickyNoteList({ colors }) {
  return (
    <div className="spacing-y relative flex flex-wrap justify-center items-center lg:grid lg:grid-cols-3">
      <SmallCard
        link={"/pbl/csk"}
        id={"BLUE"}
        textColor={"text-black2-900"}
        colors={colors.blueColors}
        title={"Starter Kits"}
        subtitle={"Go now"}
      />
      <div className="ml-auto md:ml-0">
        <SmallCard
          link={"/pbl/plutus"}
          id={"RED"}
          textColor={"text-black2-900"}
          colors={colors.redColors}
          title={"Plutus Projects"}
          subtitle={"Learn by doing"}
        />
      </div>
      <SmallCard
        link={"/pbl/playground"}
        id={"PINK"}
        textColor={"text-black2-900"}
        colors={colors.pinkColors}
        title={"Playground"}
        subtitle={"Got an idea?"}
      />
    </div>
  );
}
