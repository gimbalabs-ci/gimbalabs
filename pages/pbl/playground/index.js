import Link from "next/link";
import React from "react";
import { getSortedProjectsData } from "../../../lib/projects";
import ListAllBlocks from "../../../components/shared_ui/ListAllBlocks";
import PageTitle from "../../../components/shared_ui/PageTitle";
import PageTitleWithBorder from "../../../components/shared_ui/PageTitleWithBorder";
import Layout from "../../../components/Layouts/Layout";

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();

  return {
    props: {
      allProjectsData,
    },
  };
}

export default function index({ allProjectsData }) {
  return (
    <Layout navbarBg="bg-offWhite">
      <div className="pb-9 ">
        <PageTitleWithBorder
          title={"Playground"}
          subtitle={"Where ideas get tested."}
        />
        <div className="spacing-x">
          <ListAllBlocks
            baseRoute={"/pbl/playground/"}
            color="RED"
            data={allProjectsData}
          />
        </div>
      </div>
    </Layout>
  );
}
