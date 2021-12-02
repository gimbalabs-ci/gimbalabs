import Link from "next/link";
import React from "react";
import { getSortedProjectsData } from "../../../lib/projects";
import ListAllBlocks from "../../../components/shared_ui/ListAllBlocks";
import PageTitle from "../../../components/shared_ui/PageTitle";
import PageTitleWithBorder from "../../../components/shared_ui/PageTitleWithBorder";
import Layout from "../../../components/Layouts/Layout";
import PlutusSvg from "../../../lib/icons/PlutusSvg";

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
        >
          <PlutusSvg className="w-7" />
        </PageTitleWithBorder>
        <section className="spacing-x py-6 md:py-9 ">
          <ListAllBlocks
            baseRoute={"/pbl/plutus/"}
            color="ORANGE"
            data={allProjectsData}
          />
        </section>
      </div>
    </Layout>
  );
}
