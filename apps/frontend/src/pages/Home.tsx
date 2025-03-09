import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ItineraryForm from "./ItineraryForm";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <section className="mt-10 flex justify-center">
        <ItineraryForm />
      </section>
    </>
  );
};

export default Home;
