import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import { ProductCard } from "../Productcard";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Organic Turmeric Powder",
    image: "https://cdn.dummyjson.com/product-images/spices/turmeric.jpg",
    price: 120,
    rating: 4.7,
  },
  {
    id: 2,
    name: "Red Chili Powder",
    image: "https://cdn.dummyjson.com/product-images/spices/red-chili.jpg",
    price: 90,
    rating: 4.5,
  },
  {
    id: 3,
    name: "Premium Garam Masala",
    image: "https://cdn.dummyjson.com/product-images/spices/garam-masala.jpg",
    price: 150,
    rating: 4.8,
  },
  {
    id: 4,
    name: "Coriander Powder",
    image: "https://cdn.dummyjson.com/product-images/spices/coriander.jpg",
    price: 100,
    rating: 4.6,
  },
];

const BestSellers = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">
          🔥 Best Sellers / Trending Masalas
        </h1>
        <p className="mt-2 text-lg">
          Kraviona ke sabse pasandida masala products
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <ProductCard {...p} />
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
