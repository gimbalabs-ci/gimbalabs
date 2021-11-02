import Link from "next/link";
import React from "react";
import LargeCards from "./LargeCards";

export default function StarterKitsSection({ csks, colors }) {
  return (
    <section className="text-black2-900 ">
      <div className=" spacing-y flex flex-col ld:flex-row justify-stretch">
        <LargeCards list={csks} colors={colors.blueColors} />
        <div className="max-w-12 ml-5 lg:ml-9 ">
          <p>
            This can describe the starter kit in some detail and you could take
            up a medium amount of space.
          </p>
        </div>
        <div className="max-w-12 mt-5 lg:hidden ml-9 lg:ml-9 ">
          <p>
            This can describe the starter kit in some detail and you could take
            up a medium amount of space.
          </p>
        </div>
        <div className="w-full flex justify-end">
          <div>
            <Link href={`/pbl/csk`}>
              <a>
                <button className="gds-btn bg-blue-600 hover:bg-blue-200 text-blue-100 hover:text-black2-900 border-blue-600">
                  /csk
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
