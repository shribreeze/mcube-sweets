import React, { useState } from "react";

const bakesData = [
  {
    id: 1,
    name: "Chocolate Cake",
    price: 350,
    image: "/bakes/chocolate_cake.jpg",
  },
  {
    id: 2,
    name: "Cookies Box",
    price: 180,
    image: "/bakes/cookies_box.jpg",
  },
  {
    id: 3,
    name: "Banana Bread",
    price: 220,
    image: "/bakes/banana_bread.jpg",
  },
  {
    id: 4,
    name: "Fruit Tart",
    price: 300,
    image: "/bakes/fruit_tart.jpg",
  },
  {
    id: 5,
    name: "Cupcakes (6 pcs)",
    price: 240,
    image: "/bakes/cupcakes.jpg",
  },
  {
    id: 6,
    name: "Plum Cake",
    price: 400,
    image: "/bakes/plum_cake.jpg",
  },
  {
    id: 7,
    name: "Brownies (4 pcs)",
    price: 210,
    image: "/bakes/brownies.jpg",
  },
  {
    id: 8,
    name: "Donuts (6 pcs)",
    price: 270,
    image: "/bakes/donuts.jpg",
  },
    {
        id: 9,
        name: "Cheesecake",
        price: 380,
        image: "/bakes/cheesecake.jpg",
    },
    {
        id: 10,
        name: "Pineapple Upside Down Cake",
        price: 320,
        image: "/bakes/pineapple_cake.jpg",
    },

];

const ITEMS_PER_PAGE = 4;

const BakesGrid = () => {
  const [page, setPage] = useState(1);
  const [quantities, setQuantities] = useState({});
  const [weights, setWeights] = useState({});

  const totalPages = Math.ceil(bakesData.length / ITEMS_PER_PAGE);
  const currentItems = bakesData.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleQuantityChange = (id, amount) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + amount),
    }));
  };

  const handleWeightChange = (id, weight) => {
    setWeights((prev) => ({ ...prev, [id]: weight }));
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 1;
    const weight = weights[item.id] || "500g";
    console.log("Added to cart:", { ...item, quantity, weight });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Bakes</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center text-center">
            <img src={item.image} alt={item.name} className="h-40 w-40 object-cover mb-4 rounded-lg" />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600 mb-2">₹{item.price}</p>

            <select
              value={weights[item.id] || "500g"}
              onChange={(e) => handleWeightChange(item.id, e.target.value)}
              className="border px-2 py-1 rounded mb-2 text-sm"
            >
              <option value="500g">500g</option>
              <option value="1kg">1kg</option>
            </select>

            <div className="flex items-center justify-center space-x-2 mb-3">
              <button onClick={() => handleQuantityChange(item.id, -1)} className="px-2 py-1 bg-gray-200 rounded">
                -
              </button>
              <span>{quantities[item.id] || 1}</span>
              <button onClick={() => handleQuantityChange(item.id, 1)} className="px-2 py-1 bg-gray-200 rounded">
                +
              </button>
            </div>

            <button
              onClick={() => handleAddToCart(item)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-3 text-lg font-semibold">
        <button onClick={() => setPage(Math.max(1, page - 1))}>&lt;</button>
        {[1, 2, 3, 4].map((pg) => (
          <button
            key={pg}
            onClick={() => setPage(pg)}
            className={`w-8 h-8 rounded-full ${
              pg === page ? "bg-yellow-500 text-white" : "text-gray-700"
            }`}
          >
            {pg}
          </button>
        ))}
        <button onClick={() => setPage(Math.min(totalPages, page + 1))}>&gt;</button>
      </div>
    </div>
  );
};

export default BakesGrid;
