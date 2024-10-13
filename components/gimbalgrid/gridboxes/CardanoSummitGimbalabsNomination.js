import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function CardanoSummitGimbalabsNomination() {
  return (
    <Link href="/blog/009">
        <div className="">
            <Image src="/cardano_summit_gimbalabs_nomination.gif" width={940} height={788} />
        </div>
    </Link>
  );
}


