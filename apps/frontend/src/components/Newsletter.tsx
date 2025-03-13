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
    <section className="bg-gradient-to-br from-sky-100 to-indigo-100 text-gray-800 py-20 px-6 shadow-sm">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-indigo-700">Subscribe to Our Newsletter</h2>
        <p className="mb-10 text-gray-600 max-w-xl mx-auto leading-relaxed">
          Get exclusive travel deals, personalized recommendations, and expert tips delivered straight to your inbox.
        </p>
        
        {isSubscribed ? (
          <div className="bg-green-500 text-white px-8 py-5 rounded-xl mb-6 inline-block shadow-md transition-all duration-300 ease-in-out">
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Thank you for subscribing! Check your inbox soon.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-6 py-4 rounded-xl text-gray-800 w-full sm:w-96 font-medium border border-indigo-200 focus:outline-none focus:ring-4 focus:ring-indigo-200 shadow-sm"
              required
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors duration-300 flex justify-center items-center shadow-md hover:shadow-lg transform hover:-translate-y-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
              ) : null}
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        )}
        
        <p className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;