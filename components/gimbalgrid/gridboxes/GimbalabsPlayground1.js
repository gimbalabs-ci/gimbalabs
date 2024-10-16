import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function GimbalabsPlayground1() {
  return (
    <Link href="https://youtube.com/playlist?list=PLCCIAmutGEbeNfD6PEK2Th-CPCSQFg3V-&si=koLGsQ320_Mao0Uc">
        <div className="">
            <Image src="/gimbalabs-playground-season-4.png" width={940} height={788} />
        </div>
    </Link>
  );
}