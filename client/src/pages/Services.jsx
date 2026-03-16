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
    <div className="pt-20 font-sans bg-white overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[300px] flex items-center justify-center mb-12">
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
        {/* --- RECRUITMENT & HELP SECTION --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* We Recruit */}
          <div className="p-8 border-t-4 border-blue-600 shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-b-xl">
            <h2 className="text-[#212958] text-3xl font-black mb-4">
              We Recruit
            </h2>
            <div className="w-16 h-1 bg-blue-600 mb-6 flex items-center">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-700 font-bold items-center">
                <CheckSquare className="text-red-500" size={20} /> UK students
              </li>
              <li className="flex gap-3 text-gray-700 font-bold items-center">
                <CheckSquare className="text-red-500" size={20} /> EU students
              </li>
            </ul>
          </div>

          {/* We Help Our Students With */}
          <div className="p-8 border-t-4 border-blue-600 shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-b-xl">
            <h2 className="text-[#212958] text-3xl font-black mb-4">
              We help our students with
            </h2>
            <div className="w-16 h-1 bg-blue-600 mb-6 flex items-center">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            </div>
            <ul className="space-y-4">
              {serviceList.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-gray-700 font-bold items-center"
                >
                  <CheckSquare className="text-red-500" size={20} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- COURSE TYPES SECTION --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 border-t-4 border-blue-600 shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-b-xl">
            <h2 className="text-[#212958] text-2xl font-black uppercase mb-4">
              Types of courses we assist
            </h2>
            <ul className="space-y-4">
              {courseTypes.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-gray-700 font-bold items-center"
                >
                  <CheckSquare className="text-red-500" size={20} /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 border-t-4 border-blue-600 shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-b-xl">
            <h2 className="text-[#212958] text-2xl font-black uppercase mb-4">
              Courses we mainly assist with
            </h2>
            <ul className="space-y-3">
              {mainCourses.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-gray-700 font-bold items-center"
                >
                  <CheckSquare className="text-red-500" size={20} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <section className="py-16 border-t border-gray-100">
          <div className="mb-10">
            <h2 className="text-[#212958] text-4xl font-black mb-2 flex items-center gap-3">
              Find A University
            </h2>
            <div className="w-24 h-1 bg-blue-600 mb-8 flex items-center">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            </div>

            <div className="text-gray-700 text-lg leading-relaxed space-y-6 mb-12">
              <p className="font-semibold">
                There is no such thing as the best university in the world,
                although some students want to find the perfect college, the
                truth is, there is no such thing. You can find many colleges
                where you will be happy and get a great education. But the quest
                for college is to research who you are and what you want and
                then find colleges that will meet your goals.
              </p>
              <p>
                Choosing the right course is interesting, but can sometimes be
                frustrating. Finding a suitable university course for your
                future career is no easy task and sometimes takes longer than
                expected. That's why, you need to consider a few steps before
                making a decision.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Side: Checklist */}
            <div className="flex-1 space-y-4">
              {universityQuestions.map((question, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  <CheckSquare
                    className="text-red-500 mt-1 shrink-0 transition-transform group-hover:scale-110"
                    size={22}
                  />
                  <p className="text-gray-800 font-bold text-md leading-tight">
                    {question}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Side: Image with Decorative Frame */}
            <div className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Library Interior"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* <div className="mt-8 p-6 bg-blue-50 rounded-xl border-l-4  text-gray-700">
                "So choose the most appropriate course from our course guide and
                we'll do the rest for you. You can also search a Foundation,
                Diploma, Undergraduate, Postgraduate and research courses from
                top-ranking universities."
              </div> */}
            </div>
          </div>
        </section>
        {/* --- EXCLUSIVE STUDENT SUPPORT --- */}
        <section className="py-12">
          <h2 className="text-[#212958] text-4xl font-black mb-2">
            Exclusive Student Support
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-12 flex items-center">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Icons */}
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-4 text-lg font-bold text-gray-800">
                <Headphones size={32} className="shrink-0" /> 24/7 Student
                Recruitment Services
              </div>
              <div className="flex items-center gap-4 text-lg font-bold text-gray-800">
                <UserCheck size={32} className="shrink-0" /> Admission Support
              </div>
              <div className="flex items-center gap-4 text-lg font-bold text-gray-800">
                <Globe size={32} className="shrink-0" /> Home Overseas
                Consultant
              </div>
              <div className="flex items-center gap-4 text-lg font-bold text-gray-800">
                <GraduationCap size={32} className="shrink-0" /> Professional
                and Customized Student Pathway
              </div>
            </div>

            {/* Center Image */}
            <div className="flex-1">
              <img
                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>

            {/* Right Icons */}
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-4 text-lg font-bold text-gray-800">
                <FileCheck size={32} className="shrink-0" /> Free Application
                Services
              </div>
              <div className="flex items-center gap-4 text-lg font-bold text-gray-800">
                <Award size={32} className="shrink-0" /> Top Ranked Universities
              </div>
              <div className="flex items-center gap-4 text-lg font-bold text-gray-800">
                <Zap size={32} className="shrink-0" /> Best Quality Achievements
                and 100% Helpful Services
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="bg-[#e11d48] text-white px-10 py-4 rounded-md font-bold text-xl flex items-center gap-3 mx-auto hover:bg-[#b91c1c] transition-all shadow-lg">
              <CheckSquare size={24} /> Start Application
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
