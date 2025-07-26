import React from "react";

const items = [
  { src: "/images/high-quality.png", alt: "High Quality", label: "High Quality" },
  { src: "/images/vegan.png", alt: "100% Vegetarian", label: "100% Vegetarian" },
  { src: "/images/water.png", alt: "Hygienic", label: "Hygienic" },
];

const HeroSub = () => {
  return (
    <section className="flex justify-center gap-10 flex-wrap mt-10">
      {items.map((item, index) => (
        <div key={index} className="flex flex-row items-center gap-2">
          <img src={item.src} alt={item.alt} width={48} height={48} />
          <h3 className="text-2xl hidden sm:block">{item.label}</h3>
        </div>
      ))}
    </section>
  );
};

export default HeroSub;
