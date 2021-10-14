import React from "react";
import GetIcon from "../../lib/icons/getIcon";
import HighlightSpan from "../shared_ui/HighlightSpan";
import IconCard from "./IconCard";

export default function ValidateIdeas() {
  return (
    <div className=" relative flex flex-col justify-center">
      {/* Dark bg to fill in space above */}
      <div className="h-13 z-0 top-0  absolute inset-x-0 bg-green-900" />
      {/* Clipped yellow bg */}
      <div className="clip-me-right h-full xl:h-16  absolute inset-x-0 gradient-yellow overflow-hidden">
        {/* Bamboo */}
        <GetIcon
          iconName={"Bamboo"}
          className="z-0 absolute -top-9 -left-12 text-yellow-300 opacity-75 "
        />
      </div>
      {/* Layout */}
      <div className="relative z-10 grid xl:grid-cols-2 spacing-x spacing-y">
        {/* Left Side Three Icons */}
        <div className="order-2 xl:order-1 mx-auto md:mx-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-1 gap-5">
          <IconCard
            icon={"Bonzai"}
            title={"Simulate Real Environments"}
            description={
              "Dandelion enable developers to easily reproduce locally complete architectures so they can focus on what they do best: solving domain specific problems."
            }
          />
          <IconCard
            className="xl:ml-10"
            icon={"Lotus"}
            title={"Opinionated Open Source"}
            description={
              "Dandelion is a set of Kubernetes resources that integrate most of the currently available offer of OSS APIs to interact with Cardano."
            }
          />
          <IconCard
            icon={"Butterfly"}
            title={"GitOps friendly"}
            description={
              "Dandelion leverages ArgoCD to develop and operate infrastructure in a continous integration fashion using git repositories."
            }
          />
        </div>
        {/* Right Side Text Group*/}
        <div className="order-1 xl:order-2  flex flex-col justify-center  xl:ml-auto ">
          <div className="flex flex-col md:flex-row xl:flex-col justify-between">
            <h3 className="text-yellow-700 text-4xl md:text-6xl text-right md:text-left xl:text-right ">
              Validate Ideas{" "}
              <span className="block text-yellow-900">Instantly</span>
            </h3>
            <div>
              <p className="text-2xl md:text-4xl title-line-height text-right max-w-15">
                Deploy on{" "}
                <HighlightSpan
                  text={"Kubernetes"}
                  bgColor={"bg-yellow-900"}
                  textColor={"text-yellow-100"}
                  rotate={"rotate-1"}
                />
                to orchestrate a complete catalog of required Cardano services.{" "}
              </p>
              <div className="w-full ml-auto my-5  flex justify-end">
                <button className="gds-btn btn-yellow border border-yellow-900">
                  Get Started
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
