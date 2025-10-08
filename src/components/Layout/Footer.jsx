import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-200 overflow-hidden">
      {/* Decorative Pattern (texture) */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto py-12 px-6 md:px-20 grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Brand Info */}
        <div>
          <div className="w-16 h-16 rounded-full border-2 border-orange-500 ">
            <img src="/logo.svg" alt="" className="w-full h-full object-cover rounded-full p-1" />
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Authentic spices, crafted with love ❤️ Experience the true taste of
            India in every pinch!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about-us" className="hover:text-orange-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="hover:text-orange-400 transition"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-orange-400 transition">
                Our Masalas
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-500 transition"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-500 transition"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-orange-500 transition"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} DS Masala. All rights reserved.
      </div>
      {/* Bottom Section */}
      <div className="relative border-t border-gray-700 bg-gray-900 text-gray-300 text-center py-6 px-4 md:px-20 flex flex-col md:flex-row justify-between items-center gap-3">

        {/* Service Info */}
        <p className="text-sm md:text-base">
          Contact us for <span className="text-orange-500 font-semibold">website development</span>
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm md:text-base">
          <span>
            📞 <a href="tel:+919608553167" className="hover:text-orange-500 transition">+91 9608553167</a>
          </span>
          <span>
            ✉️ <a href="mailto:polytechub@gmail.com" className="hover:text-orange-500 transition">polytechub@gmail.com</a>
          </span>
          <span>
            🌐 <a href="https://polytechub.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">polytechub.vercel.app</a>
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-2 md:mt-0">
          © {new Date().getFullYear()} Polytechub. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;
