import React from "react";
import cookies from "cookies-js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/Login";
import Home from "./components/Home/Home";
import ErrorPage from "./components/Error";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Product from "./components/prodouct/Product";
import ProductDetails from "./components/ProductDetails/ProductDetails";

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
        <Route path="/login" element={<Login />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
