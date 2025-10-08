import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({
  slug,
  title = "Essence Mascara Lash Princess",
  category = "Masala",
  price = 99.99,
  discount = 10,
  thumbnail = "https://png.pngtree.com/png-vector/20240810/ourlarge/pngtree-homemade-garam-masala-sabut-a-spicy-blend-of-whole-spices-for-png-image_13440735.png",
}) => {
  const discountedPrice = (price - (price * discount) / 100).toFixed(2);

  return (
    <div
      className="
        bg-white rounded-xl shadow-sm border border-gray-100
        hover:shadow-lg transition-all duration-300
        hover:-translate-y-1 flex flex-col overflow-hidden
      "
    >
      {/* Product Image */}
      <div className="relative h-52 w-full rounded-t-xl overflow-hidden bg-gray-50 flex items-center justify-center">
        {/* Category Badge */}
        <span className="absolute top-2 left-2 z-10 bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
          {category.length > 15 ? category.slice(0, 15) + "..." : category}
        </span>

        <Link to={`/product/${slug}`} className="block w-full h-full">
          <img
            loading="lazy"
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col justify-between flex-1">
        {/* Title */}
        <h3 className="text-gray-800 font-semibold text-sm sm:text-base line-clamp-2 leading-snug min-h-[40px]">
          {title.length > 45 ? title.slice(0, 45) + "..." : title}
        </h3>

        {/* Price Section */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-lg font-bold text-gray-900">₹{discountedPrice}</span>
          {discount > 0 && (
            <>
              <span className="line-through text-sm text-gray-400">₹{price}</span>
              <span className="text-sm font-semibold text-green-600">-{discount}%</span>
            </>
          )}
        </div>

        {/* Button */}
        <Link
          to={`/product/${slug}`}
          className="
            mt-4 w-full bg-orange-500 hover:bg-orange-600
            text-white text-sm font-medium py-2.5 rounded-lg
            text-center transition-colors
          "
        >
          View Details
        </Link>
      </div>
    </div>
  );
};
