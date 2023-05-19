import Link from "next/link";
import React from "react";
import PageTitle from "/components/shared_ui/PageTitle";
import PageTitleWithBorder from "/components/shared_ui/PageTitleWithBorder";
import Layout from "/components/Layouts/Layout";
import PlutusSvg from "/lib/icons/PlutusSvg";
import { AndamioSVG } from "../../lib/icons/AndamioSVG";

export default function ParticipatePage({ allProjectsData }) {
  return (
    <div className="relative  bg-offWhite text-black2-900 pt-5">
      <div className="relative px-5">
        <AndamioSVG />
        <PageTitleWithBorder
          className="text-black"
          borderColor="bg-offWhite"
          title={"Join a CIP 1694 Workshop"}
          subtitle={"You do not want to miss this"}
        />
      </div>
      <div className="bg-offWhite py-7 mt-1 border-t-2 border-black">
        <div className="w-4/5 mx-auto">
          <h1 className="text-4xl">You are invited to get involved.</h1>
          <p>In the next few weeks, CIP-1694 Governance workshops will be run around the world. Do not miss the opportunity to get involved.</p>
        </div>
      </div>
    </div>
  );
}
