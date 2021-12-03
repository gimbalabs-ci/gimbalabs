import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <div className="flex flex-col justify-between items-center">
      <h1>404</h1>

      <Link href="/gimbalgrid">Go Home</Link>
    </div>
  );
}
