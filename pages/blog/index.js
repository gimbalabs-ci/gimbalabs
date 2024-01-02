import React from "react";
import Layout from "../../components/Layouts/Layout";
import ListAllBlocks from "../../components/shared_ui/ListAllBlocks";
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
        <PageTitleWithBorder title={"Gimbalabs Blog"} subtitle={"The latest from the Gimbalabs team"}>
          <BlogSvg className="w-7" />
        </PageTitleWithBorder>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-5/6 mx-auto">
          {data.map((blogpost, id) => (
            <Link href={`/blog/${blogpost.id}`}>
              <div className="p-5 border border-black cursor-pointer rounded-md hover:bg-blue-200">
                <div className="cursor-pointer">
                  <h2>{blogpost.title}</h2>
                  <p>Posted: {blogpost.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
