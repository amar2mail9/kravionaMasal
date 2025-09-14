import React from "react";
import { Link } from "react-router-dom";

function SellerErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-6">
      <div className="text-center">
        {/* Big 404 */}
        <h1 className="text-7xl font-extrabold text-orange-500">404</h1>

        {/* Error message */}
        <p className="mt-4 text-2xl font-semibold text-gray-800">
          Oops! Page not found
        </p>
        <p className="mt-2 text-gray-600">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Action buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            to="/dashboard"
            className="px-6 py-3 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
          >
            Go to Dashboard
          </Link>
          <Link
            to="/"
            className="px-6 py-3 rounded-lg bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SellerErrorPage;
