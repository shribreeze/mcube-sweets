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
      <h2 className="text-3xl md:text-5xl lg:text-6xl text-center mt-8" id="sweets">
          Sweets
      </h2>
        <div className="flex justify-center gap-12 md:gap-24 lg:gap-24 m-12 flex-wrap">
          <div className="flex flex-col items-center justify-center">
            <img src="/images/shipping.png" className="py-6" alt="OP" width={40} height={40} />
            <p>National Shipping in 4-6 days</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/images/time.png" className="py-6" alt="ISO" width={40} height={40} />
            <p>18 Days Shelf Life</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/images/earth.png" className="py-6" alt="FSSAI" width={40} height={40} />
            <p>International Shipping in 6-9 days</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/images/no-preservatives.png" className="py-6" alt="FDA" width={40} height={40} />
            <p>No Preservatives</p>
          </div>
        </div>
      {/* Filters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentPage(1);
            }}
            className={`cursor-pointer border rounded-xl text-center transition ${
              selectedCategory === cat
                ? "bg-transparent border-[#9c7e38]"
                : "bg-transparent border-none"
            }`}
          >
            <img src={`/images/${cat.toLowerCase().replace(/ /g, "-")}.webp`} alt={cat} className="w-full h-48 mx-auto mb-2 rounded-xl" />
            <h3 className="text-xl font-semibold">{cat}</h3>
            <div className="text-sm text-gray-800">
              {countByCategory(cat)} Products
            </div>
          </div>
        ))}
      </div>

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
                <div className="flex items-center gap-2 mt-2 p-1  border border-[#9c7e38] rounded">
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
