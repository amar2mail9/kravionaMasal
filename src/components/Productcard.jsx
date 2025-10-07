import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({
  slug,
  title = "Essence Mascara Lash Princess",
  category = "Masala",
  price = 9.99,
  discountPercentage = 10.48,
  thumbnail = "https://png.pngtree.com/png-vector/20240810/ourlarge/pngtree-homemade-garam-masala-sabut-a-spicy-blend-of-whole-spices-for-png-image_13440735.png",
}) => {
  // Discounted price calculate
  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
    2
  );

  return (
    <div
      className="
        w-full sm:w-[250px] lg:w-[260px]
        rounded-xl overflow-hidden
        flex flex-col
        bg-white shadow-md hover:shadow-2xl
        transition-all duration-300 hover:-translate-y-1
        mx-auto
      "
    >
      {/* Product Image */}
      <div className="relative w-full h-[180px] bg-gray-50 flex items-center justify-center">
        {/* Category Badge */}
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-md">
          {category.length > 15 ? category.slice(0, 15) + "..." : category}
        </span>
        <Link to={`/${slug}`}>
          <img
            loading="lazy"
            src={thumbnail}
            alt={title}
            className="w-full h-full object-contain p-4"
          />
        </Link>
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-gray-800 font-semibold text-sm sm:text-base line-clamp-2">
          {title.length > 40 ? title.slice(0, 40) + "..." : title}
        </h2>

        {/* Price + Discount */}
        <div className="flex flex-wrap items-center gap-2 mt-3">
          <span className="text-lg font-bold text-gray-900">
            ₹{discountedPrice}
          </span>
          {discountPercentage > 0 && (
            <>
              <span className="line-through text-sm text-gray-400">
                ₹{price.toFixed(2)}
              </span>
              <span className="text-sm text-green-600 font-semibold">
                -{discountPercentage}%
              </span>
            </>
          )}
        </div>

        {/* View Button */}
        <Link
          to={`/product/${slug}`}
          className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 rounded-lg transition-colors text-center"
        >
          View Product
        </Link>
      </div>
    </div>
  );
};
