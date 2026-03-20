import React, { useEffect, useState } from "react";
import {
  CheckSquare,
  BookOpen,
  Users,
  Star,
  Calendar,
  ShieldCheck,
  ArrowRight,
  MapPin,
  Globe,
  GraduationCap,
} from "lucide-react";
import Banner from "../components/Banner";
import { getData } from "../api/api";

const IELTSCourse = () => {
  const [types, setTypes] = useState([]);
  const [structure, setStructure] = useState([]);
  const [features, setFeatures] = useState([]);
  const iconMap = {
    graduation: GraduationCap,
    globe: Globe,
    star: Star,
    users: Users,
    book: BookOpen,
    check: CheckSquare,
  };
  const fetchData = async (url, setter) => {
    try {
      const res = await getData(url);
      if (res.success) {
        setter(res.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData("ielts/types", setTypes);
    fetchData("ielts/test-structure", setStructure);
    fetchData("ielts/features", setFeatures);
  }, []);

  // fallback random/default
  const fallbackIcons = [
    GraduationCap,
    Globe,
    Star,
    Users,
    BookOpen,
    CheckSquare,
  ];

  const getIcon = (iconName, index = 0) => {
    if (iconName && iconMap[iconName.toLowerCase()]) {
      return iconMap[iconName.toLowerCase()];
    }

    return fallbackIcons[index % fallbackIcons.length];
  };

  return (
    <div className="pt-20 font-sans bg-[#FBFDFF] text-slate-900 overflow-x-hidden">
      {/* --- HERO SECTION (High Impact) --- */}
      {/* <section className="relative h-[450px] md:h-[650px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1A237E] via-[#1A237E]/70 to-[#00B0FF]/30 z-10" />
        <img
          src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="IELTS Banner"
          className="absolute inset-0 w-full h-full object-cover transform scale-105 transition-transform duration-[10s] hover:scale-100"
        />
        <div className="relative z-20 text-center px-6">
          <span className="text-[#00B0FF] font-black tracking-[0.3em] uppercase mb-4 block animate-pulse">
            Premium Training
          </span>
          <h1 className="text-white text-6xl md:text-9xl font-black uppercase tracking-tighter drop-shadow-2xl">
            IELTS
          </h1>
          <div className="h-2 w-40 bg-[#00B0FF] mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(0,176,255,0.8)]"></div>
          <p className="mt-8 text-white/90 text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            Your journey to{" "}
            <span className="font-bold text-[#00B0FF]">Global Success</span>{" "}
            starts with Agastya Global's expert guidance.
          </p>
        </div>
      </section> */}
      <Banner
        subtitle="Premium Training"
        title="IELTS"
        description={
          <>
            Your journey to{" "}
            <span className="text-[#00B0FF] font-bold">Global Success</span>{" "}
            starts with Agastya Global's expert guidance.
          </>
        }
        align="center"
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-24 -mt-20 relative z-30">
        {/* --- MAIN HEADER CARD --- */}
        <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-50 mb-20 group">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <h2 className="text-[#1A237E] text-3xl md:text-5xl font-black uppercase tracking-tight leading-none">
              [IELTS]{" "}
              <span className="text-slate-400">International English</span>{" "}
              <br className="hidden md:block" /> Language Testing System
            </h2>
            <Globe className="text-[#00B0FF] w-16 h-16 opacity-20 group-hover:rotate-12 transition-transform duration-500" />
          </div>
          <div className="w-24 h-1.5 bg-[#00B0FF] mb-10 rounded-full transition-all duration-500 group-hover:w-48"></div>
          <p className="text-slate-600 text-lg md:text-2xl leading-relaxed max-w-6xl font-medium">
            The IELTS score is a globally acknowledged English language
            proficiency prerequisite for pursuing higher education in nearly all
            countries, such as the{" "}
            <span className="text-[#1A237E] font-bold border-b-2 border-[#00B0FF]/30">
              USA, UK, Australia, Canada, and New Zealand.
            </span>{" "}
            Achievement of a top-tier band score is within your reach with our
            structured approach.
          </p>
        </div>

        {/* --- ACADEMIC & GENERAL TRAINING --- */}
        {/* <div className="grid md:grid-cols-2 gap-10 mb-24">
          <div className="p-12 bg-white border-t-8 border-[#00B0FF] shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
            <div className="bg-[#00B0FF]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-[#1A237E] text-3xl font-black mb-6 uppercase">
              Academic
            </h3>
            <p className="text-slate-600 font-medium text-lg leading-relaxed">
              Designed for students aspiring for{" "}
              <span className="text-[#1A237E] font-bold">
                University Admission
              </span>
              . It evaluates if you possess the necessary academic language
              skills for higher education or professional registration.
            </p>
          </div>
          <div className="p-12 bg-[#1A237E] border-t-8 border-[#00B0FF] shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 text-white">
            <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <Globe size={32} />{" "}
            </div>
            <h3 className="text-white text-3xl font-black mb-6 uppercase">
              General Training
            </h3>
            <p className="text-slate-200 font-medium text-lg leading-relaxed opacity-90">
              Ideal for those seeking{" "}
              <span className="text-[#00B0FF] font-bold">Immigration</span>,
              secondary education, or vocational training. Focuses on basic
              survival skills in broad social and workplace contexts.
            </p>
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          {types?.map((item, index) => {
            const Icon = getIcon(item?.icon, index);

            const isAcademic = item?.type?.toLowerCase().includes("academic");

            return (
              <div
                key={item._id}
                className={`p-12 border-t-8 border-[#00B0FF] shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${
                  isAcademic ? "bg-white" : "bg-[#1A237E] text-white"
                }`}
              >
                {/* ICON */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${
                    isAcademic
                      ? "bg-[#00B0FF]/10 text-[#00B0FF]"
                      : "bg-white/10 text-white"
                  }`}
                >
                  <Icon size={32} />
                </div>

                {/* TITLE */}
                <h3
                  className={`text-3xl font-black mb-6 uppercase ${
                    isAcademic ? "text-[#1A237E]" : "text-white"
                  }`}
                >
                  {item?.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className={`font-medium text-lg leading-relaxed ${
                    isAcademic ? "text-slate-600" : "text-slate-200 opacity-90"
                  }`}
                >
                  {item?.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* --- TEST PATTERN & INFO --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-24">
          <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col justify-between">
            <div>
              <h3 className="text-[#1A237E] text-3xl font-black mb-10 uppercase flex items-center gap-4">
                <div className="w-8 h-8 bg-[#00B0FF] rounded-lg rotate-45"></div>
                Test Structure
              </h3>
              <ul className="space-y-6">
                {structure.map((item, index) => (
                  <li
                    key={item._id || index}
                    className="flex gap-6 items-center p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                  >
                    <CheckSquare
                      className="text-[#00B0FF] shrink-0"
                      size={28}
                    />

                    <div>
                      <p className="text-[#1A237E] font-black text-xl leading-none mb-1 uppercase tracking-tight">
                        {item.name}: {item.title}
                      </p>

                      <p className="text-slate-500 font-bold">{item.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#F1F5F9] p-12 rounded-[3rem] border border-slate-200 relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="text-[#1A237E] text-3xl font-black mb-8 uppercase tracking-tighter">
                Course Description
              </h4>
              <div className="space-y-8 text-slate-700 font-medium text-xl leading-relaxed">
                <p className="border-l-4 border-[#00B0FF] pl-6 py-2">
                  Agastya Global provides the most comprehensive environment for
                  both Academic and General Training modules.
                </p>
                <p>
                  Our curriculum is updated weekly to match the latest Cambridge
                  standards, ensuring you are never surprised on test day.
                </p>
                <div className="pt-6">
                  <p className="text-[#1A237E] font-black text-sm uppercase tracking-widest mb-2">
                    Our Promise
                  </p>
                  <p className="text-slate-500 italic">
                    "Empowering students through excellence in English language
                    education."
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#1A237E]/5 rounded-full scale-150 group-hover:scale-[2] transition-transform duration-700"></div>
          </div>
        </div>

        {/* --- AGASTYA GLOBAL SPECIAL FEATURES --- */}
        <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl mb-24 border border-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Star size={200} />
          </div>

          <div className="max-w-4xl mb-16 relative z-10">
            <h2 className="text-[#1A237E] text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight leading-tight">
              Agastya Global{" "}
              <span className="text-[#00B0FF] block">IELTS Course</span>
            </h2>
            <div className="flex items-center gap-3 text-[#1A237E] font-bold mb-6">
              <MapPin className="text-[#00B0FF]" />
              <span>Chittagong Branch (Now Open)</span>
            </div>
            <p className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium">
              We provide top-notch training designed for success. A good IELTS
              score is not just a requirement; it’s a{" "}
              <span className="text-[#1A237E] font-extrabold underline decoration-[#00B0FF] decoration-4">
                career catalyst
              </span>
              .
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            <div className="bg-slate-50 p-8 rounded-3xl border-l-8 border-[#1A237E]">
              <h3 className="text-[#1A237E] text-2xl font-black mb-4 uppercase">
                Why It Matters?
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                It’s essential for admission to top-tier universities and
                demonstrates your professional communication capability in IT,
                Engineering, and Healthcare.
              </p>
            </div>
            <div className="bg-[#00B0FF]/5 p-8 rounded-3xl border-l-8 border-[#00B0FF]">
              <h3 className="text-[#1A237E] text-2xl font-black mb-4 uppercase">
                Career Impact
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Multinational giants prioritize candidates with strong IELTS
                scores. It represents your ability to thrive in a global
                workforce.
              </p>
            </div>
          </div>
        </div>

        {/* --- WHY CHOOSE US (Interactive Grid) --- */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-[#1A237E] text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
              Why Agastya Global?
            </h2>
            <div className="w-24 h-2 bg-[#00B0FF] mx-auto rounded-full"></div>
          </div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                t: "Expert Instructors",
                d: "British Council-certified professionals with over 10+ years of experience.",
                icon: <Users size={32} />,
              },
              {
                t: "12-Student Batches",
                d: "Micro-batches to ensure every student gets personalized corrections.",
                icon: <Star size={32} />,
              },
              {
                t: "Full Module Focus",
                d: "Comprehensive practice for Listening, Reading, Writing, and Speaking.",
                icon: <BookOpen size={32} />,
              },
              {
                t: "Weekly Mock Tests",
                d: "Real exam simulation every Saturday with detailed performance tracking.",
                icon: <Calendar size={32} />,
              },
              {
                t: "Flexible Timings",
                d: "Special morning and evening batches for working professionals.",
                icon: <CheckSquare size={32} />,
              },
              {
                t: "Real-World Skills",
                d: "We don't just teach for the test; we teach you how to communicate.",
                icon: <ShieldCheck size={32} />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-[#00B0FF] mb-8 bg-[#00B0FF]/10 w-fit p-5 rounded-3xl group-hover:bg-[#1A237E] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="text-[#1A237E] font-black mb-4 uppercase text-xl tracking-tight">
                  {item.t}
                </h4>
                <p className="text-slate-500 text-lg leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}
          </div> */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features?.map((item, i) => {
              const Icon = getIcon(item.icon, i); // reuse your icon logic

              return (
                <div
                  key={item._id || i}
                  className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-[#00B0FF] mb-8 bg-[#00B0FF]/10 w-fit p-5 rounded-3xl group-hover:bg-[#1A237E] group-hover:text-white transition-colors duration-300">
                    <Icon size={32} />
                  </div>

                  <h4 className="text-[#1A237E] font-black mb-4 uppercase text-xl tracking-tight">
                    {item.title}
                  </h4>

                  <p className="text-slate-500 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- FINAL CTA SECTION --- */}
        <div className="relative rounded-[4rem] overflow-hidden shadow-[0_30px_70px_-15px_rgba(26,35,126,0.4)] min-h-[550px] group">
          <img
            src="https://images.pexels.com/photos/159711/books-bookcase-library-read-159711.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Student Practice"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A237E] via-[#1A237E]/90 to-transparent flex flex-col justify-center p-8 md:p-24">
            <div className="max-w-2xl text-white">
              <span className="bg-[#00B0FF] px-8 py-2 rounded-full font-black text-sm uppercase mb-8 inline-block shadow-lg">
                Limited Seats Available
              </span>
              <h3 className="text-5xl md:text-7xl font-black mb-8 uppercase leading-[0.9]">
                Ready to <br />
                <span className="text-[#00B0FF]">Succeed?</span>
              </h3>
              <p className="text-white/80 text-xl md:text-2xl font-medium mb-12 leading-relaxed">
                Don't leave your future to chance. Enroll in Agastya Global’s
                exclusive program and secure your dream score.
              </p>
              <button className="group bg-white hover:bg-[#00B0FF] text-[#1A237E] hover:text-white px-14 py-6 rounded-full font-black uppercase text-2xl transition-all duration-300 flex items-center gap-4 shadow-2xl active:scale-95">
                Join Us Now
                <ArrowRight
                  className="group-hover:translate-x-3 transition-transform duration-300"
                  size={32}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IELTSCourse;
