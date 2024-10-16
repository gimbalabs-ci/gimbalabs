import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function PPBL2024() {
  return (
    <Link href="https://plutuspbl.io/">
      <div className="">
        <Image src="/ppbl-2024.png" width={1920} height={1080} />
      </div>
    </Link>
  );
}


