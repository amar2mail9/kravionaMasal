import React from "react";
import { FiSearch } from "react-icons/fi";

export default function Search() {
  return (
    <div className="w-full flex justify-center">
      {/* Search Bar */}
      <section className="w-full max-w-3xl h-12 relative flex items-center border rounded-full border-orange-300 bg-orange-50 px-4 shadow-md">
        <input
          type="text"
          placeholder="Search Product..."
          className="w-full h-full border-none text-orange-700 outline-0 px-3 text-sm bg-transparent placeholder:text-orange-400"
        />
        <button className="absolute right-2 top-1.5 w-9 h-9 flex items-center justify-center text-orange-600 hover:text-white hover:bg-orange-600 rounded-full transition-colors">
          <FiSearch className="h-5 w-5" />
        </button>
      </section>
    </div>
  );
}
