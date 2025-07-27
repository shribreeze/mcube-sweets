import React, { useState } from "react";
import { motion } from "framer-motion";

const sweetData = [
  {
    id: 1,
    name: "Kaju Katli",
    price: 500,
    image: "https://via.placeholder.com/150",
    category: "Ghee Sweets",
  },
  {
    id: 2,
    name: "Ladoo",
    price: 400,
    image: "https://via.placeholder.com/150",
    category: "Traditional Sweets",
  },
  {
    id: 3,
    name: "Barfi",
    price: 450,
    image: "https://via.placeholder.com/150",
    category: "All Sweets",
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
    category: "All Sweets",
  },
  {
    id: 6,
    name: "Mysore Pak",
    price: 420,
    image: "https://via.placeholder.com/150",
    category: "Ghee Sweets",
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
    category: "Traditional Sweets",
  },
  {
    id: 9,
    name: "Jalebi",
    price: 320,
    image: "https://via.placeholder.com/150",
    category: "All Sweets",
  },
  {
    id: 10,
    name: "Halwa",
    price: 310,
    image: "https://via.placeholder.com/150",
    category: "Traditional Sweets",
  },
];


export default function BakesGrid() {
  const [quantities, setQuantities] = useState({});
  const [weights, setWeights] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(sweetData.length / itemsPerPage);
  const paginatedSweets = sweetData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
        id="bakes"
      >
        Bakes
      </h2>

      {/* Sweets Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedSweets.map((sweet, i) => (
          <motion.div
            key={sweet.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl p-4 flex flex-col bg-transparent hover:border transition"
          >
            <img
              src={sweet.image}
              alt={sweet.name}
              className="h-36 sm:h-40 object-cover mb-3 rounded-md mx-auto"
            />
            <h3 className="font-semibold text-lg sm:text-xl text-center sm:text-left">
              {sweet.name}
            </h3>
            <div className="text-[#9c7e38] font-bold mt-1 text-center sm:text-left">
              ₹{sweet.price}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 my-3">
              <select
                className="p-1 border border-[#9c7e38] rounded w-full sm:w-auto"
                value={weights[sweet.id] || "500g"}
                onChange={(e) => handleWeight(sweet.id, e.target.value)}
              >
                <option value="500g">500g</option>
                <option value="1kg">1kg</option>
                <option value="2kg">2kg</option>
              </select>

              <div className="flex items-center justify-center sm:justify-start gap-2 border border-[#9c7e38] rounded px-2 py-1">
                <button
                  onClick={() => handleQuantity(sweet.id, -1)}
                  className="bg-transparent"
                >
                  -
                </button>
                <span>{quantities[sweet.id] || 1}</span>
                <button
                  onClick={() => handleQuantity(sweet.id, 1)}
                  className="bg-transparent"
                >
                  +
                </button>
              </div>
            </div>

            <button className="bg-[#9c7e38] cursor-pointer text-white px-4 py-1 rounded hover:text-black hover:bg-transparent hover:border transition">
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-3 font-semibold">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          className="px-3 py-1 cursor-pointer"
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-full cursor-pointer ${
              currentPage === i + 1
                ? "bg-[#9c7e38] text-white"
                : "hover:bg-transparent"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          className="px-3 py-1 cursor-pointer"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}