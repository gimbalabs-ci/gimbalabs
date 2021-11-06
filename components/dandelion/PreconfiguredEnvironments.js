import Link from "next/link";
import React from "react";
import { ArrowRight } from "react-feather";
import GetIcon from "../../lib/icons/getIcon";
import HighlightSpan from "../shared_ui/HighlightSpan";

export default function PreconfiguredEnvironments() {
  return (
    <div className="relative flex flex-col justify-center xl:h-16 xl:-mt-11 overflow-hidden ">
      {/* Clipped bg */}
      <div className=" clip-me-left  absolute inset-0 bg-green-900" />
      {/* Bamboo */}
      <GetIcon
        iconName={"Bamboo"}
        className="z-0 absolute -top-10 -right-14 text-green-700 opacity-75 "
      />
      {/* Layout */}
      <div className=" grid lg:grid-cols-2 spacing-x py-9">
        <div className="relative">
          <h3 className="text-green-400 text-4xl md:text-6xl max-w-14 mb-3   ">
            Preconfigured
            <span className="block text-green-100">
              environments ready to go
            </span>
          </h3>
        </div>
        <div className="relative flex flex-col justify-center ">
          <div>
            <div className="relative text-2xl md:text-4xl title-line-height text-green-100 ">
              Dandelion provides you with a
              <HighlightSpan
                text={"containerized solution"}
                bgColor={"bg-green-400"}
                textColor={"text-green-900"}
                rotate={"-rotate-1"}
              />
              that allows developers to run the same stack locally than
              on-premise or on our hosted service.{" "}
            </div>
            <div className=" relative mt-5 md:mt-9 flex flex-wrap items-center">
              <div className="relative mb-3">
                <GetIcon iconName="Axe" className="text-green-400 mr-5" />
              </div>
              <p className="text-green-200 max-w-11 mr-5">
                Cut your set up time to minutes instead of hours
              </p>
              <div className="">
                <Link href="/dandelion/endpoints">
                  <a>
                    <button className="gds-btn hover:bg-green-800 flex items-center  text-green-400 border border-green-400">
                      Get Started
                      <ArrowRight className="ml-3" />
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
