import React, { useState } from "react";
import { useTheme } from "../../../context/ThemeContext.jsx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Plus, Trash2, Edit3, X } from "lucide-react";
import {
  useGetItemsQuery,
  useCreateItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
  usePatchItemMutation,
} from "../../../redux/api/apiSlice.js";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Searchbar from "../../../components/Searchbar.jsx";
import { useSelector } from "react-redux";
import CommonImage from "../../../components/CommonImage.jsx";

const HomeSliderPage = () => {
  const { isDarkMode } = useTheme();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(5);

  // sorting
  const [sortBy, setSortBy] = useState("createdAt");
  const [order, setOrder] = useState("desc");

  const permissions = useSelector((state) => state.permission.permissions);
  const rawPermission = permissions?.find(
    (p) => p.module.name === "homeSlider",
  );

  const localRole = localStorage.getItem("role");
  const permission =
    localRole === "admin"
      ? { add: true, edit: true, delete: true, view: true }
      : rawPermission;

  const { data, isLoading, refetch } = useGetItemsQuery(
    `home-slides?page=${page}&limit=${limit}&search=${searchQuery}&sortBy=${sortBy}&order=${order}`,
  );

  const items = data?.data || [];
  const totalPages = data?.pagination?.totalPages || 1;

  const [createItem, { isLoading: creating }] = useCreateItemMutation();
  const [updateItem, { isLoading: updating }] = useUpdateItemMutation();
  const [deleteItem] = useDeleteItemMutation();
  const [patchItem] = usePatchItemMutation();
  // ✅ Sorting handler
  const handleSort = (field) => {
    const isAsc = sortBy === field && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setSortBy(field);
  };

  const SortIcon = ({ field }) => (
    <span className="opacity-50 text-[10px] ml-1">
      {sortBy === field ? (order === "asc" ? "▲" : "▼") : "↕"}
    </span>
  );

  // Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    await deleteItem(`home-slides/${id}`);
    refetch();
  };

  // Toggle status
  const handleToggleStatus = async (id) => {
    await patchItem({
      url: `home-slides/${id}/status`,
    });
    refetch();
  };

  // Submit
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();
      formData.append("folder", "HomeSlider");
      formData.append("title", values.title);
      formData.append("highlight", values.highlight);
      formData.append("desc", values.desc);

      if (values.image) formData.append("image", values.image);

      if (editingItem) {
        await updateItem({
          url: `home-slides/${editingItem._id}`,
          data: formData,
        });
      } else {
        await createItem({
          url: "home-slides",
          data: formData,
        });
      }

      setIsModalOpen(false);
      setEditingItem(null);
      refetch();
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const SliderSchema = Yup.object().shape({
    title: Yup.string().required("Title required"),
    highlight: Yup.string().required("Highlight required"),
    desc: Yup.string().required("Description required"),
    image: Yup.mixed().when("isEdit", {
      is: false,
      then: (schema) => schema.required("Image required"),
    }),
  });

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

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center text-xs">
        Loading...
      </div>
    );
  return (
    <div className={`h-screen w-full flex flex-col ${theme.main}`}>
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex justify-between mb-4">
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
                className="flex gap-1 px-3 py-1.5 bg-(--primary) text-white rounded-lg text-xs"
              >
                <Plus size={14} /> Add Slide
              </button>
            )}
          </div>

          {/* Table */}
          <div className={`border rounded-xl overflow-hidden ${theme.card}`}>
            <table className="w-full text-xs">
              <thead className={theme.header}>
                <tr>
                  <th className="p-3">ID</th>

                  <th
                    className="p-3 cursor-pointer"
                    onClick={() => handleSort("title")}
                  >
                    Title <SortIcon field="title" />
                  </th>

                  <th
                    className="p-3 cursor-pointer"
                    onClick={() => handleSort("highlight")}
                  >
                    Highlight <SortIcon field="highlight" />
                  </th>

                  <th className="p-3">Image</th>

                  <th
                    className="p-3 cursor-pointer"
                    onClick={() => handleSort("status")}
                  >
                    Status <SortIcon field="status" />
                  </th>

                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>

              <tbody>
                {items.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-10 opacity-50">
                      No data found
                    </td>
                  </tr>
                ) : (
                  items.map((item, i) => (
                    <tr key={item._id} className=" hover:bg-indigo-500/5">
                      <td className="p-3">{(page - 1) * limit + i + 1}</td>

                      <td className="p-3">{item.title}</td>

                      <td className="p-3 text-blue-500">{item.highlight}</td>

                      <td className="p-3">
                        <CommonImage
                          src={
                            item.image
                              ? `http://localhost:5000${item.image}`
                              : null
                          }
                          className="w-14 h-10 object-cover rounded"
                        />
                      </td>

                      {/* Status */}
                      <td className="p-3">
                        <button
                          onClick={() => handleToggleStatus(item._id)}
                          className={`w-9 h-4 rounded-full relative ${
                            item.status ? "bg-(--primary)" : "bg-gray-400"
                          }`}
                        >
                          <div
                            className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${
                              item.status ? "left-5" : "left-0.5"
                            }`}
                          />
                        </button>
                      </td>

                      {/* Actions */}
                      <td className="p-3 text-right flex justify-end gap-2">
                        {permission?.edit && (
                          <button
                            onClick={() => {
                              setEditingItem(item);
                              setIsModalOpen(true);
                            }}
                          >
                            <Edit3 size={14} />
                          </button>
                        )}

                        {permission?.delete && (
                          <button onClick={() => handleDelete(item._id)}>
                            <Trash2 size={14} />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
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
                className="p-1.5 cursor-pointer border rounded-md disabled:opacity-30 hover:border-(--primary) hover:text-(--primary)"
              >
                <FiChevronLeft size={16} />
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setPage(i + 1)}
                  className={`w-7 h-7 cursor-pointer text-[11px] rounded-md border transition-all ${
                    page === i + 1
                      ? "bg-(--primary) text-white border-(--primary) shadow-sm"
                      : "hover:border-(--primary) hover:text-(--primary) border-transparent"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={page === totalPages || isLoading}
                onClick={() => setPage(page + 1)}
                className="p-1.5 border cursor-pointer rounded-md disabled:opacity-30 hover:border-(--primary) hover:text-(--primary)"
              >
                <FiChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px] p-4">
              <div
                className={`${
                  isDarkMode ? "bg-[#151b28] text-white" : "bg-white"
                } p-5 rounded-xl w-full max-w-xs shadow-xl border border-gray-700/30`}
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-bold">
                    {editingItem ? "Edit Slide" : "New Slide"}
                  </h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="opacity-50 cursor-pointer hover:opacity-100"
                  >
                    <X size={16} />
                  </button>
                </div>

                <Formik
                  initialValues={{
                    title: editingItem?.title || "",
                    highlight: editingItem?.highlight || "",
                    desc: editingItem?.desc || "",
                    image: null,
                    isEdit: !!editingItem,
                  }}
                  validationSchema={SliderSchema}
                  onSubmit={handleSubmit}
                >
                  {({ setFieldValue, values, isSubmitting }) => (
                    <Form className="space-y-3">
                      {/* Title */}
                      <div>
                        <label className="block text-[10px] font-bold opacity-50 uppercase mb-1">
                          Title <span className="text-red-500 text-sm">*</span>
                        </label>
                        <Field
                          name="title"
                          className="w-full p-2 text-sm rounded-lg bg-gray-500/5 border border-gray-500/20 outline-none focus:border-(--primary)"
                        />
                        <ErrorMessage
                          name="title"
                          component="div"
                          className="text-red-500 text-[10px]"
                        />
                      </div>

                      {/* Highlight */}
                      <div>
                        <label className="block text-[10px] font-bold opacity-50 uppercase mb-1">
                          Highlight
                        </label>
                        <Field
                          name="highlight"
                          className="w-full p-2 text-sm rounded-lg bg-gray-500/5 border border-gray-500/20 outline-none focus:border-(--primary)"
                        />
                        <ErrorMessage
                          name="highlight"
                          component="div"
                          className="text-red-500 text-[10px]"
                        />
                      </div>

                      {/* Description */}
                      <div>
                        <label className="block text-[10px] font-bold opacity-50 uppercase mb-1">
                          Description
                        </label>
                        <Field
                          name="desc"
                          className="w-full p-2 text-sm rounded-lg bg-gray-500/5 border border-gray-500/20 outline-none focus:border-(--primary)"
                        />
                        <ErrorMessage
                          name="desc"
                          component="div"
                          className="text-red-500 text-[10px]"
                        />
                      </div>

                      {/* Image */}
                      <div>
                        <label className="block text-[10px] font-bold opacity-50 uppercase mb-1">
                          Image
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            setFieldValue("image", e.currentTarget.files[0])
                          }
                          className="w-full text-xs file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-[10px] file:font-bold file:bg-(--primary) file:text-white hover:file:bg-(--primary) cursor-pointer"
                        />

                        {values.image && (
                          <img
                            src={
                              values.image instanceof File
                                ? URL.createObjectURL(values.image)
                                : values.image
                            }
                            alt="preview"
                            className="w-16 h-16 object-cover rounded mt-2"
                          />
                        )}

                        <ErrorMessage
                          name="image"
                          component="div"
                          className="text-red-500 text-[10px]"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting || creating || updating}
                        className="w-full cursor-pointer py-2 mt-2 bg-(--primary) text-white rounded-lg text-xs font-bold hover:opacity-90 transition-all disabled:opacity-50"
                      >
                        {editingItem
                          ? updating
                            ? "Updating..."
                            : "Update Slide"
                          : creating
                            ? "Creating..."
                            : "Create Slide"}
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomeSliderPage;
