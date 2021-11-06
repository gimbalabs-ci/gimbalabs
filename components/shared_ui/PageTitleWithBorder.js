import React from "react";

export default function PageTitleWithBorder({
  title,
  subtitle,
  borderColor = "bg-black2-900",
  className = "text-black2-900",
  children,
}) {
  return (
    <div className={`flex pb-5  flex-col ${className} `}>
      <div className="flex flex-wrap sm:flex-no-wrap  items-stretch">
        <div className="pt-9">
          <h1 className="gg-title spacing-x   ">{title}</h1>
          {subtitle && (
            <div className="gg-subtitle spacing-x pt-2 pb-3   ">{subtitle}</div>
          )}
        </div>
        {children && (
          <div className="sm:border-l-4 border-black2-900 flex flex-col justify-center items-center p-5 w-full sm:w-9 ml-auto ">
            {children}
          </div>
        )}
      </div>
      <div className={`${borderColor} h-1  w-full mb-1 `}></div>
    </div>
  );
}
