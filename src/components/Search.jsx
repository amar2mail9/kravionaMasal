import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Search({ openSearch, setOpenSearch }) {
  const [query, setQuery] = React.useState("");

  return (
    <div className="w-full flex justify-center">
      {/* Search Bar */}
      <section className="w-full max-w-3xl h-12 relative flex items-center border rounded-full border-orange-300 bg-orange-50 px-4 shadow-md">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search Product..."
          className="w-full h-full border-none text-orange-700 outline-0 px-3 text-sm bg-transparent placeholder:text-orange-400"
        />
        <Link to={`/search-result/${encodeURIComponent(query)}`} >
          <button onClick={() => setOpenSearch(!openSearch)} className="absolute right-2 top-1.5 w-9 h-9 flex items-center justify-center text-orange-600 hover:text-white hover:bg-orange-600 rounded-full transition-colors">
          <FiSearch className="h-5 w-5" />
          </button></Link>
      </section>
    </div>
  );
}

