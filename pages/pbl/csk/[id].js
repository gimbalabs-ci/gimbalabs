import Link from "next/link";
import React from "react";
import { getAllCskIds, getCskData } from "../../../lib/csk";
import FullWidthImageAndText from "../../../components/shared_ui/FullWidthImageAndText";
import RecircList from "../../../components/shared_ui/recirc/RecircList";
import StyledMarkdown from "../../../components/shared_ui/StyledMarkdown";
import VideosGroup from "../../../components/shared_ui/VideoTabs";
import Layout from "../../../components/Layouts/Layout";
import Objectives from "../../../components/pbl/Objectives";

export async function getStaticProps({ params }) {
  const cskData = await getCskData(params.id);
  return {
    props: {
      cskData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllCskIds();
  return {
    paths,
    fallback: false,
  };
}

export default function SpecificCSK({ cskData }) {
  const {
    contentReact,
    videos,
    fullWidthImageAndText,
    recirc,
    objectives,
  } = cskData;

  const link = "/pbl/csk";
  const color = "BLUE";

  return (
    <Layout navbarBg="bg-offWhite">
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
