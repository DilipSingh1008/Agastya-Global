import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  BookOpen,
  Users,
  Landmark,
  FileCheck,
  Map,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const logos = [
  {
    name: "Roehampton",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/University_of_Roehampton_logo.svg/1200px-University_of_Roehampton_logo.svg.png",
  },
  {
    name: "Sunderland",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/University_of_Sunderland_logo.svg/1200px-University_of_Sunderland_logo.svg.png",
  },
  {
    name: "Anglia Ruskin",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Anglia_Ruskin_University_logo.svg/1200px-Anglia_Ruskin_University_logo.svg.png",
  },
  {
    name: "Aston",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Aston_University_logo.svg/1200px-Aston_University_logo.svg.png",
  },
  {
    name: "Portsmouth",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/University_of_Portsmouth_logo.svg/1200px-University_of_Portsmouth_logo.svg.png",
  },
  {
    name: "Ulster",
    url: "https://cdn.worldvectorlogo.com/logos/ulster-university-1.svg",
  },
];
const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756ebafe1?q=80&w=1600&auto=format&fit=crop",
    title: "Shape Your",
    highlight: "Future Abroad",
    desc: "Expert guidance for international admissions and visa processing.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523050338691-c5e70702453f?q=80&w=1600&auto=format&fit=crop",
    title: "World Class",
    highlight: "Universities",
    desc: "Direct partnerships with top-ranked institutions in UK, USA, and Canada.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop",
    title: "Agastya Global",
    highlight: "Success Stories",
    desc: "Join thousands of students who achieved their dreams with us.",
  },
];
const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  return (
    <div className="pt-20 font-sans bg-[#F8FAFC] overflow-x-hidden">
      <section className="relative h-[300px] md:h-[450px] w-full overflow-hidden bg-[#1A237E]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            {/* Background Image with Zoom Effect */}
            <img
              src={slide.image}
              alt={slide.title}
              className={`absolute inset-0 w-full h-full object-cover brightness-[0.4] transition-transform duration-[6000ms] ${
                index === current ? "scale-110" : "scale-100"
              }`}
            />

            {/* Text Content - Optimized for 450px height */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-10">
              <div
                className={`transition-all duration-1000 delay-300 transform ${
                  index === current
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <span className="text-[#00B0FF] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3 block">
                  Agastya Global Education
                </span>

                {/* Headline - Slightly smaller to fit perfectly in 450px */}
                <h1 className="text-white text-4xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-4">
                  {slide.title} <br />
                  <span className="text-[#00B0FF]">{slide.highlight}</span>
                </h1>

                <p className="text-white/70 max-w-xl mx-auto text-[11px] md:text-sm font-medium mb-6 leading-relaxed">
                  {slide.desc}
                </p>

                {/* Buttons - Same as other pages */}
                <div className="flex gap-4 justify-center">
                  <button className="bg-[#00B0FF] hover:bg-white hover:text-[#1A237E] text-white px-6 md:px-8 py-3 md:py-3.5 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest transition-all shadow-lg shadow-blue-900/20">
                    Get Started
                  </button>
                  <a
                    href="/contact"
                    className="border-2 border-white/20 hover:bg-white/10 text-white px-6 md:px-8 py-3 md:py-3.5 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest transition-all cursor-pointer"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/5 hover:bg-[#00B0FF] text-white transition-all hidden md:block"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/5 hover:bg-[#00B0FF] text-white transition-all hidden md:block"
        >
          <ChevronRight size={20} />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 transition-all duration-500 rounded-full cursor-pointer ${
                current === i ? "w-8 bg-[#00B0FF]" : "w-3 bg-white/20"
              }`}
            />
          ))}
        </div>
      </section>
      {/* --- HERO / ABOUT SECTION --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#00B0FF]/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#00B0FF] rounded-[2.5rem] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>

          <div className="rounded-[2rem] overflow-hidden shadow-2xl bg-white p-3 rotate-1 group-hover:rotate-0 transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800"
              alt="Graduate Student"
              className="rounded-[1.5rem] w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00B0FF]/10 text-[#00B0FF] rounded-full text-xs font-black uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B0FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00B0FF]"></span>
            </span>
            Established Since 2012
          </div>

          <h1 className="text-[#1A237E] text-4xl md:text-5xl font-black leading-[1.1] tracking-tighter">
            Your Gateway to{" "}
            <span className="text-[#00B0FF]">Global Education</span> &
            Excellence.
          </h1>

          <p className="text-slate-600 leading-relaxed text-lg max-w-xl">
            Agastya Global is a premier student recruitment agency in London. We
            bridge the gap between ambitious students and the world's leading
            universities with British Council certified expertise.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/About">
              <button className="bg-[#1A237E] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#00B0FF] transition-all shadow-xl shadow-blue-900/20 flex items-center gap-2 group">
                Discover More{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-[#1A237E] text-3xl font-black uppercase tracking-tighter">
            Our Expertise
          </h2>
          <div className="h-1.5 w-20 bg-[#00B0FF] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "IELTS/PTE TRAINING",
              icon: BookOpen,
              desc: "Expert coaching for top scores.",
            },
            {
              title: "COURSE SELECTION",
              icon: Landmark,
              desc: "Find the perfect academic path.",
            },
            {
              title: "EDUCATIONAL ASSISTANCE",
              icon: GraduationCap,
              desc: "End-to-end support for students.",
            },
            {
              title: "STUDENT CONSULTING",
              icon: Users,
              desc: "One-on-one professional guidance.",
            },
            {
              title: "VISA GUIDANCE",
              icon: FileCheck,
              desc: "Hassle-free visa processing.",
            },
            {
              title: "ORIENTATION",
              icon: Map,
              desc: "Be prepared before you fly.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group p-8 bg-white border border-slate-100 rounded-[2rem] hover:border-[#00B0FF]/30 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 text-[#F1F5F9] group-hover:text-[#00B0FF]/5 transition-colors">
                <item.icon size={120} />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 bg-slate-50 text-[#1A237E] rounded-2xl flex items-center justify-center group-hover:bg-[#00B0FF] group-hover:text-white transition-all duration-500 shadow-inner">
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="font-black text-[#1A237E] text-sm tracking-widest uppercase mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- POPULAR COURSES --- */}
      <section className="py-24 bg-[#1A237E] text-white relative overflow-hidden">
        {/* Abstract Background Blur */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00B0FF]/10 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4 text-center md:text-left">
              <span className="text-[#00B0FF] font-black uppercase tracking-[0.3em] text-xs">
                Top Programs
              </span>
              <h2 className="text-4xl font-black tracking-tighter">
                Most Popular Courses
              </h2>
            </div>
            <button className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white hover:text-[#1A237E] transition-all text-sm font-bold">
              View All Courses
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "MSc in Engineering",
              "International Business",
              "Project Management",
              "Computer Science",
              "Advanced IC Design",
              "Robotics & Automation",
              "Cybersecurity",
              "Data Science",
            ].map((course, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden group border border-white/10 hover:border-[#00B0FF]/50 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A237E] to-transparent z-10 opacity-60"></div>
                  <img
                    src={`https://picsum.photos/seed/${i + 123}/400/300`}
                    alt={course}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-4 group-hover:text-[#00B0FF] transition-colors line-clamp-1">
                    {course}
                  </h3>
                  <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
                    <CheckCircle2 size={14} className="text-[#00B0FF]" /> 2
                    Years Full-time
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- UNIVERSITY LOGOS --- */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em]">
            Global Partners
          </span>
        </div>

        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee whitespace-nowrap items-center gap-16 md:gap-24 py-4">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo.url}
                alt={logo.name}
                className="h-10 md:h-12 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- ENQUIRY FORM --- */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="bg-white shadow-[0_20px_60px_rgba(26,35,126,0.08)] overflow-hidden flex flex-col lg:flex-row border border-slate-100 rounded-[2rem]">
          {/* --- LEFT SIDE: COMPACT FORM --- */}
          <div className="flex-[1.2] p-8 md:p-10">
            <div className="mb-6">
              <h2 className="text-[#1A237E] text-2xl md:text-3xl font-black tracking-tighter uppercase">
                Quick <span className="text-[#00B0FF]">Enquiry</span>
              </h2>
              <p className="text-slate-400 text-sm font-medium">
                Drop a message, our experts will call you back.
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Name", "Email", "Phone", "Subject"].map((field) => (
                <input
                  key={field}
                  type="text"
                  placeholder={field}
                  className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl text-sm text-slate-700 outline-none focus:border-[#00B0FF] focus:bg-white transition-all shadow-sm"
                />
              ))}
              <textarea
                placeholder="How can we help you?"
                className="col-span-1 md:col-span-2 p-3.5 bg-slate-50 border border-slate-100 rounded-xl text-sm text-slate-700 outline-none h-24 resize-none focus:border-[#00B0FF] focus:bg-white transition-all shadow-sm"
              ></textarea>
              <div className="col-span-1 md:col-span-2">
                <button className="w-full md:w-auto px-10 bg-[#1A237E] text-white font-bold uppercase tracking-widest text-[11px] py-4 rounded-xl hover:bg-[#00B0FF] transition-all duration-300 shadow-lg shadow-blue-900/10">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* --- RIGHT SIDE: COMPACT INFO --- */}
          <div className="hidden lg:flex w-[35%] bg-[#1A237E] relative overflow-hidden p-8 flex-col justify-center">
            {/* Glow Effect */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00B0FF]/20 rounded-full blur-[50px]"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-black mb-5 text-white">
                Why Choose Us?
              </h3>
              <ul className="space-y-4">
                {[
                  "British Council Certified",
                  "10+ Years Excellence",
                  "Direct University Tie-ups",
                  "Free Career Counseling",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-white/70 text-xs font-semibold"
                  >
                    <div className="bg-[#00B0FF] p-0.5 rounded-full shrink-0">
                      <CheckCircle2 size={12} className="text-white" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Decorative Line */}
            <div className="mt-8 h-1 w-12 bg-[#00B0FF] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* --- WHATSAPP FLOATER --- */}
      <a
        href="https://wa.me/yournumber"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 z-[200] flex items-center  group"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          className="w-8 h-8"
          alt="WhatsApp"
        />

        <span className="max-w-0 overflow-hidden group-hover:max-w-[160px] transition-all duration-300 whitespace-nowrap text-sm font-semibold">
          Chat with Expert
        </span>
      </a>
    </div>
  );
};

export default Home;
