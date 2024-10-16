import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function PPBL2023Japanese() {
  return (
    <Link href="https://ja.plutuspbl.io/">
      <div className="">
        <Image src="/ppbl-2023-japanese.png" width={1920} height={1080} />
      </div>
    </Link>
  );
}


