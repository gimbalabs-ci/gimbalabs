import React from "react";
import RecircCard from "./RecircCard";
import Link from "next/link";

export default function RecircList({ link, list }) {
  return (
    <div className="relative text-white">
      <div className="bg-black2-900 absolute inset-0" />

      <div className="relative z-10 spacing-y spacing-x ">
        <div className="flex justify-start pb-5 ">
          <div className="title-line-height font-heading text-4xl sm:text-5xl">
            Continued learning
          </div>
          <div className="max-w-13 ml-5">
            <Link href={link}>
              <a>
                <button className="gds-btn border-b border-white  mb-6">
                  View All
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="w-full grid sm:flex sm:flex-wrap   sm:items-center sm:justify-center">
          {list?.map((id) => (
            <RecircCard key={`${id}__recirc_card`} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
}
