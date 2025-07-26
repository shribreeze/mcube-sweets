import { useState } from "react"
import { FiMenu, FiX, FiSearch, FiUser, FiShoppingCart } from "react-icons/fi"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-transparent border-b border-amber-100 shadow-sm top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Mcube Sweets"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {["Home", "About Us", "Sweets", "Savouries", "Bakes", "Contact Us"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                className="text-neutral-900 active:text-amber-800 hover:text-amber-700 transition"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6 text-amber-900">
            <button className="hover:text-amber-700">
              <FiSearch size={20} />
            </button>
            <button className="hover:text-amber-700">
              <FiUser size={20} />
            </button>
            <button className="hover:text-amber-700">
              <FiShoppingCart size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-amber-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-4 pb-6 border-t border-amber-100">
          <nav className="flex flex-col space-y-4">
            {["Home", "About Us", "Sweets", "Shop", "Contact Us"].map((item, index) => (
              <a
                key={index}
                href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                className="text-amber-900 hover:text-amber-700 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-amber-100 text-amber-900">
            <button className="hover:text-amber-700">
              <FiSearch size={20} />
            </button>
            <button className="hover:text-amber-700">
              <FiUser size={20} />
            </button>
            <button className="hover:text-amber-700">
              <FiShoppingCart size={20} />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
