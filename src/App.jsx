import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Specials from "./components/Specials";
import ExcellenceSection from "./components/ExcellenceSection";
import SweetGrid from "./components/SweetGrid";
import Savories from "./components/Savories";
import BakesGrid from "./components/BakesGrid";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
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
