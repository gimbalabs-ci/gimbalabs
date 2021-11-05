import React from "react";
import { largeDandelionSeeds } from "../../lib/icons/largeDandelionSeeds";
import SupportedServices from "./SupportedServices";

export default function Hero() {
  return (
    <div className="relative grid xl:grid-cols-2">
      <div className="relative w-full">
        {/* Yellow BG */}
        {/* <div className="absolute gradient-yellow w-full xl:w-16 h-15" /> */}
        {/* Title Group */}
        <div className="relative z-10 mr-5 sm:mr-0 margin-l pt-9 relative max-w-16 xl:max-w-16 flex  ">
          {/* Line */}
          <div className="w-1 bg-yellow-800 mr-5 sm:mr-7 " />
          <div className="">
            {/* Title */}
            <h1 className="gds-title text-yellow-900">Dandelion APIs</h1>
            <h2 className="text-xl text-yellow-800 max-w-13">
              Developer tools to get you integrated into the Cardano blockchain,
              fast.
            </h2>
          </div>
        </div>
        {/* Green Group */}
        <div className="relative z-10 text-green-900 shadow-lg flex flex-col  margin-x mt-6 p-5 lg:p-8 relative  md:w-14 lg:w-15  md:h-15 gradient-green">
          <div className="z-10 absolute inset-0 -top-12 -left-9 hidden xl:block">
            {largeDandelionSeeds}
          </div>
          <div className="relative z-20">
            <p className="text-green-200 text-2xl">01</p>
            <h3 className="text-3xl md:text-4xl text-green-900 mt-4 ">
              <span className="text-white block">
                Start building on Cardano,
              </span>
              <span>from testnet to mainnet, we host you for free.</span>
            </h3>
            <p className="text-green-900 text-lg mt-5">
              Check endpoints and learn more in the official Cardano Developer
              Portal
            </p>
          </div>
          <div className="relative z-20">
            <div className="mt-5 md:mt-9 border-b border-green-700 text-green-900 text-2xl">
              Get started as a{" "}
            </div>
            <div className="relative z-20 grid sm:grid-cols-2 gap-3 lg:gap-5 mt-5">
              <button className="relative z-20 gds-btn btn-yellow ">
                Operator
              </button>
              <button className="relative z-20 gds-btn bg-green-900 text-white">
                Developer
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Dandelion Icons */}
      <div className="z-20 w-full h-full relative">
        <SupportedServices />
      </div>
    </div>
  );
}
