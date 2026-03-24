import React from "react";

const WhatsappFloat = () => {
  return (
    <a
      href="https://wa.me/yournumber"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 z-[200] flex items-center group"
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
  );
};

export default WhatsappFloat;
