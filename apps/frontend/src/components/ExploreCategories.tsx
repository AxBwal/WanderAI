import React from "react";

const categories = [
  { name: "Beaches", img: "https://c4.wallpaperflare.com/wallpaper/578/233/209/beach-beaches-1920x1080-sri-lanka-wallpaper-preview.jpg" },
  { name: "Mountains", img: "https://4kwallpapers.com/images/wallpapers/mountain-peak-above-3840x2160-12251.jpg" },
  { name: "Cities", img: "https://4kwallpapers.com/images/wallpapers/new-york-city-cityscape-city-skyline-sunset-dusk-3840x2160-4314.jpg" },
  { name: "Historical", img: "https://4kwallpapers.com/images/walls/thumbs_2t/1149.jpg" },
];

const ExploreCategories: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3 text-black">Explore by Category</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Discover destinations based on your travel interests
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div 
              key={category.name} 
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg h-64"
            >
              <img 
                src={category.img} 
                alt={category.name} 
                className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-4 transition-all duration-300 group-hover:p-5">
                <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                <div className="w-10 h-1 bg-blue-500 rounded-full mb-2 transition-all duration-300 group-hover:w-16"></div>
                <p className="text-white text-sm opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Explore {category.name.toLowerCase()} destinations
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;