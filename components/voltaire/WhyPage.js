import Link from "next/link";
import React from "react";
import PageTitle from "/components/shared_ui/PageTitle";
import PageTitleWithBorder from "/components/shared_ui/PageTitleWithBorder";
import Layout from "/components/Layouts/Layout";
import PlutusSvg from "/lib/icons/PlutusSvg";
import { AndamioSVG } from "../../lib/icons/AndamioSVG";

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
        <div className="w-4/5 mx-auto">
          <h1 className="text-4xl pb-5">What is the scope of CIP-1694?</h1>
          <p>ADD LIST OF DECISIONS</p>
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
      </div>
    </div>
  );
}
