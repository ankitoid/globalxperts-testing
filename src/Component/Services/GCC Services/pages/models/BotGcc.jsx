import React from "react";
import Navbar from "../../../../Navbar";

const BotGcc = () => {
  return (
   <>
   <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-[#010c41] via-purple-900 to-indigo-900 text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Bot-Driven GCC
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8">
          AI-powered automation, intelligent bots, and digital workforce
          transformation for modern enterprises.
        </p>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">
            🤖 Coming Soon
          </h2>
          <p className="text-gray-300">
            Our Bot GCC model will integrate automation, AI, and
            intelligent workflows to accelerate operational efficiency.
          </p>
        </div>
      </div>
    </div></>
  );
};

export default BotGcc;
