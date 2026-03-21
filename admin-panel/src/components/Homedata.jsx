import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Plus, Edit3, Trash2, X } from "lucide-react";
import {
  useGetItemsQuery,
  useCreateItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
  usePatchItemMutation,
} from "../redux/api/apiSlice";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Searchbar from "./Searchbar";
import { useTheme } from "../context/ThemeContext";
import { FieldArray } from "formik";

const Homedata = ({
  endpoint,
  fields,
  columns,
  title,
  showCategory = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const { isDarkMode } = useTheme();

  const { data, isLoading, refetch } = useGetItemsQuery(
    `${endpoint}?page=${page}&limit=${limit}&search=${searchQuery}&sort=${sortField}&order=${sortOrder}`,
  );
  const items = data?.data || [];
  //   console.log(items);
  const totalPages = data?.pagination?.totalPages || 1;

  //   const { data: catRes } = useGetItemsQuery(`${endpoint}`);
  //   const categories = catRes?.data || [];
  //   console.log(categories);

  const [createItem] = useCreateItemMutation();
  const [updateItem] = useUpdateItemMutation();
  const [deleteItem] = useDeleteItemMutation();
  const [patchItem] = usePatchItemMutation();

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("folder", "home");

    console.log("test", formData);
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    if (editingItem) {
      await updateItem({
        url: `${endpoint}/${editingItem._id}`,
        data: formData,
      });
    } else {
      await createItem({
        url: endpoint,
        data: formData,
      });
    }

    refetch();
    closeModal();
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure?")) {
      await deleteItem(`${endpoint}/${id}`);
    }
  };
  const handleSort = (field) => {
    if (sortField === field) {
      // toggle order
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }

    setPage(1);
  };
  const handleToggle = async (id) => {
    await patchItem({
      url: `${endpoint}/${id}/status`,
      data: {},
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };
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
    divider: isDarkMode ? "divide-gray-800" : "divide-gray-100",
  };

  return (
    <div className={`h-screen w-full  ${theme.main}`}>
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-4 gap-2">
            <Searchbar
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPage(1);
              }}
            />

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex cursor-pointer items-center gap-2 px-3 py-1.5 bg-(--primary) text-white rounded-lg text-xs font-semibold"
            >
              <Plus size={14} /> Add {title}
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
                  <tr>
                    <th className="px-4 py-3 w-24">ID</th>

                    {columns.map((col, i) => (
                      <th
                        key={i}
                        onClick={() => handleSort(col.key)}
                        className="px-4 py-3 text-left"
                      >
                        {col.label}
                        {sortField === col.key && (
                          <span className="text-[10px]">
                            {sortOrder === "asc" ? "↑" : "↓"}
                          </span>
                        )}
                      </th>
                    ))}
                    <th className="px-4 py-3 w-24">Status</th>
                    <th className="px-4 py-3 text-right w-24">Action</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {isLoading ? (
                    <tr>
                      <td colSpan="10" className="text-center py-6">
                        Loading...
                      </td>
                    </tr>
                  ) : items.length === 0 ? (
                    <tr>
                      <td colSpan="10" className="text-center py-6">
                        No data found
                      </td>
                    </tr>
                  ) : (
                    items.map((item, index) => (
                      <tr
                        key={item._id}
                        className="hover:bg-indigo-500/5 transition-colors"
                      >
                        <td className="px-4 py-2">
                          {(page - 1) * limit + index + 1}
                        </td>
                        {columns.map((col, i) => (
                          <td key={i} className="px-4 py-3">
                            {item[col.key]}
                          </td>
                        ))}

                        {/* STATUS */}

                        <td className="px-4 py-2.5">
                          <button
                            onClick={() => handleToggle(item._id)}
                            className={`cursor-pointer w-8 h-4 rounded-full relative transition-colors ${
                              item.status ? "bg-(--primary)" : "bg-gray-400"
                            }`}
                          >
                            <div
                              className={`absolute top-0.5 w-3 h-3 cursor-pointer bg-white rounded-full transition-all ${
                                item.status ? "left-4.5" : "left-0.5"
                              }`}
                            />
                          </button>
                        </td>

                        {/* ACTION */}
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

          {/* MODAL */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
              <div
                className={`${isDarkMode ? "bg-[#151b28] text-white" : "bg-white"} p-5 rounded-xl w-full max-w-sm shadow-xl`}
              >
                <div className="flex justify-between mb-3">
                  <h3 className="font-bold">
                    {editingItem ? `Edit ${title}` : `Add ${title}`}
                  </h3>
                  <X onClick={closeModal} className="cursor-pointer" />
                </div>

                <Formik
                  initialValues={
                    editingItem ||
                    Object.fromEntries(
                      fields.map((f) => [
                        f.name,
                        f.type === "array" ? [""] : "",
                      ]),
                    )
                  }
                  enableReinitialize
                  onSubmit={handleSubmit}
                >
                  {(form) => (
                    <Form className="space-y-3">
                      {showCategory && (
                        <Field
                          as="select"
                          name="category"
                          className="w-full border p-2"
                        >
                          <option value="">-- Select Category --</option>
                          <option value="student_support">
                            Student Support
                          </option>
                          <option value="application_services">
                            Application Services
                          </option>

                          {/* {categories.map((c) => (
                          <option key={c._id} value={c.category}>
                            {c.category}
                          </option>
                        ))} */}
                        </Field>
                      )}

                      {fields.map((field, i) => {
                        // 🖼️ IMAGE UPLOAD
                        if (field.type === "image") {
                          return (
                            <div key={i}>
                              <label className="text-sm">{field.label}</label>
                              <input
                                type="file"
                                accept="image/*"
                                className="w-full border p-2"
                                onChange={(e) => {
                                  const file = e.target.files[0];
                                  if (file) {
                                    form.setFieldValue(field.name, file);
                                  }
                                }}
                              />
                            </div>
                          );
                        }

                        // 🎯 ICON SELECT
                        if (field.type === "icon") {
                          const icons = [
                            "BookOpen",
                            "GraduationCap",
                            "Globe",
                            "Plane",
                            "Star",
                            "Users",
                          ];

                          return (
                            <Field
                              key={i}
                              as="select"
                              name={field.name}
                              className="w-full border p-2"
                            >
                              <option value="">Select Icon</option>
                              {icons.map((icon) => (
                                <option key={icon} value={icon}>
                                  {icon}
                                </option>
                              ))}
                            </Field>
                          );
                        }

                        // ARRAY FIELD (existing)
                        if (field.type === "array") {
                          return (
                            <FieldArray key={i} name={field.name}>
                              {({ push, remove, form }) => (
                                <div className="space-y-2">
                                  {form.values[field.name]?.map((_, index) => (
                                    <div key={index} className="flex gap-2">
                                      <Field
                                        name={`${field.name}.${index}`}
                                        placeholder={field.label}
                                        className="flex-1 border p-2"
                                      />
                                      <X
                                        onClick={() => remove(index)}
                                        className="cursor-pointer"
                                      />
                                    </div>
                                  ))}

                                  <button
                                    type="button"
                                    onClick={() => push("")}
                                    className="text-sm text-blue-500"
                                  >
                                    + Add {field.label}
                                  </button>
                                </div>
                              )}
                            </FieldArray>
                          );
                        }

                        return (
                          <Field
                            key={i}
                            name={field.name}
                            placeholder={field.label}
                            className="w-full border p-2"
                          />
                        );
                      })}

                      <button className="w-full cursor-pointer bg-(--primary) text-white py-2 rounded">
                        Submit
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

export default Homedata;
