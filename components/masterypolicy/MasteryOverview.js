import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ArrowRight } from "react-feather";

export default function MasteryOverview() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 my-5">
        <div className="col-span-2 lg:col-span-1">
          <h1 className="text-4xl py-4">Why Project-Based Learning?</h1>
          <p className="py-2 text-xl">
            The goal of any Gimbalabs PBL course is to help people become Contributors to real Web3 projects. All
            courses consist of a series of learning modules that are organized into four categories: Onboarding,
            Building Background Knowedge (BBK), Specializing, and Contributing.
          </p>
          <p className="py-2 text-xl">
            Everyone is welcome to{" "}
            <a
              href="https://en.plutuspbl.io"
              class="font-bold text-orange-800 hover:text-purple-800"
            >
              enroll in Plutus PBL 2023
            </a>
            . That is the best way to learn about it.
          </p>
          <p className="py-2 text-xl">
            When you enroll in the self-paced Plutus PBL course, you will start by working through the Onboarding and
            BBK Modules in order. Then you can focus on your choice of Specializing Modules. When you meet the minimum
            requirements, you will earn a Course Completion token that allows you to{" "}
              Contribute to open source projects at Gimbalabs

            .
          </p>
        </div>
        <div className="col-span-2 lg:col-span-1 flex justify-center">
          <Image src="/obsc.png" width={450} height={580} alt="obsc" />
        </div>

        {/* <div className="col-span-1 mt-10 mb-8 p-5 bg-orange-100 rounded">
          <div>
            <h3 className="text-3xl py-2">
              What are the minimum requirements for earning a Plutus PBL Course Completion token?
            </h3>
            <ul className="list-disc ml-3">
              <li className="py-2 pl-3 font-medium text-lg">
                Students must complete <span className="font-bold">all 100-Level Onboarding</span> and{" "}
                <span className="font-bold">all 200-Level BBK</span> Modules.
              </li>
              <li className="py-2 pl-3 font-medium text-lg">
                Students must demonstrate mastery of a minimum number of{" "}
                <span className="font-bold">300-Level Specializing Modules</span>. There are four leveled Mastery
                Assignments in each module.
              </li>
            </ul>
            <p className="py-2 font-bold text-xl">
              There are two ways to meet the minimum requirements for PPBL Course Completion:
            </p>
            <ul className="list-decimal ml-5">
              <li className="py-2 pl-3 font-medium text-lg">
                Complete the{" "}
                <span className="font-bold">first two leveled Mastery Assignments on Modules 301 AND 302 AND 303</span>.
              </li>
              <li className="py-2 pl-3 font-medium text-lg">
                Or, complete{" "}
                <span className="font-bold">all four leveled Mastery Assignments on Module 301 OR 302 OR 303</span>.
              </li>
            </ul>
            <p className="py-2 font-medium text-lg">
              The PPBL Course Completion unlocks Contribution Access to projects at Gimbalabs.
            </p>
            <p className="py-2 font-medium text-lg">
              Live Now:{" "}
              <a href="https://gpte.gimbalabs.io/" className="text-orange-900 font-bold hover:text-green-700">
                Gimbal Project Treasury + Escrow, Iteration 1
              </a>
            </p>
          </div>
        </div>
        <div className="col-span-1 my-10 lg:mx-auto">
          <h1 className="text-6xl py-5">PPBL Completion Tokens</h1>
          <h2 className="text-2xl pb-5">are minted in pairs, with Fixed Minting Metadata and Flexible Inline Datum</h2>
          <p>
            Policy ID:{" "}
            <a
              href="https://cardanoscan.io/tokenPolicy/4879ae2b0c3dd69864bfa29b13bb8e60712f4df2176f43aaa7b9aa3b"
              className="text-orange-900 font-bold hover:text-green-700"
            >
              4879ae2b0c3dd69864bfa29b13bb8e60712f4df2176f43aaa7b9aa3b
            </a>
          </p>
        </div>
        <div className="col-span-2 mb-8 lg:mx-auto lg:w-1/2">
          <h1 className="text-6xl py-2">Completion Token Metadata</h1>
          <p className="py-2 font-medium text-lg">
            PPBL Course Completion tokens are minted with the following metadata:
          </p>
          <pre className="leading-5 bg-gray-200 p-5">
            <code className="language-js">{JSON.stringify(masteryData, null, 2)}</code>
          </pre>
        </div>
        <div className="col-span-2 mb-8 lg:mx-auto lg:w-1/2">
          <h1 className="text-6xl py-2">Reference Tokens + "Metadatum"</h1>
          <p className="py-2 font-medium text-lg">
            We use an experimental implementation of the{" "}
            <a href="https://cips.cardano.org/cips/cip68/" className="text-orange-900 font-bold hover:text-green-700">
              Datum Metadatum Standard proposed in CIP-68
            </a>
            . The following metadatum can be changed over time, and it can be used in Plutus validation logic.
          </p>
          <pre className="leading-5 bg-gray-200 p-5">
            <code className="language-js">{JSON.stringify(contributorDatum, null, 2)}</code>
          </pre>
        </div> */}
      </div>
    </div>
  );
}
