import React from "react";
import Layout from "../Layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../App.css";

const ProductDetails = () => {
  const product = {
    title: "Premium Garam Masala",
    category: "Spices & Masala",
    price: 249,
    discount: 15,
    rating: 4.5,
    stock: 120,
    description:
      "Handpicked premium quality Garam Masala with rich aroma and authentic taste. Perfect for enhancing flavor in every dish.",
    images: [
      "https://www.freeiconspng.com/uploads/spices-png-photo-3.png",
      "https://www.freeiconspng.com/uploads/spices-image-transparent-4.png",
      "https://www.kindpng.com/picc/m/274-2741352_spices-png-transparent-png.png",
      "https://www.freeiconspng.com/uploads/spices-png-photo-6.png",
    ],
  };

  // Discounted Price
  const discountedPrice = (
    product.price -
    (product.price * product.discount) / 100
  ).toFixed(2);

  return (
    <Layout>
      <div className="px-4 md:px-8 py-10  min-h-screen">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start bg-white p-4 md:p-10 rounded-2xl shadow-lg">
          {/* Product Images (Swiper) */}
          <div className="w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-md">
            <Swiper
              spaceBetween={20}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="w-full h-full"
            >
              {product.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    loading="lazy"
                    src={img}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-contain  rounded-2xl "
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-orange-600">
                {product.title}
              </h2>
              <p className="text-sm uppercase tracking-wide text-gray-500 mt-1">
                {product.category}
              </p>
            </div>

            {/* Price Section */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-2xl md:text-3xl font-bold text-gray-800">
                ₹{discountedPrice}
              </span>
              <span className="line-through text-gray-400 text-lg">
                ₹{product.price}
              </span>
              <span className="text-orange-500 font-semibold text-lg">
                {product.discount}% OFF
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {product.description}
            </p>

            {/* Extra Details */}
            <div className="flex gap-6 text-sm md:text-base text-gray-600">
              <p>
                ⭐ <span className="font-semibold">{product.rating}</span> / 5
              </p>
              <p>
                Stock:{" "}
                <span className="font-semibold text-orange-600">
                  {product.stock} available
                </span>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap pt-4">
              <button className="px-6 py-3 rounded-xl border border-orange-600 text-orange-600 font-semibold hover:bg-orange-50 transition">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
