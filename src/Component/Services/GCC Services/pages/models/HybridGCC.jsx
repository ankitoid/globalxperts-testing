import React from "react";
import Navbar from "../../../../Navbar";

const HybridGCC = () => {
  return (
   <>
   <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-[#010c41] via-blue-900 to-indigo-900 text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          Hybrid GCC Model
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8">
          A flexible blend of captive ownership and managed services —
          designed to give enterprises scalability, control, and speed.
        </p>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">
            🚀 Coming Soon
          </h2>
          <p className="text-gray-300">
            We are building a next-generation Hybrid GCC framework that
            combines strategic governance with operational agility.
            Stay tuned for updates.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default HybridGCC;
