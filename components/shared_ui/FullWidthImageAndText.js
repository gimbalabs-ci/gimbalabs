import React from "react";
import Image from "next/image";
import Link from "next/link";
import { bgOptions } from "../../lib/colors/color";
import PlaygroundSvg from "../../lib/icons/PlaygroundSvg";
import CardanoLogo from "../../lib/icons/CardanoLogo";
import { PlutusSvgBasic } from "../../lib/icons/PlutusSvg";
import { DandelionSeed } from "../../lib/icons/svgs";

export default function FullWidthImageAndText({
  src = "/keepbees.jpeg",
  subtitle,
  title,
  orientation = "left",
  color = "RED",
}) {
  const textOrientation =
    orientation === "right" ? "items-end text-right" : "items-start";
  const bgGradient =
    orientation === "right" ? "bg-gradient-to-l" : "bg-gradient-to-r";

  const logos = {
    RED: () => <PlaygroundSvg className="w-8 text-black2-900" />,
    BLUE: () => <CardanoLogo className="w-8 text-blue-100" />,
    ORANGE: () => <PlutusSvgBasic className="w-8  text-black2-900" />,
    GREEN: () => <DandelionSeed className="w-8 text-offWhite mt-4" />,
  };
  const Logo = logos[color];

  const textColors = {
    RED: "text-white",
    BLUE: "text-white",
    ORANGE: "text-black2-900",
    GREEN: "text-green-900",
  };
  const textColor = textColors[color];
  return (
    <div className="relative w-full ">
      <div
        className={`relative z-10 h-9 lg:h-10 w-full flex justify-start items-stretch`}
      >
        <div className={` ${bgOptions[color][3]}`}>
          <div className="px-6 w-full h-full flex flex-col justify-center">
            <Logo />
          </div>
        </div>
        <div className={`lg:w-10 h-full ${bgOptions[color][2]}`}></div>
        <div className={`lg:w-10 h-full ${bgOptions[color][1]}`}></div>
        <div
          className={`flex-1 h-full ${bgOptions[color][0]} flex justify-end items-center`}
        >
          {subtitle && (
            <div className={`spacing-x gg-subtitle ${textColor}`}>
              {" "}
              {subtitle}
            </div>
          )}
        </div>
      </div>

      {/* <Image src={src} layout="fill" objectFit="cover" className="shadow-xl" /> */}
      {/* <div className={`absolute inset-0 ${bgOptions[color][0]}`} /> */}
      {title && (
        <div
          className={`max-w-18 mx-auto pt-6 lg:pt-7 spacing-x  relative z-10 flex flex-col justify-end ${textOrientation}`}
        >
          <div
            className={`text-black2-900 max-w-16 text-6xl font-heading font-bold gg-title-small  `}
          >
            {title}
          </div>
        </div>
      )}
    </div>
  );
}
