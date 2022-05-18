import Link from "next/link";
import React from "react";
import PageTitleWithBorder from "../../../components/shared_ui/PageTitleWithBorder";
import Layout from "../../../components/Layouts/Layout";
import PlaygroundSvg from "../../../lib/icons/PlaygroundSvg";
import GimbalTokenDashboard from "../../../components/gimbaltoken/GimbalTokenDashboard";


export default function dashboard() {
  return (
    <Layout footerBg="bg-black2-900">
      <div className="pb-9 ">
        <PageTitleWithBorder
          title={"Dashboard"}
          subtitle={"Gimbal Token Allocation 0"}
        >
          <PlaygroundSvg className="w-7 text-black2-900" />
        </PageTitleWithBorder>
        <div className="spacing-x py-1 md:py-2">
            <GimbalTokenDashboard />
        </div>
      </div>
    </Layout>
  );
}
