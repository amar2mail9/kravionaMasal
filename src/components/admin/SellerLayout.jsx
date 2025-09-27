import React, { useState } from "react";
import { FaBell, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const SellerLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const userData=JSON.parse(localStorage.getItem("userData"))
  const menuItems = [
    { name: "Dashboard", path: `/${userData.userID}` },
    { name: "Product", path: `/${userData.userID}/products` },
    { name: "Message", path: `/${userData.userID}/message` },
    { name: "About", path: `/${userData.userID}/about` },
    {
      name:"Media",
      path:`/${userData.userID}/media`
    }
   
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Large screen */}
      <div className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 shadow-sm">
        <div className="px-6 py-5 text-xl font-bold text-orange-600 ">
          Seller Panel
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item, i) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={i}
                to={item.path}
                className={`block px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-orange-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Sidebar - Mobile screen */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200  ">
          <span className="text-lg font-bold text-orange-600">Menu</span>
          <button onClick={() => setSidebarOpen(false)}>
            <FaTimes className="text-xl text-gray-700" />
          </button>
        </div>
        <nav className="px-4 py-6 space-y-2">
          {menuItems.map((item, i) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={i}
                to={item.path}
                className={`block px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-orange-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <FaBars className="text-2xl text-orange-600" />
            </button>

            <h1 className="text-lg md:text-xl font-semibold text-gray-800">
              Welcome, <span className="text-orange-600 font-bold">Amar</span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Notification Icon */}
            <button className="relative">
              <FaBell className="text-2xl text-gray-600 hover:text-orange-600 transition" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                3
              </span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default SellerLayout;
