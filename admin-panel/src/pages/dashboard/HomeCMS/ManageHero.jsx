import React, { useState } from "react";
import { useTheme } from "../../../context/ThemeContext";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import {
  Plus,
  Trash2,
  Edit3,
  X,
  Image as ImageIcon,
  Settings,
  Layers,
  MousePointer2,
} from "lucide-react";
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
  const [limit] = useState(10);
  const [sortField, setSortField] = useState("question");
  const [sortOrder, setSortOrder] = useState("asc");

  // ── Permission Logic ──
  const permissions = useSelector((state) => state.permission.permissions);
  const rawFaqPermission = permissions?.find((p) => p.module.name === "faq");
  const localRole = localStorage.getItem("role");
  const faqPermission =
    localRole === "admin"
      ? { add: true, edit: true, delete: true, view: true }
      : rawFaqPermission;

  // ── RTK Query: fetch FAQs ──
  const { data: faqRes, isLoading } = useGetItemsQuery(
    `home-hero?page=${page}&limit=${limit}&search=${searchQuery}&sortField=${sortField}&sortOrder=${sortOrder}`,
  );
  const faqs = faqRes?.data || [];
  const totalPages = faqRes?.pagination?.totalPages || 1;

  // ── RTK Query: fetch categories for dropdown ──
  const { data: catRes } = useGetItemsQuery("home-hero");
  const categories = catRes?.data || [];

  // ── RTK Query: mutations ──
  const [createItem, { isLoading: createLoading }] = useCreateItemMutation();
  const [updateItem, { isLoading: updateLoading }] = useUpdateItemMutation();
  const [deleteItem] = useDeleteItemMutation();
  const [patchItem] = usePatchItemMutation();

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

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this FAQ?")) return;
    try {
      await deleteItem(`home-hero/${id}`);
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleStatus = async (id) => {
    try {
      await patchItem({ url: `home-hero/toggle-status/${id}`, data: {} });
    } catch (err) {
      console.error("Failed to toggle FAQ status", err);
    }
  };

  const handleSubmit = async (values) => {
    try {
      if (editingItem) {
        await updateItem({ url: `home-hero/${editingItem._id}`, data: values });
      } else {
        await createItem({ url: "home-hero", data: values });
      }
      closeModal();
    } catch (err) {
      console.error(err);
    }
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
    input: isDarkMode
      ? "bg-[#1f2637] border-gray-700 text-white focus:border-blue-500"
      : "bg-white border-gray-300 focus:border-blue-500",
  };

  return (
    <div className={`h-screen w-full flex flex-col p-4 md:p-6 ${theme.main}`}>
      <main className="flex-1 overflow-y-auto pr-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
            <div>
              <h1 className="text-xl font-bold tracking-tight">
                Manage Hero Sections
              </h1>
              <p className="text-xs opacity-60">
                Control your homepage hero sliders and content
              </p>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="flex-1 md:w-64">
                <Searchbar
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setPage(1);
                  }}
                />
              </div>
              {faqPermission?.add && (
                <button
                  onClick={() => {
                    setEditingItem(null);
                    setIsModalOpen(true);
                  }}
                  className="flex items-center cursor-pointer gap-2 px-4 py-2 bg-(--primary) text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
                >
                  <Plus size={16} /> Add Hero
                </button>
              )}
            </div>
          </div>

          {/* Table Container */}
          <div
            className={`rounded-2xl border shadow-sm overflow-hidden ${theme.card}`}
          >
            <div className="overflow-x-auto scrollbar-hide">
              <table className="w-full text-left text-xs border-collapse">
                <thead
                  className={`uppercase tracking-wider font-bold ${theme.header}`}
                >
                  <tr>
                    <th className="px-5 py-4 w-12 text-center">#</th>
                    {[
                      { label: "Badge", key: "badgeText" },
                      { label: "Title", key: "title" },
                      { label: "Highlight", key: "highlightText" },
                      { label: "Subtitle", key: "subtitle" },
                      { label: "Button", key: "buttonText" },
                    ].map((col) => (
                      <th
                        key={col.key}
                        className="px-4 py-4 cursor-pointer hover:text-(--primary) transition-colors"
                        onClick={() => handleSort(col.key)}
                      >
                        <div className="flex items-center whitespace-nowrap">
                          {col.label} <SortIcon field={col.key} />
                        </div>
                      </th>
                    ))}
                    <th className="px-4 py-4 text-center">Status</th>
                    {(faqPermission?.edit || faqPermission?.delete) && (
                      <th className="px-4 py-4 text-right pr-6">Actions</th>
                    )}
                  </tr>
                </thead>

                <tbody className={`divide-y ${theme.divider}`}>
                  {isLoading ? (
                    <tr>
                      <td
                        colSpan="8"
                        className="text-center py-12 opacity-50 italic"
                      >
                        Loading dynamic content...
                      </td>
                    </tr>
                  ) : faqs.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="text-center py-12 opacity-50">
                        No hero items found.
                      </td>
                    </tr>
                  ) : (
                    faqs.map((item, index) => (
                      <tr
                        key={item._id}
                        className="hover:bg-blue-500/5 transition-colors group"
                      >
                        <td className="px-5 py-4 text-center opacity-50">
                          {(page - 1) * limit + index + 1}
                        </td>
                        <td className="px-4 py-4 font-medium">
                          <span className="px-2 py-1 rounded bg-blue-500/10 text-(--primary)">
                            {item.badgeText || "N/A"}
                          </span>
                        </td>
                        <td className="px-4 py-4 font-semibold max-w-[150px] truncate">
                          {item.title}
                        </td>
                        <td className="px-4 py-4 text-orange-500">
                          {item.highlightText}
                        </td>
                        <td className="px-4 py-4 opacity-70 max-w-[150px] truncate">
                          {item.subtitle}
                        </td>
                        <td className="px-4 py-4">
                          {item.buttonEnabled ? (
                            <span className="text-[10px] bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full border border-green-500/20">
                              {item.buttonText}
                            </span>
                          ) : (
                            <span className="text-gray-500 opacity-50 italic">
                              Disabled
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex justify-center">
                            <button
                              onClick={() => handleToggleStatus(item._id)}
                              className={`cursor-pointer w-9 h-5 rounded-full relative transition-all duration-300 ${item.status ? "bg-(--primary) shadow-inner" : "bg-gray-600"}`}
                            >
                              <div
                                className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-300 ${item.status ? "left-5" : "left-1"}`}
                              />
                            </button>
                          </div>
                        </td>
                        {(faqPermission?.edit || faqPermission?.delete) && (
                          <td className="px-4 py-4 text-right pr-6">
                            <div className="flex justify-end gap-2">
                              {faqPermission?.edit && (
                                <button
                                  onClick={() => {
                                    setEditingItem(item);
                                    setIsModalOpen(true);
                                  }}
                                  className="p-2 hover:bg-blue-500/10 hover:text-(--primary) rounded-lg transition-all"
                                >
                                  <Edit3 size={15} />
                                </button>
                              )}
                              {faqPermission?.delete && (
                                <button
                                  onClick={() => handleDelete(item._id)}
                                  className="p-2 hover:bg-red-500/10 hover:text-red-500 rounded-lg transition-all"
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
            <div
              className={`flex items-center justify-between p-4 border-t ${theme.divider} ${theme.header}`}
            >
              <span className="text-xs font-medium opacity-60">
                Showing {faqs.length} of {totalPages * limit} heroes
              </span>
              <div className="flex items-center gap-1">
                <button
                  disabled={page === 1 || isLoading}
                  onClick={() => setPage(page - 1)}
                  className="p-2 border rounded-lg disabled:opacity-20 hover:bg-(--primary) hover:text-white transition-all"
                >
                  <FiChevronLeft size={16} />
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setPage(i + 1)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${page === i + 1 ? "bg-(--primary) text-white shadow-md" : "hover:bg-blue-500/10"}`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  disabled={page === totalPages || isLoading}
                  onClick={() => setPage(page + 1)}
                  className="p-2 border rounded-lg disabled:opacity-20 hover:bg-(--primary) hover:text-white transition-all"
                >
                  <FiChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Modal Section */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
              <div
                className={`${isDarkMode ? "bg-[#151b28] border border-gray-800" : "bg-white"} w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl flex flex-col animate-in fade-in zoom-in duration-200`}
              >
                {/* Modal Header */}
                <div className="flex justify-between items-center p-5 border-b border-gray-800/50">
                  <div>
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      {editingItem ? (
                        <Edit3 className="text-(--primary)" size={18} />
                      ) : (
                        <Plus className="text-(--primary)" size={18} />
                      )}
                      {editingItem
                        ? "Update Hero Section"
                        : "Create New Hero Section"}
                    </h3>
                    <p className="text-[10px] opacity-50 uppercase tracking-widest mt-0.5 font-semibold">
                      Home Landing Configuration
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-red-500/10 hover:text-red-500 rounded-full transition-all"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-700">
                  <Formik
                    initialValues={{
                      badgeText: editingItem?.badgeText || "",
                      title: editingItem?.title || "",
                      highlightText: editingItem?.highlightText || "",
                      subtitle: editingItem?.subtitle || "",
                      description: editingItem?.description || "",
                      buttonText: editingItem?.buttonText || "",
                      buttonLink: editingItem?.buttonLink || "",
                      buttonEnabled: editingItem?.buttonEnabled ?? true,
                      images: editingItem?.images || [""],
                      autoSlide: editingItem?.autoSlide ?? true,
                      slideInterval: editingItem?.slideInterval || 3000,
                      highlightColor: editingItem?.highlightColor || "#00B0FF",
                      backgroundColor:
                        editingItem?.backgroundColor || "#ffffff",
                      isActive: editingItem?.isActive ?? true,
                      order: editingItem?.order || 1,
                      category: editingItem?.category || "general",
                    }}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting }) => (
                      <Form className="space-y-8">
                        {/* Section 1: Visual Content */}
                        <div className="space-y-4">
                          <h4 className="text-xs font-bold text-(--primary) flex items-center gap-2 uppercase tracking-tighter">
                            <Layers size={14} /> Main Content Display
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="text-[11px] font-semibold opacity-70 ml-1">
                                Badge Text (Small Pill)
                              </label>
                              <Field
                                name="badgeText"
                                className={`w-full px-4 py-2 rounded-lg text-sm outline-none border transition-all ${theme.input}`}
                                placeholder="e.g. New Launch"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[11px] font-semibold opacity-70 ml-1">
                                Main Title
                              </label>
                              <Field
                                name="title"
                                className={`w-full px-4 py-2 rounded-lg text-sm outline-none border transition-all ${theme.input}`}
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[11px] font-semibold opacity-70 ml-1">
                                Highlighted Text
                              </label>
                              <Field
                                name="highlightText"
                                className={`w-full px-4 py-2 rounded-lg text-sm outline-none border transition-all ${theme.input}`}
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[11px] font-semibold opacity-70 ml-1">
                                Subtitle
                              </label>
                              <Field
                                name="subtitle"
                                className={`w-full px-4 py-2 rounded-lg text-sm outline-none border transition-all ${theme.input}`}
                              />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <label className="text-[11px] font-semibold opacity-70 ml-1">
                              Full Description
                            </label>
                            <Field
                              as="textarea"
                              name="description"
                              rows="3"
                              className={`w-full px-4 py-2 rounded-lg text-sm outline-none border transition-all ${theme.input}`}
                            />
                          </div>
                        </div>

                        {/* Section 2: Interactive Elements */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                            <h4 className="text-xs font-bold text-orange-500 flex items-center gap-2 uppercase tracking-tighter">
                              <MousePointer2 size={14} /> Call to Action
                            </h4>
                            <div className="bg-gray-500/5 p-4 rounded-xl border border-gray-500/10 space-y-3">
                              <div className="flex items-center gap-2 mb-2">
                                <Field
                                  type="checkbox"
                                  name="buttonEnabled"
                                  className="w-4 h-4 accent-(--primary)"
                                />
                                <span className="text-sm font-medium">
                                  Show Action Button
                                </span>
                              </div>
                              <Field
                                name="buttonText"
                                className={`w-full px-3 py-2 rounded-lg text-xs outline-none border transition-all ${theme.input}`}
                                placeholder="Button Label"
                              />
                              <Field
                                name="buttonLink"
                                className={`w-full px-3 py-2 rounded-lg text-xs outline-none border transition-all ${theme.input}`}
                                placeholder="Redirect URL (https://...)"
                              />
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h4 className="text-xs font-bold text-purple-500 flex items-center gap-2 uppercase tracking-tighter">
                              <Settings size={14} /> Style & Behavior
                            </h4>
                            <div className="bg-gray-500/5 p-4 rounded-xl border border-gray-500/10 space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-xs">Theme Colors:</span>
                                <div className="flex gap-2">
                                  <Field
                                    type="color"
                                    name="highlightColor"
                                    className="w-8 h-8 rounded cursor-pointer bg-transparent border-none"
                                    title="Highlight Color"
                                  />
                                  <Field
                                    type="color"
                                    name="backgroundColor"
                                    className="w-8 h-8 rounded cursor-pointer bg-transparent border-none"
                                    title="Background Color"
                                  />
                                </div>
                              </div>
                              <div className="flex items-center justify-between gap-4">
                                <label className="flex items-center gap-2 text-xs font-medium">
                                  <Field
                                    type="checkbox"
                                    name="autoSlide"
                                    className="accent-(--primary)"
                                  />{" "}
                                  AutoPlay
                                </label>
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] opacity-60">
                                    Delay (ms):
                                  </span>
                                  <Field
                                    type="number"
                                    name="slideInterval"
                                    className={`w-20 px-2 py-1 rounded text-xs border ${theme.input}`}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Section 3: Media */}
                        <div className="space-y-4">
                          <h4 className="text-xs font-bold text-emerald-500 flex items-center gap-2 uppercase tracking-tighter">
                            <ImageIcon size={14} /> Hero Media Assets
                          </h4>
                          <FieldArray name="images">
                            {({ push, remove, form }) => (
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {form.values.images.map((_, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center gap-2 p-2 bg-gray-500/5 rounded-lg border border-dashed border-gray-500/20"
                                  >
                                    <input
                                      type="file"
                                      className="text-[10px] w-full file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-[10px] file:font-semibold file:bg--(--primary) file:text-white hover:file:bg-(--primary)"
                                      onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                          const formData = new FormData();
                                          formData.append("file", file);
                                          // Note: You need to define uploadImage or use a mutation here
                                          console.log(
                                            "File selected:",
                                            file.name,
                                          );
                                        }
                                      }}
                                    />
                                    <button
                                      type="button"
                                      onClick={() => remove(index)}
                                      className="p-1.5 text-red-500 hover:bg-red-500/10 rounded"
                                    >
                                      <X size={14} />
                                    </button>
                                  </div>
                                ))}
                                <button
                                  type="button"
                                  onClick={() => push("")}
                                  className="flex items-center justify-center gap-2 border-2 border-dashed border-gray-500/20 rounded-lg p-3 text-xs opacity-60 hover:opacity-100 hover:border-blue-500 transition-all"
                                >
                                  <Plus size={14} /> Add Image Slot
                                </button>
                              </div>
                            )}
                          </FieldArray>
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-3 pt-4 border-t border-gray-800/50">
                          <button
                            type="button"
                            onClick={closeModal}
                            className="flex-1 py-2.5 rounded-xl font-bold text-xs bg-gray-500/10 hover:bg-gray-500/20 transition-all"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-[2] py-2.5 bg-(--primary) text-white rounded-xl font-bold text-xs hover:bg-(--primary) transition-all shadow-lg shadow-blue-600/20 disabled:opacity-50"
                          >
                            {isSubmitting
                              ? "Processing..."
                              : editingItem
                                ? "Apply Changes"
                                : "Save Hero Section"}
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
      </main>
    </div>
  );
};

export default ManageHero;
