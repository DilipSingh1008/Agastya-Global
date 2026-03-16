import React from "react";
import { CheckSquare } from "lucide-react";

const IELTSCourse = () => {
  return (
    <div className="pt-24 font-sans bg-white overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[300px] flex items-center justify-center mb-16">
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="IELTS Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
        />
        <h1 className="relative z-10 text-white text-5xl font-black uppercase tracking-tight">
          IELTS
        </h1>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-20">
        {/* --- HEADER SECTION --- */}
        <div className="mb-12">
          <h2 className="text-[#212958] text-4xl font-black mb-2 uppercase">
            [IELTS] International English Language Testing System
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8 flex items-center">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed max-w-6xl font-medium">
            The IELTS score is a globally acknowledged English language
            proficiency prerequisite for pursuing higher education in nearly all
            countries, such as the United States, the United Kingdom, Australia,
            Canada, and New Zealand. The topmost band score achievable is 9.0,
            while universities generally consider a score of 6.0 for
            undergraduate admission and 6.0-7.0 for graduate admission. The
            IELTS test comes in two versions.
          </p>
        </div>

        {/* --- ACADEMIC & GENERAL TRAINING BLOCKS --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 border-t-4 border-blue-600 shadow-lg rounded-b-2xl bg-white">
            <h3 className="text-[#e11d48] text-2xl font-black mb-4 uppercase tracking-tighter">
              Academic
            </h3>
            <p className="text-gray-700 font-bold leading-relaxed">
              The IELTS Academic module evaluates your English language
              competence to determine if you possess the necessary skills to
              pursue a degree program or professional training. Students who
              wish to enroll in a university or a higher education institution
              are required to take the Academic Module.
            </p>
          </div>
          <div className="p-8 border-t-4 border-blue-600 shadow-lg rounded-b-2xl bg-white">
            <h3 className="text-[#e11d48] text-2xl font-black mb-4 uppercase tracking-tighter">
              General Training
            </h3>
            <p className="text-gray-700 font-bold leading-relaxed">
              The General Training module is intended for individuals who are
              looking to enroll in a secondary school, short course/vocational
              training program, or those who are seeking immigration
              opportunities.
            </p>
          </div>
        </div>

        {/* --- TEST PATTERN & DESCRIPTION (EXACT LAYOUT) --- */}

        <div className="grid lg:grid-cols-2 gap-10 items-start mb-24">
          {/* Test Pattern Card */}
          <div className="bg-white p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100">
            <h3 className="text-[#212958] text-2xl font-black mb-8 uppercase flex items-center gap-3">
              <span className="w-4 h-4 bg-red-600 rounded-full"></span>Test
              pattern
            </h3>
            <ul className="space-y-6">
              {[
                "Part 1: Listening (4 sections; 30 minutes)",
                "Part 2: Reading (3 passages; 60 minutes)",
                "Part 3: Writing (2 tasks; 60 minutes)",
                "Part 4: Speaking (Interview; 10-15 minutes)",
              ].map((pattern, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <CheckSquare
                    className="text-[#f97316] shrink-0 mt-1"
                    size={24}
                  />
                  <p className="text-gray-900 font-bold text-xl leading-tight">
                    {pattern}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Description Box (Grey) */}
          <div className="bg-[#f3f4f6] p-10 rounded-3xl h-full flex flex-col justify-center">
            <h4 className="text-[#212958] text-2xl font-black mb-6 uppercase tracking-tighter">
              Description
            </h4>
            <div className="space-y-6 text-gray-800 font-bold text-lg leading-relaxed">
              <p>
                The General Training module is intended for individuals who are
                looking to enroll in a secondary school, vocational training
                programs, or those seeking immigration opportunities.
              </p>
              <p>
                Enroll in Zain Global's exclusive program today and take the
                first step toward a brighter future. Let Zain Global be your
                partner in achieving your goals.
              </p>
            </div>
          </div>
        </div>

        {/* --- ZAIN GLOBAL COURSE DETAILS --- */}
        <div className="space-y-12 mb-20">
          <div className="max-w-4xl">
            <h2 className="text-[#212958] text-4xl font-black mb-6 uppercase">
              Zain Global IELTS Course
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              Zain Global is proud to announce the launch of its exclusive IELTS
              program at our Chittagong branch, with plans to extend this
              initiative to all of our branches very soon. This specially
              designed program aims to provide top-notch IELTS training to
              students aspiring to achieve their desired band scores.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-[#212958] text-2xl font-black mb-4 uppercase">
                Why Is a Good IELTS Band Score Important?
              </h3>
              <div className="space-y-4 text-gray-700 font-medium leading-relaxed">
                <p>
                  The International English Language Testing System (IELTS) is a
                  globally recognized English proficiency test. A good IELTS
                  band score is crucial for students aiming to study abroad, as
                  it is a mandatory requirement for admission to most
                  universities in English-speaking countries.
                </p>
                <p>
                  Moreover, a good IELTS score demonstrates your ability to
                  communicate effectively in English, which is essential for
                  success in academic, social, and professional settings.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-[#212958] text-2xl font-black mb-4 uppercase tracking-tighter">
                IELTS and Career Opportunities:
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                In addition to higher education, a good IELTS score can
                significantly enhance your career prospects. Many multinational
                companies prioritize candidates with strong communication
                skills. Having a high IELTS score on your resume can set you
                apart from other candidates in industries like IT, healthcare,
                and engineering.
              </p>
            </div>
          </div>
        </div>

        {/* --- WHY CHOOSE US (6 POINTS) --- */}
        <div className="mb-24">
          <h2 className="text-[#212958] text-3xl font-black mb-10 uppercase text-center">
            Why Choose Zain Global for Your IELTS Preparation?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                t: "Expert Instructors",
                d: "Our IELTS classes are conducted by British Council-certified instructors who bring years of experience and expertise.",
              },
              {
                t: "Small Batch Sizes",
                d: "To ensure effective learning, each batch is limited to only 12 students. This enables instructors to give focused attention.",
              },
              {
                t: "Comprehensive Curriculum",
                d: "Our curriculum is designed to cover all four modules – Listening, Reading, Writing, and Speaking – with in-depth practice.",
              },
              {
                t: "Mock Tests and Feedback",
                d: "Regular mock tests are conducted to familiarize students with the exam format. Detailed feedback is provided for improvement.",
              },
              {
                t: "Flexible Schedules",
                d: "We understand our students come from diverse backgrounds, hence we offer flexible class timings to accommodate everyone.",
              },
              {
                t: "Personalized Guidance",
                d: "Equipping students with skills needed to excel in real-world scenarios and achieve their dream band score.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-[#212958] font-black mb-2 uppercase text-sm">
                  {item.t}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- FINAL CTA SECTION (BOTTOM IMAGE) --- */}
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px]">
          <img
            src="https://images.pexels.com/photos/159711/books-bookcase-library-read-159711.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Student Practice"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-12">
            <div className="max-w-3xl">
              <h3 className="text-white text-4xl font-black mb-6 uppercase">
                Get Real Guidance
              </h3>
              <p className="text-white text-xl font-bold mb-8 opacity-90 leading-relaxed">
                Unlock your potential and pave the way for a brighter future. At
                Zain Global, we understand the importance of a good IELTS score.
                Enroll in Zain Global’s exclusive IELTS program today.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-black uppercase text-lg transition-transform hover:scale-105">
                Join Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IELTSCourse;
