import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function PlaygroundSessionsCard() {
  return (
    <Link href="https://youtube.com/playlist?list=PLCCIAmutGEbeNfD6PEK2Th-CPCSQFg3V-&si=fTArYEyGGtNPPKQK">
      <div className="">
        <Image src="/playground-sessions-card.png" width={1920} height={1080} />
      </div>
    </Link>
  );
}


