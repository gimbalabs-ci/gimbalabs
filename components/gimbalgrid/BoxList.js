import React from "react";
import GridBox from "./GridBox";
import { gridData } from "./GridData";

export default function BoxList(props) {
  return (
    <div className={`gimbal-grid relative gap-2  p-2 `}>
      {gridData.map((i, index) => (
        <GridBox key={index + "__boxgrid"} {...props} id={index} />
      ))}
    </div>
  );
}
