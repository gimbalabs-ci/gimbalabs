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
      <div className="bg-black2-900">
        <PageTitleWithBorder
          className="text-offWhite"
          borderColor="bg-offWhite"
          title={"Plutus Project Based Learning"}
          subtitle={"Learn by doing."}
        />
        <section className="spacing-x pb-9 ">
          <ListAllBlocks
            baseRoute={"/pbl/plutus/"}
            color="PINK"
            data={allProjectsData}
          />
        </section>
      </div>
    </Layout>
  );
}
