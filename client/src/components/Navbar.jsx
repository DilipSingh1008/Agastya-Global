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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/About" },
    { name: "Services", href: "/services" },
    { name: "Universities", href: "#", hasDropdown: true },
    { name: "Our Team", href: "our-team" },
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
      {/* --- Top Bar (Dark Blue Section) --- */}
      {!hideTopBar && (
        <div className="bg-[#212958] text-white text-[11px] md:text-[12px] py-2 px-4 md:px-10 flex justify-between items-center">
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="tel:+4402081435507"
              className="flex items-center gap-1.5 hover:text-red-400 transition-colors"
            >
              <Phone size={12} />
              <span className="hidden sm:inline">+44 0208 1435507</span>
            </a>

            <a
              href="mailto:info@Agastya Global.co.uk"
              className="flex items-center gap-1.5 hover:text-red-400 transition-colors"
            >
              <Mail size={12} />
              <span className="hidden sm:inline">
                info@Agastya Global.co.uk
              </span>
            </a>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <Facebook size={14} className="cursor-pointer hover:text-red-400" />
            <Instagram
              size={14}
              className="cursor-pointer hover:text-red-400"
            />
            <Linkedin size={14} className="cursor-pointer hover:text-red-400" />
          </div>
        </div>
      )}

      {/* --- Main Navigation (White Section) --- */}
      <nav className="bg-white shadow-md border-b border-gray-100 px-4 md:px-10 py-3 flex justify-between items-center relative">
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="/logo.jpeg"
            alt="Agastya Logo"
            className="w-15 h-15 md:w-15 md:h-15"
          />
        </div>

        {/* Desktop Menu Links */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-8 text-[14px] font-bold text-gray-700">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.href; // check if current page
            return (
              <li key={index}>
                <a
                  href={item.href}
                  className={`flex items-center gap-1 transition-colors ${
                    isActive
                      ? "text-[#00B0FF]" // active page blue
                      : "text-[#1A237E] hover:text-[#00B0FF]" // others red
                  }`}
                >
                  {item.name} {item.hasDropdown && <ChevronDown size={14} />}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden p-2 text-gray-800"
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
          className={`fixed top-0 right-0 h-full w-[70%] max-w-[300px] bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden z-[101] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-8 border-b pb-4">
              <span className="font-bold text-[#1e1b4b]">MENU</span>
              <X
                size={24}
                className="text-gray-500 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>

            <ul className="flex flex-col gap-5 text-gray-700 font-bold">
              {menuItems.map((item, index) => (
                <li key={index} className="border-b border-gray-50 pb-2">
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex justify-between items-center hover:text-[#e11d48]"
                  >
                    {item.name} {item.hasDropdown && <ChevronDown size={16} />}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-10">
              <p className="text-xs text-gray-400 mb-4 tracking-widest uppercase">
                Contact Us
              </p>
              <div className="flex flex-col gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-[#e11d48]" /> +44 0208
                  1435507
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-[#e11d48]" />{" "}
                  info@zainglobal.co.uk
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
