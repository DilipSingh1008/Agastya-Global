import GenericCrudPage from "../../../components/GenericCrudPage";

const ManageSubjects = () => {
  return (
    <GenericCrudPage
      endpoint="subjects"
      title="Subjects"
      fields={[
        { name: "name", label: "Name" },
      ]}
      columns={[
        { key: "name", label: "Name" },
      ]}
    />
  );
};

export default ManageSubjects;