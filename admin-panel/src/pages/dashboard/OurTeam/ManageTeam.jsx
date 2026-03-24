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

const ManageTeam = () => {
  const { isDarkMode } = useTheme();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  // Permissions
  const permissions = useSelector((state) => state.permission.permissions);
  const rawPermission = permissions?.find((p) => p.module.name === "team");
  const localRole = localStorage.getItem("role");

  const teamPermission =
    localRole === "admin"
      ? { add: true, edit: true, delete: true, view: true }
      : rawPermission;

  // Fetch
  const { data: teamRes, isLoading } = useGetItemsQuery(
    `team?page=${page}&limit=${limit}&search=${searchQuery}&sortField=${sortField}&sortOrder=${sortOrder}`,
  );

  const team = teamRes?.data || [];
  const totalPages = teamRes?.pagination?.totalPages || 1;

  // Mutations
  const [createItem, { isLoading: createLoading }] = useCreateItemMutation();
  const [updateItem, { isLoading: updateLoading }] = useUpdateItemMutation();
  const [deleteItem] = useDeleteItemMutation();
  const [patchItem] = usePatchItemMutation();

  // Sorting
  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
    setPage(1);
  };

  const SortIcon = ({ field }) => (
    <span className="opacity-50 text-[10px] ml-1">
      {sortField === field ? (sortOrder === "asc" ? "▲" : "▼") : "↕"}
    </span>
  );

  // Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this member?")) return;
    await deleteItem(`team/${id}`);
  };

  // Toggle
  const handleToggleStatus = async (id) => {
    await patchItem({ url: `team/toggle-status/${id}`, data: {} });
  };

  // Submit
  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("folder", "Team");
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("role", values.role);
    formData.append("linkedin", values.linkedin);
    formData.append("instagram", values.instagram);

    if (values.image) {
      formData.append("image", values.image);
    }

    if (editingItem) {
      await updateItem({
        url: `team/${editingItem._id}`,
        data: formData,
      });
    } else {
      await createItem({
        url: "team",
        data: formData,
      });
    }

    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const ValidationSchema = Yup.object({
    name: Yup.string().required("Name required"),
    email: Yup.string().email().required("Email required"),
    role: Yup.string().required("Role required"),
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

  return (
    <div className={`min-h-screen w-full ${theme.main}`}>
      <div className="max-w-5xl mx-auto ">
        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between mb-4">
          <Searchbar
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(1);
            }}
          />

          {teamPermission?.add && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer flex items-center justify-center gap-1.5 px-3 py-2 bg-(--primary) text-white rounded-lg text-xs font-semibold"
            >
              <Plus size={14} /> Add Member
            </button>
          )}
        </div>

        {/* Table */}
        <div className={`rounded-xl border shadow-sm ${theme.card}`}>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead className={theme.header}>
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th
                    onClick={() => handleSort("name")}
                    className="cursor-pointer px-4 py-3"
                  >
                    Name <SortIcon field="name" />
                  </th>
                  <th className="px-4 py-3">Image</th>
                  <th
                    onClick={() => handleSort("email")}
                    className="cursor-pointer px-4 py-3"
                  >
                    Email <SortIcon field="email" />
                  </th>
                  <th
                    onClick={() => handleSort("role")}
                    className="cursor-pointer px-4 py-3"
                  >
                    Role <SortIcon field="role" />
                  </th>
                  <th>Status</th>
                  <th className="text-right px-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="7" className="text-center py-6">
                      Loading...
                    </td>
                  </tr>
                ) : team.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-6">
                      No Data
                    </td>
                  </tr>
                ) : (
                  team.map((item, index) => (
                    <tr key={item._id} className="hover:bg-indigo-500/5">
                      <td className="px-4 py-2">
                        {(page - 1) * limit + index + 1}
                      </td>
                      <td className="px-4 py-2">{item.name}</td>

                      <td className="px-4 py-2">
                        <img
                          src={
                            item.image
                              ? `${import.meta.env.VITE_BASE_URL}/${item.image}`
                              : "https://via.placeholder.com/40"
                          }
                          className="w-9 h-9 rounded-full object-cover border"
                        />
                      </td>

                      <td className="px-4 py-2 truncate max-w-[150px]">
                        {item.email}
                      </td>
                      <td className="px-4 py-2">{item.role}</td>

                      <td className="px-4 py-2">
                        <button
                          onClick={() => handleToggleStatus(item._id)}
                          className={`cursor-pointer w-9 h-5 rounded-full relative ${
                            item.status ? "bg-(--primary)" : "bg-gray-400"
                          }`}
                        >
                          <div
                            className={`absolute top-0.5 w-4 h-4 bg-white rounded-full ${
                              item.status ? "left-4" : "left-0.5"
                            }`}
                          />
                        </button>
                      </td>

                      <td className="px-4 py-2 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => {
                              setEditingItem(item);
                              setIsModalOpen(true);
                            }}
                            className="cursor-pointer p-1.5 hover:text-(--primary)"
                          >
                            <Edit3 size={14} />
                          </button>

                          <button
                            onClick={() => handleDelete(item._id)}
                            className="cursor-pointer p-1.5 hover:text-red-500"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-end p-3 gap-2">
            <button
              onClick={() => setPage(page - 1)}
              className="cursor-pointer"
            >
              <FiChevronLeft />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className="cursor-pointer"
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage(page + 1)}
              className="cursor-pointer"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div
              className={`w-full max-w-md rounded-2xl shadow-xl border transition-all ${
                isDarkMode
                  ? "bg-[#151b28] border-gray-800 text-white"
                  : "bg-white border-gray-200 text-gray-800"
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-800">
                <h3 className="text-sm font-semibold">
                  {editingItem ? "Edit Member" : "Add Member"}
                </h3>

                <button
                  onClick={closeModal}
                  className="cursor-pointer p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Form */}
              <div className="p-5">
                <Formik
                  initialValues={{
                    name: editingItem?.name || "",
                    email: editingItem?.email || "",
                    role: editingItem?.role || "",
                    linkedin: editingItem?.linkedin || "",
                    instagram: editingItem?.instagram || "",
                    image: null,
                  }}
                  validationSchema={Yup.object({
                    name: Yup.string().required("Name is required"),
                    email: Yup.string()
                      .email("Invalid email")
                      .required("Email required"),
                    role: Yup.string().required("Role required"),
                  })}
                  enableReinitialize
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting, setFieldValue, values }) => (
                    <Form className="space-y-4">
                      {/* Grid for Inputs: 2 per row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name */}
                        <div>
                          <label className="block text-[11px] font-semibold opacity-70 mb-1 uppercase">
                            Name *
                          </label>
                          <Field
                            name="name"
                            placeholder="Full name"
                            className="w-full px-3 py-2 text-sm rounded-lg border outline-none transition
                        border-gray-300 focus:border-(--primary)
                        dark:border-gray-700 dark:bg-[#0f1420]"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-red-500 text-[10px] mt-1"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-[11px] font-semibold opacity-70 mb-1 uppercase">
                            Email *
                          </label>
                          <Field
                            name="email"
                            placeholder="Email"
                            className="w-full px-3 py-2 text-sm rounded-lg border outline-none transition
                        border-gray-300 focus:border-(--primary)
                        dark:border-gray-700 dark:bg-[#0f1420]"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-500 text-[10px] mt-1"
                          />
                        </div>

                        {/* Role */}
                        <div>
                          <label className="block text-[11px] font-semibold opacity-70 mb-1 uppercase">
                            Role *
                          </label>
                          <Field
                            name="role"
                            placeholder="Trainer / Manager / Team Lead"
                            className="w-full px-3 py-2 text-sm rounded-lg border outline-none transition
                        border-gray-300 focus:border-(--primary)
                        dark:border-gray-700 dark:bg-[#0f1420]"
                          />
                          <ErrorMessage
                            name="role"
                            component="div"
                            className="text-red-500 text-[10px] mt-1"
                          />
                        </div>

                        {/* LinkedIn */}
                        <div>
                          <label className="block text-[11px] font-semibold opacity-70 mb-1 uppercase">
                            LinkedIn
                          </label>
                          <Field
                            name="linkedin"
                            placeholder="https://linkedin.com/in/username"
                            className="w-full px-3 py-2 text-sm rounded-lg border outline-none transition
                        border-gray-300 focus:border-(--primary)
                        dark:border-gray-700 dark:bg-[#0f1420]"
                          />
                        </div>

                        {/* Instagram */}
                        <div>
                          <label className="block text-[11px] font-semibold opacity-70 mb-1 uppercase">
                            Instagram
                          </label>
                          <Field
                            name="instagram"
                            placeholder="https://instagram.com/username"
                            className="w-full px-3 py-2 text-sm rounded-lg border outline-none transition
                        border-gray-300 focus:border-(--primary)
                        dark:border-gray-700 dark:bg-[#0f1420]"
                          />
                        </div>

                        {/* Image Upload (full width) */}
                        <div className="sm:col-span-2">
                          <label className="block text-[11px] font-semibold opacity-70 mb-1 uppercase">
                            Profile Image
                          </label>
                          <div className="flex items-center gap-3">
                            <label className="cursor-pointer px-3 py-1.5 text-xs bg-(--primary) text-white rounded-md hover:opacity-90">
                              Upload
                              <input
                                type="file"
                                hidden
                                accept="image/*"
                                onChange={(e) =>
                                  setFieldValue("image", e.target.files[0])
                                }
                              />
                            </label>
                            <span className="text-[10px] opacity-60">
                              JPG, PNG
                            </span>
                          </div>

                          {(values.image || editingItem?.image) && (
                            <img
                              src={
                                values.image
                                  ? URL.createObjectURL(values.image)
                                  : `${import.meta.env.VITE_BASE_URL}/${editingItem.image}`
                              }
                              className="mt-3 w-16 h-16 rounded-full object-cover border"
                            />
                          )}
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-2 pt-2">
                        <button
                          type="button"
                          onClick={closeModal}
                          className="cursor-pointer w-full py-2 text-xs font-semibold rounded-lg border
                      border-gray-300 hover:bg-gray-100
                      dark:border-gray-700 dark:hover:bg-gray-800"
                        >
                          Cancel
                        </button>

                        <button
                          type="submit"
                          disabled={
                            createLoading || updateLoading || isSubmitting
                          }
                          className="cursor-pointer w-full py-2 text-xs font-semibold rounded-lg bg-(--primary) text-white hover:opacity-90 disabled:opacity-50"
                        >
                          {editingItem
                            ? updateLoading
                              ? "Updating..."
                              : "Update"
                            : createLoading
                              ? "Creating..."
                              : "Create"}
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageTeam;
