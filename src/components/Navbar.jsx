'use client';

import { useState } from "react";
import { FiMenu, FiX, FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Home", "About Us", "Sweets", "Savouries", "Bakes", "Contact Us"];

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent border-b border-amber-100 shadow-sm top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src="/logo.png"
              alt="Mcube Sweets"
              className="h-12 w-auto object-contain"
            />
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                className="text-neutral-900 active:text-amber-800 hover:text-[#9c7e38] transition"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Icons */}
          <motion.div
            className="hidden md:flex items-center space-x-6 text-gray-900"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button className="hover:text-[#9c7e38] cursor-pointer"><FiSearch size={20} /></button>
            <button className="hover:text-[#9c7e38] cursor-pointer"><FiUser size={20} /></button>
            <button className="hover:text-[#9c7e38] cursor-pointer"><FiShoppingCart size={20} /></button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-transparent px-4 pt-4 pb-6 border-t border-[#9c7e38]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4">
              {["Home", "About Us", "Sweets", "Shop", "Contact Us"].map((item, index) => (
                <motion.a
                  key={index}
                  href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="text-gray-900 hover:text-[#9c7e38] font-medium"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
            <motion.div
              className="flex items-center space-x-4 mt-4 pt-4 border-t border-[#9c7e38] text-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <button className="hover:text-[#9c7e38]"><FiSearch size={20} /></button>
              <button className="hover:text-[#9c7e38]"><FiUser size={20} /></button>
              <button className="hover:text-[#9c7e38]"><FiShoppingCart size={20} /></button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
