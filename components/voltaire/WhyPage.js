import Link from "next/link";
import React from "react";
import PageTitle from "/components/shared_ui/PageTitle";
import PageTitleWithBorder from "/components/shared_ui/PageTitleWithBorder";
import Layout from "/components/Layouts/Layout";
import PlutusSvg from "/lib/icons/PlutusSvg";
import { AndamioSVG } from "../../lib/icons/AndamioSVG";
import { actionList } from "./data/actionList";
import ContributeToThis from "./ContributeToThis";

export default function WhyPage({ allProjectsData }) {
  return (
    <div className="relative bg-offWhite text-black2-900 pt-5">
      <div className="relative px-5">
        <AndamioSVG />
        <PageTitleWithBorder
          className="text-black"
          borderColor="bg-offWhite"
          title={"Why CIP-1694 Matters"}
          subtitle={"This is practice. We need it."}
        />
      </div>
      <div className="bg-offWhite py-7 mt-1 border-t-2 border-black">
        <div className="w-5/6 mx-auto">
          <h1 className="text-4xl pb-5">What is the scope of CIP-1694?</h1>
          <p>
            It is limited - and this is a good thing!! We will get these decisions right - or we will not - and then we
            will keep building.
          </p>
          <p>
            Source: https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md - all of the following is
            quoted directly from the current draft of CIP-1694
          </p>
          <p>
            At the heart of CIP-1694 is a proposal to expand the protocol to do 7 more things, called governance
            actions. For each one there are decisions to be made. For each one there is tech we need. But at the end of
            it all, we're going to summarize all of our ideals into the structured ability to take these actions
            on-chain.
          </p>
          <p>
            For Cardano, this is monumental! For the world, these are small decisions. For all of us, we will be able to
            fork this thing...
          </p>
        </div>

        <div class="w-5/6 mx-auto border-t-2 border-blue-900 mt-5">
          <h1 className="text-4xl my-5">Minimum Viable Governance = 7 New On-Chain Events</h1>
          <p>The end of result of CIP-1694 will be to add new goverance functionality to the Cardano blockchain. When this step is complete, we will be able to:</p>
          <ul className="list-disc ml-5">
            <li>Assess the success of the protocol using on-chain evidence</li>
            <li>Use the resulting system to make other kinds of decisions</li>
            <li>Fork the Cardano protocol and tweak governance parameters for other use cases</li>
          </ul>
          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2">
            {actionList.map((action, index) => (
              <div className="flex flex-row border-2 border-yellow-900 m-2" key={index}>
                <div className={`flex bg-blue-900 text-offWhite w-8 mr-0 text-4xl justify-center items-center`}>
                  <p>{index + 1}</p>
                </div>
                <div className="p-2 w-full">
                  <h2 className="text-2xl py-2">{action.action}</h2>
                  <p className="py-2">{action.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-4/5 mx-auto">
          <h1 className="text-4xl py-5">Why is this the scope of CIP-1694?</h1>
          <p>Does governance work where you live?</p>
          <p>How can we improve it?</p>
          <p>Yes, we need new systems - and we need practice!</p>
          <p>ADD VIDEO ON MONDAY</p>
          <p>
            A blockchain is valuable if people use it. If we can show that this blockchain can be used effectively in
            this new way, what happens to the value of it?
          </p>
        </div>

        <div className="flex flex-row gap-6 w-11/12 mx-auto">
          <div className="w-1/2 mx-auto bg-blue-600 text-offWhite my-5 p-5 text-lg">
            <h1 className="text-4xl">Got Questions?</h1>
            <h1 className="text-2xl text-yellow-300">What else do you want to see in these docs?</h1>
            <p>Join a workshop</p>
            <p>Prepare in Gimbalabs Discord</p>
            <p>Community Q&A: dates on calendar</p>
          </div>
          <ContributeToThis />
        </div>
      </div>
    </div>
  );
}
