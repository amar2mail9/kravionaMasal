import React, { useState } from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [step, setStep] = useState("email"); // email | otp
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) return alert("Enter email!");
    console.log("📧 Email submitted:", email);
    setStep("otp"); // go to otp step
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (!otp) return alert("Enter OTP!");
    console.log("🔑 OTP submitted:", otp);
    alert("✅ Login successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-100 to-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        {/* Logo / Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-orange-600">Kraviona</h1>
          <p className="mt-2 text-gray-500 text-sm">
            {step === "email"
              ? "Sign in with your email"
              : "Enter the OTP sent to your email"}
          </p>
        </div>

        {/* Step 1: Email */}
        {step === "email" && (
          <form onSubmit={handleEmailSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-gray-700"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition"
            >
              Send OTP
            </button>
          </form>
        )}

        {/* Step 2: OTP */}
        {step === "otp" && (
          <form onSubmit={handleOtpSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter OTP
              </label>
              <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-orange-500">
                <FaKey className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-gray-700 tracking-widest text-lg"
                  maxLength={6}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition"
            >
              Verify OTP
            </button>
            <p className="text-sm text-gray-500 text-center">
              Didn’t get OTP?{" "}
              <button
                type="button"
                onClick={() => alert("Resend OTP")}
                className="text-orange-600 font-semibold hover:underline"
              >
                Resend
              </button>
            </p>
          </form>
        )}

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Create Account */}
        <p className="text-center text-gray-600 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-orange-600 font-semibold hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
