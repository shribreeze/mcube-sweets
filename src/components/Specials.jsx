import React from "react";

const specials = [
  {
    title: "Sweets",
    desc: "Traditional sweets made with love and purity.",
    img: "/images/sweets.jpg",
  },
  {
    title: "Savories",
    desc: "Crunchy snacks that bring back childhood memories.",
    img: "/images/savories.jpg",
  },
  {
    title: "Bakes",
    desc: "Freshly baked delights for every celebration.",
    img: "/images/bakes.jpg",
  },
];

const Specials = () => {
  return (
    <section className="bg-[#fffdf8] py-16">
      <div className="max-w-7xl mx-auto px-4">
       
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#9c7e38] mb-12 font-heading">
          Our Specials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {specials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#9c7e38] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
