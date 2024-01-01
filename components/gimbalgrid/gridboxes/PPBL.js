import React from "react";
import Link from "next/link";

export default function PPBL() {
  return (
    <div className="group bg-blue-800 text-yellow-400 flex flex-col justify-center items-center">
      <div className="col-span-2 p-3">
        <h1 className="text-6xl py-3">Project-Based Learning (PBL)</h1>
        <h1 className="text-2xl py-3">Plutus PBL will return in March</h1>
        <h1 className="text-2xl py-3">Want to Contribute?</h1>
        <p className="text-xl py-3">Gimbalabs PBL Governance Sessions: Wednesdays and Thursdays from 2024-01-10 thru 2024-02-22</p>

        <button className="bg-black text-white p-5 hover:bg-blue-800"><a href="https://plutuspbl.io" target="_blank">Did you participate in PPBL 2023? Here is what&apos;s next.</a></button>
      </div>
    </div>
  );
}
