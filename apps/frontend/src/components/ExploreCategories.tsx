import React from "react";

const categories = [
    { name: "Beaches", img: "https://c4.wallpaperflare.com/wallpaper/578/233/209/beach-beaches-1920x1080-sri-lanka-wallpaper-preview.jpg" },
    { name: "Mountains", img: "https://4kwallpapers.com/images/wallpapers/mountain-peak-above-3840x2160-12251.jpg" },
    { name: "Cities", img: "https://4kwallpapers.com/images/wallpapers/new-york-city-cityscape-city-skyline-sunset-dusk-3840x2160-4314.jpg" },
    { name: "Historical", img: "https://4kwallpapers.com/images/walls/thumbs_2t/1149.jpg" },
  ];
  

const ExploreCategories: React.FC = () => {
  return (
    <div className="py-12 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Explore by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.name} className="relative group cursor-pointer">
            <img src={category.img} alt={category.name} className="rounded-lg shadow-md transition-transform transform group-hover:scale-105"/>
            <p className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCategories;
