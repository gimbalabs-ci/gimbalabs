import React from "react";
import SmallCard from "./SmallCard";

export default function StickyNoteList({ colors }) {
  return (
    <div className="spacing-y relative flex flex-wrap justify-center items-center lg:grid lg:grid-cols-3">
      <SmallCard
        id={"BLUE"}
        textColor={"text-blue-100"}
        colors={colors.blueColors}
        title={"Starter Kits"}
        subtitle={"Go now"}
      />
      <div className="ml-auto md:ml-0">
        <SmallCard
          id={"RED"}
          textColor={"text-blue-100"}
          colors={colors.redColors}
          title={"Plutus Projects"}
          subtitle={"Learn by doing"}
        />
      </div>
      <SmallCard
        id={"PINK"}
        textColor={"text-blue-100"}
        colors={colors.pinkColors}
        title={"Playground"}
        subtitle={"Got an idea?"}
      />
    </div>
  );
}
