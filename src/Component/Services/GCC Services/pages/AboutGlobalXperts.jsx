import React from "react";
import { FaCheckCircle, FaCog, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const AboutGlobalXperts = () => {
  const capabilities = [
    {
      icon: <FaChartLine className="text-2xl" />,
      number: "6+",
      label: "Core tech domains",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <FaCog className="text-2xl" />,
      title: "BOT",
      label: "Build-Operate-Transfer expertise",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaCheckCircle className="text-2xl" />,
      title: "360°",
      label: "Transformation lens",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Risk",
      label: "Compliance-first, regulator aware",
      color: "from-orange-500 to-red-500"
    }
  ];

  const features = [
    {
      title: "End-to-End GCC Lifecycle",
      description: "Strategy, design, setup, scaling, and transformation - your complete partner from day one.",
      icon: "🚀"
    },
    {
      title: "Deep Tech Expertise",
      description: "Digital, product engineering, data & AI, cybersecurity, cloud, and operations capabilities.",
      icon: "💡"
    },
    {
      title: "India & GCC Hub Focus",
      description: "Strong local ecosystems and talent pools across key strategic locations.",
      icon: "🌏"
    },
    {
      title: "Flexible Operating Models",
      description: "Captive, BOT, and hybrid models tuned to your risk appetite and growth objectives.",
      icon: "⚙️"
    },
    {
      title: "Innovation-Driven",
      description: "Proven playbooks for CXOs and boards to unlock innovation, not just cost savings.",
      icon: "✨"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-20 px-6 flex justify-center">
      <div className="max-w-7xl w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                  Who We Are
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">GlobalXperts</span>
              </h2>

              <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                Specialists in strategy, build, and transformation of Global Capability Centers in India and beyond.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group flex gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-2xl bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center gap-3 p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                ✓
              </div>
              <div>
                <p className="font-semibold text-gray-900">Trusted by Global Leaders</p>
                <p className="text-sm text-gray-600">Delivering excellence across Fortune 500 companies</p>
              </div>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 rounded-3xl opacity-40 blur-3xl"></div>
            
            <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">What Sets Us Apart</h3>
                <p className="text-sm text-gray-600">Our unique strengths and capabilities</p>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {capabilities.map((item, index) => (
                  <div 
                    key={index}
                    className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} text-white mb-3 group-hover:scale-110 transition-transform`}>
                        {item.icon}
                      </div>
                      
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {item.number || item.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.label}
                      </p>
                    </div>

                    {/* Corner decoration */}
                    <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${item.color} opacity-5 rounded-full blur-xl group-hover:opacity-20 transition-opacity`}></div>
                  </div>
                ))}
              </div>

              {/* Bottom stats */}
              <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-xs text-gray-600 mt-1">Success Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-xs text-gray-600 mt-1">GCCs Built</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-xs text-gray-600 mt-1">Countries</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutGlobalXperts;