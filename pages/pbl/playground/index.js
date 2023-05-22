import Link from "next/link";
import React from "react";
import PageTitleWithBorder from "../../../components/shared_ui/PageTitleWithBorder";
import Layout from "../../../components/Layouts/Layout";
import PlaygroundSvg from "../../../lib/icons/PlaygroundSvg";

export default function index({ allPlaygroundData }) {
  return (
    <Layout footerBg="bg-black2-900">
      <div className="pb-9">
        <PageTitleWithBorder title={"Gimbalabs Playground"} subtitle={"Where ideas get tested."}>
          <PlaygroundSvg className="w-7 text-black2-900" />
        </PageTitleWithBorder>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 mx-auto pb-5 gap-5">
          <div className="w-full mx-auto">
            <p className="text-2xl py-3">Gimbalabs Playground meets every Tuesday from 1800-1930 UTC.</p>
            <p className="text-2xl py-3">
              Gimbalabs Playground meets every Tuesday from 1800-1930 UTC. You can{" "}
              <a
                className="text-blue-900 font-bold hover:text-orange-800"
                href="https://us06web.zoom.us/meeting/register/tZYoduuqpjsqGtdzMHXoRVVnJqcQGOtpQRQv"
                target="_blank"
              >
                register to attend the meeting here
              </a>
              . You can also subscribe to the Gimbalabs Calendar{" "}
              <Link href="/calendar">
                <a className="text-blue-900 font-bold hover:text-orange-800">here</a>
              </Link>
              .
            </p>
          </div>
          <div>
            <iframe
              width="100%"
              height="480"
              src="https://www.youtube.com/embed/videoseries?list=PLCCIAmutGEbeNfD6PEK2Th-CPCSQFg3V-"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="w-11/12 mx-auto border-t-2 border-black pt-3">
          <p className="text-2xl py-3">
            Anyone can sign up to present at Gimbalabs Playground by accessing this Miro Board:
          </p>
          <iframe
            width="100%"
            height="1000"
            src="https://miro.com/app/live-embed/o9J_lkwgRGI=/"
            frameborder="1"
            scrolling="yes"
            allow="fullscreen; clipboard-read; clipboard-write"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}
