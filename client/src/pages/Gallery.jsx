import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getData } from "../api/api";
import {
  Image as ImageIcon,
  ArrowRight,
  LayoutGrid,
  Camera,
} from "lucide-react";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        const res = await getData("media-category", {
          page: 1,
          limit: 10,
          search: "",
          sortField: "createdAt",
          sortOrder: "desc",
        });
        const filteredItems = (res.data || []).filter(
          (item) => item.status === true,
        );
        setGalleryItems(filteredItems);
      } catch (err) {
        setError("Failed to fetch gallery data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  // --- SKELETON LOADER (Taki loading professional lage) ---
  if (loading)
    return (
      <div className="pt-32 px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="animate-pulse bg-slate-200 h-[350px] rounded-3xl"
          ></div>
        ))}
      </div>
    );

  if (error)
    return (
      <div className="h-screen flex flex-col items-center justify-center text-red-500">
        <ImageIcon size={48} className="mb-4 opacity-20" />
        <p className="text-xl font-bold">{error}</p>
      </div>
    );

  return (
    <div className="pt-20 font-sans bg-[#FBFDFF] overflow-x-hidden min-h-screen">
      {/* --- HERO SECTION (Premium Look) --- */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A237E]/90 to-[#1A237E]/60 z-10" />
        <img
          src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Gallery Banner"
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-[2px]"
        />
        <div className="relative z-20 text-center px-4">
          <div className="flex justify-center mb-4 text-[#00B0FF]">
            <Camera size={40} className="animate-bounce" />
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Our <span className="text-[#00B0FF]">Moments</span>
          </h1>
          <div className="h-1.5 w-24 bg-[#00B0FF] mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-white/80 text-lg font-medium max-w-xl mx-auto italic">
            Visual stories of excellence, events, and student achievements at
            Agastya Global.
          </p>
        </div>
      </section>

      {/* --- GALLERY FILTER / INFO BAR --- */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-[#1A237E] rounded-xl text-white">
            <LayoutGrid size={24} />
          </div>
          <div>
            <h2 className="text-[#1A237E] text-2xl font-black uppercase tracking-tight">
              Media Categories
            </h2>
            <p className="text-slate-500 font-medium">
              Explore our event archives
            </p>
          </div>
        </div>
        <div className="h-px flex-1 bg-slate-200 hidden md:block mx-8"></div>
        <div className="text-slate-400 font-bold text-sm uppercase tracking-widest">
          {galleryItems.length} Collections Found
        </div>
      </div>

      {/* --- GALLERY GRID (Interactive Cards) --- */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryItems.map((item) => (
            <div
              key={item._id}
              className="group relative bg-white rounded-[2.5rem] shadow-lg hover:shadow-[0_30px_60px_-15px_rgba(26,35,126,0.2)] transition-all duration-500 border border-slate-100 flex flex-col overflow-hidden"
            >
              {/* Image Container with Overlay */}
              <Link
                to={`/gallery/${item.title}`}
                className="relative block overflow-hidden aspect-[4/3]"
              >
                <img
                  src={
                    item.icon
                      ? `http://localhost:5000${item.icon}`
                      : "/placeholder.jpg"
                  }
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Gradient Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A237E] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-end p-8">
                  <div className="text-white transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm font-bold uppercase tracking-widest text-[#00B0FF] mb-2">
                      View Album
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-xl tracking-tight">
                        Full Gallery
                      </span>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>

                {/* Badge */}
                {item.category && (
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-[#1A237E] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-sm">
                    {item.category}
                  </div>
                )}
              </Link>

              {/* Text Area */}
              <div className="p-8 text-center bg-white relative">
                {/* Small Decorative Dot */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <div className="w-2 h-2 bg-[#00B0FF] rounded-full animate-ping"></div>
                </div>

                <h3 className="text-[#1A237E] text-2xl font-black leading-tight mb-2 group-hover:text-[#00B0FF] transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="w-10 h-1 bg-[#00B0FF]/20 mx-auto rounded-full group-hover:w-20 group-hover:bg-[#00B0FF] transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* --- EMPTY STATE --- */}
        {galleryItems.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
            <ImageIcon size={64} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-slate-500 text-xl font-bold">
              No gallery items found.
            </h3>
          </div>
        )}
      </div>

      {/* --- BOTTOM DECORATION --- */}
      <div className="h-24 bg-gradient-to-t from-slate-100 to-transparent"></div>
    </div>
  );
};

export default Gallery;
