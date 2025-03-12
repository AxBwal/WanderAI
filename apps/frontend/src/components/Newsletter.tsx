"use client"

import React, { useState } from "react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail(""); // Reset the input field
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }, 800);
  };

  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-3">Subscribe to Our Newsletter</h2>
        <p className="mb-8 text-blue-100 max-w-xl mx-auto">
          Get exclusive travel deals, personalized recommendations, and expert tips delivered straight to your inbox.
        </p>
        
        {isSubscribed ? (
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg mb-6 inline-block">
            Thank you for subscribing! Check your inbox soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-6 py-3 rounded-lg text-gray-800 w-full sm:w-80 font-medium focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button 
              type="submit" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex justify-center items-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="inline-block w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-2"></span>
              ) : null}
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        )}
        
        <p className="mt-4 text-sm text-blue-100 opacity-80">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;