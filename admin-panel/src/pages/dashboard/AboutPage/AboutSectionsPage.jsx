import GenericCrudPage from "../../../components/GenericCrudPage";

const AboutSectionsPage = () => {
  return (
    <GenericCrudPage
      endpoint="about/sections"
      title="Sections"
      fields={[
        { name: "type", label: "Type (agency/goal)" },
        { name: "title", label: "Title" },
        { name: "description", label: "Description" },
      ]}
      columns={[
        { key: "type", label: "Type" },
        { key: "title", label: "Title" },
        { key: "description", label: "Description" },
      ]}
    />
  );
};

export default AboutSectionsPage;
