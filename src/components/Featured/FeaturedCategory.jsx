import React from "react";

const FeaturedCategories = ({ categories = [], loading }) => {
  return (
    <section className="px-4 md:px-[8%] lg:px-36 py-10 bg-gray-50">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Featured Categories
      </h2>

      {/* Loader / Content */}
      {loading ? (
        <div className="flex flex-col justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 mt-4">Loading categories...</p>
        </div>
      ) : categories && categories.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((cat) => (
              <div
              key={cat._id || cat.id}
              className="bg-white rounded-xl shadow-sm p-3 text-center overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-36 w-full rounded-md overflow-hidden mb-3 bg-gray-50 flex items-center justify-center">
                <img
                  src={cat.image}
                  alt={cat.categoryName || cat.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="font-semibold text-gray-700">
                {cat.categoryName || cat.name}
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Premium {(cat.categoryName || cat.name).toLowerCase()}
              </p>
            </div>
          ))}
          </div>
      ) : (
        <div className="text-center text-gray-500 py-10">
          No categories available right now.
        </div>
      )}
    </section>
  );
};

export default FeaturedCategories;
