import GenericCrudPage from "../../../components/GenericCrudPage";

const AboutPartnersPage = () => {
  return (
    <GenericCrudPage
      endpoint="about/partners"
      title="Partners"
      fields={[
        { name: "image", label: "Image URL" },
        { name: "alt", label: "Alt Text" },
        { name: "order", label: "Order" },
      ]}
      columns={[
        { key: "image", label: "Image" },
        { key: "alt", label: "Alt" },
        { key: "order", label: "Order" },
      ]}
    />
  );
};

export default AboutPartnersPage;
