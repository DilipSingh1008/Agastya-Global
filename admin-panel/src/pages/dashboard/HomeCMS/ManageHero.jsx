import React, { useState } from "react";
import { useTheme } from "../../../context/ThemeContext";
import { Formik, Form, Field, FieldArray } from "formik";
import { Plus, Trash2, Edit3, X } from "lucide-react";
import {
  useGetItemsQuery,
  useCreateItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
  usePatchItemMutation,
} from "../../../redux/api/apiSlice.js";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Searchbar from "../../../components/Searchbar";
import { useSelector } from "react-redux";

const ManageHero = () => {
  const { isDarkMode } = useTheme();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;

  // Permissions
  const permissions = useSelector((state) => state.permission.permissions);
  const rawPermission = permissions?.find((p) => p.module.name === "faq");
  const localRole = localStorage.getItem("role");

  const permission =
    localRole === "admin"
      ? { add: true, edit: true, delete: true, view: true }
      : rawPermission;

  // API
  const { data, isLoading, refetch } = useGetItemsQuery(
    `home-hero?page=${page}&limit=${limit}&search=${searchQuery}`,
  );

  const items = data?.data || [];
  const totalPages = data?.pagination?.totalPages || 1;

  const [createItem] = useCreateItemMutation();
  const [updateItem] = useUpdateItemMutation();
  const [deleteItem] = useDeleteItemMutation();
  const [patchItem] = usePatchItemMutation();

  // Theme
  const theme = {
    bg: isDarkMode ? "bg-[#0b0e14]" : "bg-gray-50",
    card: isDarkMode
      ? "bg-[#151b28] border-gray-800"
      : "bg-white border-gray-200",
    text: isDarkMode ? "text-slate-300" : "text-gray-700",
    subText: "opacity-60",
    input: isDarkMode
      ? "bg-[#1f2637] border-gray-700 text-white"
      : "bg-white border-gray-300",
    primary: "bg-blue-600 hover:bg-blue-700",
  };

  // Submit
  const handleSubmit = async (values) => {
    if (editingItem) {
      await updateItem({
        url: `home-hero/${editingItem._id}`,
        data: values,
      });
    } else {
      await createItem({
        url: "home-hero",
        data: values,
      });
    }

    setIsModalOpen(false);
    setEditingItem(null);
  };

  // Delete
  const handleDelete = async (id) => {
    if (confirm("Delete this item?")) {
      await deleteItem(`home-hero/${id}`);
    }
  };

  // Toggle
  const handleToggle = async (id) => {
    await patchItem({
      url: `home-hero/toggle-status/${id}`,
      data: {},
    });
    refetch();
  };

  return (
    <div className={`min-h-screen p-4 md:p-6 ${theme.bg} ${theme.text}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div>
            <h1 className="text-xl font-bold">Manage Hero Sections</h1>
            <p className={`text-xs ${theme.subText}`}>
              Control homepage hero content
            </p>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <Searchbar
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPage(1);
              }}
            />

            {permission?.add && (
              <button
                onClick={() => {
                  setEditingItem(null);
                  setIsModalOpen(true);
                }}
                className={`flex items-center gap-2 px-4 py-2 text-white rounded-lg text-sm font-semibold transition ${theme.primary}`}
              >
                <Plus size={16} /> Add
              </button>
            )}
          </div>
        </div>

        {/* Table */}
        <div
          className={`rounded-2xl border shadow-sm overflow-hidden ${theme.card}`}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 dark:bg-[#1f2637] text-xs uppercase">
                <tr>
                  <th className="p-4 text-center">#</th>
                  <th className="p-4">Image</th>
                  <th className="p-4">Title</th>
                  <th className="p-4 text-center">Status</th>
                  {(permission?.edit || permission?.delete) && (
                    <th className="p-4 text-right pr-6">Actions</th>
                  )}
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {isLoading ? (
                  <tr>
                    <td colSpan="5" className="text-center py-10">
                      Loading...
                    </td>
                  </tr>
                ) : items.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-10 opacity-60">
                      No data found
                    </td>
                  </tr>
                ) : (
                  items.map((item, i) => (
                    <tr
                      key={item._id}
                      className="hover:bg-blue-500/5 transition"
                    >
                      <td className="p-4 text-center opacity-60">
                        {(page - 1) * limit + i + 1}
                      </td>

                      <td className="p-4">
                        <img
                          src={`http://localhost:5000/${item.image}`}
                          className="w-16 h-10 object-cover rounded-lg border"
                          alt=""
                        />
                      </td>

                      <td className="p-4 font-medium">{item.title}</td>

                      <td className="p-4 text-center">
                        <button
                          onClick={() => handleToggle(item._id)}
                          className={`w-10 h-5 rounded-full relative transition ${
                            item.status ? "bg-blue-600" : "bg-gray-400"
                          }`}
                        >
                          <span
                            className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${
                              item.status ? "left-6" : "left-1"
                            }`}
                          />
                        </button>
                      </td>

                      {(permission?.edit || permission?.delete) && (
                        <td className="p-4 text-right pr-6">
                          <div className="flex justify-end gap-2">
                            {permission?.edit && (
                              <button
                                onClick={() => {
                                  setEditingItem(item);
                                  setIsModalOpen(true);
                                }}
                                className="p-2 rounded-lg hover:bg-blue-500/10 hover:text-blue-600 transition"
                              >
                                <Edit3 size={15} />
                              </button>
                            )}

                            {permission?.delete && (
                              <button
                                onClick={() => handleDelete(item._id)}
                                className="p-2 rounded-lg hover:bg-red-500/10 hover:text-red-500 transition"
                              >
                                <Trash2 size={15} />
                              </button>
                            )}
                          </div>
                        </td>
                      )}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-800">
            <span className="text-xs opacity-60">
              Page {page} of {totalPages}
            </span>

            <div className="flex items-center gap-2">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="p-2 border rounded-lg disabled:opacity-30 hover:bg-blue-500/10"
              >
                <FiChevronLeft />
              </button>

              <span className="text-xs">{page}</span>

              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="p-2 border rounded-lg disabled:opacity-30 hover:bg-blue-500/10"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div
            className={`w-full max-w-lg rounded-2xl p-6 shadow-2xl ${theme.card}`}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-bold">
                {editingItem ? "Edit Hero" : "Add Hero"}
              </h2>
              <button onClick={() => setIsModalOpen(false)}>
                <X />
              </button>
            </div>

            {/* Form */}
            <Formik
              enableReinitialize
              initialValues={{
                title: editingItem?.title || "",
                image: null,
              }}
              onSubmit={async (values) => {
                const formData = new FormData();
                formData.append("folder", "homehero");

                formData.append("title", values.title);

                if (values.image) {
                  formData.append("image", values.image);
                }

                if (editingItem) {
                  await updateItem({
                    url: `home-hero/${editingItem._id}`,
                    data: formData,
                  });
                } else {
                  await createItem({
                    url: "home-hero",
                    data: formData,
                  });
                }

                setIsModalOpen(false);
                setEditingItem(null);
              }}
            >
              {({ setFieldValue, values }) => (
                <Form className="space-y-4">
                  {/* Title */}
                  <Field
                    name="title"
                    placeholder="Title"
                    className={`w-full p-2 rounded-lg border outline-none focus:border-blue-500 ${theme.input}`}
                  />

                  {/* Image Upload */}
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        setFieldValue("image", file);
                      }}
                      className="text-sm"
                    />
                  </div>

                  {/* Preview */}
                  {values.image && (
                    <img
                      src={URL.createObjectURL(values.image)}
                      alt="preview"
                      className="w-32 h-20 object-cover rounded border"
                    />
                  )}

                  {/* Existing Image (Edit Mode) */}
                  {editingItem && !values.image && editingItem.images && (
                    <img
                      src={`http://localhost:5000${editingItem.images}`}
                      alt="existing"
                      className="w-32 h-20 object-cover rounded border"
                    />
                  )}

                  <button
                    type="submit"
                    className={`w-full py-2 rounded-lg text-white font-semibold transition ${theme.primary}`}
                  >
                    {editingItem ? "Update" : "Create"}
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

export default ManageHero;
