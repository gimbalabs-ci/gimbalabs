import React from "react";
import { Bamboo, DandelionSeed } from "../../../lib/icons/svgs";
import WithTransfer from "../WithTransfer";

export default function GBDandelion(props) {
  return (
    <WithTransfer {...props} className="w-full">
      <div className="group gradient-yellow  text-green-900 flex flex-col justify-center items-center">
        <div className="  p-3 m-2 relative z-10 flex flex-col justify-center items-center  ">
          <DandelionSeed className="text-green-900 h-9" />
          <div className="gg-subtitle font-heading text-center flex flex-col">
            <p className="gg-title text-green-900">Dandelion</p>{" "}
            <p>distributed infrastructure</p>
          </div>
        </div>
        <Bamboo className="text-yellow-900 absolute -left-10 -top-12 z-0" />
        <div className="gradient-green absolute inset-0 transform m-5 group-hover:scale-y-100  "></div>
      </div>
    </WithTransfer>
  );
}
