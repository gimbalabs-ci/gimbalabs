import Link from "next/link";
import React from "react";
import { getSortedCsksData } from "../../../lib/csk";
import ListAllBlocks from "../../../components/shared_ui/ListAllBlocks";
import PageTitle from "../../../components/shared_ui/PageTitle";
import PageTitleWithBorder from "../../../components/shared_ui/PageTitleWithBorder";
import Layout from "../../../components/Layouts/Layout";

export async function getStaticProps() {
  const allCSKData = getSortedCsksData();

  return {
    props: {
      allCSKData,
    },
  };
}

export default function index({ allCSKData }) {
  return (
    <Layout footerBg="bg-black2-900">
      <div className="pb-9">
        <PageTitleWithBorder
          title={"Cardano Starter Kits"}
          subtitle={"The fastest way to get started on cardano"}
        />
        <div className="spacing-x ">
          <ListAllBlocks color="BLUE" data={allCSKData} />
        </div>
      </div>
    </Layout>
  );
}
