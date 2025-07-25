import React, { useState } from 'react';
import { Card } from './ui/card';
import { CardContent } from './ui/card-content.jsx';
import { Button } from './ui/button';


const sweetData = [
  {
    id: 1,
    name: 'Kaju Katli',
    image: '/images/kaju-katli.jpg',
    category: 'Ghee Sweets',
    price: 500,
  },
  {
    id: 2,
    name: 'Motichoor Ladoo',
    image: '/images/motichoor.jpg',
    category: 'Traditional Sweets',
    price: 450,
  },
  {
    id: 3,
    name: 'Soan Papdi',
    image: '/images/soan-papdi.jpg',
    category: 'All Sweets',
    price: 350,
  },
  {
    id: 4,
    name: 'Dry Fruit Barfi',
    image: '/images/barfi.jpg',
    category: 'Tea Time Snacks',
    price: 600,
  },
  {
    id: 5,
    name: 'Kaju Katli',
    image: '/images/kaju-katli.jpg',
    category: 'Ghee Sweets',
    price: 500,
  },
  {
    id: 6,
    name: 'Motichoor Ladoo',
    image: '/images/motichoor.jpg',
    category: 'Traditional Sweets',
    price: 450,
  },
  {
    id: 7,
    name: 'Soan Papdi',
    image: '/images/soan-papdi.jpg',
    category: 'All Sweets',
    price: 350,
  },
  {
    id: 8,
    name: 'Dry Fruit Barfi',
    image: '/images/barfi.jpg',
    category: 'Tea Time Snacks',
    price: 600,
  },
];

const categories = [
  'All Sweets',
  'Ghee Sweets',
  'Traditional Sweets',
  'Tea Time Snacks',
];

const Savories = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Sweets');
  const [quantities, setQuantities] = useState({});
  const [weights, setWeights] = useState({});

  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 1) + delta),
    }));
  };

  const handleWeightChange = (id, weight) => {
    setWeights((prev) => ({
      ...prev,
      [id]: weight,
    }));
  };

  const filteredSweets = sweetData.filter((item) =>
    selectedCategory === 'All Sweets' ? true : item.category === selectedCategory
  );

  return (
    <div className="px-4 py-10 container mx-auto">
      {/* Category Filters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {categories.map((cat) => (
          <Card
            key={cat}
            className={`cursor-pointer border-2 text-center p-4 rounded-xl transition ${
              selectedCategory === cat ? 'border-[#7B3F00] bg-[#fdfbf8]' : 'border-gray-200'
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            <h3 className="text-lg font-semibold text-[#7B3F00]">{cat}</h3>
            <p className="text-sm text-gray-600">
              {sweetData.filter((s) => cat === 'All Sweets' || s.category === cat).length} Products
            </p>
          </Card>
        ))}
      </div>

      {/* Sweet Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredSweets.map((sweet) => (
          <Card key={sweet.id} className="rounded-xl shadow-md">
            <img
              src={sweet.image}
              alt={sweet.name}
              className="rounded-t-xl h-48 w-full object-cover"
            />
            <CardContent className="p-4">
              <h4 className="font-semibold text-[#7B3F00] text-lg mb-1">{sweet.name}</h4>
              <p className="text-[#5c3d18] font-medium mb-2">₹{sweet.price}</p>
              <div className="mb-3">
                <select
                  className="border rounded-md px-2 py-1 text-sm"
                  onChange={(e) => handleWeightChange(sweet.id, e.target.value)}
                  value={weights[sweet.id] || '500g'}
                >
                  <option value="500g">500g</option>
                  <option value="1kg">1kg</option>
                </select>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                  <Button size="sm" onClick={() => handleQuantityChange(sweet.id, -1)}>-</Button>
                  <span>{quantities[sweet.id] || 1}</span>
                  <Button size="sm" onClick={() => handleQuantityChange(sweet.id, 1)}>+</Button>
                </div>
                <Button size="sm" className="bg-[#7B3F00] text-white">
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Savories;
