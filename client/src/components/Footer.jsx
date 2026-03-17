import React, { useState, useEffect } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Globe,
  ArrowRight,
  ChevronUp,
  Send,
  ShieldCheck,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const footerLinks = [
    { name: "Our Services", active: false },
    { name: "International Apply", active: true }, // Highlighted as Cyan
    { name: "Partner Universities", active: false },
    { name: "Success Stories", active: false },
    { name: "Privacy Policy", active: false },
  ];

  return (
    <footer className="relative bg-[#0c124a] text-white pt-24 font-sans overflow-hidden">
      {/* --- PREMIUM GLOW BACKGROUND --- */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00B0FF]/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#283593]/30 rounded-full blur-[100px] -z-10"></div>

      {/* --- TOP NEWSLETTER (CLEAN & BOLD) --- */}
      {/* <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-gradient-to-r from-[#283593] to-[#1A237E] p-8 md:p-12 rounded-[2.5rem] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-full bg-[#00B0FF]/5 -skew-x-12 translate-x-20 group-hover:translate-x-0 transition-transform duration-1000"></div>

          <div className="relative z-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 uppercase">
              Ready to <span className="text-[#00B0FF]">Fly High?</span>
            </h2>
            <p className="text-white/60 font-medium">
              Join 5000+ students who achieved their dreams with us.
            </p>
          </div>

          <div className="relative z-10 w-full lg:w-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#1A237E] border border-white/20 rounded-2xl px-6 py-4 outline-none focus:border-[#00B0FF] focus:ring-1 focus:ring-[#00B0FF] transition-all min-w-[280px]"
            />
            <button className="bg-[#00B0FF] hover:bg-white hover:text-[#1A237E] text-white font-black uppercase tracking-widest px-8 py-4 rounded-2xl transition-all duration-500 shadow-xl shadow-[#00B0FF]/20 flex items-center justify-center gap-2 group">
              Subscribe{" "}
              <Send
                size={18}
                className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-20">
          {/* Column 1: Brand Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <Globe className="text-[#1A237E]" size={28} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter uppercase leading-none">
                  Agastya <span className="text-[#00B0FF]">Global</span>
                </span>
                <div className="h-1 w-full bg-[#00B0FF] mt-1 rounded-full opacity-50"></div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed font-medium">
              Empowering students since 2016 with transparent guidance and
              global university placements.
            </p>
            <div className="flex gap-4">
              {[<Facebook />, <Instagram />, <Linkedin />].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 bg-[#283593] rounded-xl flex items-center justify-center hover:bg-[#00B0FF] hover:-translate-y-2 transition-all duration-500 border border-white/5 shadow-lg"
                >
                  {React.cloneElement(icon, { size: 20 })}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Links (Color logic applied) */}
          <div>
            <h4 className="text-[#00B0FF] text-xs font-black uppercase tracking-[0.3em] mb-8">
              Navigation
            </h4>
            <ul className="space-y-5">
              {footerLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className={`flex items-center gap-3 text-sm transition-all group ${link.active ? "text-[#00B0FF] font-bold" : "text-white/60 hover:text-white"}`}
                  >
                    <ArrowRight
                      size={14}
                      className={`transition-all ${link.active ? "opacity-100" : "opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0"}`}
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-[#00B0FF] text-xs font-black uppercase tracking-[0.3em] mb-8">
              Quick Contact
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="p-3 bg-[#283593] rounded-2xl group-hover:bg-[#00B0FF] transition-all">
                  <MapPin size={20} />
                </div>
                <p className="text-sm text-white/60 leading-snug group-hover:text-white">
                  251-253 Commercial Road,
                  <br />
                  London, E1 2BT, UK
                </p>
              </div>
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="p-3 bg-[#283593] rounded-2xl group-hover:bg-[#00B0FF] transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-white font-bold tracking-tight">
                    +44 0208 1435507
                  </p>
                  <p className="text-[10px] text-[#00B0FF] font-black uppercase tracking-widest mt-1">
                    Direct Helpline
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Trust Elements */}
          <div>
            <h4 className="text-[#00B0FF] text-xs font-black uppercase tracking-[0.3em] mb-8">
              Official Trust
            </h4>
            <div className="bg-[#283593]/50 border border-white/5 p-6 rounded-3xl space-y-4">
              <div className="flex items-center gap-3 text-[#00B0FF]">
                <ShieldCheck size={24} />
                <span className="text-sm font-bold text-white uppercase tracking-tighter">
                  Verified Consultant
                </span>
              </div>
              <p className="text-[11px] text-white/40 leading-relaxed">
                Agastya Global is a registered entity complying with UK &
                International education standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- FINAL STRIP --- */}
      <div className="bg-[#090e3c] py-10 relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-[10px] md:text-[11px] text-white/30 uppercase font-black tracking-[0.2em] mb-2">
              © {currentYear} Agastya Global • All Rights Reserved
            </p>
            <div className="flex justify-center md:justify-start gap-4 opacity-30 text-[9px] uppercase font-bold tracking-widest">
              <span>VAT ID: 296150194</span>
              <span>•</span>
              <span>Reg: 10059956</span>
            </div>
          </div>

          <div className="flex gap-8 text-[11px] font-black uppercase tracking-widest">
            <a
              href="#"
              className="text-white/30 hover:text-[#00B0FF] transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-[#00B0FF] transition-colors"
            >
              Cookies
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-[#00B0FF] transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>

      {/* --- SCROLL TO TOP (CYAN THEME) --- */}
      {/* <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-[100] w-14 h-14 bg-[#00B0FF] text-white rounded-2xl shadow-[0_10px_30px_rgba(0,176,255,0.4)] flex items-center justify-center transition-all duration-500 hover:rotate-12 hover:scale-110 active:scale-95 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
      >
        <ChevronUp size={28} strokeWidth={3} />
      </button> */}
    </footer>
  );
};

export default Footer;
