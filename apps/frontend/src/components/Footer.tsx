"use client"

import React, { useState } from "react";

const Footer: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    { title: "About Us", content: "WanderAI helps you discover the best travel destinations with AI-powered recommendations." },
    { title: "Contact Information", content: "📧 Email: support@wanderai.com 📍 Address: 123 Travel Lane, Wanderland" },
    { title: "FAQs", content: "Q: How does WanderAI suggest destinations? A: We use AI models to analyze your preferences and suggest personalized travel plans." },
    { title: "Terms & Conditions", content: "By using our platform, you agree to our terms and conditions regarding privacy, bookings, and policies." },
    { title: "Privacy Policy", content: "We prioritize your data privacy and security. Read our full policy on how we handle user data." },
  ];

  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-center">Explore More</h2>

        <div className="space-y-3">
          {sections.map((section, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                className="w-full text-left py-3 text-lg font-medium flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                {section.title}
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && <p className="text-gray-400 pb-3">{section.content}</p>}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-6">© 2025 WanderAI. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
