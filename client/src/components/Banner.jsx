import React, { useEffect, useState } from "react";
import { getData } from "../api/api";

const Banner = ({
  subtitle,
  title,
  description,
  align = "left", // left | center
  icon,
  height = "h-[450px] md:h-[550px]",
  overlay = "from-[#1A237E]/90 via-[#1A237E]/70 to-transparent",
}) => {
  const [heroImage, setHeroImage] = useState("");

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const data = await getData("banner");

        if (data.success) {
          const activeBanner = data.data.find((b) => b.status === true);

          if (activeBanner) {
            setHeroImage(activeBanner.image);
          }
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchBanner();
  }, []);

  return (
    <section className={`relative ${height} w-full overflow-hidden`}>
      <div className={`absolute inset-0 bg-gradient-to-r ${overlay} z-10`} />

      <img
        src={
          heroImage
            ? `${import.meta.env.VITE_BASE_URL}${heroImage.replace(/\\/g, "/")}`
            : "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg"
        }
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />

      {/* Content Wrapper */}
      <div className="relative z-20 w-full h-full flex items-center">
        <div
          className={`max-w-7xl w-full mx-auto px-6 ${
            align === "center" ? "text-center" : "text-left"
          }`}
        >
          <div className={`max-w-3xl ${align === "center" ? "mx-auto" : ""}`}>
            {subtitle && (
              <span className="bg-[#00B0FF] text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-6 inline-block shadow-lg">
                {icon && <span className="mr-2">{icon}</span>}
                {subtitle}
              </span>
            )}

            <h1 className="text-white text-3xl md:text-4xl lg:text-4xl font-black uppercase tracking-tighter leading-tight mb-6">
              {title}
            </h1>

            {/* <div
              className={`h-2 w-24 bg-[#00B0FF] rounded-full mb-6 ${
                align === "center" ? "mx-auto" : ""
              }`}
            ></div> */}

            {description && (
              <p className="text-white/80 text-base md:text-xl lg:text-2xl font-medium leading-relaxed italic border-l-4 border-[#00B0FF] pl-4 md:pl-6">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
