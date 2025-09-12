// Kraviona Landing Page Banner (React + TailwindCSS)
// Ye banner sirf landing page ke liye hai, product card/section show nahi hoga

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LandingBanner() {
  return (
    <section className="relative bg-gradient-to-r from-orange-100 via-white to-orange-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-16 px-6 md:px-12"
      >
        {/* Left Side Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-900 leading-tight">
            Kraviona Masal Products
          </h1>
          <p className="mt-4 text-lg text-slate-700 max-w-xl">
            Authentic, pure and aromatic masala blends crafted to bring
            traditional taste to your kitchen. 100% natural, preservative-free
            and handpicked spices.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to={"/products"}
              className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-md transition"
            >
              Shop Now
            </Link>

            <Link
              to={"/about-us"}
              className="px-6 py-3 border border-orange-600 text-orange-700 font-semibold rounded-lg hover:bg-orange-50 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="https://media.istockphoto.com/id/465015726/photo/dabba-masala.jpg?s=612x612&w=0&k=20&c=QbZ2KHUJpVTo4eLkzELdyE9YrLU1X0eDDoAs290g7_k="
            alt="Masala Banner"
            className="w-72 md:w-96 rounded-2xl shadow-lg object-cover"
          />
        </div>
      </motion.div>

      {/* Decorative strip bottom
      <div className="bg-orange-50 border-t border-orange-100 py-3 text-center text-sm text-orange-800">
        ✨ Special Offer: Use code <span className="font-bold">KRAV20</span> &
        get ₹20 OFF on your first order!
      </div> */}
    </section>
  );
}
