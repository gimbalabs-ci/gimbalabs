import React from "react";
import GetIcon from "../../lib/icons/getIcon";

const data = [
  {
    icon: "Tree1",
    title1: "DevOps pipelines",
    title2: "to get you integrated in Cardano infrastructure",
    link: "/",
    button: "explore",
    text:
      "Our flexible GitOps recipe lets DevOps engineers to focus on integrating Cardano infrastructure with their projects and extending them to fit the needs of their teams and customers.",
  },
  {
    icon: "KoiFish",
    title1: "Ride with us",
    title2:
      "we will maintain and evolve our platform so you can focus on yours",
    link: "/",
    button: "explore",
    text:
      "Launching, maintaining and evolving the platform of Cardano applications required to fully integrate with the blockchain, is a complicated Ops business, and it requires to be tackled by subject matter experts, but don’t worry we’ll take care for every minor and major platform update so your team can focus on stuff that matters most to you.",
  },
];

export default function ThreeColList() {
  return (
    <div>
      {data.map((i) => {
        return (
          <div
            key={i.title1 + "_tcl"}
            className="spacing-x py-9 w-full grid lg:grid-cols-2 border-b border-green-100"
          >
            <div className="w-full flex flex-col sm:flex-row justify-center  lg:justify-between items-start">
              <div className="text-green-900 w-11">
                <GetIcon iconName={i.icon} />
              </div>
              <div className="  w-full md:w-14">
                <div className="text-4xl font-heading  text-green-700  title-line-height">
                  <p className="text-green-500">{i.title1}</p>
                  <p>{i.title2}</p>
                </div>
                <div>
                  <button className="mt-5 gds-btn bg-green-900 text-offWhite">
                    {i.button}
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-7 lg:mt-0 lg:ml-auto text-xl w-full lg:max-w-13 text-green-800  ">
              {i.text}
            </div>
          </div>
        );
      })}
    </div>
  );
}
