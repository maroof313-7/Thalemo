import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-teal-50 to-teal-100">
      <h1 className="text-6xl font-extrabold text-teal-700 tracking-wide">
        Thalemo 
      </h1>
      <p className="mt-4 text-xl text-gray-700 text-center max-w-lg">
        Empowering doctors and parents to manage children's health efficiently.
      </p>
      <div className="flex space-x-6 mt-10">
        <Link
          to="/doctor"
          className="px-8 py-4 text-xl font-semibold text-white bg-teal-600 rounded-2xl shadow-lg transition-all duration-300 transform hover:bg-teal-700 hover:scale-105"
        >
          Doctor Dashboard
        </Link>
        <Link
          to="/parent"
          className="px-8 py-4 text-xl font-semibold text-white bg-green-600 rounded-2xl shadow-lg transition-all duration-300 transform hover:bg-green-700 hover:scale-105"
        >
          Parent Dashboard
        </Link>
      </div>
      <footer className="absolute bottom-4 text-sm text-gray-600">
        &copy; 2024 Thalemo. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
