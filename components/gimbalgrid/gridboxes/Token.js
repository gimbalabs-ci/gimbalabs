import React from "react";
import Image from "next/image";

export default function Token() {
  return (
    <div className="h-full flex flex-col p-6 justify-center items-center">
        <Image src="/token/gimbaltoken.jpeg" width={100} height={162} />
        <h1 className="text-2xl text-white text-center mt-3">Gimbal Token</h1>
    </div>
  );
}