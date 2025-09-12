import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-br from-emerald-50 to-orange-50 px-4">
      <div className="text-center max-w-md">
        {/* Error Number */}
        <h1 className="text-9xl font-extrabold text-emerald-600">404</h1>

        {/* Error Title */}
        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Oops! Page not found
        </h2>

        {/* Error Message */}
        <p className="mt-2 text-gray-600">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold shadow-md hover:bg-emerald-700 transition-all"
          >
            Go Home
          </Link>
          <Link
            to="/contact-us"
            className="px-6 py-3 rounded-full border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
