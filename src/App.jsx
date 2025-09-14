import React from "react";
import cookies from "cookies-js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
import ErrorPage from "./components/Error";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Product from "./components/prodouct/Product";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import SellerLayout from "./admin/SellerLayout";
import ProductSeller from "./admin/ProductSeller/ProductSeller";
import SellerErrorPage from "./admin/SellerErrorPage";
import DashBoard from "./admin/Dashboard/DashBoard";
import { AddProduct } from "./admin/ProductSeller/AddProduct/AddProduct";
import LoginPage from "./components/auth/Login";
import Register from "./components/auth/Register";

const PrivateRoute = ({ children }) => {
  const accessToken = cookies.get("accessToken");

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="*" element={<ErrorPage />} />

        {/* admin */}
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/seller/products" element={<ProductSeller />} />
        <Route path="/seller/*" element={<SellerErrorPage />} />
        <Route path="/product/new" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
