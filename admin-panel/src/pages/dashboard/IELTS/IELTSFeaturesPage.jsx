// /pages/ielts/IELTSFeaturesPage.jsx
import React from "react";
import GenericCrudPage from "../../../components/IELTScom";

const IELTSFeaturesPage = () => {
  return (
    <GenericCrudPage
      endpoint="ielts/features"
      title="IELTS Features"
      fields={[
        { name: "title", label: "Title", type: "text" },
        { name: "description", label: "Description", type: "textarea" },
        { name: "icon", label: "Icon", type: "text" },
        { name: "order", label: "Order", type: "number" },
      ]}
      columns={[
        { key: "title", label: "Title" },
        { key: "icon", label: "Icon" },
      ]}
    />
  );
};

export default IELTSFeaturesPage;
