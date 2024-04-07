import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function OpenSpacesCard() {
  return (
    <Link href="https://youtube.com/playlist?list=PLCCIAmutGEbdijNNWGEfJMTpn9KVttV3t&si=j-sgYc5_x3YH8TQO">
      <div className="">
        <Image src="/open-spaces-card-1.png" width={1920} height={1080} />
      </div>
    </Link>
  );
}


