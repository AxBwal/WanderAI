import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white fixed w-full top-0 z-10">
      <div className="text-2xl font-bold cursor-pointer text-blue-600">WanderAI</div>
      <ul className="flex space-x-6">
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Home</li>
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Destinations</li>
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
