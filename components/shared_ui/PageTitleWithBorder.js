import React from "react";

export default function PageTitleWithBorder({
  title,
  subtitle,
  borderColor = "bg-black2-900",
  className = "text-black2-900",
}) {
  return (
    <div className={`flex pt-9 pb-5  flex-col ${className} `}>
      <h1 className="gg-title spacing-x   ">{title}</h1>
      {subtitle && (
        <div className="gg-subtitle spacing-x pt-2 pb-3   ">{subtitle}</div>
      )}
      <div className={`${borderColor} h-1  w-full my-1 `}></div>
    </div>
  );
}
