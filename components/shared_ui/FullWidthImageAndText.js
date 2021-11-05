import React from "react";
import Image from "next/image";
import Link from "next/link";
import { bgOptions } from "../../lib/colors/color";
import PlaygroundSvg from "../../lib/icons/PlaygroundSvg";
import CardanoLogo from "../../lib/icons/CardanoLogo";
import { PlutusSvgBasic } from "../../lib/icons/PlutusSvg";

export default function FullWidthImageAndText({
  src = "/keepbees.jpeg",
  title = "default title",
  subtitle = "default subtitle",
  orientation = "right",
  color = "RED",
}) {
  const textOrientation =
    orientation === "right" ? "items-end text-right" : "items-start";
  const bgGradient =
    orientation === "right" ? "bg-gradient-to-l" : "bg-gradient-to-r";

  const logos = {
    RED: () => <PlaygroundSvg className="w-8 text-red-100" />,
    BLUE: () => <CardanoLogo className="w-8 text-blue-100" />,
    ORANGE: () => <PlutusSvgBasic className="w-8 text-black2-900" />,
  };
  const Logo = logos[color];
  return (
    <div className="relative w-full h-13">
      <ul
        className={`relative z-10 h-13 w-full flex justify-start items-stretch`}
      >
        <li
          className={` flex flex-col justify-end p-6 w-10 h-full ${bgOptions[color][3]}`}
        >
          <Logo />
        </li>
        <li className={`w-10 h-full ${bgOptions[color][2]}`}></li>
        <li className={`w-10 h-full ${bgOptions[color][1]}`}></li>
        <li className={`w-10 h-full ${bgOptions[color][0]}`}></li>
      </ul>

      {/* <Image src={src} layout="fill" objectFit="cover" className="shadow-xl" /> */}
      <div className={`absolute inset-0 ${bgOptions[color][0]}`} />
      <div
        className={`${
          color === "ORANGE" ? "text-black2-900" : "text-white"
        } spacing-x  absolute inset-0 z-10 flex flex-col justify-center ${textOrientation}`}
      >
        <div className={` max-w-16 mb-4 gg-subtitle`}>{subtitle}</div>
        <div className={` gg-title  pt-9 pb-5`}>{title}</div>
      </div>
    </div>
  );
}
