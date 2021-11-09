import React from "react";

export default function PlutusSvg({ className }) {
  return (
    <div>
      <svg
        className={`fill-current ${className}`}
        viewBox="0 0 802 794"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.984375 793.697V0.318359H801.189V785.637L293.242 793.697V293.174H510.478V505.788H373.378V713.45H728.972V72.5146H73.1822V143.076H657.791V646.602H433.727V574.493H585.373V215.495H72.8727V793.697H0.984375ZM431.262 362.655V431.36H370.914V362.655H431.262Z"
          className="text-orange-500"
        />
        <path
          d="M144.027 793.697H216.142V293.174H144.027V793.697Z"
          className="text-orange-100"
        />
      </svg>
    </div>
  );
}
export function PlutusSvgBasic({ className }) {
  return (
    <div>
      <svg
        className={`fill-current ${className}`}
        viewBox="0 0 802 794"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.984375 793.697V0.318359H801.189V785.637L293.242 793.697V293.174H510.478V505.788H373.378V713.45H728.972V72.5146H73.1822V143.076H657.791V646.602H433.727V574.493H585.373V215.495H72.8727V793.697H0.984375ZM431.262 362.655V431.36H370.914V362.655H431.262Z"
        />
        <path d="M144.027 793.697H216.142V293.174H144.027V793.697Z" />
      </svg>
    </div>
  );
}
