import React from "react";
import {
  GraduationCap,
  BookOpen,
  Users,
  Landmark,
  FileCheck,
  Map,
} from "lucide-react";
import { Link } from "react-router-dom";
const logos = [
  {
    name: "University 1",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/University_of_Roehampton_logo.svg/1200px-University_of_Roehampton_logo.svg.png",
  },
  {
    name: "University 2",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/University_of_Sunderland_logo.svg/1200px-University_of_Sunderland_logo.svg.png",
  },
  {
    name: "University 3",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Anglia_Ruskin_University_logo.svg/1200px-Anglia_Ruskin_University_logo.svg.png",
  },
  {
    name: "University 4",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Aston_University_logo.svg/1200px-Aston_University_logo.svg.png",
  },
  {
    name: "University 5",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/University_of_Portsmouth_logo.svg/1200px-University_of_Portsmouth_logo.svg.png",
  },
  {
    name: "University 6",
    url: "https://cdn.worldvectorlogo.com/logos/ulster-university-1.svg",
  },
];
const Home = () => {
  return (
    <div className="pt-24 font-sans bg-gray-50 overflow-x-hidden">
      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative ">
          <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#212958] rounded-3xl -z-10 hidden md:block"></div>
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800"
              alt="Graduate Student"
              className="rounded-2xl w-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-[#212958] text-3xl font-black">About us</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Agastya Global is a Home / International student recruitment agency
            in London, founded in 2012. We recruit students from every corner of
            the world to the world's leading universities. All our counsellors
            are British Council certified, and we have successfully recruited
            national and international students to universities worldwide.
          </p>
          <Link to="/About">
            <button className="bg-[#e11d48] text-white px-8 py-3 rounded-md font-bold hover:bg-[#be123c] transition-all shadow-lg">
              More About us
            </button>
          </Link>
        </div>
      </section>

      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "IELTS/PTE TRAINING", icon: BookOpen },
            { title: "UNIVERSITY COURSE SELECTION", icon: Landmark },
            { title: "EDUCATIONAL ASSISTANCE", icon: GraduationCap },
            { title: "STUDENT CONSULTING", icon: Users },
            { title: "VISA GUIDANCE", icon: FileCheck },
            { title: "PRE DEPLOYMENT ORIENTATION", icon: Map },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-5 bg-white border border-red-200 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
            >
              <div className="p-3 bg-red-50 text-[#e11d48] rounded-full group-hover:bg-[#e11d48] group-hover:text-white transition-colors">
                <item.icon size={24} />
              </div>
              <span className="font-bold text-gray-800 text-sm tracking-tight">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl font-black mb-12">Most Popular Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "MSc in Engineering",
              "International Business",
              "MSc Project Management",
              "Computer Science MSc",
              "Advanced IC Design",
              "Robotics & Automation",
              "MTD Cybersecurity",
              "MTD Data Science",
            ].map((course, i) => (
              <div
                key={i}
                className="bg-white rounded-sm overflow-hidden group cursor-pointer shadow-lg"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${i + 50}/400/250`}
                    alt={course}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-white text-[#212958]">
                  <h3 className="font-bold text-sm h-10 flex items-center justify-center leading-tight">
                    {course}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
          {/* <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Our University Partners
          </p> */}
        </div>

        {/* Scrolling Container */}
        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee whitespace-nowrap items-center gap-12 md:gap-20 py-4">
            {/* Logos List - Inhe 2 baar repeat kiya hai taaki loop infinite lage */}
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo.url}
                alt={logo.name}
                className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
              />
            ))}
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      width: max-content;
      animation: marquee 30s linear infinite;
    }
    .group:hover .animate-marquee {
      animation-play-state: paused;
    }
  `,
          }}
        />
      </section>

      <section className="py-20 px-4 md:px-10 lg:px-20 max-w-[1440px] mx-auto">
        <div className="bg-white shadow-[0_10px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row border border-gray-100 rounded-sm">
          {/* Form Side */}
          <div className="flex-1 p-8 md:p-12 lg:p-16">
            <h2 className="text-[#212958] text-4xl font-bold mb-10 tracking-tight">
              Quick Enquiry
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-4 bg-[#f8f9fa] border border-gray-200 rounded text-gray-600 outline-none focus:border-blue-900 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-4 bg-[#f8f9fa] border border-gray-200 rounded text-gray-600 outline-none focus:border-blue-900 transition-colors"
              />
              <input
                type="text"
                placeholder="Phone"
                className="p-4 bg-[#f8f9fa] border border-gray-200 rounded text-gray-600 outline-none focus:border-blue-900 transition-colors"
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-4 bg-[#f8f9fa] border border-gray-200 rounded text-gray-600 outline-none focus:border-blue-900 transition-colors"
              />
              <textarea
                placeholder="Message"
                className="col-span-1 md:col-span-2 p-4 bg-[#f8f9fa] border border-gray-200 rounded text-gray-600 outline-none h-48 resize-none focus:border-blue-900 transition-colors"
              ></textarea>
              <div className="col-span-1 md:col-span-2 pt-2">
                <button className="w-full md:w-auto px-12 py-4 bg-[#212958] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#e11d48] transition-all duration-300 rounded-sm">
                  Submit Now
                </button>
              </div>
            </form>
          </div>

          {/* Image Side */}
          <div className="hidden lg:block w-[40%] relative">
            <img
              src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Enquiry Student"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/600x800?text=Student+Image";
              }}
            />
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/yournumber"
        target="_blank"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-[200] flex items-center gap-3 group"
      >
        <div className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-sm font-bold">
          Need Help? Chat with us
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          className="w-8 h-8"
          alt="WA"
        />
      </a>
    </div>
  );
};

export default Home;
