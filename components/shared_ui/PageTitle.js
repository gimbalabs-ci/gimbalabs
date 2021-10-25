import React from "react";

export default function PageTitle({ title, subtitle }) {
  return (
    <div className="flex flex-col">
      <h1 className="gg-title text-black2-900 max-w-16">{title} </h1>
      <div className="gg-subtitle text-black2-900 max-w-14">{subtitle} </div>
    </div>
  );
}
