"use client"

import React, { useState } from "react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing, ${email}!`);
    setEmail(""); // Reset the input field
  };

  return (
    <div className="bg-blue-600 text-white py-10 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-6">Get the latest travel deals and tips straight to your inbox.</p>
      <form onSubmit={handleSubmit} className="flex justify-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 rounded-md text-black w-64"
          required
        />
        <button type="submit" className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
