import React from "react";

export default function Objectives({ color, objectives }) {
  const { list, title } = objectives;

  return (
    <div className="mt-6 spacing-x flex flex-col items-start justify-between">
      <div className="w-full max-w-16 mx-auto">
        <div>
          <div className="text-2xl md:text-4xl mb-4 font-heading">{title}</div>
        </div>
        <List color={color} list={list} />
      </div>
    </div>
  );
}
const colors = {
  RED: "bg-red-100",
  BLUE: "bg-blue-100",
  ORANGE: "bg-orange-100 ",
  GREEN: "bg-green-300",
};
const List = ({ list, color }) => {
  const c = colors[color];
  return (
    <div>
      {list.map((li, index) => (
        <div key={`${index}- `} className={`text-black flex  `}>
          <div className={`${c} mr-2 w-5 h-5 flex items-center justify-center`}>
            {index + 1}
          </div>
          <div className="text-gray-800 flex-1 gds-body-medium -mt-1 mb-3">
            {li}
          </div>
        </div>
      ))}
    </div>
  );
};
