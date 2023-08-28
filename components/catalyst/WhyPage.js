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
          title={"7 New Governance Actions"}
          subtitle={"Minimum Viable Goverance (MVG) is just a start."}
        />
      </div>
      <div className="bg-offWhite py-7 mt-1 border-t-2 border-black">
        <div className="w-11/12 md:w-5/6 lg:w-2/3 mx-auto">
          <h1 className="text-4xl pb-5">What is &quot;Minimum Viable Governance&quot; (MVG)?</h1>
          <p className="text-xl py-2">
            At the heart of CIP-1694 is a proposal to add seven on-chain governance actions to Cardano. These seven
            actions provide a framework for &quot;Minimum Viable Governance&quot; (MVG). For each action, there are
            decisions that we need to make.
          </p>
        </div>

        <div class="w-11/12 md:w-5/6 lg:w-2/3 mx-auto border-t-2 border-blue-900 mt-5">
          <h1 className="text-2xl md:text-4xl mt-5">
            CIP-1694 = Minimum Viable Governance = 7 New On-Chain Governance Actions
          </h1>
          <p className="text-xl mb-5">
            Source: quoted directly from the{" "}
            <a
              className="text-blue-900 font-bold hover:text-blue-600"
              href="https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md"
              target="_blank"
            >
              current draft of CIP-1694
            </a>
            .
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {actionList.map((action, index) => (
              <div className="flex flex-row border-2 border-blue-900" key={index}>
                <div className={`flex bg-blue-900 text-offWhite w-8 m-1 text-4xl justify-center items-center`}>
                  <p>{index + 1}</p>
                </div>
                <div className="p-3 w-full">
                  <h2 className="text-2xl pb-2">{action.action}</h2>
                  <p className="py-2">{action.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-11/12 md:w-5/6 lg:w-2/3 mx-auto border-t-2 border-blue-900 mt-5 text-xl">
          <h1 className="text-4xl my-5">Why is this the scope of CIP-1694?</h1>
          <p className="pb-3">
            The end of result of CIP-1694 will be to add new goverance functionality to the Cardano blockchain. When
            this step is complete, we will be able to:
          </p>
          <ul className="list-disc ml-8">
            <li className="py-2">Assess the success of the protocol using on-chain evidence</li>
            <li className="py-2">Use the resulting system to make more decisions</li>
            <li className="py-2">Fork the Cardano protocol and tweak governance parameters for other use cases</li>
          </ul>
          <p className="py-3">
            A blockchain is valuable if people use it. CIP-1694 will dramatically enhance the technical capabilities of
            Cardano. If, collectively, we can show that this blockchain can be used effectively for global
            decision-making, then what happens to the value of it?
          </p>
        </div>
        <div className="w-11/12 md:w-5/6 lg:w-2/3 mx-auto border-t-2 border-blue-900 my-5 text-xl">
          <h1 className="text-4xl my-5">How Will You Participate?</h1>
          <p className="text-2xl font-bold text-blue-900 hover:text-blue-600">
            <Link href="/voltaire-is-here/participate">Sign up for a CIP-1694 Governance Workshop</Link>
          </p>
        </div>

        <div className="w-11/12 md:w-5/6 lg:w-2/3 mx-auto border-t-2 border-blue-900 my-5 text-xl">
          <h1 className="text-4xl my-5">What Comes Next?</h1>
          <p className="text-xl py-2">
            To start, on-chain governance actions will be limited in scope - and this is a good thing! Whatever the
            results of CIP-1694 might be, our decisions will only serve as a starting point for more comprehensive
            governance. It&apos;s a big project, and the hypothesis is that if we learn by building a system of minimal
            viable governance together, then we will be able to build a more robust one over time.
          </p>
          <p className="text-xl py-2">
            For Cardano, this is monumental. Globally, this is only a starting point. Every one of us has the
            opportunity to help make decisions based on evidence, and if we are unhappy with the results, to use our
            influence to change the system. For example, one of the on-chain governance actions is a motion of
            no-confidence in the new Constitutional Committee. If you are unhappy with the Constitutional Committee, you
            will be able to vote for their removal!
          </p>
        </div>

        {/* <div className="w-2/3 mx-auto bg-blue-600 text-offWhite my-5 p-5 text-lg">
          <h1 className="text-6xl pb-5">Got Questions?</h1>
          <h1 className="text-2xl text-yellow-300">What else do you want to see in these docs?</h1>
          <p>Join a workshop</p>
          <p>Prepare in Gimbalabs Discord</p>
          <p>Community Q&A: dates on calendar</p>
        </div> */}
        <ContributeToThis />
      </div>
    </div>
  );
}
