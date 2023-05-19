import Link from "next/link";
import React from "react";
import PageTitle from "/components/shared_ui/PageTitle";
import PageTitleWithBorder from "/components/shared_ui/PageTitleWithBorder";
import Layout from "/components/Layouts/Layout";
import PlutusSvg from "/lib/icons/PlutusSvg";
import VoltaireCard from "../Cards/VoltaireCard";
import CoverCard from "../Cards/CoverCard";
import { AndamioSVG } from "../../lib/icons/AndamioSVG";

const workshopTopics = [
  {
    number: 1,
    topic: "On-chain Deposits",
    questions: [
      "What amount of ada should be deposited to submit a governance action?",
      "What amount of ada should be deposited when registering as a DRep?",
    ],
    bbk: "https://github.com/JaredCorduan/CIPs/tree/voltaire-v1/CIP-1694#controlling-the-number-of-active-governance-actions",
  },
  {
    number: 2,
    topic: "Maximum Withdrawal",
    questions: [
      "What limits should be in place for single withdrawals (note three different sub-thresholds) and/or over a specified time period?",
      "",
    ],
    details:
      'Treasury withdrawals are categorized as "small", "medium" and "large". As a community, we will determine the acceptable range (in lovelace) that can be withdrawn from the treasury at each level. We will also decide on voting thresholds for each level. For example, do you think that is appropriate for a "small" treasury withdrawal to require a lower voting approval rate than a "large" one?',
    bbk: "https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md#governance-actions",
  },
  {
    number: 3,
    topic: "Community Tooling",
    questions: [
      "What community and user tooling might be necessary or helpful in launching and maintaining the MVG proposed in CIP-1694?",
      "",
    ],
    bbk: "url",
  },
  {
    number: 4,
    topic: "Treasury Protection",
    questions: [
      "The Cardano Treasury is funded by transaction fees. As Treasury withdrawals become democratized, how might we ensure the Treasury is not drained too quickly?",
      "",
    ],
    bbk: "url",
  },
  {
    number: 5,
    topic: "Action Thresholds",
    questions: ["What quorum and passing % thresholds are required to ratify a governance action?", ""],
    bbk: "https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md#governance-actions",
  },
  {
    number: 6,
    topic: "Action Expiration",
    questions: [
      "If a governance action is not ratified, how many epochs should a governance action stay active before it expires and the deposit returned to the proposer?",
      "",
    ],
    bbk: "url",
  },
  {
    number: 7,
    topic: "DReps Incentives",
    questions: ["Should DReps be incentivized?", "And if so, how much, and how should the payments be managed?"],
    bbk: "url",
  },
  {
    number: 8,
    topic: "Metadata Formats (optional)",
    questions: [
      "Governance actions and the votes use new metadata fields in the form of URLs and integrity hashes (mirroring the metadata structure for stake pool registration). What should be included as mandatory metadata for governance actions?",
      "",
    ],
    bbk: [
      "https://github.com/JaredCorduan/CIPs/tree/voltaire-v1/CIP-1694#new-metadata-structures",
      "https://gist.github.com/Quantumplation/56ef2ffccb05f5d2974fd17240dc406c",
    ],
  },
  {
    number: 9,
    topic: "Constitutional Committee Compensation (optional)",
    questions: ["Should the Constitutional Committee be compensated for their time, and if so how?", ""],
    bbk: "url",
  },
];

export default function PreparePage({ allProjectsData }) {
  return (
    <div className="relative  bg-offWhite text-black2-900 pt-5">
      <div className="relative px-5">
        <AndamioSVG />
        <PageTitleWithBorder
          className="text-black"
          borderColor="bg-offWhite"
          title={"CIP-1694 Workshop Prep"}
          subtitle={"Do your research - everyone is counting on you."}
        />
      </div>
      <div className="bg-yellow-900 py-7 mt-1 border-t-2 border-black">
        <div className="w-3/4 mx-auto text-xl">
          <h1 className="text-4xl text-offWhite">Each CIP-1694 Workshop will focus on a list of seven topics</h1>
          <p className="text-offWhite py-3">
            You might notice that for many of these topics, our task is to talk about numbers:
          </p>
          <ul className="text-offWhite list-disc ml-6">
            <li>&quot;What amount of ada...&quot;</li>
            <li>&quot;What limits...&quot;</li>
            <li>&quot;What percentage of votes...&quot;</li>
          </ul>
          <p className="text-offWhite py-3">
            But this conversation is about more than just &quot;the numbers&quot;. When we discuss each of
            these topics, our task is to quantify our values. How open do you want the Cardano treasury to be? How can
            we balance the goal of sustaining the treasury in the long-term, while offering meaningful support to
            everyone contributing to it now?
          </p>
          <p className="text-offWhite py-3">
            Each of these topics will serve as an entry-point into deeper conversations, and if we choose to engage in these conversations with open-minds, and by listening first, we will set an example for the world to follow.
          </p>
          <h1 className="text-4xl text-offWhite py-3">Here are the topics:</h1>
          <div className="flex flex-col">
            {workshopTopics.map((wt) => (
              <VoltaireCard key={wt.number} number={wt.number} topic={wt.topic}>
                {wt.questions.map((q, num) => (
                  <p className="text-2xl py-1 font-bold text-blue-900" key={num}>
                    {q}
                  </p>
                ))}
                <p className="font-bold py-3 text-lg">{wt.details}</p>
                <a href={wt.bbk}>Link</a>
              </VoltaireCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
