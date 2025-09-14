import React, { useState } from "react";
import SellerLayout from "../../SellerLayout";
import { FaPlus, FaTrash } from "react-icons/fa";

export const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    discount: "",
    stock: "",
    description: "",
  });

  const [thumbnail, setThumbnail] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [images, setImages] = useState([]);
  const [imageInput, setImageInput] = useState("");

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle thumbnail file upload
  const handleThumbnailUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnailFile(file);
      setThumbnail(URL.createObjectURL(file));
    }
  };

  // set thumbnail via URL
  const handleThumbnailUrl = (e) => {
    setThumbnailFile(null); // reset file if user enters URL
    setThumbnail(e.target.value);
  };

  // add new image by URL
  const handleAddImage = () => {
    if (imageInput.trim() !== "") {
      setImages([...images, imageInput]);
      setImageInput("");
    }
  };

  // remove image
  const handleRemoveImage = (idx) => {
    setImages(images.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", { ...formData, thumbnail, images });
    alert("✅ Product Added Successfully!");
  };

  return (
    <SellerLayout>
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8  border-gray-200 border border-gray-200-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          ➕ Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Product Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter product title"
                className="w-full mt-2 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                required
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                required
              >
                <option value="">-- Select Category --</option>
                <option value="spices">Spices & Masala</option>
                <option value="grocery">Grocery</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="personal-care">Personal Care</option>
              </select>
            </div>
          </div>

          {/* Price, Discount, Stock */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Price (₹)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                className="w-full mt-2 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Discount (%)
              </label>
              <input
                type="number"
                name="discount"
                value={formData.discount}
                onChange={handleChange}
                placeholder="Enter discount"
                className="w-full mt-2 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Stock Quantity
              </label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="Enter stock"
                className="w-full mt-2 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Thumbnail Upload + URL */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Thumbnail
            </label>
            <div className="flex gap-4 mt-2">
              {/* File Upload */}
              <input
                type="file"
                accept="image/*"
                onChange={handleThumbnailUpload}
                className="flex-1 border border-gray-200 rounded-lg px-3 py-2"
              />
              {/* URL Input */}
              <input
                type="text"
                placeholder="Or paste image URL"
                onChange={handleThumbnailUrl}
                className="flex-1 border border-gray-200 rounded-lg px-3 py-2"
              />
            </div>

            {thumbnail && (
              <div className="mt-4">
                <img
                  src={thumbnail}
                  alt="Thumbnail"
                  className="w-32 h-32 object-cover rounded-lg shadow border border-gray-200"
                />
              </div>
            )}
          </div>

          {/* Multiple Images */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Additional Images
            </label>
            <div className="flex items-center gap-3 mt-2">
              <input
                type="text"
                value={imageInput}
                onChange={(e) => setImageInput(e.target.value)}
                placeholder="Enter image URL"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={handleAddImage}
                className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition"
              >
                <FaPlus />
              </button>
            </div>

            {/* Preview Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative group border border-gray-200 rounded-lg overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`Product ${idx}`}
                    className="w-full h-28 object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(idx)}
                    className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                  >
                    <FaTrash size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write product description..."
              rows="4"
              className="w-full mt-2 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-semibold rounded-lg shadow-md hover:from-orange-600 hover:to-orange-700 transition"
          >
            ✅ Save Product
          </button>
        </form>
      </div>
    </SellerLayout>
  );
};

export default AddProduct;
