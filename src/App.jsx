import React from "react";
import Cookies from "js-cookie";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
import ErrorPage from "./components/Error";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Product from "./components/prodouct/Product";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductSeller from "./components/admin/ProductSeller/ProductSeller";
import SellerErrorPage from "./components/admin/SellerErrorPage";
import DashBoard from "./components/admin/Dashboard/DashBoard";
import { AddProduct } from "./components/admin/ProductSeller/AddProduct/AddProduct";
import LoginPage from "./components/auth/Login";
import Register from "./components/auth/Register";
import ContactDetails from "./components/admin/ContactDetails/ContactDetails";
import Media from "./components/admin/Media/Media";
import AboutSetting from "./components/admin/AboutSetting/AboutSetting";

// ✅ Private route wrapper
const PrivateRoute = ({ children }) => {
  const accessToken = Cookies.get("accessToken");
  return accessToken ? children : <Navigate to="/login" replace />;
};

function App() {
  // ✅ Safe parse localStorage
  let userData = {};
  try {
    userData = JSON.parse(localStorage.getItem("userData")) || {};
  } catch {
    userData = {};
  }

  // ✅ Consistent userId (fallback to "admin" so routes won’t break)
  const userId = userData?.userID || "admin";

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="*" element={<ErrorPage />} />

        {/* Admin Protected Routes */}
        <Route
          path={`/${userId}`}
          element={
            <PrivateRoute>
              <DashBoard />
            </PrivateRoute>
          }
        />
        <Route
          path={`/${userId}/products`}
          element={
            <PrivateRoute>
              <ProductSeller />
            </PrivateRoute>
          }
        />
        <Route
          path={`/${userId}/add-product`}
          element={
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          }
        />
        <Route
          path={`/${userId}/media`}
          element={
            <PrivateRoute>
              <Media />
            </PrivateRoute>
          }
        />
        <Route
          path={`/${userId}/message`}
          element={
            <PrivateRoute>
              <ContactDetails />
            </PrivateRoute>
          }
        />
        <Route
          path={`/${userId}/about`}
          element={
            <PrivateRoute>
              <AboutSetting />
            </PrivateRoute>
          }
        />
        <Route
          path={`/${userId}/*`}
          element={
            <PrivateRoute>
              <SellerErrorPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
