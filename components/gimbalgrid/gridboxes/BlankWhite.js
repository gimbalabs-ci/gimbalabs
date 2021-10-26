import React from "react";

export default function BlankWhite(props) {
  const bgColor = props.color || "bg-offWhite";
  console.log("y", props);
  return <div className={`absolute inset-0  ${bgColor} `}></div>;
}
