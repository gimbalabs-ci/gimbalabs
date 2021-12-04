import Link from "next/link";
import React from "react";
import { getSortedPlaygroundData } from "../../../lib/playground";
import ListAllBlocks from "../../../components/shared_ui/ListAllBlocks";
import PageTitle from "../../../components/shared_ui/PageTitle";
import PageTitleWithBorder from "../../../components/shared_ui/PageTitleWithBorder";
import Layout from "../../../components/Layouts/Layout";
import PlaygroundSvg from "../../../lib/icons/PlaygroundSvg";

export async function getStaticProps() {
  const allPlaygroundData = getSortedPlaygroundData();

  return {
    props: {
      allPlaygroundData,
    },
  };
}

export default function index({ allPlaygroundData }) {
  return (
    <Layout footerBg="bg-black2-900">
      <div className="pb-9 ">
        <PageTitleWithBorder
          title={"Playground"}
          subtitle={"Where ideas get tested."}
        >
          <PlaygroundSvg className="w-7 text-black2-900" />
        </PageTitleWithBorder>
        <div className="spacing-x py-6 md:py-9">
          <ListAllBlocks
            baseRoute={"/pbl/playground/"}
            color="RED"
            data={allPlaygroundData}
          />
        </div>
      </div>
    </Layout>
  );
}
