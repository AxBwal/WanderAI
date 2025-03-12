import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Aarav Mehta",
    location: "Mumbai",
    feedback: "The trip was amazing! Everything was well organized, and I had the best time.",
    rating: 5,
  },
  {
    id: 2,
    name: "Riya Sharma",
    location: "Delhi",
    feedback: "Loved the experience! The itinerary was well planned, and I met wonderful people.",
    rating: 5,
  },
  {
    id: 3,
    name: "Karthik Nair",
    location: "Bangalore",
    feedback: "Excellent service! The Wander AI team made everything smooth and hassle-free.",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  // Function to render star ratings
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-3 text-black">What Our Travelers Say</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Hear from travelers who have experienced our AI-powered recommendations
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
              </div>
              
              <div className="flex justify-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-700 italic mb-4 text-center">"{testimonial.feedback}"</p>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-black">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;