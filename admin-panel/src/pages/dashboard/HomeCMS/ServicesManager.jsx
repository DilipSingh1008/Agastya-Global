import React from "react";

import Homedata from "../../../components/Homedata";

const ServicesManager = () => {
  return (
    <Homedata
      endpoint="home-services"
      title="Service"
      fields={[
        { name: "title", label: "Title" },
        { name: "desc", label: "Description" },
        { name: "icon", label: "Icon", type: "icon" },
      ]}
      columns={[
        { key: "title", label: "Title" },
        { key: "desc", label: "Description" },
      ]}
    />
  );
};

export default ServicesManager;
