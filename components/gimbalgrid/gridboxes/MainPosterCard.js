import Image from "next/image";
import React from "react";

export default function MainPosterCard() {
  return (
    <div className="">
        <Image src="/main-poster.png" width={640} height={834} />
    </div>
  );
}