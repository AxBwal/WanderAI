import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ItineraryForm from "./ItineraryForm";
import RecommendedDestinations from "@/components/RecommendedDestinations";
import Footer from "@/components/Footer";
import TravelPackages from "@/components/TravelPackages";
import Testimonials from "@/components/Testimonials";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <RecommendedDestinations />
      <TravelPackages />
      <Testimonials/>
      <section className="mt-10 flex justify-center">
        <ItineraryForm />
      </section>
      <Footer />
    </>
  );
};

export default Home;
