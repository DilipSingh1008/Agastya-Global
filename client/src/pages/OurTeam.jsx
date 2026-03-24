import React, { useEffect, useState } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  ExternalLink,
} from "lucide-react";
import { getData } from "../api/api";
import Banner from "../components/Banner";
import WhatsappFloat from "../components/WhatsappFloat";

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  // const teamMembers = [
  //   {
  //     name: "John Doe",
  //     role: "Founder & CEO",
  //     image:
  //       "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
  //   },
  //   {
  //     name: "Jane Smith",
  //     role: "Senior Consultant",
  //     image:
  //       "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=400",
  //   },
  //   {
  //     name: "Alex Johnson",
  //     role: "Student Advisor",
  //     image:
  //       "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
  //   },
  //   {
  //     name: "Sarah Williams",
  //     role: "Operations Manager",
  //     image:
  //       "https://images.pexels.com/photos/1181682/pexels-photo-1181682.jpeg?auto=compress&cs=tinysrgb&w=400",
  //   },
  // ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamRes = await getData("team");
        if (teamRes.success) {
          const filtered = teamRes.data.filter((item) => item.status === true);
          setTeamMembers(filtered);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-bold text-[#1A237E]">
        Loading Team Members...
      </div>
    );
  }
  return (
    <div className="pt-20 font-sans bg-[#FBFDFF] text-slate-900 overflow-x-hidden">
      {/* --- PREMIUM HERO SECTION --- */}
      {/* <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A237E]/90 to-[#1A237E]/60 z-10" />
        <img
          src={
            heroImage
              ? `http://localhost:5000${heroImage.replace(/\\/g, "/")}`
              : "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          alt="Team Banner"
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[10000ms] hover:scale-100"
        />

        <div className="relative z-20 text-center space-y-4">
          <span className="bg-[#00B0FF] text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.4em] mb-4 inline-block shadow-2xl animate-bounce">
            The Experts
          </span>
          <h1 className="text-white text-6xl md:text-8xl font-black uppercase tracking-tighter leading-tight drop-shadow-2xl">
            Our <span className="text-[#00B0FF]">Team</span>
          </h1>
        </div>
      </section> */}
      <Banner
        subtitle="The Experts"
        title={
          <>
            Our <span className="text-[#00B0FF]">Team</span>
          </>
        }
        description={
          <>
            Meet our experienced and certified consultants dedicated to guiding
            students with personalized support. We work together to help you
            achieve your academic and global career goals.
          </>
        }

        // align="center"
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 -mt-20 relative z-30 pb-24">
        {/* --- INTRO SECTION (Floating Card) --- */}
        <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-white/50 mb-20 backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00B0FF]/5 rounded-full -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110" />

          <div className="relative z-10">
            <h2 className="text-[#1A237E] text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
              International Team
            </h2>

            <div className="w-24 h-2 bg-[#00B0FF] mb-8 rounded-full flex items-center">
              <div className="w-4 h-4 bg-[#1A237E] rounded-full animate-ping"></div>
            </div>

            <p className="text-slate-600 text-xl md:text-2xl leading-relaxed max-w-4xl font-medium">
              Our team consists of{" "}
              <span className="text-[#1A237E] font-black underline decoration-[#00B0FF] decoration-4">
                British Council certified
              </span>{" "}
              consultants who are dedicated to helping students achieve their
              academic dreams worldwide.
            </p>
          </div>
        </div>

        {/* --- TEAM GRID (Modern Interactive Cards) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative h-[450px] bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(26,35,126,0.3)] transition-all duration-500 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative flex-grow overflow-hidden">
                <img
                  src={`${import.meta.env.VITE_BASE_URL}/${member.image}`}
                  alt={member.name}
                  className="w-full h-full object-cover  transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />

                {/* Modern Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A237E] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex gap-4 justify-center mb-6">
                      <div className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-[#00B0FF] transition-colors cursor-pointer">
                        <Linkedin size={20} />
                      </div>
                      <div className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-[#00B0FF] transition-colors cursor-pointer">
                        <Instagram size={20} />
                      </div>
                      <div className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-[#00B0FF] transition-colors cursor-pointer">
                        <Mail size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 text-center bg-white relative">
                <div className="absolute -top-6 right-8 bg-[#00B0FF] text-white p-3 rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                  <ExternalLink size={20} />
                </div>

                <h3 className="text-[#1A237E] text-2xl font-black mb-1 uppercase tracking-tighter transition-colors group-hover:text-[#00B0FF]">
                  {member.name}
                </h3>

                <p className="text-slate-500 font-black text-xs uppercase tracking-[0.2em] mb-4">
                  {member.role}
                </p>

                <div className="flex justify-center">
                  <div className="h-1 w-12 bg-slate-100 group-hover:w-full group-hover:bg-[#00B0FF] transition-all duration-700 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- CALL TO ACTION (Bonus Interaction) --- */}
        <div className="mt-32 text-center">
          <button className="bg-[#1A237E] text-white px-12 py-5 rounded-2xl font-black text-xl uppercase tracking-widest shadow-2xl hover:bg-[#00B0FF] hover:-translate-y-2 active:scale-95 transition-all duration-300 flex items-center gap-4 mx-auto group">
            Work With Our Experts
            <Linkedin className="group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>
      <WhatsappFloat />
    </div>
  );
};

export default OurTeam;
