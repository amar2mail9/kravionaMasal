// Shop Page Design (React + TailwindCSS)

import React from "react";
import Layout from "../Layout/Layout";
import { motion } from "framer-motion";
import { ProductCard } from "../Productcard";

function Product({}) {
 const [products, setProducts] = React.useState([]);
 const [loading, setLoading] = React.useState(false);
 const [categories, setCategories] = React.useState([]);
 const fetchProducts = async () => {
   setLoading(true);
   try {
     const response = await fetch(`${import.meta.env.VITE_API_URI}/products`);
     const data = await response.json();
     setProducts(data.products);
   } catch (error) {
     console.error("Error fetching products:", error);
   } finally {
     setLoading(false);
   }
 };
 React.useEffect(() => {
   fetchProducts();
 }, []);

//
// Helper function to calculate discounted price
//
  const getDiscountedPrice = (p) => p.price - (p.price * p.discount) / 100;

  return (
    <Layout>
      {/* Banner Section */}
      <section className="relative bg-gradient-to-r from-amber-100 via-white to-amber-50 py-16 px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-900">
            Kraviona Masala Collection
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Explore our wide range of authentic, pure and aromatic spice blends
            crafted to bring traditional taste to your kitchen.
          </p>
        </motion.div>
      </section>

      {/* Products Section */}
      <section className=" mx-auto gap-2 py-12 px-[8%] grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {products.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <ProductCard {...p} />
          </motion.div>
        ))}
      </section>
    </Layout>
  );
}

export default Product;
