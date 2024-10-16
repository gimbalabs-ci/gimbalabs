import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function PPBLLiveCodingSession() {
  return (
    <Link href="https://youtube.com/playlist?list=PLCCIAmutGEbdSzLgM8h1fNfl6wSH8sR1q&si=OlHkULgZut8MKCzh">
      <div className="">
        <Image src="/plutuspbl-live-codig-sessions.png" width={1000} height={562} />
      </div>
    </Link>
  );
}