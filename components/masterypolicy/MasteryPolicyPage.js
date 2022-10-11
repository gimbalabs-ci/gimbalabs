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
    <div className="w-full h-full bg-offWhite min-h-screen ">
      <PageTitleWithBorder title="Gimbalabs PBL Mastery Policies" />
      <div className="spacing-x mb-7 text-black2-900">
        <h1 className="text-6xl py-4">Plutus Project-Based Learning</h1>
        <MasteryOverview />
        <LearningTargets />
        {/* <CourseOutlineTable /> */}
        {/* <AboutCompletionToken /> */}
      </div>
    </div>
  );
}