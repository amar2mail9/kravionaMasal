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
          <section>
            <Link to={"/"}>
              <h1 className="md:text-4xl text-2xl font-extrabold tracking-wide">
                <span className="text-orange-400">Kra</span>
                <span className="text-emerald-500">viona</span>
              </h1>
            </Link>
          </section>
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
        © {new Date().getFullYear()} Kraviona Masala. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
