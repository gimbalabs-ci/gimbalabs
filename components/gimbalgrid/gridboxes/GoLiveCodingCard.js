import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function GoLiveCodingCard() {
  return (
    <Link href="https://youtube.com/playlist?list=PLCCIAmutGEbcUiIygqbkC25ibEVjWXDpf&si=9KLD3RcLg7wV-X0x">
      <div className="">
        <Image src="/cardano-go.png" width={1000} height={562} />
      </div>
    </Link>
  );
}