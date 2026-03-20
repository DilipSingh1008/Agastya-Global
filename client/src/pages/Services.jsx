import React, { useEffect, useState } from "react";
import {
  CheckSquare,
  Headphones,
  UserCheck,
  GraduationCap,
  Globe,
  FileCheck,
  Award,
  Zap,
  ArrowRight,
} from "lucide-react";
import Banner from "../components/Banner";
import { getData } from "../api/api";

const Services = () => {
  const [recruitments, setRecruiments] = useState([]);
  const [services, setServices] = useState([]);
  const [courseTypes, setCourseTypes] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [subjects, setSubjects] = useState([]);

  // const serviceList = [
  //   "Applications",
  //   "Student Finance applications",
  //   "Interviews",
  //   "Student counselling",
  //   "Scholarships",
  // ];
  const iconMap = {
    Headphones,
    UserCheck,
    Globe,
    GraduationCap,
    FileCheck,
    Award,
    Zap,
  };
  // const courseTypes = [
  //   "Bachelor degrees",
  //   "Masters degrees",
  //   "Foundation Diploma courses",
  //   "Higher National Diploma",
  //   "Higher National Certificate",
  // ];

  // const mainCourses = [
  //   "Business Management",
  //   "Law",
  //   "Health and social care",
  //   "ICT",
  //   "Hospitality management",
  //   "Project management",
  //   "Finance and accounting and many more",
  // ];

  // const universityQuestions = [
  //   "Does the university offer the right course options and flexibility for you?",
  //   "How does it rank for student satisfaction and care?",
  //   "What are your career prospects?",
  //   "What percentages of its students go straight into employment or further study after graduating?",
  //   "What are the teaching standards like?",
  //   "How does it perform in terms of research activity?",
  //   "What facilities are on offer? Consider things such as libraries, lecture halls and study spaces",
  //   "Are there extra-curricular opportunities such as student unions, societies and sports teams?",
  //   "Is the university based on campus or spread out over a city?",
  //   "What are the course fees and accommodation costs and standards like?",
  //   "Review Graduate employability and student satisfaction rate?",
  // ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [recruitRes, serviceRes, courseRes, questionRes, subjectsRes] =
          await Promise.all([
            getData("recruitments"),
            getData("Conservices"),
            getData("course-types"),
            getData("questions"),
            getData("subjects"),
          ]);
        // console.log(serviceRes);
        if (recruitRes.success) {
          const filtered = recruitRes.data.filter(
            (item) => item.status === true,
          );
          setRecruiments(filtered);
        }

        if (serviceRes.success) {
          setServices(serviceRes.data);
        }

        if (courseRes.success) {
          setCourseTypes(courseRes.data);
        }
        if (courseRes.success) {
          setSubjects(subjectsRes.data);
        }
        if (questionRes.success) {
          setQuestions(questionRes.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  console.log(courseTypes);
  return (
    <div className="pt-20 font-sans bg-[#FBFDFF] text-slate-900 overflow-x-hidden">
      {/* --- MODERN HERO SECTION --- */}
      <Banner
        subtitle="Our Expertise"
        title={
          <>
            Our <span className="text-[#00B0FF]">Services</span>
          </>
        }
        align="center"
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* --- RECRUITMENT & HELP SECTION --- */}
        <div className="grid md:grid-cols-2 gap-10 mb-24">
          <div className="group bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 hover:border-[#00B0FF]/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#00B0FF]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            <h2 className="text-[#1A237E] text-3xl font-black mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#00B0FF] rounded-full"></span>
              We Recruit
            </h2>
            <ul className="space-y-4 relative z-10">
              {recruitments.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 text-slate-600 font-bold items-center group/item"
                >
                  <CheckSquare
                    className="text-[#00B0FF] group-hover/item:scale-110 transition"
                    size={24}
                  />
                  <span className="text-lg">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="group bg-[#1A237E] p-10 rounded-[2.5rem] shadow-2xl transition-all duration-500">
            <h2 className="text-white text-3xl font-black mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#00B0FF] rounded-full"></span>
              Student Support
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services
                .filter(
                  (item) =>
                    item.category === "student_support" &&
                    item.status === true &&
                    !item.isDelete,
                )
                .map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-white/90 font-bold items-center bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition"
                  >
                    <CheckSquare className="text-[#00B0FF]" size={20} />{" "}
                    {item.title}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* --- COURSE TYPES GRID --- */}
        <div className="grid md:grid-cols-2 gap-10 mb-32">
          <div className="p-10 bg-white rounded-[3rem] shadow-lg border-l-[12px] border-[#00B0FF] hover:shadow-2xl transition-shadow">
            <h2 className="text-[#1A237E] text-2xl font-black uppercase mb-8 tracking-tight">
              Types of courses we assist
            </h2>
            <div className="space-y-4">
              {courseTypes.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition group"
                >
                  <div className="bg-[#00B0FF]/10 p-2 rounded-lg group-hover:bg-[#00B0FF] group-hover:text-white transition-colors">
                    <GraduationCap size={20} />
                  </div>
                  <span className="font-bold text-slate-700">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 bg-white rounded-[3rem] shadow-lg border-l-[12px] border-[#1A237E] hover:shadow-2xl transition-shadow">
            <h2 className="text-[#1A237E] text-2xl font-black uppercase mb-8 tracking-tight">
              Main Subject Areas
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {subjects.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition border border-transparent hover:border-slate-100"
                >
                  <ArrowRight size={18} className="text-[#00B0FF]" />
                  <span className="font-bold text-slate-700">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- UNIVERSITY DECISION SECTION --- */}
        <section className="bg-slate-900 rounded-[4rem] overflow-hidden mb-32 shadow-3xl">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-20">
              <h2 className="text-white text-4xl md:text-5xl font-black mb-4">
                Find A <span className="text-[#00B0FF]">University</span>
              </h2>
              <p className="text-white/50 mb-10 font-medium">
                Ask yourself these critical questions before choosing your
                future destination:
              </p>

              <div className="space-y-5 h-[500px] overflow-y-auto pr-4 custom-scrollbar">
                {questions.map((question, index) => (
                  <div
                    key={index}
                    className="flex gap-5 items-start bg-white/5 p-5 rounded-2xl hover:bg-white/10 transition border border-white/5"
                  >
                    <span className="text-[#00B0FF] font-black text-xl">
                      0{index + 1}
                    </span>
                    <p className="text-white/90 font-bold text-md leading-snug">
                      {question.question}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img
                src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Library"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-slate-900 via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        {/* --- EXCLUSIVE STUDENT SUPPORT --- */}
        <section className="py-20 bg-white rounded-[4rem] shadow-xl border border-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B0FF]/5 blur-3xl rounded-full"></div>

          <div className="text-center mb-20">
            <h2 className="text-[#1A237E] text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
              Exclusive <span className="text-[#00B0FF]">Student Support</span>
            </h2>
            <div className="w-24 h-2 bg-[#00B0FF] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 lg:px-16">
            {services
              .filter(
                (item) =>
                  item.category === "application_services" &&
                  item.status === true &&
                  !item.isDelete,
              )
              .map((item, i) => {
                const IconComponent = iconMap[item.icon] || Zap;

                return (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-slate-50 hover:bg-[#1A237E] group transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2"
                  >
                    <div className="mb-6 p-5 bg-white rounded-2xl text-[#00B0FF] group-hover:bg-[#00B0FF] group-hover:text-white transition-all shadow-md">
                      {IconComponent && <IconComponent size={32} />}
                    </div>

                    <h3 className="text-slate-800 font-black text-lg group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                  </div>
                );
              })}
          </div>

          {/* CTA BUTTON */}
          <div className="text-center mt-20 relative z-10">
            <button className="bg-[#1A237E] text-white px-12 py-5 rounded-[2rem] font-black text-xl flex items-center gap-4 mx-auto hover:bg-[#00B0FF] transition-all shadow-2xl hover:scale-105 active:scale-95 group">
              <CheckSquare
                size={28}
                className="group-hover:rotate-12 transition-transform"
              />
              START APPLICATION NOW
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
