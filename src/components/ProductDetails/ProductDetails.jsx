import React, { use } from "react";
import Layout from "../Layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../App.css";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const slug = useParams().slug;
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URI}/product/${slug}`
        );
        const data = await response.json();
        setProduct(data.product);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-500">Product not found.</p>
        </div>
      </Layout>
    );
  }

  console.log(product);

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
                    src={img.url}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-center   object-fill rounded-2xl "
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
              <Link to={'/contact-us'}>
              <button className="px-6 py-3 rounded-xl border border-orange-600 text-orange-600 font-semibold hover:bg-orange-50 transition">
                Contact
                </button></Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
