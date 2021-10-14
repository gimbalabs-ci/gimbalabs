import React from "react";
import { largeDandelionSeeds } from "../../lib/icons/largeDandelionSeeds";

export default function Hero() {
  return (
    <div className="relative grid xl:grid-cols-2">
      <div className="relative w-full">
        {/* Yellow BG */}
        <div className="absolute gradient-yellow w-full xl:w-16 h-15" />
        {/* Title Group */}
        <div className="mr-5 sm:mr-0 margin-l pt-9 relative max-w-16 xl:max-w-15 flex  ">
          {/* Line */}
          <div className="w-1 bg-yellow-800 mr-5 xl:mr-7" />
          <div className="">
            {/* Title */}
            <h1 className="gds-title text-yellow-900">Dandelion APIs</h1>
            <h2 className="text-xl text-yellow-800">
              Developer tools to get you integrated into the Cardano blockchain,
              fast.
            </h2>
          </div>
        </div>
        {/* Green Group */}
        <div className="shadow-lg flex flex-col  margin-x mt-6 p-5 lg:p-8 relative  md:w-14 lg:w-15  md:h-15 gradient-green">
          <div>
            <p className="text-green-200 text-2xl">01</p>
            <h3 className="text-3xl md:text-4xl text-green-900 mt-4 ">
              <span className="text-green-100 block">
                Start building on Cardano,
              </span>
              <span>from testnet to mainnet, we host you for free.</span>
            </h3>
            <p className="text-green-800 text-lg mt-5">
              Check endpoints and learn more in the official Cardano Developer
              Portal
            </p>
          </div>
          <div>
            <div className="mt-5 md:mt-9 border-b border-green-700 text-green-900 text-2xl">
              Get started as a{" "}
            </div>
            <div className="grid sm:grid-cols-2 gap-3 lg:gap-5 mt-5">
              <button className="gds-btn btn-yellow ">Operator</button>
              <button className="gds-btn btn-green">Developer</button>
            </div>
          </div>
        </div>
      </div>
      {/* Dandelion Icons */}
      <div className="hidden xl:block">{largeDandelionSeeds}</div>
    </div>
  );
}
