import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { toast } from "react-toastify";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const sendMessage = async () => {
    try {
      // simple validation
      if (!email) return toast.warn("Email is required");
      if (!name) return toast.warn("Name is required");
      if (!message) return toast.warn("Message is required");

      const res = await fetch(`${import.meta.env.VITE_API_URI}/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json(); // ✅ fixed variable name

      console.log(data);

      if (data.success) {
        toast.success(data.message);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

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
                <h4 className="text-lg font-semibold text-orange-600">📍 Address</h4>
                <p className="text-gray-600">Buxar, Bihar, India</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-orange-600">📞 Phone</h4>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-orange-600">✉️ Email</h4>
                <p className="text-gray-600">support@kraviona.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Your Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
                ></textarea>
              </div>

              <button
                onClick={sendMessage}
                type="button"
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all shadow-md"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
