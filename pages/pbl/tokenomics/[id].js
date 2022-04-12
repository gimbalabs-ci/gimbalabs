import Link from "next/link";
import React from "react";
import Layout from "../../../components/Layouts/Layout";
import FullWidthImageAndText from "../../../components/shared_ui/FullWidthImageAndText";
import RecircList from "../../../components/shared_ui/recirc/RecircList";
import StyledMarkdown from "../../../components/shared_ui/StyledMarkdown";
import VideosGroup from "../../../components/shared_ui/VideoTabs";
import { getAllTokenomicsIds, getTokenomicsData } from "../../../lib/tokenomics";
import Objectives from "../../../components/pbl/Objectives";

export async function getStaticProps({ params }) {
  const tokenomicsData = await getTokenomicsData(params.id);
  return {
    props: {
      tokenomicsData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllTokenomicsIds();
  return {
    paths,
    fallback: false,
  };
}

export default function SpecificTokenomics({ tokenomicsData }) {
  const { contentReact, videos, fullWidthImageAndText, recirc, objectives } = tokenomicsData;
  console.log("Tokenomics Data", tokenomicsData)
  const link = "/pbl/tokenomics";
  const color = "RED";

  return (
    <Layout>
      <div className="relative bg-offWhite text-black2-900">
        {/* Hero */}
        <FullWidthImageAndText
          link={link}
          color={color}
          {...fullWidthImageAndText}
        />
        <Objectives color={color} objectives={objectives} />

        <VideosGroup color={color} videos={videos} />
        {/* Layout */}
        <div className="spacing-x spacing-b">
          <StyledMarkdown color={color} children={contentReact} />
        </div>

        <RecircList link={link} {...recirc} />
      </div>
    </Layout>
  );
}
