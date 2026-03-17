import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getData } from "../api/api";

const CategoryPage = () => {
  const { category } = useParams(); // we use _id of category
  const [mediaItems, setMediaItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(category);
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        setLoading(true);
        const res = await getData("media-items", {
          page: 1,
          limit: 50,
          search: "",
          sortField: "createdAt",
          sortOrder: "desc",
        });
        console.log(res);
        console.log(category);
        // filter only active images of this category
        const filtered = (res.data || []).filter(
          (item) =>
            item.status === true &&
            !item.isDeleted &&
            item.type === "image" &&
            item.category === category,
        );
        console.log(filtered);
        setMediaItems(filtered);
      } catch (err) {
        console.error(err);
        setError("Failed to load media for this category.");
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, [category]);

  if (loading) return <p className="text-center mt-10">Loading gallery...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="pt-20 font-sans bg-[#F8FAFC] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 mt-26 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mediaItems.length > 0 ? (
          mediaItems.map((item) => (
            <div
              key={item._id}
              className="group bg-white overflow-hidden shadow-2xl border border-slate-100 hover:shadow-[0_20px_60px_rgba(26,35,126,0.08)] transition-all duration-500 flex flex-col rounded-2xl"
            >
              <div className="relative overflow-hidden h-[230px] w-full rounded-t-2xl">
                <img
                  src={item.icon ? `http://localhost:5000${item.icon}` : null}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No images found for this category.
          </p>
        )}
      </div>

      {/* Back Button */}
      <div className="mt-8 text-center">
        <Link
          to="/gallery"
          className="inline-block px-6 py-3 bg-(--primary) text-white rounded-lg font-semibold hover:opacity-90 transition"
        >
          Back to Gallery
        </Link>
      </div>
    </div>
  );
};

export default CategoryPage;
