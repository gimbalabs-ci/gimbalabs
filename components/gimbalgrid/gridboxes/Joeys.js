import React from "react";
import Image from "next/image"

export default function Joeys() {
  return (
    <a href="https://nft.joeyshotsauce.com">
      <div className="flex flex-col p-6 justify-center items-center bg-offWhite text-black">
        <Image src="/projects/joey-logo.png" width={200} height={200} />
        <h1 className="text-xl text-center pt-4">NFTs</h1>
        <h1 className="text-xl text-center pt-2">Coming Soon!</h1>
      </div>
    </a>
  );
}