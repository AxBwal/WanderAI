import React from "react";
import SearchBar from "./SearchBar";

const HeroSection: React.FC = () => {
  return (
<<<<<<< HEAD
    <section className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1600&q=80')" }}>
      <h1 className="text-5xl font-bold text-white drop-shadow-lg">Plan Your Next Adventure</h1>
      <p className="text-lg text-white mt-2 drop-shadow-md">AI-powered travel recommendations just for you</p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer">
        Get Started
      </button>
      <div className="mt-6">
        <SearchBar />
=======
    <section 
      className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center relative" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1600&q=80')" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 px-4 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight">
          Plan Your Next Adventure
        </h1>
        <p className="text-xl text-white mt-4 drop-shadow-md max-w-xl mx-auto">
          AI-powered travel recommendations just for you
        </p>
        <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all duration-300 font-medium transform hover:scale-105 shadow-lg">
          Get Started
        </button>
>>>>>>> develop
      </div>
    </section>
  );
};

export default HeroSection;