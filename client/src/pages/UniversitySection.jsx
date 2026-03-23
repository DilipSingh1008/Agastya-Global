import React, { useState } from "react";
import { universityData } from "../api/UniversitiesData";
import { PencilLine, CheckCircle2, ArrowRightCircle, X } from "lucide-react";
import Banner from "../components/Banner";
import ApplicationForm from "./ApplicationForm";
import { useParams, useNavigate } from "react-router-dom";

const UniversitySection = () => {
  const [activeTab, setActiveTab] = useState("UK");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState("universities");
  const [formType, setFormType] = useState("");
  const navigate = useNavigate();
  const countries = [
    "UK",
    "Australia",
    "New Zealand",
    "USA",
    "Canada",
    "Asia",
    "Europe",
  ];

  const renderList = (title, list) => (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 h-full transition-all hover:border-blue-200 group">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1 h-6 bg-[#1A237E] rounded-full"></div>
        <h3 className="text-[#1A237E] font-extrabold text-lg tracking-tight">
          Study In {title}
        </h3>
      </div>
      <ul className="space-y-2.5">
        {list.map((univ, index) => (
          <li
            key={index}
            className="flex items-start gap-2.5 text-[13px] font-medium text-slate-600"
          >
            <CheckCircle2
              size={16}
              className="text-[#00B0FF] mt-0.5 shrink-0"
            />
            <span>{univ}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  if (view === "form") {
    return (
      <ApplicationForm type={formType} onBack={() => setView("universities")} />
    );
  }
  return (
    <div className="w-full bg-[#F8FAFC] font-sans pb-12 relative">
      <Banner />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* --- CTA Section --- */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 -mt-8 relative z-10 mb-10">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="md:w-3/4">
              <h2 className="text-[#1A237E] font-bold text-xl mb-2">
                Build Your Future Abroad
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                We are part of the best international network of
                higher-education institutions. We believe in finding the perfect
                university for you.
              </p>
            </div>
            {/* Button to open Modal */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full cursor-pointer md:w-auto bg-[#00B0FF] text-white px-8 py-3.5 rounded-lg font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#1A237E] transition-all shadow-md active:scale-95 shrink-0"
            >
              <CheckCircle2 size={18} />
              Start Application
            </button>
          </div>
        </div>

        {/* --- Tabs --- */}
        <div className="mb-8">
          <div className="flex overflow-x-auto pb-2 sm:flex-wrap sm:justify-center gap-2 no-scrollbar">
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => setActiveTab(country)}
                className={`flex cursor-pointer items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-[12px] uppercase tracking-wider border transition-all duration-200 ${
                  activeTab === country
                    ? "bg-[#1A237E] text-white border-[#1A237E] shadow-md"
                    : "bg-white border-slate-200 text-[#1A237E] hover:border-blue-400 hover:text-[#00B0FF]"
                }`}
              >
                <PencilLine size={14} />
                {country}
              </button>
            ))}
          </div>
        </div>

        {/* --- Content Grid --- */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-slate-200/60 min-h-[300px]">
          {activeTab === "Asia" || activeTab === "Europe" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {Object.keys(universityData[activeTab] || {}).map((subRegion) =>
                renderList(subRegion, universityData[activeTab][subRegion]),
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {universityData[activeTab] && (
                <div className="md:col-start-2">
                  {renderList(activeTab, universityData[activeTab])}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X
                size={24}
                className="border border-slate-200 rounded-md p-0.5"
              />
            </button>

            <div className="p-8 text-center">
              <h2 className="text-3xl font-black text-[#1A237E] mb-8 tracking-tight">
                APPLY NOW
              </h2>

              <div className="flex flex-col gap-4">
                <button
                  onClick={() => {
                    navigate("/University/apply/eu");
                  }}
                  className="w-full cursor-pointer md:w-auto bg-[#00B0FF] text-white px-8 py-3.5 rounded-lg font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#1A237E] transition-all shadow-md active:scale-95 shrink-0"
                >
                  <CheckCircle2 size={22} />
                  EU Home Students
                </button>

                <button
                  onClick={() => {
                    navigate("/University/apply/international");
                  }}
                  className="w-full cursor-pointer md:w-auto bg-[#00B0FF] text-white px-8 py-3.5 rounded-lg font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#1A237E] transition-all shadow-md active:scale-95 shrink-0"
                >
                  {" "}
                  <CheckCircle2 size={22} />
                  International Students
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />
    </div>
  );
};

export default UniversitySection;
