import React, { useState, useMemo } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import {
  useGetItemsQuery,
  useDeleteItemMutation,
} from "../../redux/api/apiSlice.js";
import { FiChevronRight, FiChevronLeft, FiTrash2 } from "react-icons/fi";
import Searchbar from "../../components/Searchbar";

const LIMIT = 5;

const ApplicationList = () => {
  const { isDarkMode } = useTheme();

  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("createdAt");
  const [order, setOrder] = useState("desc");

  const [deleteItem] = useDeleteItemMutation();

  // ✅ Build query for backend
  const queryString = useMemo(() => {
    const params = new URLSearchParams();

    params.append("page", page);
    params.append("limit", LIMIT);
    params.append("sortBy", sortBy);
    params.append("order", order);

    if (searchQuery) {
      params.append("search", searchQuery);
    }

    return params.toString();
  }, [page, sortBy, order, searchQuery]);

  const { data, isLoading } = useGetItemsQuery(`applications?${queryString}`);

  const applications = data?.data || [];
  const totalPages = data?.pagination?.totalPages || 1;

  // ✅ Sort handler (only sends params to backend)
  const handleSort = (field) => {
    const isAsc = sortBy === field && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setSortBy(field);
    setPage(1);
  };

  const SortIcon = ({ field }) => (
    <span className="opacity-50 text-[10px]">
      {sortBy === field ? (order === "asc" ? "▲" : "▼") : "↕"}
    </span>
  );

  // ✅ Soft delete
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this application?")) return;

    try {
      await deleteItem(`applications/${id}`);
    } catch (err) {
      console.error(err);
    }
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
    <div className={`h-screen w-full flex flex-col ${theme.main}`}>
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 gap-2">
            <div className="flex-1 min-w-[150px]">
              <Searchbar
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setPage(1);
                }}
              />
            </div>
          </div>

          {/* Table */}
          <div
            className={`rounded-xl border shadow-sm overflow-hidden ${theme.card}`}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead
                  className={`uppercase tracking-wider font-bold ${theme.header}`}
                >
                  <tr>
                    <th className="px-4 py-3">ID</th>

                    <th
                      className="px-4 py-3 cursor-pointer"
                      onClick={() => handleSort("fullName")}
                    >
                      <div className="flex items-center gap-1">
                        Name <SortIcon field="fullName" />
                      </div>
                    </th>

                    <th
                      className="px-4 py-3 cursor-pointer"
                      onClick={() => handleSort("email")}
                    >
                      <div className="flex items-center gap-1">
                        Email <SortIcon field="email" />
                      </div>
                    </th>

                    <th>Phone</th>
                    <th>Country</th>
                    <th>Subject</th>

                    <th
                      className="px-4 py-3 cursor-pointer"
                      onClick={() => handleSort("type")}
                    >
                      <div className="flex items-center gap-1">
                        Type <SortIcon field="type" />
                      </div>
                    </th>

                    <th
                      className="px-4 py-3 cursor-pointer"
                      onClick={() => handleSort("createdAt")}
                    >
                      <div className="flex items-center gap-1">
                        Date <SortIcon field="createdAt" />
                      </div>
                    </th>

                    <th>Action</th>
                  </tr>
                </thead>

                <tbody className={`divide-y ${theme.divider}`}>
                  {isLoading ? (
                    <tr>
                      <td colSpan={9} className="text-center py-10 opacity-40">
                        Loading...
                      </td>
                    </tr>
                  ) : applications.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="text-center py-10 opacity-40">
                        No applications found.
                      </td>
                    </tr>
                  ) : (
                    applications.map((app, index) => (
                      <tr
                        key={app._id}
                        className="hover:bg-indigo-500/5 transition-colors"
                      >
                        <td className="px-4 py-2.5">
                          {(page - 1) * LIMIT + index + 1}
                        </td>

                        <td className="px-4 py-2.5 font-semibold">
                          {app.fullName}
                        </td>

                        <td className="px-4 py-2.5">{app.email}</td>
                        <td className="px-4 py-2.5">{app.phone}</td>
                        <td className="px-4 py-2.5">{app.country}</td>
                        <td className="px-4 py-2.5">{app.subject}</td>

                        <td className="px-4 py-2.5">
                          <span className="px-2 py-0.5 rounded-full text-[10px] bg-blue-100 text-blue-600 border border-blue-200">
                            {app.type}
                          </span>
                        </td>

                        <td className="px-4 py-2.5">
                          {new Date(app.createdAt).toLocaleDateString()}
                        </td>

                        <td className="px-4 py-2.5">
                          <button
                            onClick={() => handleDelete(app._id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FiTrash2 size={14} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {/* <div className="flex items-center justify-between p-3 border-t">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className="px-3 py-1 border rounded disabled:opacity-40"
              >
                <FiChevronLeft />
              </button>

              <span className="text-xs">
                Page {page} / {totalPages}
              </span>

              <button
                disabled={page === totalPages}
                onClick={() => setPage((p) => p + 1)}
                className="px-3 py-1 border rounded disabled:opacity-40"
              >
                <FiChevronRight />
              </button>
            </div> */}
            <div
              className={`flex items-center justify-between p-3 border-t ${theme.divider}`}
            >
              <span className="text-[11px] opacity-60">
                Showing {applications.length} entries
              </span>
              <div className="flex items-center gap-1">
                <button
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                  className="p-1.5 cursor-pointer border rounded-md"
                >
                  <FiChevronLeft size={16} />
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setPage(i + 1)}
                    className={`w-7 h-7 text-[11px] cursor-pointer rounded-md border ${page === i + 1 ? "bg-(--primary) text-white" : ""}`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  disabled={page === totalPages}
                  onClick={() => setPage(page + 1)}
                  className="p-1.5 cursor-pointer border rounded-md"
                >
                  <FiChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ApplicationList;
