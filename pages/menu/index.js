import React from "react";
import Layout from "../../components/Layouts/Layout";
import MenuPage from "../../components/menu/MenuPage";

export default function index() {
  return (
    <Layout footerBg="bg-black2-900">
      <MenuPage />
    </Layout>
  );
}
