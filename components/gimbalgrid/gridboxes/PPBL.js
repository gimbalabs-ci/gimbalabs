import React from "react";
import Link from "next/link";

export default function PPBL() {
  return (
    <div className="h-full grid grid-cols-3 p-3 justify-center items-center">
      <div className="col-span-2 p-3">
        <h1 className="text-2xl">Plutus Project-Based Learning</h1>
        <h2 className="py-1">Enrollment Open Now</h2>
      </div>
      <div className="p-3">
        <a href="https://gimbalabs.instructure.com/enroll/3CFNFB" target="_blank" className="hover:text-purple-700">
          <h2 className="py-1">Sign Me Up!</h2>
        </a>
        <Link href="/mastery-policy">
          <h2 className="py-1 hover:text-purple-700">Learn More</h2>
        </Link>
      </div>
    </div>
  );
}
