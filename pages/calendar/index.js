import React from "react";
import CalendarPage from "../../components/calendar/CalendarPage";
import Layout from "../../components/Layouts/Layout";

export default function index() {
  return (
    <Layout footerBg="bg-black2-900">
      <CalendarPage />
    </Layout>
  );
}
