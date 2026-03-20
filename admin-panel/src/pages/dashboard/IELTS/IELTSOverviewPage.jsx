// /pages/ielts/IELTSOverviewPage.jsx
import React from "react";
import GenericCrudPage from "../../../components/IELTScom";

const IELTSOverviewPage = () => {
  return (
    <GenericCrudPage
      endpoint="ielts/overview"
      title="IELTS Overview"
      fields={[
        { name: "title", label: "Title", type: "text" },
        { name: "description", label: "Description", type: "textarea" },
        {
          name: "countries",
          label: "Countries (comma separated)",
          type: "text",
        },
      ]}
      columns={[{ key: "title", label: "Title" }]}
    />
  );
};

export default IELTSOverviewPage;
