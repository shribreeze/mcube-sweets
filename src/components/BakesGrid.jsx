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
      <h2 className="text-3xl md:text-5xl lg:text-6xl text-center my-8" id="bakes">
          Bakes
      </h2>

      {/* Sweets Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedSweets.map((sweet) => (
          <div
            key={sweet.id}
            className="rounded-xl p-4 flex flex-col bg-transparent hover:border transition"
          >
            <img
              src={sweet.image}
              alt={sweet.name}
              className="h-40 object-cover mb-3 rounded-md"
            />
            <h3 className="font-semibold text-xl">{sweet.name}</h3>
            <div className="text-[#9c7e38] font-bold mt-1">₹{sweet.price}</div>

            <div className="flex items-center justify-between my-3">
              {/* Weight Dropdown */}
              <select
                className="mt-2 p-1 border border-[#9c7e38] rounded"
                value={weights[sweet.id] || "500g"}
                onChange={(e) => handleWeight(sweet.id, e.target.value)}
              >
                <option value="500g">500g</option>
                <option value="1kg">1kg</option>
                <option value="1kg">2kg</option>
              </select>

              {/* Quantity & Cart */}
                <div className="flex items-center gap-2 mt-2 p-1 border border-[#9c7e38] rounded">
                  <button
                    onClick={() => handleQuantity(sweet.id, -1)}
                    className="bg-transparent px-2 rounded"
                  >
                    -
                  </button>
                  <span>{quantities[sweet.id] || 1}</span>
                  <button
                    onClick={() => handleQuantity(sweet.id, 1)}
                    className="bg-transparent px-2 rounded"
                  >
                    +
                  </button>
                </div>
            </div>
              <button className="bg-[#9c7e38] cursor-pointer text-white px-4 py-1 rounded hover:text-black hover:bg-transparent hover:border transition">
                Add to Cart
              </button>
          </div>
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
          className="px-3 py-1 rounded cursor-pointer"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
