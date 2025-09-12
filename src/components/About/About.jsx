// About Page Design (React + TailwindCSS)

import React from "react";
import Layout from "../Layout/Layout";
import { motion } from "framer-motion";

function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="w-full min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-orange-900"
          >
            About <span className="text-orange-600">Kraviona</span>
          </motion.h1>
          <p className="mt-4 text-lg text-slate-700">
            We are passionate about delivering high-quality masala products that
            bring authentic taste, aroma, and health benefits to your kitchen.
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://veganwithgusto.com/wp-content/uploads/2023/01/garam-masala-featured.jpg"
            alt="Our Mission"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-orange-800">Our Mission</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              At Kraviona, our mission is to provide pure, natural and aromatic
              spices that enhance every dish. We focus on authenticity, customer
              satisfaction, and long-term trust with our community.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-6xl mx-auto mt-20 text-center">
          <h2 className="text-3xl font-bold text-orange-800">Why Choose Us</h2>
          <p className="mt-3 text-slate-700">
            Here’s why families trust us for their kitchen essentials.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "🌿 100% Natural",
                desc: "Our masalas are made from handpicked spices without additives.",
              },
              {
                title: "✨ Premium Quality",
                desc: "We ensure rich aroma and authentic taste in every pack.",
              },
              {
                title: "📦 Freshly Packed",
                desc: "Sealed with care to preserve freshness and purity.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all"
              >
                <h3 className="text-xl font-semibold text-orange-700">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-6xl mx-auto mt-20 text-center">
          <h2 className="text-3xl font-bold text-orange-800">Meet Our Team</h2>
          <p className="mt-3 text-slate-700">The people behind Kraviona</p>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Amar Kumar",
                role: "Founder & Developer",
                img: "https://polytechub.vercel.app/myImage.jpeg",
              },
              {
                name: "Priya Sharma",
                role: "UI/UX Designer",
                img: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=1169&auto=format&fit=crop",
              },
              {
                name: "Rahul Verma",
                role: "Backend Engineer",
                img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:shadow-2xl transition-all"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover shadow-md"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-orange-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;
