import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://i.imgur.com/GumPsYq.png"
              alt="Family Pie Logo"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400">
              Where delicious moments are shared with family and friends.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Menu
                </a>
              </li>
              <li>
                <a href="#deals" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Special Deals
                </a>
              </li>
              <li>
                <a href="#order" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Order Online
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 text-orange-500" />
                <span className="text-gray-400">
                  Abdul Muhsin Ibn Abdul Aziz, Al Jumuah, Madinah, Saudi Arabia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-orange-500" />
                <a href="tel:+966558088546" className="text-gray-400 hover:text-white transition-colors duration-200">
                  +966 55 808 8546
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-orange-500" />
                <a href="mailto:contact@familypie.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                  contact@familypie.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Order Now</h3>
            <div className="space-y-4">
              <a
                href="https://take.app/familypie"
                className="block bg-orange-500 text-white px-6 py-2 rounded-full text-center hover:bg-orange-600 transition-colors duration-200"
              >
                Order Online
              </a>
              <a
                href="https://wa.me/966558088546"
                className="block bg-green-600 text-white px-6 py-2 rounded-full text-center hover:bg-green-700 transition-colors duration-200"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Family Pie. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;