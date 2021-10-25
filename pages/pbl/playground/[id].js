import Link from "next/link";
import React from "react";
import FullWidthImageAndText from "../../../components/shared_ui/FullWidthImageAndText";
import RecircList from "../../../components/shared_ui/recirc/RecircList";
import StyledMarkdown from "../../../components/shared_ui/StyledMarkdown";
import VideosGroup from "../../../components/shared_ui/VideoTabs";
import { getAllProjectIds, getProjectData } from "../../../lib/projects";

export async function getStaticProps({ params }) {
  const plutusData = await getProjectData(params.id);
  return {
    props: {
      plutusData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export default function SpecificPlayground({ plutusData }) {
  const { contentReact, videos, fullWidthImageAndText, recirc } = plutusData;

  const link = "/pbl/playground";
  const color = "PINK";

  return (
    <div className="relative bg-white text-black2-900">
      {/* Hero */}
      <FullWidthImageAndText
        link={link}
        color={color}
        {...fullWidthImageAndText}
      />

      <VideosGroup videos={videos} />
      {/* Layout */}
      <div className="spacing-x spacing-y">
        <StyledMarkdown children={contentReact} />
      </div>

      <RecircList link={link} {...recirc} />

      {/*  */}
      <Link href={link}>
        <a>Back to all CSKs</a>
      </Link>
    </div>
  );
}
