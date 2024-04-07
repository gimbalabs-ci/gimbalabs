import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function DigestCard() {
  return (
    <Link href="/blog/007">
        <div className="">
            <Image src="/gimbalabs-digest.png" width={940} height={788} />
        </div>
    </Link>
  );
}