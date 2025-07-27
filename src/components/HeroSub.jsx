"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
  { src: "/images/high-quality.png", alt: "High Quality", label: "High Quality" },
  { src: "/images/vegan.png", alt: "100% Vegetarian", label: "100% Vegetarian" },
  { src: "/images/water.png", alt: "Hygienic", label: "Hygienic" },
];

const HeroSub = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      viewport={{ once: true }}
      className="flex justify-center gap-6 sm:gap-10 flex-wrap mt-8 px-4"
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left"
        >
          <img
            src={item.src}
            alt={item.alt}
            className="w-12 h-12 sm:w-14 sm:h-14"
          />
          <h3 className="text-base sm:text-xl md:text-2xl font-medium">
            {item.label}
          </h3>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default HeroSub;
