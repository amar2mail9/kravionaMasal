import React from "react";
import { FaUserAlt } from "react-icons/fa";

function Login() {
  return (
    <section className="w-full bg-gray-200 h-screen flex items-center justify-center">
      <div
        className="md:w-[700px] h-96 bg-blue-500  rounded-lg w-[90%] flex flex-col md:flex-row overflow-hidden"
        style={{
          boxShadow: "0 0 20px 1px #12121230",
        }}
      >
        {/* Left Side */}
        <div className="  text-white flex-1 flex flex-col items-center justify-center p-6">
          <h1 className="text-3xl font-bold mb-2">@kraviona</h1>
          <p className="text-sm opacity-80 text-center">
            Welcome back! Please login to continue.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex rounded-l-[900px] bg-white flex-col items-center justify-center p-6">
          <FaUserAlt className="text-gray-500  bg-gray-200 w-16 h-16 p-3 rounded-full mb-6" />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Send OTP Button */}
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
            Send OTP
          </button>
        </div>
      </div>
    </section>
  );
}

export default Login;
