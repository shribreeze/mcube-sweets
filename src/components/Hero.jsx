import React from "react";

const Hero = () => {
  return (
    <section className="bg-[url('/public/images/heroBG.jpeg')] bg-cover bg-center bg-no-repeat flex items-center py-12 md:py-20">
        <div className="md:w-full md:text-right max-w-7xl mx-auto px-8">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight font-heading">
            Welcome to <br /> Mcube Sweets
          </h1>
          <p className="text-white text-base md:text-lg mb-6">
            Wide variety of sweets and delicacies to choose from. <br />
            Explore the deliciousness that awaits you!
          </p>
          <button className="bg-transparent border cursor-pointer text-white px-6 py-3 rounded-lg text-sm hover:bg-[#9c7e38] transition">
            Shop Now
          </button>
      </div>
    </section>
  );
};

export default Hero;
