import React, { useState } from "react";
import { Minus, Plus } from "react-feather";
import GetIcon from "../../lib/icons/getIcon";

export default function Ethos() {
  return (
    <div className="relative mt-9 ">
      {/* Layout */}
      <div className="relative grid py-5 sm:py-9 lg:py-0 lg:grid-cols-2 gap-5 lg:gap-9 spacing-x ">
        {/* Left Side */}
        <div className="z-10 relative h-14 lg:max-w-14 shadow-lg rounded-md gradient-yellow flex flex-col justify-center items-center overflow-hidden">
          <GetIcon
            iconName="Tree2"
            className="absolute  -bottom-8 sm:bottom-0 -left-8 lg:-left-9 xl:-left-8 text-green-900"
          />
          <div className="relative flex flex-col justify-center  text-green-900">
            <div className="text-6xl font-heading title-line-height text-center">
              <p className="text-yellow-700">Our ethos</p>
              <p className="">is open</p>
            </div>
            <div
              role="button"
              className="bee-cursor-dark mt-8 p-5 text-2xl mx-auto  "
            >
              {leftArrow}
              <span>Meet the team</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="z-10 relative w-full h-full ">
          <RightSide />
        </div>
      </div>
      <div className="absolute inset-0 lg:my-5 bg-green-900 z-0"></div>
    </div>
  );
}

const data = [
  {
    id: "01",
    name: "Open Source",
    description:
      "Being the center of ongoing development to leverage tool use to everybody by building a shared understanding and under defined quality standards. Dandelion core offering is and will always be Open Source, allowing external developers, adopters and users to explore and enhance it.",
  },
  {
    id: "02",
    name: "Reliability",
    description:
      "Being the center of ongoing development to leverage tool use to everybody by building a shared understanding and under defined quality standards. Dandelion core offering is and will always be Open Source, allowing external developers, adopters and users to explore and enhance it.",
  },
  {
    id: "03",
    name: "Scalability",
    description:
      "Being the center of ongoing development to leverage tool use to everybody by building a shared understanding and under defined quality standards. Dandelion core offering is and will always be Open Source, allowing external developers, adopters and users to explore and enhance it.",
  },
  {
    id: "04",
    name: "State of the art technology",
    description:
      "Being the center of ongoing development to leverage tool use to everybody by building a shared understanding and under defined quality standards. Dandelion core offering is and will always be Open Source, allowing external developers, adopters and users to explore and enhance it.",
  },
];

const RightSide = () => {
  const [focusId, setFocusId] = useState("01");
  const update = (id) => {
    if (focusId === id) {
      setFocusId("");
    } else {
      setFocusId(id);
    }
  };

  return (
    <div className="h-full relative flex flex-col justify-center ">
      <div className="flex flex-col">
        {data.map((i) => (
          <LineItem
            focusId={focusId}
            update={update}
            key={i.name + "_line"}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

const LineItem = ({ focusId, update, i: { id, name, description } }) => {
  const isFocused = focusId === id;
  return (
    <div
      role="button"
      onClick={() => update(id)}
      className="bee-cursor flex items-start "
    >
      <div className="w-8 py-1 text-center text-yellow-900 text-4xl gradient-yellow ">
        {id}
      </div>
      <div className="ml-3 mb-3 w-full flex items-start border-b-4 border-yellow-300">
        <div className="flex flex-col">
          <div className="text-2xl text-yellow-200">{name}</div>
          {isFocused && (
            <div className="text-yellow-100 text-lg">{description}</div>
          )}
        </div>
        <div className="ml-auto text-yellow-300">
          {isFocused ? <Minus /> : <Plus />}
        </div>
      </div>
    </div>
  );
};

const leftArrow = (
  <svg
    className="stroke-current"
    width="161"
    height="10"
    viewBox="0 0 161 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M159.461 5.31152L1.96094 5.31153M1.96094 5.31153L5.46094 8.81153M1.96094 5.31153L5.46094 1.81153"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
