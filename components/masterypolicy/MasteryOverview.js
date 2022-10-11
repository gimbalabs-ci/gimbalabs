import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function MasteryOverview() {
    return (
        <div>
            <div className="flex flex-row mb-5">
                <div className="w-2/3">
                    <p className="py-2">
                        The goal of any Gimbalabs PBL course is to help people become Contributors to real Web3 projects. All courses consist of a series of learning modules that are organized into four categories:
                    </p>
                    <p className="py-2">
                        Everyone is welcome to <a href="https://gimbalabs.instructure.com/enroll/3CFNFB" class='font-bold text-orange-800 hover:text-purple-800'>enroll in Plutus PBL on Canvas</a>. Even if you are not planning on completing the course, this is the best way to learn about it.
                    </p>
                    <h1 className="text-2xl py-4">
                        What do we mean by "mastery"?
                    </h1>
                    <h2>Minimum Requirements</h2>
                </div>
                <div className="w-1/4">
                    <Image src='/obsc.png' width='430' height='580' alt='obsc' />
                </div>
            </div>
        </div>
    )
}