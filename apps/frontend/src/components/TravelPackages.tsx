import React from "react";

const travelPackages = [
  {
    id: 1,
    name: "Ladakh",
    image: "https://cdn.pixabay.com/photo/2017/05/10/13/39/ladakh-2300904_640.jpg",
    price: "₹12,499",
    duration: "6 days, 5 nights",
    description: "Ladakh is most famous for breathtaking landscapes, the crystal clear skies, the highest mountain passes, thrilling adventure activities, Buddhist Monasteries and festivals.",
  },
  {
    id: 2,
    name: "Kedarnath",
    image: "https://www.kingsthantourism.com/uploads/theme/159177968710.jpg",
    price: "₹4,599",
    duration: "3 days, 2 nights",
    description: "Kedarnath is a holy pilgrimage site in Uttarakhand, India that's known for its temple and its traditional Himalayan food.",
  },
];

const TravelPackages: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-black font-bold text-center mb-3">Exclusive Travel Packages</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Carefully curated packages with the best experiences at unbeatable prices
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {travelPackages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl cursor-pointer">
              <div className="relative">
                <img 
                  src={pkg.image} 
                  alt={pkg.name} 
                  className="w-full h-64 object-cover" 
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full font-medium text-sm">
                  {pkg.duration}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold text-gray-800">{pkg.name}</h3>
                  <p className="text-xl font-bold text-blue-600">{pkg.price}</p>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{pkg.description}</p>
                
                <div className="flex justify-between items-center">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md">
                    Book Now
                  </button>
                  <button className="text-blue-600 font-medium hover:underline">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelPackages;