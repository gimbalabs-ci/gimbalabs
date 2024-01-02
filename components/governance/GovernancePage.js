import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { blueColors, redColors, pinkColors, orangeColors, greenColors } from "../../lib/colors/color";
import PageTitleWithBorder from "../shared_ui/PageTitleWithBorder";
import { AndamioSVG } from "../../lib/icons/AndamioSVG";

export default function GovernancePage() {
  const colors = { blueColors, redColors, pinkColors, orangeColors };

  const router = useRouter();
  const fromGrid = router.asPath.includes("gimbalgrid");
  return (
    <div className="relative bg-offWhite text-black2-900 pt-5">
      <div className="relative px-5">
        <AndamioSVG />
        <PageTitleWithBorder
          borderColor="bg-offWhite"
          title="Gimbalabs PBL Governance"
          subtitle="January 10, 2024 - February 22, 2024"
        />
      </div>
      <div className="items-stretch border-t-2 border-black my-1">
        <div className="spacing-x py-5">
          <p className="text-xl py-3">
            In January + February 2024, Plutus PBL Live Coding will be replaced by Gimbalabs PBL Governance Sessions.
          </p>
          <p className="text-xl py-3">
            PBL Governance Sessions will meet on Wednesdays and Thursdays from 1430 to 1600 UTC, just like Live Coding.
          </p>
          <a href="https://us06web.zoom.us/meeting/register/tZErceCqpzMtG9XldfuPnBQEus5MBivl9OZe">
            <button className="bg-blue-800 text-offWhite py-2 px-10 hover:bg-blue-600">
              Register for Gimbalabs PBL Governance
            </button>
          </a>
          <h2 className="text-2xl py-5 mt-5 border-t border-black">Guiding Questions:</h2>
          <ul className="text-xl">
            <li className="ml-3 py-2">1. What&apos;s next for Plutus PBL?</li>
            <li className="ml-3 py-2">2. What&apos;s next for Gimbalabs?</li>
            <li className="ml-3 py-2">
              3. Are there other &quot;Project-Based Learning&quot; courses we should prioritize building?
            </li>
          </ul>
          <h2 className="text-2xl pt-5 mt-5 border-t border-black">Who Should Participate?</h2>
          <p className="text-xl py-3">Everyone is welcome. In particular, you should join if:</p>
          <ul className="text-xl">
            <li className="ml-3 py-2">
              1. You participated in Plutus PBL 2023 and want to contribute at Gimbalabs or get involved in some
              of our ongoing projects.
            </li>
            <li className="ml-3 py-2">2. You want to help decide on the priorities for Gimbalabs in 2024.</li>
            <li className="ml-3 py-2">
              3. You want to collaborate in practicing{" "}
              <a className="font-bold text-blue-800 hover:text-blue-600" href="https://sociocracy30.org">
                Sociocracy 3.0
              </a>.
            </li>
          </ul>
          <h2 className="text-2xl py-5 mt-5 border-t border-black">Registration:</h2>
          <p className="text-xl py-3">
            Meetings will take place on Zoom. To register,{" "}
            <a
              className="font-bold text-blue-800 hover:text-blue-600"
              href="https://us06web.zoom.us/meeting/register/tZErceCqpzMtG9XldfuPnBQEus5MBivl9OZe"
            >
              click here
            </a>
            .
          </p>
          <p className="text-xl py-3">
            Meetings will take place at the same Zoom link as Live Coding. If you subscribe to the{" "}
            <a className="font-bold text-blue-800 hover:text-blue-600" href="https://gimbalabs.com/calendar">
              Gimbalabs Calendar
            </a>
            , you don&apos;t have to change anything.
          </p>
          <h2 className="text-2xl py-5 mt-5 border-t border-black">Upcoming Sessions:</h2>

          <p className="text-xl py-3">
            #1 - Driver Mapping Workshop (Part 1): Wednesday, 10 January, 2024 at 1430 UTC.
          </p>
          <p className="text-xl py-3">#2 - Driver Mapping Workshop (Part 2): Thursday, 11 January, 2024 at 1430 UTC.</p>
          {/* tell ODIN Discord! */}
          <p className="text-xl py-3">
            <a className="font-bold text-blue-800 hover:text-blue-600" href="'https://discord.gg/Va7DXqSSn8">
              Join Gimbalabs on Discord
            </a>{" "}
            for announcements
          </p>
        </div>
      </div>
    </div>
  );
}
