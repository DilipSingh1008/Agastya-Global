import GenericCrudPage from "../../../components/GenericCrudPage";

const ManageServices = () => {
  return (
    <GenericCrudPage
      endpoint="Conservices"
      title="Services"
      showCategory={true}
      categoryOptions={[
        { label: "Student Support", value: "student_support" },
        { label: "Application Services", value: "application_services" },
      ]}
      fields={[
        { name: "title", label: "Title" },
        { name: "icon", label: "Icon" },
      ]}
      columns={[
        { key: "title", label: "Title" },
        { key: "category", label: "Category" },
      ]}
    />
  );
};

export default ManageServices;
