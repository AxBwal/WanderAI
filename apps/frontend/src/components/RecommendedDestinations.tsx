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
    image: "https://source.unsplash.com/800x600/?kyoto,japan",
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
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Recommended Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {recommendations.map((place) => (
          <div key={place.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={place.image} alt={place.name} className="w-full h-56 object-cover rounded-md" />
            <h3 className="text-2xl font-semibold mt-4 text-black">{place.name}</h3>
            <p className="text-gray-600 mt-2">{place.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedDestinations;
