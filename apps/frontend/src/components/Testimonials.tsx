import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Aarav Mehta",
    feedback: "The trip was amazing! Everything was well organized, and I had the best time.",
  },
  {
    id: 2,
    name: "Riya Sharma",
    feedback: "Loved the experience! The itinerary was well planned, and I met wonderful people.",
  },
  {
    id: 3,
    name: "Karthik Nair",
    feedback: "Excellent service! The Wander AI team made everything smooth and hassle-free.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Travelers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="border rounded-lg p-4 shadow-lg text-center">
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-gray-600">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
