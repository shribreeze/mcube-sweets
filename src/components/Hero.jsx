"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-[url('/images/heroBG.jpeg')] bg-cover bg-center bg-no-repeat flex items-center py-10 sm:py-12 md:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center md:text-right">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight font-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <br className="hidden md:block" /> Mcube Sweets
        </motion.h1>

        <motion.p
          className="text-white text-sm sm:text-base md:text-lg mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Wide variety of sweets and delicacies to choose from. <br className="hidden sm:block" />
          Explore the deliciousness that awaits you!
        </motion.p>

        <motion.button
          className="bg-transparent border border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base hover:bg-[#9c7e38] transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Shop Now
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
