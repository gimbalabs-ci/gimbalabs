import Image from "next/image";
import React from "react";

export default function Card({ title, body, icon, className, children }) {
  return (
    <div className={`flex-1 max-w-13 flex flex-col gap-3 ${className}`}>
      <div className="w-9 h-9 relative z-10">
        <Image
          className={className}
          src={icon}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <h3 className="text-3xl pt-5">{title}</h3>
      <p>{body}</p>
      <div className="w-full relative">{children}</div>
    </div>
  );
}
