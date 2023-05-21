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
          subtitle={"Here is what to expect at a CIP-1694 Workshop"}
        />
      </div>
      <div className="bg-yellow-900 py-7 mt-1 border-t-2 border-black">
        <div className="w-5/6 mx-auto text-xl">
          <h1 className="text-4xl text-offWhite">Each Workshop Will Cover Seven Topics</h1>
          <p className="text-offWhite py-3">

          </p>
          <h1 className="text-4xl text-offWhite">List of Topics</h1>
          <p className="text-offWhite py-3">
            You might notice that for many of these topics, our task is to talk about numbers:
          </p>
          <ul className="text-offWhite list-disc ml-6">
            <li>&quot;What amount of ada...&quot;</li>
            <li>&quot;What limits...&quot;</li>
            <li>&quot;What percentage of votes...&quot;</li>
          </ul>
          <p className="text-offWhite py-3">
            But this conversation is about more than just &quot;the numbers&quot;. When we discuss each of these topics,
            our task is to quantify our values. How open do you want the Cardano treasury to be? How can we balance the
            goal of sustaining the treasury in the long-term, while offering meaningful support to everyone contributing
            to it now?
          </p>
          <p className="text-offWhite py-3">
            Each of these topics will serve as an entry-point into deeper conversations, and if we choose to engage in
            these conversations with open-minds, and by listening first, we will set an example for the world to follow.
          </p>
          <h1 className="text-4xl text-offWhite py-3">Here are the topics:</h1>
          <div className="grid grid-cols-2 gap-4">
            {workshopTopics.map((wt) => (
              <VoltaireCard key={wt.number} number={wt.number} topic={wt.topic}>
                <ul className="list-disc ml-5">
                  {wt.questions.map((q, num) => (
                    <li className="text-xl py-1 font-bold text-blue-900" key={num}>
                      {q}
                    </li>
                  ))}
                </ul>
                <p className="py-3">{wt.details}</p>
                <a href={wt.bbk}>Link</a>
              </VoltaireCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
