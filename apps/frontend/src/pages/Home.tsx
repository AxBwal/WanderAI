import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ItineraryForm from "./ItineraryForm";
import RecommendedDestinations from "@/components/RecommendedDestinations";
import Footer from "@/components/Footer";
import TravelPackages from "@/components/TravelPackages";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import ExploreCategories from "@/components/ExploreCategories";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <RecommendedDestinations />
      <TravelPackages />
      <ExploreCategories/>
      <Testimonials/>
      <Newsletter/>
      <section className="mt-12 mb-5 flex justify-center">
        <ItineraryForm />
      </section>
      <Footer />
    </>
  );
};

export default Home;
