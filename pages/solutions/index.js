import React from "react";
import Layout from "../../components/Layouts/Layout";
import PageTitleWithBorder from "../../components/shared_ui/PageTitleWithBorder";
import BlogSvg from "../../lib/icons/BlogSVG";
import { getSortedBlogPostsData } from "../../lib/blogposts";
import Link from "next/link";

export async function getStaticProps() {
  const data = getSortedBlogPostsData();

  return {
    props: {
      data,
    },
  };
}

export default function BlogPosts({ data }) {
  console.log(data);
  return (
    <Layout footerBg="bg-black2-900">
      <div className="pb-9">
        <PageTitleWithBorder title={"Gimbalabs Solutions"} subtitle={"Driving impacts with community wisdom "}>
          <BlogSvg className="w-7" />
        </PageTitleWithBorder>
        <div>
        <p className="spacing-x w-3/4 mb-5 mb-4 text-lg">
          Starting in late 2020, Gimbalabs has been working to create a space for people to learn about and participate in the Cardano blockchain. 
          We believe that people learn best by doing things. If you've been looking for an entry point into how you can participate in Cardano, we think you might find it here. 
          <br/>
          Going forward, we want to further extend our reach and impact by Gimbalabs Solutions, a new initiative to drive impacts by offering consultancy services with our condensed community wisdom.
          If you are looking developing any impactful project on Cardano, we are here to help you. Please feel free to reach out 
          <Link href="https://twitter.com/jamesdunseith"><span className="text-yellow-600 cursor-pointer"> James</span></Link> or <Link href="https://x.com/sidanwhatever"><span className="text-yellow-600 cursor-pointer">Hinson</span></Link> to learn more.
        </p>
        </div>
      </div>
    </Layout>
  );
}
