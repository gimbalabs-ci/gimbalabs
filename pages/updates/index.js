import React from "react";
import Layout from "../../components/Layouts/Layout";
import UpdatePage from "../../components/updates/UpdatePage";

export default function index() {
  return (
    <Layout footerBg="bg-black2-900">
      <UpdatePage />
    </Layout>
  );
}
