import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-transparent pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-20 lg:px-32  ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Social */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative mb-4">
              <img
                src="/logo.png"
                alt="Mcube Sweets"
                width={180}
                height={64}
                className="object-contain"
              />
            </div>
            <div className="relative mb-4">
              <p>Wide varities of sweets and delicacies to choose from Explore the deliciousness that awaits you!</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-[#9c7e38] hover:text-black">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#9c7e38] hover:text-black">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#9c7e38] hover:text-black">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a to="/" className="text-gray-800 hover:text-[#9c7e38]">
                  Home
                </a>
              </li>
              <li>
                <a to="/about" className="text-gray-800 hover:text-[#9c7e38]">
                  About Us
                </a>
              </li>
              <li>
                <a to="/sweets" className="text-gray-800 hover:text-[#9c7e38]">
                  Sweets
                </a>
              </li>
              <li>
                <a to="/shop" className="text-gray-800 hover:text-[#9c7e38]">
                  Shop
                </a>
              </li>
              <li>
                <a to="/contact" className="text-gray-800 hover:text-[#9c7e38]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">Contact Info</h3>
            <address className="not-italic text-gray-800 space-y-2">
              <div className="flex flex-col space-x-4 mt-4 leading-8">
                <div>
                  <MapPin className="h-5 w-5 text-[#9c7e38] inline-block mr-2" />
                  <span>123 Sweet Street, Dessert City</span>
                </div>
                <div>
                  <Phone className="h-5 w-5 text-[#9c7e38] inline-block mr-2" />
                  <span>+1 234 567 8900</span>
                </div>
                <div>
                  <Mail className="h-5 w-5 text-[#9c7e38] inline-block mr-2" />
                  <span>info@mcubesweets.com</span>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#9c7e38] pt-6 mt-8 text-center text-gray-800 text-base">
          <p>Copyright © 2025 Mcube Web Design. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
