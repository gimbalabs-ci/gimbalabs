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
      <div>
        <FullWidthImageAndText color="BLOG" title={data.title} />
        <div className="max-w-16 mx-auto pb-9">
          <StyledMarkdown color={color} children={data.contentReact} />
        </div>
      </div>
    </Layout>
  );
}
