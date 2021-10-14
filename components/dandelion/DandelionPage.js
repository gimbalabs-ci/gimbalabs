import React from "react";
import Layout from "../Layouts/Layout";
import Ethos from "./Ethos";
import Hero from "./Hero";
import PreconfiguredEnvironments from "./PreconfiguredEnvironments";
import SupportedServices from "./SupportedServices";
import ThreeColList from "./ThreeColList";
import ValidateIdeas from "./ValidateIdeas";

export default function DandelionPage() {
  return (
    <Layout>
      <div className="">
        <Hero />
        <SupportedServices />
        <ValidateIdeas />
        <PreconfiguredEnvironments />
        <ThreeColList />
        <Ethos />
      </div>
    </Layout>
  );
}
