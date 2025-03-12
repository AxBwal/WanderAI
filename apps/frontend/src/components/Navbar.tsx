"use client"

import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-lg py-3" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 tracking-tight">Wander AI</h1>
        <ul className="flex space-x-8 text-gray-700">
          <li className="hover:text-blue-600 transition-colors duration-200 font-medium cursor-pointer">Home</li>
          <li className="hover:text-blue-600 transition-colors duration-200 font-medium cursor-pointer">Destinations</li>
          <li className="hover:text-blue-600 transition-colors duration-200 font-medium cursor-pointer">About</li>
          <li className="hover:text-blue-600 transition-colors duration-200 font-medium cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;