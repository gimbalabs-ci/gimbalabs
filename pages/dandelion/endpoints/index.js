import React from "react";
import Layout from "../../../components/Layouts/Layout";
import ListAllBlocks from "../../../components/shared_ui/ListAllBlocks";
import PageTitleWithBorder from "../../../components/shared_ui/PageTitleWithBorder";
import { getSortedDapisData } from "../../../lib/dandelions";
import { DandelionSeed } from "../../../lib/icons/svgs";

export async function getStaticProps() {
  const data = getSortedDapisData();

  return {
    props: {
      data,
    },
  };
}

export default function Endpoints({ data }) {
  console.log(data);
  return (
    <Layout footerBg="bg-black2-900">
      <div className="pb-9">
        <PageTitleWithBorder
          title={"Dandelion Endpoints"}
          subtitle={"Open source the world"}
        >
          <DandelionSeed className="w-7 text-green-900" />
        </PageTitleWithBorder>
        <div className="spacing-x ">
          <ListAllBlocks
            baseRoute={"/dandelion/endpoints/"}
            color="GREEN"
            data={data}
          />
        </div>
      </div>
    </Layout>
  );
}
