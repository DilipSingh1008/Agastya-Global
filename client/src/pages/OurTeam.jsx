import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Jane Smith",
      role: "Senior Consultant",
      image:
        "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Alex Johnson",
      role: "Student Advisor",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      name: "Sarah Williams",
      role: "Operations Manager",
      image:
        "https://images.pexels.com/photos/1181682/pexels-photo-1181682.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <div className="pt-20 pb-20 bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[300px] flex items-center justify-center mb-16">
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Team Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
        />
        <h1 className="relative z-10 text-white text-5xl font-black uppercase tracking-tight">
          Our Team
        </h1>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* --- SECTION HEADER --- */}
        <div className="mb-12">
          <h2 className="text-[#212958] text-4xl font-black mb-2 uppercase">
            International Team
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-8 flex items-center">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl">
            Our team consists of British Council certified consultants who are
            dedicated to helping students achieve their academic dreams
            worldwide.
          </p>
        </div>

        {/* --- TEAM GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-[320px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />

                {/* Social Icons Overlay (Bottom to Top Slide) */}
                {/* <div className="absolute bottom-[-50px] group-hover:bottom-4 left-0 right-0 flex justify-center gap-3 transition-all duration-500">
                  <div className="bg-white p-2 rounded-lg shadow-lg hover:bg-[#e11d48] hover:text-white transition-colors cursor-pointer">
                    <Facebook size={18} />
                  </div>
                  <div className="bg-white p-2 rounded-lg shadow-lg hover:bg-[#e11d48] hover:text-white transition-colors cursor-pointer">
                    <Twitter size={18} />
                  </div>
                  <div className="bg-white p-2 rounded-lg shadow-lg hover:bg-[#e11d48] hover:text-white transition-colors cursor-pointer">
                    <Linkedin size={18} />
                  </div>
                  <div className="bg-white p-2 rounded-lg shadow-lg hover:bg-[#e11d48] hover:text-white transition-colors cursor-pointer">
                    <Instagram size={18} />
                  </div>
                </div> */}
              </div>

              {/* Info Area */}
              <div className="p-6 text-center bg-white">
                <h3 className="text-[#212958] text-xl font-bold mb-1 uppercase tracking-tight">
                  {member.name}
                </h3>
                <p className="text-red-600 font-semibold text-sm">
                  {member.role}
                </p>
              </div>

              {/* Bottom Accent Bar */}
              <div className="w-0 group-hover:w-full h-1 bg-red-600 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
