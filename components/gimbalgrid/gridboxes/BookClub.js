import React, { useState } from "react";
import Image from "next/image";

export default function BookClub(props) {
  return (
    <div className="p-4">
      <div className="flex flex-row">
        <div className="w-1/2 mx-auto my-auto text-center">
          <h2 className="text-2xl">
            <a href="https://www.akpress.org/emergentstrategy.html">
              Emergent Strategy
            </a>
          </h2>
          <p>
            by{" "}
            <a
              href="https://adriennemareebrown.net/"
              className="text-blue-900 hover:text-blue-700"
            >
              adrienne maree brown
            </a>
          </p>
          <a href="https://www.akpress.org/emergentstrategy.html">
            <Image src="/es.jpg" width="131" height="206" />
          </a>
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl text-right">
            Coming in January: join the conversation at Gimbalabs Book Club
          </h1>
          <a href="https://us06web.zoom.us/meeting/register/tZ0pdO-qqj4qGtwCmTAfk63oNLo_DkI7C0HS">
            <div className="my-2 p-2 bg-blue-900 hover:bg-blue-700 text-white font-bold">
              <p>
                Register for Wednesday meetings weekly at 2000utc starting
                2023-01-04
              </p>
            </div>
          </a>
          <a href="https://us06web.zoom.us/meeting/register/tZwpf-ippzIvGtRadEj9TUUKeGlq-qcfosii">
            <div className="my-2 p-2 bg-blue-900 hover:bg-blue-700 text-white font-bold">
              <p>
                Register for Thursday meetings weekly at 1600utc starting
                2023-01-05
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
