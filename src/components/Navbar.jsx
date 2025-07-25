import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#fdfbf8] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        <h1 className="text-2xl font-bold text-[#9c7e38] font-heading">
          MCube Sweets
        </h1>

        <ul className="hidden md:flex gap-6 text-sm text-gray-800 font-medium">
          <li className="hover:text-[#e6b500] cursor-pointer">Home</li>
          <li className="hover:text-[#e6b500] cursor-pointer">Sweets</li>
          <li className="hover:text-[#e6b500] cursor-pointer">Savories</li>
          <li className="hover:text-[#e6b500] cursor-pointer">Bakes</li>
          <li className="hover:text-[#e6b500] cursor-pointer">Contact</li>
        </ul>

        <button className="bg-[#e6b500] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#d4a700] transition">
          Order Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
