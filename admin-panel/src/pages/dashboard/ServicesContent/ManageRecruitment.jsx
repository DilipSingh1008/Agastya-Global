import GenericCrudPage from "../../../components/GenericCrudPage";

const ManageRecruitment = () => {
  return (
    <GenericCrudPage
      endpoint="recruitments"
      title="Recruitment"
      fields={[{ name: "name", label: "Name" }]}
      columns={[{ key: "name", label: "Name" }]}
    />
  );
};

export default ManageRecruitment;
