import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layouts/Layout";
import FullWidthImageAndText from "../../components/shared_ui/FullWidthImageAndText";
import PageTitleWithBorder from "../../components/shared_ui/PageTitleWithBorder";
import StyledMarkdown from "../../components/shared_ui/StyledMarkdown";
import { getAllBlogPostData, getAllBlogPostIds } from "../../lib/blogposts";
export async function getStaticProps({ params }) {
  const data = await getAllBlogPostData(params.id);
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllBlogPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function BlogPostPage({ data }) {
  const color = "ORANGE";
  return (
    <Layout footerBg="bg-black2-900">
      <div className="mb-[100px]">
        <FullWidthImageAndText color="BLOG" subtitle={data.subtitle} />
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className={`pt-6 lg:pt-7 spacing-x relative z-10 flex flex-col`}>
            <div className={`text-black2-900 font-heading font-bold gg-title-small`}>{data.title}</div>
            <div className="text-sm pt-5">Published: {data.date}</div>
            <div className="text-sm">by {data.author}</div>
          </div>
          <div className="col-span-1 md:col-span-2 text-lg">
            <StyledMarkdown color={color} children={data.contentReact} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
