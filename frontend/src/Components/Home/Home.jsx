import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="w-full py-4 px-8 bg-blue-600 flex justify-between items-center shadow-md">
        <h1 className="text-white font-semibold text-[1.2rem]">
          Build By Saad Ali
        </h1>
        <div className="space-x-4">
          <button
            onClick={() => navigate("/auth")}
            className="text-white hover:text-gray-200 transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/auth")}
            className="bg-white text-blue-600 px-2 text-[1rem] py-1 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 text-white text-center px-4">
        <h1 className="text-2xl font-semibold mb-2">
          Welcome to FutureXcel Home Page
        </h1>
        <p className="text-[0.95rem] mb-5 max-w-[40%]">
          Manage your projects, collaborate with your team, and grow your ideas
          seamlessly. Start your journey today!
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => navigate("/auth")}
            className="bg-white text-[0.95rem] text-blue-600 px-3 py-1.5 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/auth")}
            className="border text-[0.95rem] border-white px-3 py-1.5 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Sign Up
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full h-16 bg-blue-600 text-white flex items-center justify-center">
        <p className="font-semibold">&copy; 2025 MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
