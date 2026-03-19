import GenericCrudPage from "../../../components/GenericCrudPage";


const ManageCourseTypes = () => {
  return (
    <GenericCrudPage
      endpoint="course-types"
      title="Course Types"
      fields={[
        { name: "title", label: "Title" },
        { name: "order", label: "Order" },
      ]}
      columns={[
        { key: "title", label: "Title" },
        { key: "order", label: "Order" },
      ]}
    />
  );
};

export default ManageCourseTypes;
