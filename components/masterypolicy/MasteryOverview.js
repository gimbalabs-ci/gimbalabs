import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const masteryData = {
    "721": {
        "nft-metadata": "per CIP-25"
    },
    "1618033988749": {
        "courseName": "Plutus PBL",
        "courseVersion": "ppbl-course-02",
        "courseProviders": ["Gimbalabs"],
        "masteryLevels": [
            { "301": "4" },
            { "302": "2" },
            { "303": "3" }
        ],
        "url": "https://gimbalabs.com/mastery-policy" // must include course Outcomes, Objectives/LTs, Modules, Team
    }
}



export default function MasteryOverview() {
    return (
        <div>
            <div className="grid grid-cols-2 gap-5 mb-5">
                <div className="">
                    <p className="py-2">
                        The goal of any Gimbalabs PBL course is to help people become Contributors to real Web3 projects. All courses consist of a series of learning modules that are organized into four categories: Onboarding, Building Background Knowedge (BBK), Specializing, and Contributing.
                    </p>
                    <p className="py-2">
                        Everyone is welcome to <a href="https://gimbalabs.instructure.com/enroll/3CFNFB" class='font-bold text-orange-800 hover:text-purple-800'>enroll in Plutus PBL on Canvas</a>. That is the best way to learn about it.
                    </p>
                    <p className="py-2">
                        When you enroll in the self-paced Plutus PBL course, you will start by working through the Onboarding and BBK Modules in order. Then you can focus on your choice of Specializing Modules. When you meet the minimum requirements, you will earn a Course Completion token that allows you to Contribute to open source projects at Gimbalabs.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Image src='/obsc.png' width='215' height='290' alt='obsc' />
                </div>
                <div className="mt-10 mb-8 w-5/6 mx-auto">
                    <h1 className="text-3xl py-4">PPBL Course Completion Token Metadata</h1>
                    <pre className="leading-5 bg-gray-300 mx-2 p-5">
                        <code className="language-js">
                            {JSON.stringify(masteryData, null, 2)}
                        </code>
                    </pre>
                    <p className="mx-2 py-4">
                        The minting metadata for each Course Completion token shows the Mastery Level achieved on each 300-Level Specializing Module.
                    </p>
                </div>
                <div className="mt-10 mb-8 w-5/6 mx-auto">
                    <div>
                        <h3 className="text-3xl pb-5">What are the minimum requirements for earning a Plutus PBL Course Completion token?</h3>
                        <ul className="list-disc ml-5">
                            <li className="py-2 pl-3 font-medium text-lg">
                                Students must complete <span className="font-bold">all 100-Level Onboarding</span> and <span className="font-bold">200-Level BBK</span> Modules.
                            </li>
                            <li className="py-2 pl-3 font-medium text-lg">
                                Students must demonstrate mastery of a minimum number of <span className="font-bold">300-Level Specializing Modules</span>. There are four leveled Mastery Assignments for each.
                            </li>
                            <li className="py-2 pl-3 font-medium text-lg">
                                There are two ways to meet the minimum requirements for PPBL Course Completion:
                            </li>
                        </ul>
                        <ul className="list-decimal ml-8">
                            <li className="py-2 pl-3 font-medium text-lg">Complete the <span className="font-bold">first two leveled Mastery Assignments on Modules 301 AND 302 AND 303</span>.</li>
                            <li className="py-2 pl-3 font-medium text-lg">Complete <span className="font-bold">all four leveled Mastery Assignments on Module 301 OR 302 OR 303</span>.</li>
                        </ul>
                        <ul className="list-disc ml-5">
                            <li className="py-2 pl-3 font-medium text-lg">
                                The PPBL Course Completion unlocks Contribution Access to projects at Gimbalabs. (GBTE Link coming soon.)
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
        </div>
    )
}