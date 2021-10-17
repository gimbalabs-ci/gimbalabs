import React from "react";
import RecircCard from "./RecircCard";
import Link from "next/link";

export default function RecircList({ list }) {
  return (
    <div className="relative">
      <div className="bg-green-900 absolute inset-0" />

      <div className="relative z-10 spacing-y spacing-x ">
        <div className="flex justify-between pb-5 text-offWhite">
          <div className="max-w-13 font-heading text-2xl">
            Featured Project Based Learning
          </div>
          <div className="max-w-13">
            <Link href="/pbl">
              <a>
                <button className="gds-button">View All</button>
              </a>
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-wrap   items-center justify-center">
          {list?.map((id) => (
            <RecircCard key={`${id}__recirc_card`} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
}
