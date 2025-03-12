import React from "react";

const recommendations = [
  {
    id: 1,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    description: "Explore the stunning white and blue architecture with breathtaking sunsets.",
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    image: "https://c4.wallpaperflare.com/wallpaper/725/392/850/reflection-pond-dusk-evening-wallpaper-preview.jpg",
    description: "Experience the beauty of cherry blossoms and ancient temples.",
  },
  {
    id: 3,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&q=80",
    description: "Relax on tropical beaches and explore beautiful rice terraces.",
  },
];

const RecommendedDestinations: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">Recommended Destinations</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Discover these amazing places tailored to your preferences</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendations.map((place) => (
            <div 
              key={place.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:translate-y-[-8px]"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{place.name}</h3>
                <p className="text-gray-600 mt-2 leading-relaxed">{place.description}</p>
                <button className="mt-4 px-4 py-2 text-blue-600 font-medium hover:underline transition-all flex items-center justify-center mx-auto cursor-pointer">
                  Explore more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedDestinations;