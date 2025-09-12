import React from "react";
import { ProductCard } from "../Productcard";

const LatestProduct = () => {
  const product = {
    image:
      "https://veganwithgusto.com/wp-content/uploads/2023/01/garam-masala-featured.jpg",
    title: "Cool Product",
    price: 1200,
    discount: 20,
  };

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

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
        {Array.from({ length: 4 }).map((_, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </section>
  );
};

export default LatestProduct;
