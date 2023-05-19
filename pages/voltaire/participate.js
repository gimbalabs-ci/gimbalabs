import React from "react";
import VoltairePage from "../../components/voltaire/VoltairePage";
import VoltaireStickyNoteList from "../../components/voltaire/VoltaireStickyNoteList";
import Layout from "../../components/Layouts/Layout";
import { blueColors, redColors, pinkColors, orangeColors, greenColors } from "../../lib/colors/color";
import ParticipatePage from "../../components/voltaire/ParticipatePage";
import { AndamioSVG } from "../../lib/icons/AndamioSVG";

export default function Index() {
  const colors = { blueColors, redColors, pinkColors, orangeColors, greenColors };

  return (
    <Layout footerBg="bg-black2-900">
      <ParticipatePage />
      <VoltaireStickyNoteList colors={colors} ignore="participate" />
      <br />
    </Layout>
  );
}
