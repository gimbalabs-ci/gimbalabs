import React from "react";
import GetIcon from "../../lib/icons/getIcon";

export default function IconCard({
  icon = "Bonzai",
  title = "Title",
  description = "Description",
  className,
}) {
  return (
    <div
      className={`shadow-lg max-w-13 xl:w-13 bg-offWhite p-5 text-green-900 ${className}`}
    >
      <GetIcon iconName={icon} className="h-8 lg:h-10 w-8 lg:w-10 " />
      <p className="text-lg lg:text-2xl font-heading mt-4 ">{title}</p>
      <p className="mt-2  lg:text-lg text-green-700">{description}</p>
    </div>
  );
}
