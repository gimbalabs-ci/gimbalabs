import Link from "next/link";
import React from "react";
import PageTitle from "/components/shared_ui/PageTitle";
import PageTitleWithBorder from "/components/shared_ui/PageTitleWithBorder";
import Layout from "/components/Layouts/Layout";
import PlutusSvg from "/lib/icons/PlutusSvg";
import VoltaireCard from "../Cards/VoltaireCard";
import CoverCard from "../Cards/CoverCard";
import { AndamioSVG } from "../../lib/icons/AndamioSVG";
import { workshopTopics } from "./data/workshopTopics";

export default function PreparePage({ allProjectsData }) {
  return (
    <div className="relative  bg-offWhite text-black2-900 pt-5">
      <div className="relative px-5">
        <AndamioSVG />
        <PageTitleWithBorder
          className="text-black"
          borderColor="bg-offWhite"
          title={"How to Prepare"}
          subtitle={"What to expect at a CIP-1694 Workshop"}
        />
      </div>
      <div className="bg-yellow-900 py-7 mt-1 border-t-2 border-black">
        <div className="w-11/12 md:w-5/6 lg:w-2/3 mx-auto text-md md:text-xl">
          <h1 className="text-4xl text-offWhite">Each CIP-1694 Workshop Will Cover Seven Topics</h1>
          <p className="text-offWhite py-3"></p>
          <p className="text-offWhite py-3">
            You might notice that for many of these topics, our task is to talk about numbers:
          </p>
          <ul className="text-offWhite list-disc ml-6">
            <li>&quot;What amount of ada...&quot;</li>
            <li>&quot;What limits should be in place...&quot;</li>
            <li>&quot;What quorum and passing % threshold...&quot;</li>
          </ul>
          <p className="text-offWhite py-3">
            But this conversation is about more than just &quot;the numbers&quot;. When we discuss each of these topics,
            our task is to quantify our values. How open do you want the Cardano treasury to be? How can we balance the
            goal of sustaining the treasury in the long-term, while offering meaningful support to everyone contributing
            to it now?
          </p>
          <p className="text-offWhite py-3">
            Each of these topics will serve as an entry-point into deeper conversations, and if you choose to engage in
            these conversations you will set an example for the world to follow.
          </p>
          <p className="text-offWhite py-3">
            To prepare for a CIP-1694 Workshop, read each of the questions below. If you have questions, drop by{" "}
            <a
              className="text-blue-300 font-bold hover:text-orange-400"
              href="https://discord.gg/xMsE68vG"
              target="_blank"
            >
              Gimbalabs Discord to join the conversation
            </a>
            .
          </p>
          <p className="text-offWhite py-3">
            As we prepare for the{" "}
            <a
              className="text-blue-300 font-bold hover:text-orange-400"
              href="https://www.meetup.com/gimbalabs-worcester/events/293145623/"
              target="_blank"
            >
              CIP-1694 Workshop hosted by Gimbalabs on June 8
            </a>
            , we will continue to update this page.
          </p>
          <h1 className="text-2xl md:text-4xl text-offWhite my-5 pt-5 border-t-2 border-offWhite">CIP-1694 Workshop Topics:</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {workshopTopics
              .filter((wt) => !wt.optional)
              .map((wt) => (
                <VoltaireCard key={wt.number} number={wt.number} topic={wt.topic}>
                  <ul className="list-disc ml-5">
                    {wt.questions.map((q, num) => (
                      <li className="text-md md:text-xl py-1 font-bold text-blue-900" key={num}>
                        {q}
                      </li>
                    ))}
                  </ul>
                  <p className="py-3">{wt.details}</p>
                  {wt.bbk.length > 0 && (
                    <a className="text-green-600 font-bold hover:text-orange-800" href={wt.bbk}>
                      Learn More
                    </a>
                  )}
                </VoltaireCard>
              ))}
          </div>
          <h1 className="text-4xl text-offWhite mt-5 py-3">Optional Topics:</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {workshopTopics
              .filter((wt) => wt.optional)
              .map((wt) => (
                <VoltaireCard key={wt.number} number={wt.number} topic={wt.topic}>
                  <ul className="list-disc ml-5">
                    {wt.questions.map((q, num) => (
                      <li className="text-xl py-1 font-bold text-blue-900" key={num}>
                        {q}
                      </li>
                    ))}
                  </ul>
                  <p className="py-3">{wt.details}</p>
                  {wt.bbk.length > 0 && (
                    <a className="text-blue-900 font-bold hover:text-orange-800" href={wt.bbk}>
                      Learn More
                    </a>
                  )}
                </VoltaireCard>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
