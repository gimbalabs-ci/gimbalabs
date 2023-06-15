import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { blueColors, redColors, pinkColors, orangeColors, greenColors } from "../../lib/colors/color";
import PageTitleWithBorder from "../shared_ui/PageTitleWithBorder";
import { AndamioSVG } from "../../lib/icons/AndamioSVG";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

export default function CarnivalPage() {
  const colors = { blueColors, redColors, pinkColors, orangeColors };

  const router = useRouter();
  const fromGrid = router.asPath.includes("gimbalgrid");
  return (
    <div className="relative bg-offWhite text-black2-900 pt-5">
      <div className="relative px-5">
        <AndamioSVG />
        <PageTitleWithBorder
          borderColor="bg-offWhite"
          title="Gimbalabs Carnival 2023"
          subtitle="Open spaces for learning together and building in public"
        />
      </div>
      <div className="items-stretch border-t-2 border-black my-1">
        <div className="mx-auto">
          <p className="text-3xl font-thin text-center my-5">Every Tuesday from June 13 - September 5</p>
          <p className="text-3xl font-thin text-center my-5">1800 UTC</p>
          <p className="text-2xl font-bold text-center my-5 hover:text-green-600">
            <a href="https://us06web.zoom.us/meeting/register/tZYoduuqpjsqGtdzMHXoRVVnJqcQGOtpQRQv">Join with Zoom</a>
          </p>
        </div>

        <div className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 pb-5 border-b-2 border-black">
          <div className="p-5 bg-red-900 text-offWhite">
            <h1 className="text-xl md:text-4xl">What is Gimbalabs Carnival?</h1>
            <p className="text-sm md:text-xl my-5">
              We are taking a break from Gimbalabs Playground from June through August. Instead, we are creating spaces
              for people to gather, to build and to learn together.
            </p>
            <p className="text-sm md:text-xl my-5">
              Carnivals are social events, and they are more fun if people show up! Carnival is our summer experiment in
              how we can gather to build and learn in public.
            </p>
          </div>
          <div className="p-5 bg-blue-900 text-offWhite">
            <h1 className="text-xl md:text-4xl">How to Participate</h1>
            <p className="pt-2 text-sm md:text-xl">Use the Commuity Miro Board below to:</p>
            <ul className="mt-2 text-sm md:text-xl list-decimal">
              <li className="ml-6 py-2">Propose an Open Space</li>
              <li className="ml-6 py-2">Provide a space to meet</li>
              <li className="ml-6 py-2">Express interest</li>
              <li className="ml-6 py-2">Show up</li>
            </ul>
          </div>
          <div className="p-5 bg-blue-900 text-offWhite">
            <h1 className="text-xl md:text-4xl">Open Spaces: Four Principles</h1>
            <ul className="my-5 text-sm md:text-xl list-decimal">
              <li className="ml-6 py-2">Whoever comes are the right people.</li>
              <li className="ml-6 py-2">Whatever happens is the only thing that could have happened.</li>
              <li className="ml-6 py-2">When it starts is the right time.</li>
              <li className="ml-6 py-2">When it&apos;s over it&apos;s over.</li>
            </ul>
          </div>
          <div className="p-5 bg-red-900 text-offWhite">
            <h1 className="text-xl md:text-4xl">Learn + Build in Public</h1>
            <p className="text-sm md:text-xl my-5">
              We are getting together to learn and build in public. When we do, people make connections between each
              other and their ideas.
            </p>
            <p className="text-xl my-5">What do you want to learn about?</p>
          </div>
        </div>
        <div className="w-11/12 md:w-1/2 mx-auto my-5">
          <h2 className="text-lg md:text-2xl text-center pb-3">ICYMI: Watch the Carnival kickoff meeting (2023-06-13)</h2>
          <LiteYouTubeEmbed id="CkrNeKM9osk" title="Carnival Kickoff" />
        </div>

        <div className="w-11/12 mx-auto border-t-2 border-black py-3">
          <h1 className="text-xl md:text-6xl pt-5 pb-5 text-center">Carnival Community Miro Board</h1>
          <p className="text-sm md:text-2xl font-bold text-center mb-5 hover:text-green-600">
            Gimbalabs Carnival Meets on Tuesday starting at 1800 UTC.
          </p>
          <p className="text-sm md:text-2xl font-bold text-center my-5 hover:text-green-600">
            All meeting links are posted on this Miro Board:
          </p>
          <iframe
            className="border-2 border-black rounded-lg p-3"
            width="100%"
            height="1000"
            src="https://miro.com/app/live-embed/uXjVMCWrDms=/?moveToViewport=-6131,-9198,35064,28299&embedId=898576388586"
            frameborder="1"
            scrolling="no"
            allow="fullscreen; clipboard-read; clipboard-write"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
