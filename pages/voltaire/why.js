import React from "react";
import VoltairePage from "../../components/voltaire/VoltairePage";
import VoltaireStickyNoteList from "../../components/voltaire/VoltaireStickyNoteList";
import Layout from "../../components/Layouts/Layout";
import { blueColors, redColors, pinkColors, orangeColors, greenColors } from "../../lib/colors/color";
import WhyPage from "../../components/voltaire/WhyPage";

export default function Index() {
  const colors = { blueColors, redColors, pinkColors, orangeColors, greenColors };

  return (
    <Layout footerBg="bg-black2-900">
      <WhyPage />
      <VoltaireStickyNoteList colors={colors} ignore="why" />
      <br />
    </Layout>
  );
}
