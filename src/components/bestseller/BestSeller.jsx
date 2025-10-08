import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import { ProductCard } from "../Productcard";
import { Link } from "react-router-dom";



const BestSellers = ({ products }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">
          🔥 Best Sellers / Trending Masalas
        </h1>
        <p className="mt-2 text-lg">
          DS ke sabse pasandida masala products
        </p>
      </div>



      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((p, idx) => (
          <ProductCard {...p} key={idx} />
        ))}
      </div>

      {/* Banner Section */}
      <div className="max-w-6xl mx-auto bg-orange-100 rounded-2xl p-10 flex flex-col md:flex-row justify-between items-center my-12 shadow">
        <h2 className="text-2xl font-bold text-gray-800">
          ✨ Special Offer: Flat UPTO 20% Off on All Masalas!
        </h2>
        <Link
          to={"/products"}
          className="mt-4 md:mt-0 bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default BestSellers;
