import React, { useState } from "react";
import { motion } from "framer-motion";

const savouriesData = [
  {
    id: 1,
    name: "Kaju Katli",
    price: 500,
    image: "https://via.placeholder.com/150",
    category: "Ghee savouries",
  },
  {
    id: 2,
    name: "Ladoo",
    price: 400,
    image: "https://via.placeholder.com/150",
    category: "Traditional savouries",
  },
  {
    id: 3,
    name: "Barfi",
    price: 450,
    image: "https://via.placeholder.com/150",
    category: "All savouriess",
  },
  {
    id: 4,
    name: "Soan Papdi",
    price: 300,
    image: "https://via.placeholder.com/150",
    category: "Tea Time Snacks",
  },
  {
    id: 5,
    name: "Rasgulla",
    price: 380,
    image: "https://via.placeholder.com/150",
    category: "All savouriess",
  },
  {
    id: 6,
    name: "Mysore Pak",
    price: 420,
    image: "https://via.placeholder.com/150",
    category: "Ghee savouriess",
  },
  {
    id: 7,
    name: "Chikki",
    price: 250,
    image: "https://via.placeholder.com/150",
    category: "Tea Time Snacks",
  },
  {
    id: 8,
    name: "Peda",
    price: 390,
    image: "https://via.placeholder.com/150",
    category: "Traditional savouriess",
  },
];

export default function Savouries() {
  const [quantities, setQuantities] = useState({});
  const [weights, setWeights] = useState({});

  const handleQuantity = (id, change) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + change),
    }));
  };

  const handleWeight = (id, value) => {
    setWeights((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="px-4 py-8 max-w-screen-xl mx-auto">
      <h2
        className="text-3xl md:text-5xl lg:text-6xl text-center my-8"
        id="savouries"
      >
        Savouries
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-4">
        {savouriesData.map((savouries, i) => (
          <motion.div
            key={savouries.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            className="rounded-xl p-4 flex flex-col bg-transparent transition"
          >
            <img
              src={savouries.image}
              alt={savouries.name}
              className="h-36 sm:h-40 object-cover mb-3 rounded-md mx-auto"
            />
            <h3 className="font-semibold text-lg sm:text-xl sm:text-left">{savouries.name}</h3>
            <div className="text-[#9c7e38] font-bold mt-1 sm:text-left">
              ₹{savouries.price}
            </div>

            <div className="flex items-center justify-between my-3">

              <select
                className="mt-2 p-1 border border-[#9c7e38] rounded cursor-pointer"
                value={weights[savouries.id] || "500g"}
                onChange={(e) => handleWeight(savouries.id, e.target.value)}
              >
                <option value="500g">500g</option>  
                <option value="1kg">1kg</option>
                <option value="2kg">2kg</option>
              </select>

              <div className="flex items-center gap-2 mt-2 p-1 border border-[#9c7e38] rounded">
                <button
                  onClick={() => handleQuantity(savouries.id, -1)}
                  className="bg-transparent px-2 cursor-pointer"
                >
                  -
                </button>
                <span>{quantities[savouries.id] || 1}</span>
                <button
                  onClick={() => handleQuantity(savouries.id, 1)}
                  className="bg-transparent px-2 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            <button className="bg-[#9c7e38] border cursor-pointer text-white px-4 py-1 rounded hover:text-[#9c7e38] hover:bg-transparent hover:border transition">
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
