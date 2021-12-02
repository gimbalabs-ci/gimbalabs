import React from "react";

export default function Objectives({ color, objectives }) {
  const { list, title } = objectives;

  return (
    <div className="max-w-18 mx-auto spacing-x  flex flex-col justify-between">
      <div className={``}>
        <div className="text-2xl mb-2 font-heading">{title}</div>
      </div>
      <List color={color} list={list} />
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
        <div key={`${index}- `} className={`text-black flex items-center`}>
          <div className={`${c} mr-2 w-5 h-5 flex items-center justify-center`}>
            {index + 1}
          </div>
          {li}
        </div>
      ))}
    </div>
  );
};
