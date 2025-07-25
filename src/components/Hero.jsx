import React from "react";
import heroImage from "../assets/bg.jpg";

const Hero = () => {
  return (
    <section className="bg-[#fdfcf9] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#9c7e38] mb-6 leading-tight font-heading">
            Taste Tradition <br /> with Every Bite
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            Premium sweets, bakes & savories delivered fresh from our kitchen.
          </p>
          <button className="bg-[#e6b500] text-white px-6 py-3 rounded-lg text-sm hover:bg-[#d4a700] transition">
            Explore Now
          </button>
        </div>

        <div className="md:w-1/2">
          <img
            src={heroImage}
            alt="Hero sweets display"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
