import React from "react";
import { Loader2, AlertCircle, SearchX } from "lucide-react";

// 1. Loading Skeleton (Sabse premium lagta hai)
export const CourseSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className="bg-white/5 border border-white/10 rounded-2xl p-6 animate-pulse"
      >
        <div className="h-40 bg-white/10 rounded-xl mb-4"></div>
        <div className="h-6 bg-white/10 rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-white/10 rounded w-1/2"></div>
      </div>
    ))}
  </div>
);

// 2. Error State Component
export const ErrorState = ({ message }) => (
  <div className="col-span-full flex flex-col items-center justify-center py-12 px-6 bg-red-500/5 border border-red-500/20 rounded-[2rem] text-center">
    <AlertCircle className="text-red-400 mb-4" size={48} />
    <h3 className="text-white text-xl font-bold mb-2">
      Oops! Something went wrong
    </h3>
    <p className="text-white/60 max-w-xs">
      {message || "Failed to load courses. Please try again later."}
    </p>
    <button
      onClick={() => window.location.reload()}
      className="mt-6 px-6 py-2 bg-red-500 text-white rounded-full font-bold hover:bg-red-600 transition"
    >
      Retry
    </button>
  </div>
);

// 3. Empty State Component
export const EmptyState = () => (
  <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
    <div className="bg-white/5 p-8 rounded-full mb-6">
      <SearchX className="text-[#00B0FF]/50" size={64} />
    </div>
    <h3 className="text-white text-2xl font-black mb-2 uppercase tracking-tight">
      No Courses Found
    </h3>
    <p className="text-white/50 max-w-sm">
      We couldn't find any courses matching your criteria. Try adjusting your
      filters.
    </p>
  </div>
);
