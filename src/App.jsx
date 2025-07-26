import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExcellenceSection from "./components/ExcellenceSection";
import SweetGrid from "./components/SweetGrid";
import Savories from "./components/Savouries";
import BakesGrid from "./components/BakesGrid";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import HeroSub from "./components/HeroSub";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroSub />
      <ExcellenceSection />
      <SweetGrid />
      <Savories />
      <BakesGrid />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
