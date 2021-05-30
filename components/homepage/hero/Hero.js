import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="relative w-full">
      <div className="relative z-20 gds-section max-w-16 mt-9 md:mt-11">
        <h1 className="title text-white">
          your entry point to build on Cardano
        </h1>
        <p className="subtitle text-white py-6 ">
          Gimbalabs provides open-source tools and unique learning experiences
          that empower you to launch projects and bring ideas to life.
        </p>
        <button className="gds-button gds-green text-blue">learn more</button>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue z-10 opacity-75" />
      <Image src={"/images/hero_bg.svg"} objectFit="cover" layout="fill" />
    </div>
  );
}
