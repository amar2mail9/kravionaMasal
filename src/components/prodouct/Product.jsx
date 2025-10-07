// Shop Page Design (React + TailwindCSS)

import React from "react";
import Layout from "../Layout/Layout";
import { motion } from "framer-motion";
import { ProductCard } from "../Productcard";

function Product({}) {
  const products = [
    {
      image:
        "https://veganwithgusto.com/wp-content/uploads/2023/01/garam-masala-featured.jpg",
      title: "Garam Masala",
      price: 1200,
      discount: 20,
    },
    {
      image:
        "https://images.unsplash.com/photo-1626076064161-7c6d8db36805?q=80&w=800",
      title: "Chilli Powder",
      price: 800,
      discount: 15,
    },
    {
      image:
        "https://images.unsplash.com/photo-1605477701733-51aa26d4e9e4?q=80&w=800",
      title: "Turmeric Powder",
      price: 600,
      discount: 10,
    },
    {
      image:
        "https://images.unsplash.com/photo-1615485737564-7b875d4d4f5c?q=80&w=800",
      title: "Coriander Powder",
      price: 700,
      discount: 18,
    },
  ];

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
      <section className=" mx-auto gap-2 py-12 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
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
