import React from "react";
import { Bamboo, DandelionSeed } from "../../../lib/icons/svgs";
import WithTransfer from "../WithTransfer";

export default function GBDandelion(props) {
  return (
    <WithTransfer {...props}>
      <div className="gradient-yellow  text-green-900 flex flex-col justify-center items-center">
        <div className="gradient-green  p-3 m-2 relative z-10 flex flex-col justify-center items-center  ">
          <DandelionSeed className="text-green-900 h-9" />
          <p className="gg-subtitle font-heading text-center">
            <span className="gg-title text-green-900">Dandelion</span>{" "}
            distributed infrastructure
          </p>
        </div>
        <Bamboo className="text-yellow-900 absolute -left-10 -top-12 z-0" />
      </div>
    </WithTransfer>
  );
}
