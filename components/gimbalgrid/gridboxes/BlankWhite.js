import React from "react";

export default function BlankWhite(props) {
  const bgColor = props.color || "bg-offWhite";
  return <div className={`absolute inset-0  ${bgColor} `}></div>;
}
