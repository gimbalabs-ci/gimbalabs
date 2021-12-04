import Link from "next/link";
import React from "react";
import Layout from "../../../components/Layouts/Layout";
import FullWidthImageAndText from "../../../components/shared_ui/FullWidthImageAndText";
import RecircList from "../../../components/shared_ui/recirc/RecircList";
import StyledMarkdown from "../../../components/shared_ui/StyledMarkdown";
import VideosGroup from "../../../components/shared_ui/VideoTabs";
import { getAllPlaygroundIds, getPlaygroundData } from "../../../lib/playground";

export async function getStaticProps({ params }) {
  const plutusData = await getPlaygroundData(params.id);
  return {
    props: {
      plutusData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPlaygroundIds();
  return {
    paths,
    fallback: false,
  };
}

export default function SpecificPlayground({ plutusData }) {
  const { contentReact, videos, fullWidthImageAndText, recirc } = plutusData;

  const link = "/pbl/playground";
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
