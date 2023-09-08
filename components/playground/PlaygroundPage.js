import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { blueColors, redColors, pinkColors, orangeColors, greenColors } from "../../lib/colors/color";
import PageTitleWithBorder from "../shared_ui/PageTitleWithBorder";
import { AndamioSVG } from "../../lib/icons/AndamioSVG";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

export default function PlaygroundPage() {
  const colors = { blueColors, redColors, pinkColors, orangeColors };

  const router = useRouter();
  const fromGrid = router.asPath.includes("gimbalgrid");
  return (
    <div className="relative bg-offWhite text-black2-900 pt-5">
      <div className="relative px-5">
        <AndamioSVG />
        <PageTitleWithBorder
          borderColor="bg-offWhite"
          title="Gimbalabs Playground, Season 3"
          subtitle="September 12, 2023 - May 21, 2024"
        />
      </div>
      <div className="items-stretch border-t-2 border-black my-1">
        <div className="mx-auto">
          <p className="text-3xl font-thin text-center my-5">Meets Tuesdays September 12, 2023 - May 21, 2024</p>
          <p className="text-3xl font-thin text-center my-5">1800 UTC</p>
          <p className="text-2xl font-bold text-center my-5 text-indigo-800 hover:text-blue-600">
            <a href="https://us06web.zoom.us/meeting/register/tZYoduuqpjsqGtdzMHXoRVVnJqcQGOtpQRQv">Register/Join with Zoom</a>
          </p>
        </div>

        <div className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 pb-5">
          <div className="p-5 bg-red-900 text-offWhite">
            <h1 className="text-xl md:text-4xl">What is Gimbalabs Playground?</h1>
            <p className="text-sm md:text-xl my-5">
              Gimbalabs Playground is an open space where anyone can lead a discussion on any topic. In the past,
              Playground presenters have shared projects they are working on, ideas they want to develop into real
              projects, and technical workshops about how Cardano works.
            </p>
            <p className="text-sm md:text-xl my-5">
              If you are building on Cardano and want to get feedback from our community, you are invited to present at
              Playground.
            </p>
          </div>
          <div className="p-5 bg-blue-900 text-offWhite">
            <h1 className="text-xl md:text-4xl">How to Participate</h1>
            <p className="pt-2 text-sm md:text-xl">Use the Commuity Miro Board below to:</p>
            <ul className="mt-2 text-sm md:text-xl list-decimal">
              <li className="ml-6 py-2">Book a presentation slot</li>
              <li className="ml-6 py-2">Review prior Playground sessions</li>
            </ul>
          </div>
          <div className="p-5 bg-blue-900 text-offWhite">
            <h1 className="text-xl md:text-4xl">Playground Principles</h1>
            <ul className="my-5 text-sm md:text-xl list-decimal">
              <li className="ml-6 py-2">Anyone is welcome to be a Playground Presenter.</li>
              <li className="ml-6 py-2">Peer review and feedback make projects better.</li>
              <li className="ml-6 py-2">Great collaborations take root when people play. Debating our ideas or tinkering with technology are examples of ways to play!</li>
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
          <h2 className="text-lg md:text-2xl text-center pb-3">
            ICYMI: View Playground Meetings and more on Gimbalabs YouTube:
          </h2>
          <p className="text-center text-2xl">
            <a href="https://www.youtube.com/@gimbalabs/streams" className="font-bold text-blue-700 hover:text-orange-800">
              Gimbalabs Livestreams
            </a>
          </p>
        </div>

        <div className="w-11/12 mx-auto border-t-2 border-black py-3">
          <h1 className="text-xl md:text-6xl pt-5 pb-5 text-center">Gimbalabs Playground Miro Board</h1>
          <p className="text-sm md:text-2xl font-bold text-center mb-5 hover:text-green-600">
            Gimbalabs Playground Meets every Tuesday starting at 1800 UTC.
          </p>
          <iframe
            className="border-2 border-black rounded-lg p-3"
            width="100%"
            height="1000"
            src="https://miro.com/app/live-embed/uXjVMnYs6P8=/?moveToWidget=3458764563494604015&cot=14"
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
