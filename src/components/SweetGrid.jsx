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
  {
    id: 11,
    name: "Kaju Katli",
    price: 500,
    image: "https://via.placeholder.com/150",
    category: "Ghee Sweets",
  },
  {
    id: 12,
    name: "Ladoo",
    price: 400,
    image: "https://via.placeholder.com/150",
    category: "Traditional Sweets",
  },
  {
    id: 13,
    name: "Barfi",
    price: 450,
    image: "https://via.placeholder.com/150",
    category: "All Sweets",
  },
  {
    id: 14,
    name: "Soan Papdi",
    price: 300,
    image: "https://via.placeholder.com/150",
    category: "Tea Time Snacks",
  },
  {
    id: 15,
    name: "Rasgulla",
    price: 380,
    image: "https://via.placeholder.com/150",
    category: "All Sweets",
  },
  {
    id: 16,
    name: "Mysore Pak",
    price: 420,
    image: "https://via.placeholder.com/150",
    category: "Ghee Sweets",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const categories = ["All Sweets", "Ghee Sweets", "Traditional Sweets", "Tea Time Snacks"];

export default function SweetGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All Sweets");
  const [quantities, setQuantities] = useState({});
  const [weights, setWeights] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredSweets = sweetData.filter((item) =>
    selectedCategory === "All Sweets" ? true : item.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredSweets.length / itemsPerPage);
  const paginatedSweets = filteredSweets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const countByCategory = (cat) =>
    sweetData.filter((item) =>
      cat === "All Sweets" ? true : item.category === cat
    ).length;

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
      <motion.h2 className="text-3xl md:text-5xl lg:text-6xl text-center mt-8" id="sweets"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Sweets
      </motion.h2>

      {/* Info Icons */}
      <motion.div className="flex justify-center gap-6 md:gap-24 m-12 flex-wrap"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          { img: "shipping", text: "National Shipping in 4-6 days" },
          { img: "time", text: "18 Days Shelf Life" },
          { img: "earth", text: "International Shipping in 6-9 days" },
          { img: "no-preservatives", text: "No Preservatives" },
        ].map(({ img, text }, i) => (
          <div key={i} className="flex flex-col items-center justify-center text-center text-sm sm:text-base">
            <img src={`/images/${img}.png`} alt={text} width={40} height={40} className="py-4" />
            <p className="hidden md:block">{text}</p>
          </div>
        ))}
      </motion.div>

      {/* Category Filters */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        {categories.map((cat) => (
          <motion.div
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentPage(1);
            }}
            className={`cursor-pointer border rounded-xl text-center transition ${
              selectedCategory === cat
                ? "border-[#9c7e38]"
                : "border-transparent"
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <img
              src={`/images/${cat.toLowerCase().replace(/ /g, "-")}.webp`}
              alt={cat}
              className="w-full h-48 mx-auto mb-2 rounded-xl object-cover"
            />
            <h3 className="text-xl font-semibold">{cat}</h3>
            <div className="text-sm text-gray-800">
              {countByCategory(cat)} Products
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Sweet Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
      >
        {paginatedSweets.map((sweet) => (
          <motion.div
            key={sweet.id}
            className="rounded-xl p-4 flex flex-col bg-transparent transition"
            whileHover={{ scale: 1.02 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src={sweet.image}
              alt={sweet.name}
              className="h-40 object-cover mb-3 rounded-md mx-auto"
            />
            <h3 className="font-semibold text-xl">{sweet.name}</h3>
            <div className="text-[#9c7e38] font-bold mt-1">₹{sweet.price}</div>

            <div className="flex items-center justify-between my-3">
             
              <select
                className="mt-2 p-1 border border-[#9c7e38] rounded cursor-pointer"
                value={weights[sweet.id] || "500g"}
                onChange={(e) => handleWeight(sweet.id, e.target.value)}
              >
                <option value="500g">500g</option>
                <option value="1kg">1kg</option>
                <option value="2kg">2kg</option>
              </select>

              <div className="flex items-center gap-2 mt-2 p-1 border border-[#9c7e38] rounded">
                <button
                  onClick={() => handleQuantity(sweet.id, -1)}
                  className="px-2 cursor-pointer"
                >
                  -
                </button>
                <span>{quantities[sweet.id] || 1}</span>
                <button
                  onClick={() => handleQuantity(sweet.id, 1)}
                  className="px-2 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            <button className="bg-[#9c7e38] cursor-pointer border text-white px-4 py-1 rounded hover:text-[#9c7e38] hover:bg-transparent hover:border transition">
              Add to Cart
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination */}
      <motion.div
        className="flex justify-center mt-10 space-x-3 font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
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
              currentPage === i + 1 ? "bg-[#9c7e38] text-white" : ""
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
      </motion.div>
    </div>
  );
}