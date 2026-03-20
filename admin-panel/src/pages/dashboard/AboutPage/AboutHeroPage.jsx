import GenericCrudPage from "../../../components/GenericCrudPage";

const AboutHeroPage = () => {
  return (
    <GenericCrudPage
      endpoint="about/hero"
      title="Hero"
      fields={[
        { name: "subtitle", label: "Subtitle" },
        { name: "title", label: "Title" },
        { name: "description", label: "Description" },
      ]}
      columns={[
        { key: "subtitle", label: "Subtitle" },
        { key: "title", label: "Title" },
        { key: "description", label: "Description" },
      ]}
    />
  );
};

export default AboutHeroPage;
