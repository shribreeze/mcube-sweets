import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-amber-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Social */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative h-12 w-32 mb-4">
              <img
                src="/placeholder.svg"
                alt="Mcube Sweets"
                width={128}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-amber-800 hover:text-amber-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-800 hover:text-amber-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-800 hover:text-amber-600">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium text-amber-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a to="/" className="text-amber-800 hover:text-amber-600">
                  Home
                </a>
              </li>
              <li>
                <a to="/about" className="text-amber-800 hover:text-amber-600">
                  About Us
                </a>
              </li>
              <li>
                <a to="/sweets" className="text-amber-800 hover:text-amber-600">
                  Sweets
                </a>
              </li>
              <li>
                <a to="/shop" className="text-amber-800 hover:text-amber-600">
                  Shop
                </a>
              </li>
              <li>
                <a to="/contact" className="text-amber-800 hover:text-amber-600">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium text-amber-900 mb-4">Contact Info</h3>
            <address className="not-italic text-amber-800 space-y-2">
              <p>123 Sweet Street, Dessert City</p>
              <p>Phone: +1 234 567 8900</p>
              <p>Email: info@mcubesweets.com</p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-amber-100 pt-6 mt-8 text-center text-amber-800 text-sm">
          <p>Copyright © 2025 Mcube Sweets. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
