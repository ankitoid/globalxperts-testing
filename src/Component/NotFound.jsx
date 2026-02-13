import React from 'react';
import { Link } from 'react-router-dom';
import illustration404 from '../Assets/404ilution.svg';  // Update path if needed

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#010c41] via-[#08196b] to-[#010c41] px-6 py-10 text-white">
      <div className="max-w-xl 2xl:max-w-7xl 2xl:mx-auto 2xl:p-24 w-full flex flex-col items-center text-center bg-white/5 backdrop-blur-md rounded-2xl shadow-xl p-4 border border-white/10">
        {/* Logo */}
        <img
          src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/logo/full_logo.png"
          alt="GlobalXperts Logo"
          className="w-48 mb-4 animate-fade-in"
        />

        {/* 404 Illustration */}
        <img
          src={illustration404}
          alt="404 Illustration"
          className="w-56 mb-6 animate-fade-in"
        />

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Oops! Page Not Found</h1>

        {/* Message */}
        <p className="text-lg md:text-base text-white/80 mb-5">
          At GlobalXperts, we keep networks secure and reliable—but it seems we’ve lost our way this time.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            to="/"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition font-medium shadow"
          >
            Back to Home
          </Link>
          <Link
            to="/contact-us"
            className="bg-white text-[#010c41] hover:bg-gray-100 px-6 py-2 rounded-md transition font-medium shadow"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
