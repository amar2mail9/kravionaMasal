import React from "react";
import Layout from "../Layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      "https://png.pngtree.com/png-clipart/20241104/original/pngtree-indian-garam-masala-powder-png-image_16681205.png",
      "https://e7.pngegg.com/pngimages/276/1011/png-clipart-variety-of-foods-indian-cuisine-mixed-spice-masala-spice-mix-cooking-natural-foods-dried-fruit.png",
      "https://png.pngtree.com/png-vector/20240810/ourlarge/pngtree-homemade-garam-masala-sabut-a-spicy-blend-of-whole-spices-for-png-image_13440735.png",
      "https://e7.pngegg.com/pngimages/276/1011/png-clipart-variety-of-foods-indian-cuisine-mixed-spice-masala-spice-mix-cooking-natural-foods-dried-fruit.png",
    ],
  };

  // Discounted Price
  const discountedPrice = (
    product.price -
    (product.price * product.discount) / 100
  ).toFixed(2);

  return (
    <Layout>
      <div className="px-6 py-10">
        <div className="max-w-5xl p-10 bg-white mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Product Images (Swiper) */}
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-md">
            <Swiper
              spaceBetween={20}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="w-full h-full"
            >
              {product.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    loading="lazy"
                    src={img}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-orange-600">
              {product.title}
            </h2>
            <p className="text-sm uppercase tracking-wide text-gray-500">
              {product.category}
            </p>

            {/* Price Section */}
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-gray-800">
                ₹{discountedPrice}
              </span>
              <span className="line-through text-gray-400">
                ₹{product.price}
              </span>
              <span className="text-orange-500 font-semibold">
                {product.discount}% OFF
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Extra Details */}
            <div className="flex gap-6 text-sm text-gray-600">
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
