import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { AwardIcon } from "lucide-react";
import { toast } from "react-toastify";
const Login = () => {
  const [showOtpLogin, setShowOtpLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  // Normal login handler
  const loginHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URI}/user/password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {   
        localStorage.setItem("userData", JSON.stringify(data.user));
        Cookies.set("accessToken", data.user.token, { expires: 1 });
        if (data.user.role === "seller") {
         await navigate(`/${data.user.userID}`);
         window.location.reload();
        } else {
          navigate(`/`);
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.warn("Something went wrong!");
    }
  };

  // Send OTP handler
  const sendOtpHandler = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.warn("Please enter your email");
      return;
    }
    if (!email.endsWith("@gmail.com")) {
      toast.warn("Please enter a valid gmail address");
      return;
    }

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URI}/user/resendotp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        setOtpSent(true);
        toast.success("OTP sent successfully!");
      } else {
        toast.error(data.message);
      }
      console.log(data);
    } catch (error) {
      console.error("Send OTP error:", error.message);
      toast.error("Failed to send OTP!");
    }
  };

  // Verify OTP handler
  const verifyOtpHandler = async (e) => {
    e.preventDefault();
    if (!otp) {
      toast.warn("Please enter the OTP");
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URI}/user/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();
     
      if (!data.success) {
         toast.error(data.message)}

      if (res.ok && data.success) {
       
        localStorage.setItem("userData", JSON.stringify(data.user));

        Cookies.set("accessToken", data.user.token, { expires: 1 });
         toast.success("OTP verified successfully!");
        navigate(`/${data.user.userID}`);
        window.location.reload();
      } 
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
        {!showOtpLogin ? (
          <>
            <h1 className="text-center text-2xl sm:text-3xl font-semibold text-gray-600">
              Sign In
            </h1>
            <form onSubmit={loginHandler} className="flex flex-col mt-8 gap-5">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="example@gmail.com"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="w-full p-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300"
              >
                Login
              </button>
            </form>

            <div className="flex items-center justify-center my-4">
              <span className="flex-1 border-b border-gray-300"></span>
              <span className="px-2 text-gray-500 text-sm">OR</span>
              <span className="flex-1 border-b border-gray-300"></span>
            </div>

            <button
              onClick={() => setShowOtpLogin(true)}
              className="w-full p-3 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-50 transition duration-300"
            >
              Sign in with OTP
            </button>

            <p className="text-center text-gray-500 mt-6 text-sm sm:text-base">
              Don’t have an account?{" "}
              <span
                onClick={() => navigate("/register")}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Create Account
              </span>
            </p>
          </>
        ) : (
          <>
            <h1 className="text-center text-2xl sm:text-3xl font-semibold text-gray-600">
              Sign In with OTP
            </h1>
            {!otpSent ? (
              <form
                onSubmit={sendOtpHandler}
                className="flex flex-col mt-8 gap-5"
              >
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="w-full p-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300"
                >
                  Send OTP
                </button>
              </form>
            ) : (
              <form
                onSubmit={verifyOtpHandler}
                className="flex flex-col mt-6 gap-5"
              >
                <h2 className="text-gray-500 text-sm sm:text-base">
                  OTP sent on{" "}
                  <span className="text-indigo-700 font-medium">
                    {email || "example@gmail.com"}
                  </span>
                </h2>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter Your OTP"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="w-full p-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300"
                >
                  Verify OTP
                </button>
              </form>
            )}

            <p className="text-center text-gray-500 mt-6 text-sm sm:text-base">
              Back to{" "}
              <span
                onClick={() => setShowOtpLogin(false)}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Email Login
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
