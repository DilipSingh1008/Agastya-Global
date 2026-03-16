import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "How to Prepare for the IELTS Exam in 30 Days",
      category: "IELTS",
      date: "March 10, 2026",
      author: "Admin",
      image:
        "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=600",
      excerpt:
        "Mastering the IELTS requires a strategic approach. In this guide, we break down the daily routine you need to follow...",
    },
    {
      id: 2,
      title: "Top 5 Countries for International Students in 2026",
      category: "STUDY ABROAD",
      date: "March 08, 2026",
      author: "Zain Global",
      image:
        "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600",
      excerpt:
        "Choosing the right destination is the first step towards a successful career. Explore the best countries for your studies...",
    },
    {
      id: 3,
      title: "Understanding the UK Student Visa Process",
      category: "VISA GUIDANCE",
      date: "March 05, 2026",
      author: "Consultant",
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
      excerpt:
        "The UK visa process can be complex. Here is everything you need to know about CAS, financial documents, and interviews...",
    },
    {
      id: 4,
      title: "Living Costs in Canada for International Students",
      category: "STUDENT LIFE",
      date: "March 02, 2026",
      author: "Admin",
      image:
        "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=600",
      excerpt:
        "Planning your budget is essential. We've calculated the average monthly expenses for students in major Canadian cities...",
    },
  ];

  return (
    <div className="pt-24 bg-white overflow-x-hidden">
      {/* --- HERO BANNER (As per Screenshot) --- */}
      {/* <section className="relative h-[350px] flex items-center justify-center mb-16">
        <img
          src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Blog Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-5xl md:text-6xl font-black uppercase tracking-tight">
            Latest Blogs
          </h1>
          <div className="w-24 h-1.5 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>
      </section> */}

      {/* --- BLOG GRID SECTION --- */}
      <div className="max-w-[1440px] mx-auto px-6 mt-10 md:px-12 lg:px-20 pb-24">
        {/* SECTION HEADER */}
        {/* <div className="mb-12">
          <h2 className="text-[#212958] text-4xl font-black mb-2 uppercase">
            Stay Updated
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8 flex items-center">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl font-medium">
            Read our latest articles to get insights on international education,
            test preparations, and visa updates.
          </p>
        </div> */}

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white  overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-[230px] w-full">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute top-4 left-4 bg-red-600 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  {blog.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                {/* <div className="flex items-center gap-4 text-gray-400 text-[11px] font-semibold mb-2 uppercase">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={12} /> {blog.author}
                  </span>
                </div> */}

                <h3 className="text-[#212958] text-lg font-extrabold mb-3 leading-snug group-hover:text-red-600 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-gray-500 text-[13px] leading-relaxed mb-5 line-clamp-2">
                  {blog.excerpt}
                </p>

                <button className="flex items-center gap-2 text-[#212958] font-bold text-xs uppercase tracking-wider group/btn">
                  Read More
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-2 transition-transform text-red-600"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- PAGINATION (Optional but looks professional) --- */}
        <div className="mt-16 flex justify-center gap-2">
          <button className="w-12 h-12 rounded-xl bg-[#212958] text-white font-bold">
            1
          </button>
          <button className="w-12 h-12 rounded-xl bg-gray-100 text-gray-600 font-bold hover:bg-red-600 hover:text-white transition-all">
            2
          </button>
          <button className="w-12 h-12 rounded-xl bg-gray-100 text-gray-600 font-bold hover:bg-red-600 hover:text-white transition-all">
            3
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
