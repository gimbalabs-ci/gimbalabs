import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FullWidthImageAndText({
  src = "/keepbees.jpeg",
  title = "default title",
  subtitle = "default subtitle",
  orientation = "left",
  color = "red",
}) {
  const textOrientation =
    orientation === "right" ? "items-end text-right" : "items-start";
  const bgGradient =
    orientation === "right" ? "bg-gradient-to-l" : "bg-gradient-to-r";

  return (
    <div className="relative w-full h-13">
      <ul
        className={`relative z-10 h-13 w-full flex justify-end items-stretch`}
      >
        <li className={`w-10 h-full bg-${color}-900`}></li>
        <li className={`w-10 h-full bg-${color}-800`}></li>
        <li className={`w-10 h-full bg-${color}-700`}></li>
        <li className={`w-14 h-full bg-${color}-600`}></li>
      </ul>

      {/* <Image src={src} layout="fill" objectFit="cover" className="shadow-xl" /> */}
      <div className={`absolute inset-0 bg-${color}-900`} />
      <div
        className={` spacing-x  absolute inset-0 z-10 flex flex-col justify-center ${textOrientation}`}
      >
        <div className={`max-w-16 mb-4 text-${color}-100 gg-subtitle`}>
          {subtitle}
        </div>
        <div className=" text-white title-line-height text-3xl md:text-4xl xl:text-5xl max-w-14">
          {title}
        </div>
        <div className="flex justify-center mt-5">
          <div>
            <Link href="/pbl">
              <a>
                <button className=" mr-5   gds-btn text-blue-100 border-b border-blue-100">
                  /pbl
                </button>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/pbl/csk">
              <a>
                <button className="   gds-btn text-blue-100 border-b border-blue-100">
                  /pbl/csk
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
