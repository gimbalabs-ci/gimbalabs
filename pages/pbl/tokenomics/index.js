import Link from "next/link";
import React from "react";
import { getSortedTokenomicsData } from "../../../lib/tokenomics";
import ListAllBlocks from "../../../components/shared_ui/ListAllBlocks";
import PageTitle from "../../../components/shared_ui/PageTitle";
import PageTitleWithBorder from "../../../components/shared_ui/PageTitleWithBorder";
import Layout from "../../../components/Layouts/Layout";
import PlaygroundSvg from "../../../lib/icons/PlaygroundSvg";
import GimbalTokenDashboard from "../../../components/gimbaltoken/GimbalTokenDashboard";

export default function index({ allTokenomicsData }) {
  return (
    <Layout footerBg="bg-black2-900">
      <div className="pb-9 ">
        <PageTitleWithBorder
          title={"Gimbal Tokenomics Groups"}
          subtitle={"Learning by Doing. Defining new models."}
        >
          <PlaygroundSvg className="w-7 text-black2-900" />
        </PageTitleWithBorder>
        <GimbalTokenDashboard />
      </div>
    </Layout>
  );
}
