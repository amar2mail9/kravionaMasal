import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHome,
} from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Registration submitted!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Register
        </h2>

        {/* Name */}
        <div className="flex items-center border rounded-lg mb-4 px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
          <FaUser className="text-gray-400 mr-2" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="w-full bg-transparent outline-none text-gray-700"
          />
        </div>

        {/* Email */}
        <div className="flex items-center border rounded-lg mb-4 px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
          <FaEnvelope className="text-gray-400 mr-2" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full bg-transparent outline-none text-gray-700"
          />
        </div>

        {/* Phone */}
        <div className="flex items-center border rounded-lg mb-4 px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
          <FaPhone className="text-gray-400 mr-2" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
            className="w-full bg-transparent outline-none text-gray-700"
          />
        </div>

        {/* Location */}
        <div className="flex items-center border rounded-lg mb-4 px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
          <FaMapMarkerAlt className="text-gray-400 mr-2" />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Enter your city/location"
            className="w-full bg-transparent outline-none text-gray-700"
          />
        </div>

        {/* Address */}
        <div className="flex items-start border rounded-lg mb-6 px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
          <FaHome className="text-gray-400 mt-2 mr-2" />
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Enter your full address"
            className="w-full bg-transparent outline-none text-gray-700 resize-none h-20"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
