import React, { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const Navbar = ({ settings }) => {
  // console.log(settings);
  const [isOpen, setIsOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const [isUnivOpen, setIsUnivOpen] = useState(false);
  const location = useLocation();

  const universityLinks = [
    { name: "Study in UK", href: "/University" },
    { name: "Study in USA", href: "/University" },
    { name: "Study in Canada", href: "/University" },
    { name: "Study in Europe", href: "/University" },
    { name: "Study in Australia", href: "/University" },
    { name: "hELP & Support", href: "/help-support" },
  ];

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/About" },
    { name: "Services", href: "/services" },
    { name: "Universities", href: "#", hasDropdown: true },
    { name: "Our Team", href: "/our-team" },
    { name: "IELTS", href: "/ielts" },
    { name: "Blog", href: "/BlogPage" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHideTopBar(true);
      } else {
        setHideTopBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 z-[100] font-sans">
      {/* --- Top Bar --- */}
      {!hideTopBar && (
        <div className="bg-[#212958] text-white text-[11px] md:text-[12px] py-2 px-4 md:px-10 flex justify-between items-center transition-all duration-300">
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="tel:+91 73835 95549"
              className="flex items-center gap-1.5 hover:text-[#00B0FF] transition-colors"
            >
              <Phone size={12} />
              <span className="hidden sm:inline"> +91 73835 95549</span>
            </a>

            <a
              href="mailto:support@agastyaglobal.org"
              className="flex items-center gap-1.5 hover:text-[#00B0FF] transition-colors"
            >
              <Mail size={12} />
              <span className="hidden sm:inline">
                support@agastyaglobal.org
              </span>
            </a>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <a
              href={settings?.facebook_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook
                size={14}
                className="cursor-pointer hover:text-[#00B0FF]"
              />
            </a>
            <a
              href={settings?.instagram_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram
                size={14}
                className="cursor-pointer hover:text-[#00B0FF]"
              />
            </a>
            <a
              href={settings?.linkedin_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin
                size={14}
                className="cursor-pointer hover:text-[#00B0FF]"
              />
            </a>
          </div>
        </div>
      )}

      {/* --- Main Navigation --- */}
      <nav className="bg-white shadow-md border-b border-gray-100 px-4 md:px-10 py-3 flex justify-between items-center relative">
        {/* Logo Section */}
        {/* <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <img
            src="/AgastyaGlobal.png"
            alt="Agastya Logo"
            className="w-14 h-16 md:w-20 md:h-20 object-contain scale-125"
          />

          <div className="flex flex-col -ml-2">
            <span className="text-xl md:text-1xl font-black tracking-tighter text-[#1A237E] flex gap-2">
              <span>Agastya</span>
              <span className="text-[#00B0FF]">Global</span>
            </span>
            <span className="text-[7px] md:text-[7px] uppercase tracking-[0.3em] text-gray-400 font-bold">
              Overseas Education
            </span>
          </div>
        </Link> */}
        <Link to="/" className="flex items-center gap-1 cursor-pointer group">
          {/* Logo Image */}
          <img
            src="/AgastyaGlobal.png"
            alt="Agastya Logo"
            className="w-14 h-14 md:w-16 md:h-16 object-contain"
          />

          {/* Text Container */}
          <div className="flex flex-col justify-center">
            <div className="flex items-baseline gap-1 italic font-extrabold tracking-tight">
              {/* Dark Navy Blue color from the logo */}
              <span className="text-1xl md:text-2xl text-[#1A237E]">
                Agastya
              </span>

              {/* Bright Sky Blue color from the logo */}
              <span className="text-1xl md:text-2xl text-[#00B0FF]">
                Global
              </span>
            </div>

            {/* Optional: Tagline (Agar aapko chahiye ho toh uncomment karein) */}
            {/* <span className="text-[8px] uppercase tracking-[0.2em] text-gray-500 font-semibold -mt-1 ml-1">
      Overseas Education
    </span> */}
          </div>
        </Link>

        {/* Desktop Menu Links */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-8 text-[14px] font-bold">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.href;
            return (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsUnivOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsUnivOpen(false)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 transition-colors uppercase tracking-wider ${
                    isActive || (item.hasDropdown && isUnivOpen)
                      ? "text-[#00B0FF]"
                      : "text-[#1A237E] hover:text-[#00B0FF]"
                  }`}
                >
                  {item.name}{" "}
                  {item.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${isUnivOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                {/* --- Universities Dropdown Box --- */}
                {item.hasDropdown && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 bg-[#1A237E] rounded-xl shadow-2xl transition-all duration-300 origin-top transform ${
                      isUnivOpen
                        ? "opacity-100 scale-y-100 visible"
                        : "opacity-0 scale-y-0 invisible"
                    }`}
                  >
                    <div className="py-2">
                      {universityLinks.map((subLink, idx) => (
                        <Link
                          key={idx}
                          to={subLink.href}
                          className="block px-6 py-3 text-white text-[12px] uppercase tracking-[0.1em] font-bold hover:bg-[#00B0FF] transition-all border-b border-white/5 last:border-0"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden p-2 text-[#1A237E]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* --- Mobile Sidebar Overlay --- */}
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity lg:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
          onClick={() => setIsOpen(false)}
        />

        {/* --- Mobile Sidebar Menu --- */}
        <div
          className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden z-[101] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-6 flex flex-col h-full overflow-y-auto">
            <div className="flex justify-between items-center mb-8 border-b pb-4">
              <span className="font-bold text-[#1A237E] tracking-tight">
                MENU
              </span>
              <X
                size={24}
                className="text-gray-500 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>

            <ul className="flex flex-col gap-4 text-[#1A237E] font-bold">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col border-b border-gray-50 pb-2"
                >
                  <div className="flex justify-between items-center">
                    <Link
                      to={item.href}
                      onClick={() => !item.hasDropdown && setIsOpen(false)}
                      className="flex-1"
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${isUnivOpen ? "rotate-180" : ""}`}
                        onClick={() => setIsUnivOpen(!isUnivOpen)}
                      />
                    )}
                  </div>

                  {/* Mobile Dropdown Links */}
                  {item.hasDropdown && isUnivOpen && (
                    <ul className="mt-3 ml-4 flex flex-col gap-3 border-l-2 border-[#00B0FF]/30 pl-4">
                      {universityLinks.map((subLink, i) => (
                        <li key={i}>
                          <Link
                            to={subLink.href}
                            onClick={() => setIsOpen(false)}
                            className="text-[13px] text-gray-600 font-medium hover:text-[#00B0FF]"
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-10">
              <p className="text-xs text-gray-400 mb-4 tracking-widest uppercase">
                Contact Us
              </p>
              <div className="flex flex-col gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-[#00B0FF]" />
                  +91 73835 95549
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-[#00B0FF]" />{" "}
                  info@AgastyaGlobal.co.uk
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
