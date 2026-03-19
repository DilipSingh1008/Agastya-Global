import GenericCrudPage from "../../../components/GenericCrudPage";

const ManageQuestions = () => {
  return (
    <GenericCrudPage
      endpoint="questions"
      title="Questions"
      fields={[
        { name: "question", label: "Question" },
        { name: "order", label: "Order" },
      ]}
      columns={[
        { key: "question", label: "Question" },
        { key: "order", label: "Order" },
      ]}
    />
  );
};

export default ManageQuestions;
