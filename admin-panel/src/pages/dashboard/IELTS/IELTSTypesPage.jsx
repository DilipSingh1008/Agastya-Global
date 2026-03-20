// /pages/ielts/IELTSTypesPage.jsx
import React from "react";
import GenericCrudPage from "../../../components/IELTScom";

const IELTSTypesPage = () => {
  return (
    <GenericCrudPage
      endpoint="ielts/types"
      title="IELTS Course Types"
      fields={[
        { name: "type", label: "Type (Academic/General)" },
        { name: "title", label: "Title" },
        { name: "description", label: "Description" },
        { name: "icon", label: "Icon" },
      ]}
      columns={[
        { key: "type", label: "Type" },
        { key: "title", label: "Title" },
      ]}
    />
  );
};

export default IELTSTypesPage;
