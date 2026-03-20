import React from "react";
import GenericCrudPage from "../../../components/IELTScom";

const IELTSCTAPage = () => {
  return (
    <GenericCrudPage
      endpoint="ielts/cta"
      title="IELTS CTA"
      fields={[
        { name: "title", label: "Title", type: "text" },
        { name: "description", label: "Description", type: "textarea" },
        { name: "buttonText", label: "Button Text", type: "text" },
        { name: "backgroundImage", label: "Background Image", type: "file" },
      ]}
      columns={[
        { key: "title", label: "Title" },
        { key: "buttonText", label: "Button" },
      ]}
    />
  );
};

export default IELTSCTAPage;
