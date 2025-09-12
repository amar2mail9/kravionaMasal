import React from "react";
import Layout from "../Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="w-full min-h-[90vh] bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 flex items-center justify-center px-4 py-10">
        <div className="bg-white shadow-2xl rounded-2xl w-full max-w-5xl p-8 grid md:grid-cols-2 gap-10">
          {/* Left Side - Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
            <p className="mt-3 text-gray-600">
              Have questions or want to work together? Fill out the form and our
              team will get back to you soon.
            </p>

            <div className="mt-8 space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-orange-600">
                  📍 Address
                </h4>
                <p className="text-gray-600">Buxar, Bihar, India</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-orange-600">
                  📞 Phone
                </h4>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-orange-600">
                  ✉️ Email
                </h4>
                <p className="text-gray-600">support@kraviona.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
