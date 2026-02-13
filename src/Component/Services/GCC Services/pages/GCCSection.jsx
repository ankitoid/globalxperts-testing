import React, { useEffect } from "react";
import { FaRocket, FaCode, FaBrain, FaShieldAlt, FaCogs } from 'react-icons/fa';

const GCCSection = () => {
  // Animation on scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("show")),
      { threshold: 0.2 }
    );
    document.querySelectorAll(".fade-left, .fade-right, .fade-up").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const capabilities = [
    {
      icon: <FaRocket className="text-xl" />,
      text: "Driving digital transformation at enterprise scale",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaCode className="text-xl" />,
      text: "Building world-class product engineering capabilities",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaBrain className="text-xl" />,
      text: "Accelerating Data & AI adoption across functions",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaShieldAlt className="text-xl" />,
      text: "Enhancing cybersecurity readiness & resilience",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <FaCogs className="text-xl" />,
      text: "Strengthening operational excellence & global processes",
      color: "from-indigo-500 to-violet-500"
    }
  ];

  return (
    <>
      {/* ---------- Inline Animations ---------- */}
      <style>{`
        .fade-left, .fade-right, .fade-up {
          opacity: 0;
          transition: all .8s ease-out;
        }
        .fade-left { transform: translateX(-40px); }
        .fade-right { transform: translateX(40px); }
        .fade-up { transform: translateY(30px); }
        .show {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
        
        .gradient-border {
          position: relative;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
          border-radius: 1rem;
        }
        
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 2px;
          background: linear-gradient(135deg, #3b82f6, #9333ea);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
      `}</style>

      {/* ------------------ SECTION ------------------ */}
      <section className="w-full bg-gradient-to-br from-[#010c41] via-[#02145a] to-[#010c41] text-white py-24 px-6 relative overflow-hidden">
        
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16 fade-up">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                Strategic Innovation Hubs
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Why GCCs <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Matter Today</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE CONTENT */}
            <div className="fade-left space-y-8">
              
              <p className="text-gray-300 text-lg leading-relaxed">
                GCCs have evolved far beyond traditional support centers. Today, they operate as
                <span className="font-semibold text-white"> strategic innovation hubs</span> that accelerate enterprise transformation and unlock
                competitive advantage.
              </p>

              {/* Capability Cards */}
              <div className="space-y-4">
                {capabilities.map((item, index) => (
                  <div 
                    key={index}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br ${item.color} text-white group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <p className="text-gray-300 leading-relaxed pt-2 group-hover:text-white transition-colors">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom highlight box */}
              <div className="gradient-border p-6 mt-8">
                <div className="relative">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Value Creation at Scale</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Modern GCCs contribute directly to business growth, innovation velocity, and 
                        enterprise-wide value creation—delivering measurable ROI beyond cost optimization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">3x</div>
                  <div className="text-xs text-gray-400 mt-1">Faster Innovation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">60%</div>
                  <div className="text-xs text-gray-400 mt-1">Cost Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">24/7</div>
                  <div className="text-xs text-gray-400 mt-1">Global Operations</div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="fade-right flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
                
                {/* Image container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <img
                    src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
                    alt="GCC Innovation"
                    className="w-full h-[600px] object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010c41]/80 via-transparent to-transparent"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                          🚀
                        </div>
                        <div>
                          <div className="text-white font-semibold">Innovation-First Approach</div>
                          <div className="text-gray-300 text-sm">Transforming Business Models</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/20">
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">500+</div>
                          <div className="text-xs text-gray-300">GCCs</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">1.5M+</div>
                          <div className="text-xs text-gray-300">Workforce</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-white">$40B+</div>
                          <div className="text-xs text-gray-300">Value</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default GCCSection;