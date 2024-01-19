import React from "react";
import WithTransfer from "../WithTransfer";
import SolutionsSVG from "../../../lib/icons/SolutionsSVG";
import Link from "next/link";

export default function GBSolutions(props) {
  return (
    <WithTransfer {...props}>
      <Link href="/solutions">
        <div className="w-full h-full grid bg-offWhite text-black2-900 p-5">
          <div className="h-full w-full flex flex-col justify-between items-center">
            <SolutionsSVG className="w-7" />
            <div className="mt-auto">Solutions</div>
          </div>
        </div>
      </Link>
    </WithTransfer>
  );
}
