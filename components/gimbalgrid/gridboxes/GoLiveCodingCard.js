import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function GoLiveCodingCard() {
  return (
    <Link href="/blog/006">
      <div className="">
        <Image src="/go-live-coding.jpeg" width={1000} height={562} />
      </div>
    </Link>
  );
}