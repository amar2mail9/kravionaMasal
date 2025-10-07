// FeaturedCategories.jsx
import React from "react";

const categories = [
  {
    id: 1,
    name: "Masala Powders",
    image:
      "https://veganwithgusto.com/wp-content/uploads/2023/01/garam-masala-featured.jpg",
  },
  {
    id: 2,
    name: "Whole Spices",
    image:
      "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=800&auto=format&fit=crop&crop=entropy",
  },
  {
    id: 3,
    name: "Blended Spices",
    image:
      "https://images.unsplash.com/photo-1582515073490-3998130b84b8?q=80&w=800&auto=format&fit=crop&crop=entropy",
  },
  {
    id: 4,
    name: "Chilli Powder",
    image:
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=800&auto=format&fit=crop&crop=entropy",
  },
  {
    id: 5,
    name: "Special Mixes",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop&crop=entropy",
  },
];

const FeaturedCategories = ({ categories }) => {
  return (
    <section className="px-4 md:px-[8%] lg:px-36 py-10 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Featured Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((cat) => (
          <div
            key={cat._id}
            className="bg-white rounded-xl shadow-sm p-3 text-center overflow-hidden"
          >
            <div className="h-36 w-full rounded-md overflow-hidden mb-3 bg-gray-50 flex items-center justify-center">
              <img
                src={cat.image}
                alt={cat.categoryName}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="font-semibold text-gray-700">{cat.categoryName}</h3>
            <p className="text-sm text-slate-500 mt-1">
              Premium {cat.categoryName.toLowerCase()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
