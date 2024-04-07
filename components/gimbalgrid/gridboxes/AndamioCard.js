import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function AndamioCard() {
  return (
    <Link href="https://www.andamio.io/">
      <div className="">
        <Image src="/andamio.jpeg" width={2000} height={1062} />
      </div>
    </Link>
  );
}