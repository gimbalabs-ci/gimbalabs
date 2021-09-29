import React from "react";

export default function Letter({ l }) {
  return (
    <div
      style={{
        fontSize: "110px",
      }}
      className="font-bold text-purple-100 h-full w-full  flex items-center justify-center "
    >
      {l}
    </div>
  );
}
