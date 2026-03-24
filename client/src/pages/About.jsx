import React, { useEffect, useState } from "react";
import {
  Megaphone,
  Clock,
  MapPin,
  Edit,
  Target,
  Eye,
  Globe,
  Award,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { AiOutlineCheckSquare } from "react-icons/ai";
import Banner from "../components/Banner";
import { getData } from "../api/api";
import WhatsappFloat from "../components/WhatsappFloat";

const About = () => {
  const [stats, setStats] = useState([]);
  const [card, setCards] = useState([]);
  const [sections, setSections] = useState([]);
  const [partners, sansetPartners] = useState([]);

  const defaultIcons = [Megaphone, Clock, MapPin, Edit];
  const sortedStats = [...stats].sort((a, b) => a.order - b.order);
  const iconMap = {
    Clock,
    Globe,
    Award,
    ShieldCheck,
  };
  const sectionIconMap = {
    "Our Agency": Megaphone,
    "Our Goal": Clock,
    "We Have Reached": MapPin,
    "We Are Based": Edit,
    "Our Philosophy": Target,
    "Our Organization": Eye,
  };
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [statsRes, cardsRes, sectionsRes, partnersRes] =
          await Promise.all([
            getData("about/stats"),
            getData("about/cards"),
            getData("about/sections"),
            getData("about/partners"),
          ]);

        if (statsRes.success) setStats(statsRes.data);
        if (cardsRes.success) setCards(cardsRes.data);
        if (sectionsRes.success) setSections(sectionsRes.data);
        if (partnersRes.success) sansetPartners(partnersRes.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAllData();
  }, []);
  const getIcon = (title, index) => {
    return sectionIconMap[title] || defaultIcons[index % defaultIcons.length];
  };

  return (
    <div className="pt-20 font-sans bg-[#FBFDFF] text-slate-900 overflow-x-hidden">
      {/* --- PREMIUM HERO SECTION --- */}

      <Banner
        subtitle="Established 2012"
        title={
          <>
            About <span className="text-[#00B0FF]">Us</span>
          </>
        }
        description='"Connecting aspirations with world-class education through real guidance and expert consultancy."'
      />

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* --- STATS STRIP (Interactive Social Proof) --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 -mt-16 relative z-30 mb-24">
          {sortedStats.map((stat, i) => {
            const IconComponent = iconMap[stat.icon] || Award;

            return (
              <div
                key={i}
                className="bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-slate-50 flex flex-col items-center text-center group hover:bg-[#1A237E] transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="text-[#00B0FF] mb-3 group-hover:text-white transition-colors p-3 bg-slate-50 group-hover:bg-white/10 rounded-2xl flex items-center justify-center">
                  {IconComponent && <IconComponent size={20} />}{" "}
                </div>
                <h4 className="text-[#1A237E] text-2xl md:text-3xl font-black group-hover:text-white">
                  {stat.value}
                </h4>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest group-hover:text-white/70">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* --- CORE SECTIONS (Alternate Grid for Professional Flow) --- */}
        <div className="space-y-24">
          <div className="grid md:grid-cols-2 gap-10">
            {sections.map((sec, idx) => {
              const IconComponent = getIcon(sec.title, idx);
              return (
                <div
                  key={idx}
                  className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
                >
                  {/* Background effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#00B0FF]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

                  {/* Header */}
                  <div className="flex items-center gap-5 mb-6 relative z-10">
                    {IconComponent && (
                      <div className="p-4 bg-[#00B0FF]/10 rounded-2xl text-[#00B0FF] group-hover:bg-[#00B0FF] group-hover:text-white transition-colors">
                        <IconComponent size={32} />
                      </div>
                    )}

                    <h2 className="text-[#1A237E] text-3xl font-black uppercase tracking-tight">
                      {sec.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-lg font-medium relative z-10">
                    {sec.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-32 grid md:grid-cols-3 gap-8">
          {card.map((box, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-50 hover:border-[#00B0FF] transition-all duration-500 group flex flex-col h-full"
            >
              <h3 className="text-[#1A237E] text-2xl font-black mb-8 uppercase tracking-tighter flex items-center justify-between">
                {box.type}
                <ChevronRight className="text-[#00B0FF] group-hover:translate-x-2 transition-transform" />
              </h3>
              <ul className="space-y-6 flex-1">
                {box.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-4 group/item">
                    <div className="mt-1">
                      <AiOutlineCheckSquare className="text-[#00B0FF] text-2xl group-hover/item:scale-125 transition-transform" />
                    </div>
                    <span className="text-slate-600 font-bold text-sm leading-tight uppercase tracking-wide group-hover/item:text-[#1A237E] transition-colors">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- PARTNER NETWORK (Modern Logo Cloud) --- */}
        <div className="mt-32 bg-white rounded-[4rem] p-12 md:p-20 text-center shadow-2xl border border-slate-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#00B0FF]/5 rounded-full blur-3xl -ml-32 -mt-32"></div>

          <h2 className="text-[#1A237E] text-3xl md:text-5xl font-black mb-16 uppercase tracking-tight max-w-4xl mx-auto leading-tight">
            Part of a Global{" "}
            <span className="text-[#00B0FF]">Education Network</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-10 md:gap-20 items-center">
            {partners.map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 rounded-3xl group hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-slate-100"
              >
                <img
                  src={item.image}
                  alt={item.alt || "Partner"}
                  onError={(e) => {
                    e.target.src = "./Error-404.png";
                  }}
                  className="h-16 md:h-20 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 cursor-pointer object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <WhatsappFloat />
    </div>
  );
};

export default About;
