import React from "react";
import { ProductCard } from "../Productcard";
import { Link } from "react-router-dom";

const LatestProduct = ({ products, loading }) => {
  console.log("LatestProduct products:", products);

  return (
    <section className="md:px-[8%] lg:px-36 px-4 py-10 bg-gray-50">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Latest Products
        </h2>
        <p className="text-gray-500 mt-2">
          Discover our newly added products curated just for you
        </p>
        <div className="mt-3 w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
      </div>

      {/* Loader / Product Section */}
      {loading ? (
        <div className="flex flex-col justify-center items-center py-20">
          {/* Tailwind Animated Spinner */}
          <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 mt-4">Loading products...</p>
        </div>
      ) : products && products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
          {products.slice(0, 4).map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-10">
          No products available right now.
        </div>
      )}
    </section>
  );
};

export default LatestProduct;
