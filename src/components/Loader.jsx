import React from "react";

function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/80 z-50">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-t-4 border-orange-500 border-solid rounded-full animate-spin border-t-transparent"></div>

      {/* Loading Text */}
      <span className="mt-6 text-orange-400 text-lg font-semibold animate-pulse">
        Loading...
      </span>
    </div>
  );
}

export default Loader;
