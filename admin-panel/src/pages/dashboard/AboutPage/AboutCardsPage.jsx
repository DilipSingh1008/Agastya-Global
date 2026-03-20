import GenericCrudPage from "../../../components/GenericCrudPage";

const AboutCardsPage = () => {
  return (
    <GenericCrudPage
      endpoint="about/cards"
      title="Cards"
      fields={[
        { name: "type", label: "Type", type: "text" },
        { name: "points", label: "Points", type: "array" },
      ]}
      columns={[
        { key: "type", label: "Type" },
        { key: "points", label: "Points" },
      ]}
    />
  );
};

export default AboutCardsPage;
