import Link from "next/link";
import React from "react";
import Layout from "../../../components/Layouts/Layout";
import Objectives from "../../../components/pbl/Objectives";
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

export default function SpecificPlutus({ plutusData }) {
  const {
    contentReact,
    videos,
    fullWidthImageAndText,
    recirc,
    objectives,
  } = plutusData;
  console.log(plutusData);
  const link = "/pbl/plutus";
  const color = "ORANGE";

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
