import React from "react";
import { FaEdit, FaTrash, FaEye, FaPlus } from "react-icons/fa";

function SellerProductCard({
  id,
  title,
  category,
  price,
  discount,
  stock,
  rating,
  thumbnail,
  onView,
  onEdit,
  onDelete,
  onAdd,
}) {
  // Calculate discounted price
  const discountedPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative">
        <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
        {discount > 0 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
            -{discount}%
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {title}
        </h3>
        <p className="text-sm text-gray-500">{category}</p>

        <div className="flex items-center justify-between mt-2">
          <div>
            <span className="text-orange-600 font-bold text-lg">
              ₹{discountedPrice.toFixed(2)}
            </span>
            {discount > 0 && (
              <span className="text-gray-400 text-sm line-through ml-2">
                ₹{price}
              </span>
            )}
          </div>
          <span className="text-sm text-gray-600">Stock: {stock}</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => onView?.(id)}
              className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
              title="View Product"
            >
              <FaEye />
            </button>
            <button
              onClick={() => onEdit?.(id)}
              className="p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition"
              title="Edit Product"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => onDelete?.(id)}
              className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
              title="Delete Product"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerProductCard;
