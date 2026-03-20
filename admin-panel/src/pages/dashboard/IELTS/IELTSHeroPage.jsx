// /pages/ielts/IELTSHeroPage.jsx
import React from "react";
import GenericCrudPage from "../../../components/IELTScom";

const IELTSHeroPage = () => {
  return (
    <GenericCrudPage
      endpoint="ielts/hero"
      title="IELTS Hero"
      fields={[
        { name: "subtitle", label: "Subtitle", type: "text" },
        { name: "title", label: "Title", type: "text" },
        { name: "description", label: "Description", type: "textarea" },
        { name: "image", label: "Banner Image", type: "text" },
      ]}
      columns={[
        { key: "title", label: "Title" },
        { key: "subtitle", label: "Subtitle" },
      ]}
    />
  );
};

export default IELTSHeroPage;
