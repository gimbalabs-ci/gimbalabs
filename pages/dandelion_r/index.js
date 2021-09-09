import React from "react";
import GetIcon from "../../lib/icons/getIcon";

export default function Dandelion() {
  return (
    <div className="font-body text-green-200 bg-green-500">
      hi
      <div className="flex-center flex-wrap">
        <GetIcon iconName="Bonzai" className="h-10 w-10 " />
        <GetIcon iconName="Lotus" className="h-10 w-10 " />
        <GetIcon iconName="KoiFish" className="h-10 w-10" />
        <GetIcon iconName="Tree1" className="h-10 w-10" />
        <GetIcon iconName="Tree2" className="h-10 w-10" />
        <GetIcon iconName="Axe" className="h-10 w-10" />
        <GetIcon iconName="Butterfly" className="h-10 w-10" />
        <GetIcon iconName="DandelionSeed" className="h-10 w-10" />
        <GetIcon iconName="Bee" className="h-10 w-10" />
      </div>
    </div>
  );
}
