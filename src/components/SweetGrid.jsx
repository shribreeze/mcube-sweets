import React, { useState } from "react";

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

const categories = [
  "All Sweets",
  "Ghee Sweets",
  "Traditional Sweets",
  "Tea Time Snacks",
];

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
      <h2 className="text-3xl md:text-5xl lg:text-6xl text-center mt-8 mb-6">
          Sweets
        </h2>
      {/* Filters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentPage(1);
            }}
            className={`cursor-pointer border rounded-xl p-4 text-center transition hover:shadow-md ${
              selectedCategory === cat
                ? "bg-yellow-100 border-yellow-400"
                : "bg-white"
            }`}
          >
            <div className="text-lg font-semibold">{cat}</div>
            <div className="text-sm text-gray-600">
              {countByCategory(cat)} Products
            </div>
          </div>
        ))}
      </div>

      {/* Sweets Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="sweets">
        {paginatedSweets.map((sweet) => (
          <div
            key={sweet.id}
            className="border rounded-xl p-4 flex flex-col bg-white shadow hover:shadow-lg transition"
          >
            <img
              src={sweet.image}
              alt={sweet.name}
              className="h-40 object-cover mb-3 rounded-md"
            />
            <div className="font-semibold text-lg">{sweet.name}</div>
            <div className="text-yellow-800 font-bold mt-1">₹{sweet.price}</div>

            {/* Weight Dropdown */}
            <select
              className="mt-2 p-1 border rounded"
              value={weights[sweet.id] || "500g"}
              onChange={(e) => handleWeight(sweet.id, e.target.value)}
            >
              <option value="500g">500g</option>
              <option value="1kg">1kg</option>
            </select>

            {/* Quantity & Cart */}
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuantity(sweet.id, -1)}
                  className="bg-gray-200 px-2 rounded"
                >
                  -
                </button>
                <span>{quantities[sweet.id] || 1}</span>
                <button
                  onClick={() => handleQuantity(sweet.id, 1)}
                  className="bg-gray-200 px-2 rounded"
                >
                  +
                </button>
              </div>
              <button className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          className="px-3 py-1 rounded border hover:bg-gray-100"
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-full border ${
              currentPage === i + 1
                ? "bg-yellow-400 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          className="px-3 py-1 rounded border hover:bg-gray-100"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
