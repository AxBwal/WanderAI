import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ItineraryForm from "./ItineraryForm";
import RecommendedDestinations from "@/components/RecommendedDestinations";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <section className="mt-10 flex justify-center">
        <ItineraryForm />
      </section>
      <RecommendedDestinations/>
      <Footer/>
    </>
  );
};

export default Home;
