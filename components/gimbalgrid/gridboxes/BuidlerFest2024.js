import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function BuidlerFest2024() {
  return (
    <Link href="https://youtu.be/9jUXvyRPc58?si=tPS9G46FQj609XCe">
      <div className="">
        <Image src="/buidler.png" width={2000} height={1062} />
      </div>
    </Link>
  );
}