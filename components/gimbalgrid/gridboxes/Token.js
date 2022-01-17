import React from "react";
import Image from "next/image";

export default function Token() {
  return (
    <div className="h-full flex flex-row p-6 justify-center items-center bg-offWhite">
        <div>
          <Image src="/token/gimbaltoken.jpeg" width={100} height={162} />
        </div>
        <div className="ml-3">
          <h1 className="text-2xl">Gimbal Token</h1>
          <p>Project-Based Learning</p>
        </div>
    </div>
  );
}