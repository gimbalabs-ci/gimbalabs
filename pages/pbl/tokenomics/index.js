import Link from "next/link";
import React from "react";
import { getSortedTokenomicsData } from "../../../lib/tokenomics";
import ListAllBlocks from "../../../components/shared_ui/ListAllBlocks";
import PageTitle from "../../../components/shared_ui/PageTitle";
import PageTitleWithBorder from "../../../components/shared_ui/PageTitleWithBorder";
import Layout from "../../../components/Layouts/Layout";
import PlaygroundSvg from "../../../lib/icons/PlaygroundSvg";

export async function getStaticProps() {
  const allTokenomicsData = getSortedTokenomicsData();

  return {
    props: {
      allTokenomicsData,
    },
  };
}

export default function index({ allTokenomicsData }) {
  return (
    <Layout footerBg="bg-black2-900">
      <div className="pb-9 ">
        <PageTitleWithBorder
          title={"Gimbal Tokenomics Groups"}
          subtitle={"Inclusive community. At play. Defining new models."}
        >
          <PlaygroundSvg className="w-7 text-black2-900" />
        </PageTitleWithBorder>
        <div className="spacing-x py-6 md:py-9">
          <ListAllBlocks
            baseRoute={"/pbl/tokenomics/"}
            color="ORANGE"
            data={allTokenomicsData}
          />
        </div>
      </div>
    </Layout>
  );
}
