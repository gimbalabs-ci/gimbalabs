import Link from "next/link";
import React from "react";
import { getSortedProjectsData } from "../../../lib/projects";
import ListAllBlocks from "../../../components/shared_ui/ListAllBlocks";
import PageTitle from "../../../components/shared_ui/PageTitle";

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
    <div className="spacing-x spacing-y">
      <PageTitle title={"Playground"} subtitle={"Where ideas get tested."} />
      <div>
        <Link href="/pbl">
          <a>
            <button className=" mt-5 mb-9 gds-btn text-pink-900">/pbl</button>
          </a>
        </Link>
      </div>
      <ListAllBlocks
        baseRoute={"/pbl/playground/"}
        color="PINK"
        data={allProjectsData}
      />
    </div>
  );
}
