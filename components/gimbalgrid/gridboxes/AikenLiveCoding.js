import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function AikenLiveCoding() {
  return (
    <Link href="/blog/011">
      <div className="">
        <Image src="/aiken-cover.png" width={1920} height={1080} />
      </div>
    </Link>
  );
}

