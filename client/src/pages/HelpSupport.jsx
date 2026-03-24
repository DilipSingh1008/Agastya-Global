import React, { useState } from "react";
import {
  ChevronRight,
  MessageCircle,
  HelpCircle,
  PhoneCall,
} from "lucide-react";
import Banner from "../components/Banner";
import WhatsappFloat from "../components/WhatsappFloat";

const HelpSupport = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const supportLinks = [
    {
      title: "Where Can I ask for admission help?",
      content:
        "Our support desks are open 24/7. You can reach out via the WhatsApp widget or visit our main office in London for face-to-face consultation.",
    },
    {
      title: "Direct appointment with our partner universities",
      content:
        "We facilitate direct zoom calls and physical meetings with university representatives from UK, Canada, and Australia.",
    },
    {
      title: "Book an Appointment with a Graduate Counselor",
      content:
        "Expert counselors are available to map your career path. Sessions can be booked through our online portal.",
    },
    {
      title: "Scholarship application guideline",
      content:
        "We provide a step-by-step checklist to ensure your scholarship application stands out among thousands.",
    },
    {
      title: "Be aware to avoid study visa refusal",
      content:
        "Our compliance team reviews your documents to ensure 99% visa success rate.",
    },
    {
      title: "Free Guidance from compliance team",
      content:
        "Understanding international laws can be tough. Our legal experts provide free initial audits.",
    },
    {
      title: "Pre-arrival information",
      content:
        "From airport pickups to finding student accommodation, we've got you covered.",
    },
    {
      title: "University Enquiry",
      content:
        "Not sure which uni to pick? Get detailed brochures and ranking lists from our database.",
    },
    {
      title: "Want to be a part of Zain Global London?",
      content:
        "Join our expanding team as a campus ambassador or consultant. Apply via our career section.",
    },
    {
      title: "Tell us your feedback",
      content:
        "Your voice matters. Help us improve our services by sharing your experience.",
    },
    {
      title: "Which English language tests are widely accepted?",
      content:
        "We guide you through IELTS, TOEFL, and Duolingo requirements for different regions.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pt-20 font-sans bg-[#FBFDFF] text-slate-900 overflow-x-hidden">
      {/* Banner */}
      <Banner
        subtitle="Help & Support"
        title={
          <>
            Help & <span className="text-[#00B0FF]">Support</span>
          </>
        }
        description={
          <>
            Get expert guidance for admissions, counselling, and university
            selection. Our dedicated team is here to support your global
            education journey.
          </>
        }
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro Section */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Help & <span className="text-[#00B0FF]">Support</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-[#00B0FF] pl-6 py-2">
            If you are a fresh graduate or wish to complete your degree from
            top-ranked universities in the{" "}
            <span className="font-semibold text-gray-800">
              UK, USA, Canada, or Europe
            </span>
            , you are in the right place. Our dedicated support team is here to
            guide your global career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* FAQ/Accordion Section */}
          <div className="lg:col-span-7 space-y-4">
            {supportLinks.map((item, index) => (
              <div
                key={index}
                className={`group border rounded-xl transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-white shadow-xl border-[#00B0FF]/20"
                    : "bg-white hover:border-[#00B0FF]/40 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2 rounded-lg transition-colors ${
                        activeIndex === index
                          ? "bg-[#00B0FF] text-white"
                          : "bg-gray-100 text-gray-500 group-hover:bg-[#00B0FF]/10 group-hover:text-[#00B0FF]"
                      }`}
                    >
                      <HelpCircle size={20} />
                    </div>
                    <span
                      className={`font-semibold text-[15px] md:text-base transition-colors ${
                        activeIndex === index
                          ? "text-[#00B0FF]"
                          : "text-gray-700"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  <ChevronRight
                    size={20}
                    className={`text-gray-400 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-90 text-[#00B0FF]" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index
                      ? "max-h-60 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-16 pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
                    {item.content}
                    <div className="mt-4 flex gap-4">
                      <button className="text-xs font-bold text-[#00B0FF] uppercase tracking-wider hover:underline">
                        Learn More
                      </button>
                      <button className="text-xs font-bold text-gray-400 uppercase tracking-wider hover:underline">
                        Contact Expert
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Image Section */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="relative group overflow-hidden  shadow-2xl p-6">
              <img
                src="/student.png"
                alt="Support Team"
                className="w-full h-auto object-contain transform transition-transform duration-700 group-hover:scale-105 opacity-95"
              />

              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                    Available Now
                  </span>
                </div>
                <h4 className="text-gray-900 font-bold text-lg italic">
                  "Your success journey starts with a simple conversation."
                </h4>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <PhoneCall className="text-[#00B0FF] mb-2" size={24} />
                <span className="text-xs font-bold text-gray-900">Call Us</span>
                <span className="text-[10px] text-gray-500">
                  +91 73835 95549
                </span>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <MessageCircle className="text-[#00B0FF] mb-2" size={24} />
                <span className="text-xs font-bold text-gray-900">
                  Email Us
                </span>
                <span className="text-[10px] text-gray-500">
                  support@agastyaglobal.org
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <WhatsappFloat />
    </div>
  );
};

export default HelpSupport;
