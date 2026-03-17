import React from "react";
import {
  CheckSquare,
  Headphones,
  UserCheck,
  GraduationCap,
  Globe,
  FileCheck,
  Award,
  Zap,
} from "lucide-react";

const Services = () => {
  const serviceList = [
    "Applications",
    "Student Finance applications",
    "Interviews",
    "Student counselling",
  ];

  const courseTypes = [
    "Bachelor degrees",
    "Masters degrees",
    "Foundation Diploma courses",
    "Higher National Diploma",
    "Higher National Certificate",
  ];

  const mainCourses = [
    "Business Management",
    "Law",
    "Health and social care",
    "ICT",
    "Hospitality management",
    "Project management",
    "Finance and accounting and many more",
  ];

  const universityQuestions = [
    "Does the university offer the right course options and flexibility for you?",
    "How does it rank for student satisfaction and care?",
    "What are your career prospects?",
    "What percentages of its students go straight into employment or further study after graduating?",
    "What are the teaching standards like?",
    "How does it perform in terms of research activity?",
    "What facilities are on offer? Consider things such as libraries, lecture halls and study spaces",
    "Are there extra-curricular opportunities such as student unions, societies and sports teams?",
    "Is the university based on campus or spread out over a city?",
    "What are the course fees and accommodation costs and standards like?",
    "Review Graduate employability and student satisfaction rate?",
  ];

  return (
    <div className="pt-20 font-sans bg-[#F8FAFC] overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-[300px] md:h-[450px] flex items-center justify-center mb-12">
        <img
          src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Services Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
        />
        <h1 className="relative z-10 text-white text-5xl font-black uppercase tracking-tight">
          Services
        </h1>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* RECRUITMENT */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 border-t-4 border-[#00B0FF] shadow-lg rounded-b-xl hover:-translate-y-1 hover:shadow-xl transition">
            <h2 className="text-[#1A237E] text-3xl font-black mb-4">
              We Recruit
            </h2>

            <div className="w-16 h-1 bg-[#00B0FF] mb-6 flex items-center">
              <div className="w-3 h-3 bg-[#00B0FF] rounded-full"></div>
            </div>

            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-700 font-bold items-center">
                <CheckSquare className="text-[#00B0FF]" size={20} /> UK students
              </li>

              <li className="flex gap-3 text-slate-700 font-bold items-center">
                <CheckSquare className="text-[#00B0FF]" size={20} /> EU students
              </li>
            </ul>
          </div>

          <div className="p-8 border-t-4 border-[#00B0FF] shadow-lg rounded-b-xl hover:-translate-y-1 hover:shadow-xl transition">
            <h2 className="text-[#1A237E] text-3xl font-black mb-4">
              We help our students with
            </h2>

            <div className="w-16 h-1 bg-[#00B0FF] mb-6 flex items-center">
              <div className="w-3 h-3 bg-[#00B0FF] rounded-full"></div>
            </div>

            <ul className="space-y-4">
              {serviceList.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-slate-700 font-bold items-center"
                >
                  <CheckSquare className="text-[#00B0FF]" size={20} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* COURSE TYPES */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 border-t-4 border-[#00B0FF] shadow-lg rounded-b-xl hover:-translate-y-1 hover:shadow-xl transition">
            <h2 className="text-[#1A237E] text-2xl font-black uppercase mb-4">
              Types of courses we assist
            </h2>

            <ul className="space-y-4">
              {courseTypes.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-slate-700 font-bold items-center"
                >
                  <CheckSquare className="text-[#00B0FF]" size={20} /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 border-t-4 border-[#00B0FF] shadow-lg rounded-b-xl hover:-translate-y-1 hover:shadow-xl transition">
            <h2 className="text-[#1A237E] text-2xl font-black uppercase mb-4">
              Courses we mainly assist with
            </h2>

            <ul className="space-y-3">
              {mainCourses.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-slate-700 font-bold items-center"
                >
                  <CheckSquare className="text-[#00B0FF]" size={20} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FIND UNIVERSITY */}
        <section className="py-16 border-t border-slate-200">
          <h2 className="text-[#1A237E] text-4xl font-black mb-2">
            Find A University
          </h2>

          <div className="w-24 h-1 bg-[#00B0FF] mb-8 flex items-center">
            <div className="w-3 h-3 bg-[#00B0FF] rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 space-y-4">
              {universityQuestions.map((question, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  <CheckSquare
                    className="text-[#00B0FF] mt-1 shrink-0 group-hover:scale-110 transition"
                    size={22}
                  />
                  <p className="text-slate-800 font-bold text-md">{question}</p>
                </div>
              ))}
            </div>

            <div className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Library Interior"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* STUDENT SUPPORT */}
        <section className="py-12">
          <h2 className="text-[#1A237E] text-4xl font-black mb-2">
            Exclusive Student Support
          </h2>

          <div className="w-20 h-1 bg-[#00B0FF] mb-12 flex items-center">
            <div className="w-3 h-3 bg-[#00B0FF] rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-4 text-lg font-bold text-slate-800">
                <Headphones size={32} className="text-[#00B0FF]" />
                24/7 Student Recruitment Services
              </div>

              <div className="flex items-center gap-4 text-lg font-bold text-slate-800">
                <UserCheck size={32} className="text-[#00B0FF]" />
                Admission Support
              </div>

              <div className="flex items-center gap-4 text-lg font-bold text-slate-800">
                <Globe size={32} className="text-[#00B0FF]" />
                Home Overseas Consultant
              </div>

              <div className="flex items-center gap-4 text-lg font-bold text-slate-800">
                <GraduationCap size={32} className="text-[#00B0FF]" />
                Professional and Customized Student Pathway
              </div>
            </div>

            <div className="flex-1">
              <img
                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>

            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-4 text-lg font-bold text-slate-800">
                <FileCheck size={32} className="text-[#00B0FF]" />
                Free Application Services
              </div>

              <div className="flex items-center gap-4 text-lg font-bold text-slate-800">
                <Award size={32} className="text-[#00B0FF]" />
                Top Ranked Universities
              </div>

              <div className="flex items-center gap-4 text-lg font-bold text-slate-800">
                <Zap size={32} className="text-[#00B0FF]" />
                Best Quality Achievements and 100% Helpful Services
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="bg-[#1A237E] text-white px-10 py-4 rounded-xl font-bold text-xl flex items-center gap-3 mx-auto hover:bg-[#00B0FF] transition shadow-lg">
              <CheckSquare size={24} /> Start Application
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
