import React, { useEffect, useState } from "react";
import { Calendar, User, ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import { getData } from "../api/api";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await getData("blogs", {
          page: 1,
          limit: 10,
          search: "",
          sortField: "createdAt",
          sortOrder: "desc",
        });

        const filtered = (res.data || []).filter(
          (item) => item.status === true && !item.isDeleted,
        );
        setBlogs(filtered);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch blogs. Please check your connection.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // --- SKELETON LOADER ---
  if (loading) {
    return (
      <div className="pt-32 max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="animate-pulse flex flex-col gap-4">
            <div className="bg-slate-200 h-64 rounded-3xl w-full"></div>
            <div className="h-6 bg-slate-200 rounded w-3/4"></div>
            <div className="h-4 bg-slate-200 rounded w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-5/6"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-red-500 bg-slate-50">
        <div className="p-4 bg-red-50 rounded-full mb-4">
          <BookOpen size={48} />
        </div>
        <p className="text-xl font-bold">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 text-[#1A237E] underline font-bold"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-[#FBFDFF] min-h-screen font-sans overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[350px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A237E]/90 to-[#1A237E]/60 z-10" />
        <img
          src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Blog Banner"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-[#00B0FF] text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-lg">
            <Clock size={14} /> Knowledge Hub
          </div>
          <h1 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            Latest <span className="text-[#00B0FF]">Insights</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-medium italic">
            Expert advice on Study Abroad, IELTS preparation, and Global
            Careers.
          </p>
        </div>
      </section>

      {/* --- BLOG GRID SECTION --- */}
      <div className="max-w-[1440px] mx-auto px-6 -mt-16 md:px-12 lg:px-20 pb-24 relative z-30">
        {/* Section Title Bar */}
        <div className="flex items-center gap-4 mb-12 bg-white p-6 rounded-[2rem] shadow-xl border border-slate-50">
          <div className="bg-[#1A237E] p-3 rounded-2xl text-white">
            <BookOpen size={24} />
          </div>
          <div>
            <h2 className="text-[#1A237E] text-2xl font-black uppercase tracking-tight">
              Recent Articles
            </h2>
            <p className="text-slate-400 text-sm font-bold tracking-widest">
              {blogs.length} Stories for you
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="group bg-white overflow-hidden shadow-lg hover:shadow-[0_40px_80px_-15px_rgba(26,35,126,0.15)] transition-all duration-500 flex flex-col rounded-[2.5rem] border border-slate-50 transform hover:-translate-y-3"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-[260px] w-full">
                <img
                  src={`http://localhost:5000/uploads/${blog.images[0]}`}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Tag Overlay */}
                <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur-md text-[#1A237E] text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-widest shadow-lg">
                  <Tag size={12} className="text-[#00B0FF]" />{" "}
                  {blog.shortDescription.split(" ")[0] || "Update"}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-1 relative">
                {/* Meta info */}
                <div className="flex items-center gap-6 text-slate-400 text-[10px] font-black mb-4 uppercase tracking-[0.1em]">
                  <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full">
                    <Calendar size={14} className="text-[#00B0FF]" />{" "}
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full">
                    <User size={14} className="text-[#00B0FF]" /> Agastya Team
                  </span>
                </div>

                <h3 className="text-[#1A237E] text-2xl font-black mb-4 leading-tight group-hover:text-[#00B0FF] transition-colors duration-300">
                  {blog.title}
                </h3>

                <p className="text-slate-500 text-[15px] leading-relaxed mb-8 line-clamp-3 font-medium">
                  {blog.shortDescription}
                </p>

                {/* Styled Button */}
                <button className="flex items-center justify-between w-full mt-auto p-4 rounded-2xl bg-slate-50 group-hover:bg-[#1A237E] transition-all duration-500">
                  <span className="text-[#1A237E] group-hover:text-white font-black text-xs uppercase tracking-widest pl-2">
                    Read Full Story
                  </span>
                  <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <ArrowRight
                      size={20}
                      className="text-[#00B0FF] group-hover:rotate-[-45deg] transition-transform"
                    />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- PROFESSIONAL PAGINATION --- */}
        <div className="mt-24 flex flex-col items-center gap-6">
          <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">
            Explore More Pages
          </p>
          <div className="flex justify-center items-center gap-3">
            <button className="w-14 h-14 rounded-2xl bg-[#1A237E] text-white font-black text-xl shadow-[0_10px_20px_rgba(26,35,126,0.3)] hover:scale-110 transition-all border-b-4 border-[#00B0FF]">
              1
            </button>
            <button className="w-14 h-14 rounded-2xl bg-white text-slate-400 font-black text-xl border border-slate-100 hover:text-[#1A237E] hover:border-[#1A237E] transition-all">
              2
            </button>
            <button className="w-14 h-14 rounded-2xl bg-white text-slate-400 font-black text-xl border border-slate-100 hover:text-[#1A237E] hover:border-[#1A237E] transition-all">
              3
            </button>
            <div className="w-10 h-px bg-slate-200 mx-2"></div>
            <button className="px-6 h-14 rounded-2xl bg-white text-slate-600 font-black text-sm uppercase tracking-widest border border-slate-100 hover:bg-slate-50 transition-all">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* --- NEWSLETTER SECTION (Interactive CTA) --- */}
      <div className="max-w-[1440px] mx-auto px-6 pb-24">
        <div className="bg-[#1A237E] rounded-[4rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B0FF] opacity-10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="relative z-10">
            <h2 className="text-white text-4xl md:text-5xl font-black uppercase mb-4">
              Never Miss an <br />
              <span className="text-[#00B0FF]">Update</span>
            </h2>
            <p className="text-white/60 text-lg font-medium">
              Get the latest immigration news and preparation tips weekly.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 relative z-10">
            <input
              type="email"
              placeholder="Your email address"
              className="px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#00B0FF] w-full md:w-80 backdrop-blur-md"
            />
            <button className="bg-[#00B0FF] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-[#1A237E] transition-all shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
