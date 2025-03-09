"use client"

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 w-full max-w-md">
      <input
        type="text"
        placeholder="Search for destinations..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 px-2 py-1 outline-none text-gray-700"
      />
      <button className="text-blue-600 hover:text-blue-800 transition">
        <FaSearch size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
