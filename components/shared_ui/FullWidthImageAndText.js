import React from "react";
import Image from "next/image";

export default function FullWidthImageAndText({
  src = "/keepbees.jpeg",
  title = "default title",
  subtitle = "default subtitle",
  orientation = "left",
}) {
  const textOrientation =
    orientation === "right" ? "items-end text-right" : "items-start";
  const bgGradient =
    orientation === "right" ? "bg-gradient-to-l" : "bg-gradient-to-r";

  return (
    <div className="relative w-full h-13">
      <Image src={src} layout="fill" objectFit="cover" className="shadow-xl" />
      <div
        className={`absolute inset-0 ${bgGradient} from-black via-black  opacity-75`}
      />
      <div
        className={` spacing-x  absolute inset-0 z-10 flex flex-col justify-center ${textOrientation}`}
      >
        <div className="max-w-16 mb-4 text-gray-200 gg-subtitle">
          {subtitle}
        </div>
        <div className="max-w-17 text-white gg-title">{title}</div>
      </div>
    </div>
  );
}
