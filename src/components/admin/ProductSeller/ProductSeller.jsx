import React from "react";
import SellerLayout from "../SellerLayout";
import SellerProductCard from "./SellerProductCard";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function ProductSeller() {
  // Dummy product data
  const products = [
    {
      id: 1,
      title: "Premium Garam Masala",
      category: "Spices & Masala",
      price: 249,
      discount: 15,
      rating: 4.5,
      stock: 120,
      thumbnail:
        "https://png.pngtree.com/png-clipart/20241104/original/pngtree-indian-garam-masala-powder-png-image_16681205.png",
    },
    {
      id: 2,
      title: "Organic Turmeric Powder",
      category: "Spices & Masala",
      price: 199,
      discount: 10,
      rating: 4.7,
      stock: 80,
      thumbnail:
        "https://png.pngtree.com/png-vector/20240810/ourlarge/pngtree-homemade-garam-masala-sabut-a-spicy-blend-of-whole-spices-for-png-image_13440735.png",
    },
    // 👉 add more products or fetch dynamically from API
  ];

  // Handlers (for now just show toast / console)
  const handleView = (id) => toast.success(`View Product ${id}`);
  const handleEdit = (id) => toast.success(`Edit Product ${id}`);
  const handleDelete = (id) => toast.error(`Deleted Product ${id}`);
  const handleAdd = () => toast.success("Add New Product");

  return (
    <SellerLayout>
      {/* Add Product Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">My Products</h2>
        <Link
        to={`/${JSON.parse(localStorage.getItem("userData")).userID}/add-product`}
          onClick={handleAdd}
          className="px-5 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 transition shadow-md"
        >
          + Add Product
        </Link>
      </div>

      {/* Show Products */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <SellerProductCard
            key={product.id}
            {...product}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onAdd={handleAdd}
          />
        ))}
      </section>
    </SellerLayout>
  );
}
