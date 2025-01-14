import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function GimbalabsF13Proposals() {
  return (
    <Link href="/blog/012">
      <div className="">
        <Image src="/gimbalabs-proposals-f13.png" width={1920} height={1080} />
      </div>
    </Link>
  );
}