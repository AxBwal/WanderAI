import React from "react";

const travelPackages = [
  {
    id: 1,
    name: "Ladakh",
    image: "https://cdn.pixabay.com/photo/2017/05/10/13/39/ladakh-2300904_640.jpg",
    price: "₹12499",
    description: "Ladakh is most famous for breathtaking landscapes, the crystal clear skies, the highest mountain passes, thrilling adventure activities, Buddhist Monasteries and festivals.",
  },
  {
    id: 2,
    name: "Kedarnath",
    image: "https://www.kingsthantourism.com/uploads/theme/159177968710.jpg",
    price: "₹4599",
    description: "Kedarnath is a holy pilgrimage site in Uttarakhand, India that's known for its temple and its traditional Himalayan food. ",
  },
];

const TravelPackages: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Travel Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {travelPackages.map((pkg) => (
          <div key={pkg.id} className="border rounded-lg p-4 shadow-lg">
            <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-2">{pkg.name}</h3>
            <p className="text-gray-600">{pkg.description}</p>
            <p className="text-lg font-bold mt-2">{pkg.price}</p>
            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelPackages;
