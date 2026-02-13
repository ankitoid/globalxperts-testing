import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-teal-400 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-xl w-full max-w-lg p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          {isLogin ? "Welcome Back" : "Create Your Account"}
        </h1>
        <form>
          {!isLogin && (
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="John Doe"
              />
            </div>
          )}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="example@company.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white font-medium py-3 rounded-lg hover:bg-purple-600 transition duration-300"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm mt-6">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <span
                className="text-teal-500 font-medium cursor-pointer hover:underline"
                onClick={toggleForm}
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-purple-500 font-medium cursor-pointer hover:underline"
                onClick={toggleForm}
              >
                Login
              </span>
            </>
          )}
        </p>
        <button
          onClick={goToHome}
          className="mt-6 w-full bg-gray-200 text-gray-700 font-medium py-2 rounded-lg hover:bg-gray-300 transition duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;
