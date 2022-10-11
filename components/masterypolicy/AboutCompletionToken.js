import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function AboutCompletionToken() {
    return (
        <div>
            <h1>About the Completion Token</h1>
            <h1 className="text-2xl py-4">
                What does a Plutus PBL Completion token represent?
            </h1>
            <p>
                Plutus PBL students can earn a PPBL Course Completion token by completing all three Onboarding and BBK Assignments, and then by meeting of the two options for demonstrating mastery on 300-level Modules.
            </p>
            <p>
                A Completion token represents that these requirements have been met.
            </p>
            <h2 className="text-xl py-4">Onboarding and BBK</h2>
            <p>Students must complete all 100- and 200-Level Course Modules</p>
            <h2 className="text-xl py-4">Specializing</h2>
            <p>At minimum, students must complete the first two Leveled Mastery Assignments on Modules 301, 302, and 303. See below for more details about Mastery Assignments</p>

        </div>
    )
}