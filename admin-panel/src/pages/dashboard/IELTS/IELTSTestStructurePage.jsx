// /pages/ielts/IELTSTestStructurePage.jsx
import React from "react";
import GenericCrudPage from "../../../components/IELTScom";

const IELTSTestStructurePage = () => {
  return (
    <GenericCrudPage
      endpoint="ielts/test-structure"
      title="Test Structure"
      fields={[
        { name: "name", label: "Part", type: "text" },
        { name: "title", label: "title", type: "text" },
        { name: "time", label: "Time", type: "text" },
      ]}
      columns={[
        { key: "name", label: "Part" },
        { key: "title", label: "title" },
        { key: "time", label: "Time" },
      ]}
    />
  );
};

export default IELTSTestStructurePage;
