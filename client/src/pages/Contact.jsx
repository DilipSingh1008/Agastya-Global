import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ChevronDown,
  Send,
  Globe,
  MessageSquare,
} from "lucide-react";

const navLinks = [
  { name: "Home", active: false },
  { name: "About Us", active: false },
  { name: "Services", active: false },
  { name: "Universities", active: false, hasSub: true },
  { name: "Our Team", active: false },
  { name: "IELTS", active: false },
  { name: "Blog", active: false },
  { name: "Gallery", active: false },
  { name: "Contact Us", active: true },
];

const offices = [
  {
    title: "London Office",
    address: "251-253 Commercial Road, London, E1 2BT",
    phone: "+44 0208 1435507",
    email: "london@zainglobal.co.uk",
  },
  {
    title: "Manchester Office",
    address: "123 Main Street, Manchester, M1 1AA",
    phone: "+44 0161 1234567",
    email: "manchester@zainglobal.co.uk",
  },
];

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="font-sans bg-[#FFFFFF] min-h-screen selection:bg-[#00B0FF]/20">
      {/* --- TOP BAR --- */}
      <div className="bg-[#1A237E] text-[#FFFFFF]/80 text-[11px] md:text-xs py-2 px-6 md:px-12 flex justify-between items-center border-b border-[#283593]">
        <div className="flex gap-6 items-center">
          <a
            href="tel:+4402081435507"
            className="flex items-center gap-1.5 hover:text-[#00B0FF] transition-colors"
          >
            <Phone size={14} className="text-[#00B0FF]" /> +44 0208 1435507
          </a>
          <a
            href="mailto:info@zainglobal.co.uk"
            className="hidden sm:flex items-center gap-1.5 hover:text-[#00B0FF] transition-colors"
          >
            <Mail size={14} className="text-[#00B0FF]" /> info@zainglobal.co.uk
          </a>
        </div>
        <div className="flex gap-4 items-center">
          <Facebook
            size={14}
            className="hover:text-[#00B0FF] cursor-pointer transition-transform hover:scale-110"
          />
          <Instagram
            size={14}
            className="hover:text-[#00B0FF] cursor-pointer transition-transform hover:scale-110"
          />
          <Linkedin
            size={14}
            className="hover:text-[#00B0FF] cursor-pointer transition-transform hover:scale-110"
          />
        </div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-md shadow-sm px-6 md:px-12 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-[#1A237E] p-2 rounded-lg relative overflow-hidden group-hover:bg-[#283593] transition-colors">
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#00B0FF] rounded-full opacity-50 blur-sm"></div>
            <Globe className="text-[#FFFFFF] relative z-10" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-[#1A237E]">
              ZAIN <span className="text-[#00B0FF]">GLOBAL</span>
            </span>
            <span className="text-[10px] uppercase tracking-[3px] font-bold text-[#283593]">
              Education Consultant
            </span>
          </div>
        </div>

        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href="#"
              className={`text-sm font-bold uppercase tracking-wider transition-all hover:text-[#00B0FF] flex items-center gap-1 ${
                link.active
                  ? "text-[#00B0FF] border-b-2 border-[#00B0FF]"
                  : "text-[#283593]"
              }`}
            >
              {link.name} {link.hasSub && <ChevronDown size={14} />}
            </a>
          ))}
        </div>

        <button className="lg:hidden p-2 text-[#1A237E]">
          <div className="w-6 h-0.5 bg-[#1A237E] mb-1.5"></div>
          <div className="w-6 h-0.5 bg-[#1A237E] mb-1.5"></div>
          <div className="w-4 h-0.5 bg-[#00B0FF]"></div>
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <div className="relative h-[300px] md:h-[400px] bg-[#1A237E] flex items-center justify-center text-center">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#00B0FF_0%,_transparent_70%)]"></div>

        <div className="relative z-10 px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-[#FFFFFF] text-4xl md:text-6xl font-black uppercase mb-4 tracking-tighter">
            Contact <span className="text-[#00B0FF]">Us</span>
          </h1>
          <p className="text-[#FFFFFF]/70 max-w-xl mx-auto text-sm md:text-lg font-medium">
            Join the elite circle of international students. Our experts are
            ready to guide you.
          </p>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-16 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar: Info Cards */}
          <div className="lg:col-span-4 space-y-4">
            {[
              {
                icon: <MapPin />,
                color: "bg-[#1A237E]",
                title: "Head Office",
                text: "Room G2-G4, Ground Floor\n251-253 Commercial Road,\nLondon, E1 2BT",
              },
              {
                icon: <Mail />,
                color: "bg-[#00B0FF]",
                title: "Email Support",
                text: "info@zainglobal.co.uk",
              },
              {
                icon: <Phone />,
                color: "bg-[#283593]",
                title: "Call Helpline",
                text: "+44 0208 1435507\n+44 7808 223229",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#FFFFFF] p-6 rounded-2xl shadow-xl shadow-[#1A237E]/5 flex gap-4 hover:-translate-y-1 transition-transform border border-[#283593]/10"
              >
                <div
                  className={`${card.color} text-[#FFFFFF] p-3 rounded-xl h-fit`}
                >
                  {card.icon}
                </div>
                <div>
                  <h4 className="font-black text-[#1A237E] mb-1 uppercase text-xs tracking-widest">
                    {card.title}
                  </h4>
                  <p className="text-[#283593]/70 text-sm whitespace-pre-line leading-relaxed font-medium">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section: Form */}
          <div className="lg:col-span-8">
            <div className="bg-[#FFFFFF] p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-[#1A237E]/10 border border-[#283593]/5">
              <div className="mb-8 border-l-4 border-[#00B0FF] pl-6">
                <h2 className="text-2xl font-black text-[#1A237E] mb-2 flex items-center gap-3">
                  <MessageSquare className="text-[#00B0FF]" /> Send a Message
                </h2>
                <p className="text-[#283593]/50 text-sm font-medium">
                  Professional support is just a message away.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-[#283593]/60 tracking-widest ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-[#FFFFFF] border border-[#283593]/20 rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#00B0FF] focus:border-[#00B0FF] transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-[#283593]/60 tracking-widest ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-[#FFFFFF] border border-[#283593]/20 rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#00B0FF] focus:border-[#00B0FF] transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-[#283593]/60 tracking-widest ml-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full bg-[#FFFFFF] border border-[#283593]/20 rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#00B0FF] focus:border-[#00B0FF] transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`w-full py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all transform active:scale-95 ${
                    submitted
                      ? "bg-green-600 text-[#FFFFFF]"
                      : "bg-[#1A237E] text-[#FFFFFF] hover:bg-[#00B0FF] hover:shadow-[0_0_20px_#00B0FF]/40 shadow-lg"
                  }`}
                >
                  {submitted ? (
                    "Message Sent!"
                  ) : (
                    <>
                      <Send size={18} /> Submit Now
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
