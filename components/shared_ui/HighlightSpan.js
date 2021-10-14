import React from "react";

export default function HighlightSpan({ text, bgColor, textColor, rotate }) {
  return (
    <div id={text + "_fuck"} className="mr-2 relative p-2 inline-block">
      <span className={`z-10 relative ${textColor}`}>{text}</span>
      <div className={`z-0 absolute inset-0 ${bgColor} transform ${rotate}`} />
    </div>
  );
}
