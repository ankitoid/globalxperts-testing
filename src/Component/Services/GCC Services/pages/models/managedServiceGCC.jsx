import React from "react";
import Navbar from "../../../../Navbar";

const ManagedServiceGCC = () => {
  return (
   <>
   <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-[#010c41] via-slate-900 to-blue-900 text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Managed Services GCC
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8">
          End-to-end managed capabilities across technology, analytics,
          and shared services — delivered with accountability and scale.
        </p>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">
            ⚙️ Coming Soon
          </h2>
          <p className="text-gray-300">
            A fully managed GCC model designed to help enterprises
            accelerate growth while we handle execution excellence.
          </p>
        </div>
      </div>
    </div>
   </>
  );
};

export default ManagedServiceGCC;
