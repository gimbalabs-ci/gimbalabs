import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function GimbalabsPlaygroundOdin() {
  return (
    <Link href="https://youtu.be/pKg1LNzbV_c?si=Ce1S4DDLvIwVergb">
        <div className="">
            <Image src="/playground-odin.png" width={940} height={788} />
        </div>
    </Link>
  );
}