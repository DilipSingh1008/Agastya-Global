import React, { useState } from "react";
import { useTheme } from "../../../context/ThemeContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Plus, Trash2, Edit3, X } from "lucide-react";
import {
  useGetItemsQuery,
  useCreateItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
} from "../../../redux/api/apiSlice";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Searchbar from "../../../components/Searchbar";
import { toast } from "react-toastify";

const ManageCourses = () => {
  const { isDarkMode } = useTheme();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;

  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const {
    data: res,
    isLoading,
    refetch,
  } = useGetItemsQuery(
    `home-courses?page=${page}&limit=${limit}&search=${searchQuery}&sortField=${sortField}&sortOrder=${sortOrder}`,
  );

  const items = res?.data || [];
  const totalPages = res?.pagination?.totalPages || 1;

  const [createItem, { isLoading: creating }] = useCreateItemMutation();
  const [updateItem, { isLoading: updating }] = useUpdateItemMutation();
  const [deleteItem] = useDeleteItemMutation();

  // DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await deleteItem(`home-courses/${id}`).unwrap();
      toast.success("Deleted successfully");
      refetch();
    } catch {
      toast.error("Delete failed");
    }
  };

  // TOGGLE STATUS
  const handleToggleStatus = async (id) => {
    try {
      await updateItem({
        url: `home-courses/toggle/${id}`,
        data: {},
      }).unwrap();

      toast.success("Status updated");
      refetch();
    } catch {
      toast.error("Toggle failed");
    }
  };

  // SORT
  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
    setPage(1);
  };

  // SUBMIT
  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append("folder", "courses");
      formData.append("name", values.name);
      formData.append("duration", values.duration);

      if (values.image) {
        formData.append("image", values.image);
      }

      if (editingItem) {
        await updateItem({
          url: `home-courses/${editingItem._id}`,
          data: formData,
        }).unwrap();
        toast.success("Updated successfully");
      } else {
        await createItem({
          url: "home-courses",
          data: formData,
        }).unwrap();
        toast.success("Created successfully");
      }

      closeModal();
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
    setPreviewImage("");
  };

  // VALIDATION
  const ValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    duration: Yup.string().required("Duration is required"),
    image: Yup.mixed().required("Image is required"),
  });

  const SortIcon = ({ field }) => (
    <span className="text-[10px] ml-1 cursor-pointer">
      {sortField === field ? (sortOrder === "asc" ? "▲" : "▼") : "↕"}
    </span>
  );

  const theme = {
    main: isDarkMode
      ? "bg-[#0b0e14] text-slate-300"
      : "bg-gray-50 text-gray-700",
    card: isDarkMode
      ? "bg-[#151b28] border-gray-800"
      : "bg-white border-gray-200",
    header: isDarkMode
      ? "bg-[#1f2637] text-gray-400"
      : "bg-gray-100 text-gray-500",
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme.main}`}>
      <div className="max-w-6xl mx-auto w-full p-4">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between gap-3 mb-4">
          <Searchbar
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(1);
            }}
          />

          <button
            onClick={() => {
              setEditingItem(null);
              setPreviewImage("");
              setIsModalOpen(true);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-(--primary) text-white rounded-lg text-sm font-medium cursor-pointer hover:opacity-90 transition"
          >
            <Plus size={16} /> Add Course
          </button>
        </div>

        {/* TABLE */}
        <div
          className={`rounded-xl border shadow-sm overflow-hidden ${theme.card}`}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead
                className={`uppercase tracking-wider font-bold ${theme.header}`}
              >
                {" "}
                <tr>
                  <th className="px-4 py-3">#</th>

                  <th
                    className="px-4 py-3 cursor-pointer"
                    onClick={() => handleSort("name")}
                  >
                    Name <SortIcon field="name" />
                  </th>

                  <th
                    className="px-4 py-3 cursor-pointer"
                    onClick={() => handleSort("duration")}
                  >
                    Duration <SortIcon field="duration" />
                  </th>

                  <th className="px-4 py-3">Image</th>
                  <th className="px-4 py-3 w-24">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {isLoading ? (
                  <tr>
                    <td colSpan="5" className="text-center py-6">
                      Loading...
                    </td>
                  </tr>
                ) : items.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-6">
                      No Data Found
                    </td>
                  </tr>
                ) : (
                  items.map((item, index) => (
                    <tr
                      key={item._id}
                      className="border-t hover:bg-gray-50 dark:hover:bg-[#1a2233] transition"
                    >
                      <td className="px-4 py-3">
                        {(page - 1) * limit + index + 1}
                      </td>

                      <td className="px-4 py-3">{item.name}</td>
                      <td className="px-4 py-3">{item.duration}</td>

                      <td className="px-4 py-3">
                        <img
                          src={item.image}
                          alt=""
                          className="w-10 h-10 object-cover rounded cursor-pointer"
                        />
                      </td>
                      <td className="px-4 py-2.5">
                        <button
                          onClick={() => handleToggleStatus(item._id)}
                          className={`cursor-pointer w-8 h-4 rounded-full relative transition-colors ${
                            item.status ? "bg-(--primary)" : "bg-gray-400"
                          }`}
                        >
                          <div
                            className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${
                              item.status ? "left-4.5" : "left-0.5"
                            }`}
                          />
                        </button>
                      </td>
                      {/* ACTION COLUMN */}
                      <td className="px-4 py-3">
                        <div className="flex justify-end items-center gap-3">
                          {/* TOGGLE */}

                          {/* EDIT */}
                          <button
                            onClick={() => {
                              setEditingItem(item);
                              setPreviewImage(item.image);
                              setIsModalOpen(true);
                            }}
                            className="cursor-pointer hover:text-(--primary)"
                          >
                            <Edit3 size={16} />
                          </button>

                          {/* DELETE */}
                          <button
                            onClick={() => handleDelete(item._id)}
                            className="cursor-pointer hover:text-red-500"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div
            className={`flex items-center justify-between p-3 border-t ${theme.divider}`}
          >
            <span className="text-[11px] opacity-60">
              Showing {items.length} entries
            </span>
            <div className="flex items-center gap-1">
              <button
                disabled={page === 1 || isLoading}
                onClick={() => setPage(page - 1)}
                className="cursor-pointer p-1.5 border rounded-md disabled:opacity-30 hover:border-(--primary) hover:text-(--primary)"
              >
                <FiChevronLeft size={16} />
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setPage(i + 1)}
                  className={`cursor-pointer w-7 h-7 text-[11px] rounded-md border transition-all ${
                    page === i + 1
                      ? "bg-(--primary) text-white border-(--primary)"
                      : "border-transparent hover:border-(--primary) hover:text-(--primary)"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                disabled={page === totalPages || isLoading}
                onClick={() => setPage(page + 1)}
                className="cursor-pointer p-1.5 border rounded-md disabled:opacity-30 hover:border-(--primary) hover:text-(--primary)"
              >
                <FiChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white dark:bg-[#151b28] w-full max-w-md rounded-xl p-5 shadow-lg">
            <div className="flex justify-between mb-4">
              <h2 className="font-semibold text-lg">
                {editingItem ? "Edit Course" : "Add Course"}
              </h2>
              <button className="cursor-pointer" onClick={closeModal}>
                <X />
              </button>
            </div>

            <Formik
              initialValues={{
                name: editingItem?.name || "",
                duration: editingItem?.duration || "",
                image: null,
              }}
              enableReinitialize
              validationSchema={ValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue }) => (
                <Form className="space-y-4">
                  <Field
                    name="name"
                    placeholder="Name"
                    className="w-full p-2 border rounded cursor-text"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-xs"
                  />

                  <Field
                    name="duration"
                    placeholder="Duration"
                    className="w-full p-2 border rounded cursor-text"
                  />
                  <ErrorMessage
                    name="duration"
                    component="div"
                    className="text-red-500 text-xs"
                  />

                  <input
                    type="file"
                    accept="image/*"
                    className="w-full cursor-pointer"
                    onChange={(e) => {
                      const file = e.currentTarget.files[0];
                      setFieldValue("image", file);

                      if (file) {
                        setPreviewImage(URL.createObjectURL(file));
                      }
                    }}
                  />

                  <ErrorMessage
                    name="image"
                    component="div"
                    className="text-red-500 text-xs"
                  />

                  {previewImage && (
                    <img
                      src={previewImage}
                      className="w-full h-40 object-cover rounded border cursor-pointer"
                    />
                  )}

                  <button
                    type="submit"
                    disabled={creating || updating}
                    className="w-full bg-(--primary) text-white py-2 rounded cursor-pointer hover:opacity-90 transition"
                  >
                    {editingItem
                      ? updating
                        ? "Updating..."
                        : "Update"
                      : creating
                        ? "Creating..."
                        : "Create"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCourses;
