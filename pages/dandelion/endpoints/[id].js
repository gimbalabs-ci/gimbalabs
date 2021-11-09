import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../../../components/Layouts/Layout";
import FullWidthImageAndText from "../../../components/shared_ui/FullWidthImageAndText";
import PageTitleWithBorder from "../../../components/shared_ui/PageTitleWithBorder";
import StyledMarkdown from "../../../components/shared_ui/StyledMarkdown";
import { getAllDapiIds, getDapiData } from "../../../lib/dandelions";
export async function getStaticProps({ params }) {
  const data = await getDapiData(params.id);
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllDapiIds();
  return {
    paths,
    fallback: false,
  };
}

export default function SpecificDandelion({ data }) {
  const color = "GREEN";
  return (
    <Layout footerBg="bg-black2-900">
      <div>
        <FullWidthImageAndText color="GREEN" title={data.title} />
        <div className="max-w-16 mx-auto pb-9">
          <StyledMarkdown color={color} children={data.contentReact} />
        </div>
      </div>
    </Layout>
  );
}
