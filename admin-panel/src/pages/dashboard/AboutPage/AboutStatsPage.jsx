import GenericCrudPage from "../../../components/GenericCrudPage";

const AboutStatsPage = () => {
  return (
    <GenericCrudPage
      endpoint="about/stats"
      title="Stats"
      fields={[
        { name: "label", label: "Label" },
        { name: "value", label: "Value" },
        { name: "icon", label: "Icon Name (Lucide)" },
        { name: "order", label: "Order" },
      ]}
      columns={[
        { key: "label", label: "Label" },
        { key: "value", label: "Value" },
        { key: "icon", label: "Icon" },
        { key: "order", label: "Order" },
      ]}
    />
  );
};

export default AboutStatsPage;
