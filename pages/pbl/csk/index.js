import React from "react";
import { getSortedCsksData } from "../../../lib/csk";
import ListAllBlocks from "../../../components/shared_ui/ListAllBlocks";
import PageTitleWithBorder from "../../../components/shared_ui/PageTitleWithBorder";
import Layout from "../../../components/Layouts/Layout";
import CardanoLogo from "../../../lib/icons/CardanoLogo";

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
        >
          <CardanoLogo className="w-7 text-black2-900" />
        </PageTitleWithBorder>

        <div className="spacing-x py-6 md:py-9">
          <ListAllBlocks color="BLUE" data={allCSKData} />
        </div>
      </div>
    </Layout>
  );
}
