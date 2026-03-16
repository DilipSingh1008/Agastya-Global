import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  // Sample gallery items
  const galleryItems = [
    {
      id: 1,
      title: "Study Expo",
      image:
        "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "/study-expo",
      category: "Event",
    },
    {
      id: 2,
      title: "University Fair",
      image:
        "https://images.pexels.com/photos/414519/pexels-photo-414519.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "/university-fair",
      category: "Fair",
    },
    {
      id: 3,
      title: "IELTS Workshop",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "/ielts-workshop",
      category: "Workshop",
    },
    // Add more items as needed
  ];

  return (
    <div className="pt-20 font-sans bg-white overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[300px] flex items-center justify-center mb-12">
        <img
          src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Gallery Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
        />
        <h1 className="relative z-10 text-white text-5xl font-black uppercase tracking-tight">
          Gallery
        </h1>
      </section>

      {/* --- GALLERY GRID --- */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white  overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col"
          >
            {/* Clickable Image */}
            <Link to={item.link}>
              <div className="relative overflow-hidden h-[230px] w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {item.category && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    {item.category}
                  </div>
                )}
              </div>
            </Link>

            {/* Title Below Image */}
            <div className="p-6 flex justify-center">
              <h3 className="text-center text-[#212958] text-lg font-extrabold leading-snug group-hover:text-red-600 transition-colors">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
