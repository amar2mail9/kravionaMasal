import React, { useEffect, useState } from "react";
import SellerLayout from "../SellerLayout";
import SellerProductCard from "./SellerProductCard";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function ProductSeller() {
  const [products, setProducts] = useState([]);

  // Handlers
  const handleView = (id) => toast.success(`View Product ${id}`);
  const handleEdit = (id) => toast.success(`Edit Product ${id}`);
  const handleDelete = (id) => toast.error(`Deleted Product ${id}`);
  const handleAdd = () => toast.success("Add New Product");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URI}/public/products`);
        const data = await res.json();


        if (data.success) {
          setProducts(data.products);
        } else {
          toast.error(data.message || "Failed to load products");
        }
      } catch (error) {
        toast.error("Error fetching products");
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

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
        {products.length > 0 ? (
          products.map((product) => (
            <SellerProductCard
              key={product._id}
              {...product}
              onView={() => handleView(product._id)}
              onEdit={() => handleEdit(product._id)}
              onDelete={() => handleDelete(product._id)}
              onAdd={handleAdd}
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No products found. Add a new one!
          </p>
        )}
      </section>
    </SellerLayout>
  );
}
