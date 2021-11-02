import React from "react";

export default function Letter({ l }) {
  return (
    <div
      // style={{
      //   fontSize: "110px",
      // }}
      className="bg-black2-900 text-3xl font-bold text-offWhite h-full w-full  flex items-center justify-center "
    >
      {l}
    </div>
  );
}
