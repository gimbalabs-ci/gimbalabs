import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const masteryData = {
    "721": {
        "nft-metadata": "per CIP-25"
    },
    "<another metadata key>": {
        "courseName": "Plutus PBL",
        "courseVersion": "ppbl-course-02",
        "courseProviders": ["Gimbalabs"],
        "masteryLevels": [
            {"301": "4"},
            {"302": "2"},
            {"303": "3"}
        ],
        "url": "https://gimbalabs.com/mastery-policy" // must include course Outcomes, Objectives/LTs, Modules, Team
    }
}



export default function MasteryOverview() {
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="">
                    <p className="py-2">
                        The goal of any Gimbalabs PBL course is to help people become Contributors to real Web3 projects. All courses consist of a series of learning modules that are organized into four categories: Onboarding, BBK, Specializing, and Contributing.
                    </p>
                    <p className="py-2">
                        Everyone is welcome to <a href="https://gimbalabs.instructure.com/enroll/3CFNFB" class='font-bold text-orange-800 hover:text-purple-800'>enroll in Plutus PBL on Canvas</a>. This is the best way to learn about it.
                    </p>
                    <p className="py-2">
                        When you enroll in the self-paced Plutus PBL course, you will start by working through the Onboarding Modules, then BBK and Specializing. When you complete the course, you will earn a Course Completion token that allows you contribute to open source projects at Gimbalabs.
                    </p>
                    <h3 className="text-2xl pt-5">What are the Course Completion Requirements?</h3>
                    <ul className="list-decimal ml-5">
                        <li className="py-2">
                            Students must complete all Onboarding and BBK Modules.
                        </li>
                        <li className="py-2">
                            Students must also demonstrate mastery of a minimum number of 300-Level Specializing modules. Learn more below.
                        </li>
                        <li className="py-2">
                            This page and the PPBL Mastery Policy is a work in progress. Share your feedback <a href="https://gitlab.com/gimbalabs/plutus-pbl-summer-2022/projects/completion-token/completion-and-contribution-token-proposal" target="_blank" class='font-bold text-orange-800 hover:text-purple-800'>in the project repository on GitLab.</a>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <Image src='/obsc.png' width='430' height='580' alt='obsc' />
                </div>
                <div className="border-t border-black p-4">
                    <h1 className="text-2xl py-4">Data Model</h1>
                    <pre className="leading-5 bg-gray-300 mx-5 p-5">
                        <code className="language-js">
                            {JSON.stringify(masteryData, null, 2)}
                        </code>
                    </pre>
                </div>
                <div className="border-t border-black pt-4">
                    <h1 className="text-2xl py-4">
                        Leveled Mastery Assignments
                    </h1>
                    <h2 className="text-xl py-2">301 Mini-Project: Build a Token Gated Faucet</h2>
                    <ul className="list-decimal ml-5">
                        <li>Unlock tokens from a Faucet</li>
                        <li>Create and test your own Faucet instance</li>
                        <li>Add your Contract to the Front-End Template</li>
                        <li>Register Your Faucet with Tx Metadata</li>
                    </ul>
                    <h2 className="text-xl py-2">302 Querying the Blockchain</h2>
                    <ul className="list-decimal ml-5">
                        <li>Customize and Style a Query</li>
                        <li>Rewrite a Koios query with GraphQL</li>
                        <li>Create a Passive Component</li>
                        <li>Create a Transaction Component</li>
                    </ul>
                    <h2 className="text-xl py-2">303 Writing Business Logic in Plutus Validators</h2>
                    <ul className="list-decimal ml-5">
                        <li>Create a Bounty Commimtment Using cardano-cli on PreProd deployment</li>
                        <li>Create and test own instance of GBTE</li>
                        <li>Share your instance of GBTE and show that someone else was able to use it</li>
                        <li>Create and Test and Instance of GBTE on PlutusV2</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}