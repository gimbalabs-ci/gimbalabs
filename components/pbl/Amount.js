import React from "react";

export default function Amount({ gimbals }) {

  return (
    <div className="mt-6 spacing-x flex flex-col items-start justify-between">
      <div className="w-full max-w-16 mx-auto">
        <div className="bg-blue-600 p-3 text-white">
          <div className="text-lg md:text-2xl font-heading">A0: {gimbals} gimbals</div>
        </div>
      </div>
    </div>
  );
}
