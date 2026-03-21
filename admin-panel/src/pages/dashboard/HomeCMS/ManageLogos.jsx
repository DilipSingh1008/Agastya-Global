import React from "react";
import Homedata from "../../../components/Homedata";

const ManageLogos = () => {
  return (
    <Homedata
      endpoint="home-logos"
      title="Logo"
      fields={[
        { name: "name", label: "Name" },
        { name: "image", label: "Logo Image", type: "image" },
      ]}
      columns={[
        { key: "name", label: "Name" },
        // { key: "image", label: "image" },
      ]}
    />
  );
};

export default ManageLogos;
