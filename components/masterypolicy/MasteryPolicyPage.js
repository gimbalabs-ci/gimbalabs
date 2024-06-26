import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import PageTitleWithBorder from "../shared_ui/PageTitleWithBorder";
import LearningTargets from "./LearningTargets";
import CourseOutlineTable from "./CourseOutlineTable";
import MasteryOverview from "./MasteryOverview";
import AboutCompletionToken from "./AboutCompletionToken";

export default function MasteryPolicyPage() {
  return (
    <div className="w-full bg-offWhite ">
      <PageTitleWithBorder title="Project-Based Learning Framework" />
      <div className="spacing-x mb-7 text-black2-900">
        <MasteryOverview />
        <div className="my-5 w-2/3">
          <h2 className="text-4xl">What qualifies as Evidence of Mastery?</h2>
          <p className="py-5 text-xl">
            To demonstrate mastery of key skills, students submit transactions to{" "}
            <a
              href="https://preprod.cardanoscan.io/"
              target="_blank"
              className="font-bold text-orange-800 hover:text-purple-800"
            >
              Cardano's Pre-Production Testnet
            </a>{" "}
            and merge requests to{" "}
            <a
              href="https://gitlab.com/gimbalabs/ppbl-2023"
              target="_blank"
              className="font-bold text-orange-800 hover:text-purple-800"
            >
              open-source, public code repositories on GitLab
            </a>
            . Anyone can verify that transactions happened via a blockchain explorer and that commits were made on
            GitLab.
          </p>
          <p className="py-5 text-xl">
            Learn more about about Plutus PBL by browsing the Course Outline and Student Learning Targets below. Or{" "}
            <a
              href="https://en.plutuspbl.io"
              class="font-bold text-orange-800 hover:text-purple-800"
            >
              enroll in Plutus PBL
            </a>{" "}
            to see it for yourself.
          </p>
        </div>

        {/* <LearningTargets /> */}
        {/* <CourseOutlineTable /> */}
        {/* <AboutCompletionToken /> */}
      </div>
    </div>
  );
}
