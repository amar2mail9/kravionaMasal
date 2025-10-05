import React from "react";

import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Home from "./components/Home/Home";
import ErrorPage from "./components/Error";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Product from "./components/prodouct/Product";
import ProductDetails from "./components/ProductDetails/ProductDetails";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />

        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product/:slug" element={<ProductDetails />} />

        {/* Catch-all Route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
