import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const Register = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("User");
  const [otp, setOtp] = useState("");
  const [otpField, setOtpField] = useState(false);

  // Send OTP
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!fullname || !email || !password || !phone || !role) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URI}/user/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ fullname, email, password, phone, role }),
      });

      const data = await res.json();

      if (!res.ok) return toast.error(data.message);
      
      if (res.ok && data.success) {
        toast.success(data.message);
        setOtpField(true);
      }

    } catch (error) {
      toast.error(error.message);
    }
  };

  // Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (!otp) {
      toast.error("Enter the OTP");
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URI}/user/verify`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (!res.ok) return toast.error(data.message);

      localStorage.setItem("userData", JSON.stringify(data.user));
      Cookies.set("accessToken", data.user.token, { expires: 1 });

      toast.success("OTP Verified! Account created successfully.");
      navigate(`/${data.user.userID}`);
      window.location.reload();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div
        className="w-full max-w-md bg-white rounded-lg p-6 sm:p-8"
        style={{ boxShadow: "0 0 20px rgba(0,0,0,0.1)" }}
      >
        {/* Brand Name */}
        <h1 className="text-center text-3xl font-bold text-orange-500 mb-3">
          Kraviona
        </h1>

        <h1 className="text-center text-2xl sm:text-3xl font-semibold text-gray-600">
          {otpField ? "Verify OTP" : "Create Account"}
        </h1>

        {!otpField ? (
          <form onSubmit={handleRegister} className="flex flex-col mt-8 gap-5">
            <input
              type="text"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="password"
              placeholder="************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            {/* Role */}
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="user">User</option>
              <option value="seller">Seller</option>
            </select>

            <button
              type="submit"
              className="w-full p-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300"
            >
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="flex flex-col mt-8 gap-5">
            <p className="text-gray-600 text-center">
              OTP sent to <span className="font-semibold">{email}</span>
            </p>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
            >
              Verify OTP
            </button>
          </form>
        )}

        <p className="text-center text-gray-500 mt-6 text-sm sm:text-base">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
