import React from "react";
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

const About = () => {
  return (
    <div className="pt-20 font-sans bg-[#FBFDFF] text-slate-900 overflow-x-hidden">
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative h-[450px] md:h-[550px] flex items-center justify-center overflow-hidden">
        {/* Dynamic Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A237E]/90 via-[#1A237E]/70 to-transparent z-10" />
        <img
          src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="London Skyline"
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-1000"
        />

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-left">
          <div className="max-w-3xl">
            <span className="bg-[#00B0FF] text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-6 inline-block shadow-lg animate-fade-in">
              Established 2012
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              About <span className="text-[#00B0FF]">Us</span>
            </h1>
            <div className="h-2 w-24 bg-[#00B0FF] rounded-full mb-6"></div>
            <p className="text-white/80 text-lg md:text-2xl font-medium max-w-xl leading-relaxed italic border-l-4 border-[#00B0FF] pl-6">
              "Connecting aspirations with world-class education through real
              guidance and expert consultancy."
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* --- STATS STRIP (Interactive Social Proof) --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 -mt-16 relative z-30 mb-24">
          {[
            {
              label: "Years Experience",
              value: "12+",
              icon: <Clock size={20} />,
            },
            { label: "Global Reach", value: "50+", icon: <Globe size={20} /> },
            { label: "Success Rate", value: "98%", icon: <Award size={20} /> },
            {
              label: "Certified",
              value: "British Council",
              icon: <ShieldCheck size={20} />,
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-slate-50 flex flex-col items-center text-center group hover:bg-[#1A237E] transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="text-[#00B0FF] mb-3 group-hover:text-white transition-colors p-3 bg-slate-50 group-hover:bg-white/10 rounded-2xl">
                {stat.icon}
              </div>
              <h4 className="text-[#1A237E] text-2xl md:text-3xl font-black group-hover:text-white">
                {stat.value}
              </h4>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest group-hover:text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* --- CORE SECTIONS (Alternate Grid for Professional Flow) --- */}
        <div className="space-y-24">
          {/* Agency & Goal Row */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Our Agency */}
            <div className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00B0FF]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex items-center gap-5 mb-6">
                <div className="p-4 bg-[#00B0FF]/10 rounded-2xl text-[#00B0FF] group-hover:bg-[#00B0FF] group-hover:text-white transition-colors">
                  <Megaphone size={32} />
                </div>
                <h2 className="text-[#1A237E] text-3xl font-black uppercase tracking-tight">
                  Our Agency
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg font-medium relative z-10">
                Agastya Global, a London-based agency established in 2012,
                specializes in recruiting both domestic and international
                students for the world's top universities. Certified by the
                British Council as a global agent, we have successfully enrolled
                students globally.
              </p>
            </div>

            {/* Our Goal */}
            <div className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1A237E]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex items-center gap-5 mb-6">
                <div className="p-4 bg-[#1A237E]/5 rounded-2xl text-[#1A237E] group-hover:bg-[#1A237E] group-hover:text-white transition-colors">
                  <Clock size={32} />
                </div>
                <h2 className="text-[#1A237E] text-3xl font-black uppercase tracking-tight">
                  Our Goal
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg font-medium relative z-10">
                Our goal is to enhance diversity and expand globally,
                facilitating education worldwide. Our dedicated team customizes
                applications for diverse fields such as Medicine, Business, IT,
                Law, and Engineering.
              </p>
            </div>
          </div>

          {/* Reached & Based Row */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Reached */}
            <div className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-5 mb-6">
                <div className="p-4 bg-[#00B0FF]/10 rounded-2xl text-[#00B0FF] group-hover:bg-[#00B0FF] group-hover:text-white transition-colors">
                  <MapPin size={32} />
                </div>
                <h2 className="text-[#1A237E] text-3xl font-black uppercase tracking-tight">
                  We Have Reached
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                With over various partner universities, our student support
                services have left a positive impact in Canada, US, UK,
                Australia, India, Bangladesh, China, Malaysia, and Europe.
              </p>
            </div>

            {/* Based */}
            <div className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-5 mb-6">
                <div className="p-4 bg-[#1A237E]/5 rounded-2xl text-[#1A237E] group-hover:bg-[#1A237E] group-hover:text-white transition-colors">
                  <Edit size={32} />
                </div>
                <h2 className="text-[#1A237E] text-3xl font-black uppercase tracking-tight">
                  We Are Based
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                In the vibrant heart of East London, our location provides an
                inspiring home for students. East London is known for its
                multicultural charm, hosting top-notch museums and markets.
              </p>
            </div>
          </div>

          {/* Philosophy & Organization Row */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Philosophy */}
            <div className="group bg-[#1A237E] p-12 rounded-[3.5rem] shadow-2xl hover:shadow-[#1A237E]/30 transition-all duration-500 text-white">
              <h2 className="text-white text-3xl font-black mb-6 flex items-center gap-4">
                <Target className="text-[#00B0FF]" size={36} />
                Our Philosophy
              </h2>
              <p className="text-white/80 leading-relaxed text-lg font-medium">
                Agastya Global Ltd serves as a bridge between aspirations and
                careers. Committed to the belief that everyone deserves quality
                education, we strive to keep tuition affordable.
              </p>
            </div>

            {/* Organization */}
            <div className="group bg-[#00B0FF] p-12 rounded-[3.5rem] shadow-2xl hover:shadow-[#00B0FF]/30 transition-all duration-500 text-white">
              <h2 className="text-white text-3xl font-black mb-6 flex items-center gap-4">
                <Eye className="text-[#1A237E]" size={36} />
                Our Organization
              </h2>
              <p className="text-white/90 leading-relaxed text-lg font-medium">
                Comprising experienced staff dedicated to guiding students,
                Agastya Global (UK) stands as a unique platform empowering
                students to make informed decisions about their future.
              </p>
            </div>
          </div>
        </div>

        {/* --- STRATEGY MISSION VISION (Modern Checklist Cards) --- */}
        <div className="mt-32 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Strategy",
              points: [
                "Expanding market presence with global networks.",
                "Delivering expert guidance through seasoned consultants.",
                "Customizing support for international and EU students.",
              ],
            },
            {
              title: "Our Mission",
              points: [
                "Guiding students to the ideal university for success.",
                "Navigating the ever-changing educational landscape.",
                "Securing partial scholarships by connecting institutions.",
              ],
            },
            {
              title: "Our Vision",
              points: [
                "Aligning institutions with students' profiles and goals.",
                "Fostering holistic student development.",
                "Providing stress-free, high-quality services.",
              ],
            },
          ].map((box, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-50 hover:border-[#00B0FF] transition-all duration-500 group flex flex-col h-full"
            >
              <h3 className="text-[#1A237E] text-2xl font-black mb-8 uppercase tracking-tighter flex items-center justify-between">
                {box.title}
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
            {[
              "https://cdn-icons-png.flaticon.com/512/3252/3252906.png",
              "https://cdn-icons-png.flaticon.com/512/2997/2997292.png",
              "https://cdn-icons-png.flaticon.com/512/2232/2232688.png",
            ].map((img, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 rounded-3xl group hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-slate-100"
              >
                <img
                  src={img}
                  className="h-16 md:h-20 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 cursor-pointer object-contain"
                  alt="Partner"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
