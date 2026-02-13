import React, { useEffect } from "react";
import { FaChartLine, FaMapMarkerAlt, FaBuilding, FaUsers, FaCogs, FaLaptopCode, FaRocket, FaExchangeAlt } from 'react-icons/fa';

const GlobalXpertsProvides = () => {
  const services = [
    {
      id: "01",
      title: "GCC Strategy & Business Case",
      desc: "Location, mandate, and operating model definition aligned to board priorities.",
      icon: <FaChartLine className="text-2xl" />,
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      id: "02",
      title: "Location & Ecosystem Advisory",
      desc: "City selection, ecosystem mapping, and partner shortlisting in India and beyond.",
      icon: <FaMapMarkerAlt className="text-2xl" />,
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      id: "03",
      title: "GCC Setup & Incorporation",
      desc: "Entity, regulatory approvals, infrastructure, and shared services setup.",
      icon: <FaBuilding className="text-2xl" />,
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      id: "04",
      title: "Talent Build & Leadership Hiring",
      desc: "Leadership, niche skills, and scaled hiring programs tailored to GCC charters.",
      icon: <FaUsers className="text-2xl" />,
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      id: "05",
      title: "Operating Model & Governance",
      desc: "Operating rhythms, SLAs, governance forums, and global integration.",
      icon: <FaCogs className="text-2xl" />,
      color: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50"
    },
    {
      id: "06",
      title: "Digital & Tech Build-Out",
      desc: "Cloud, data, engineering, and cybersecurity capability build-out.",
      icon: <FaLaptopCode className="text-2xl" />,
      color: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50"
    },
    {
      id: "07",
      title: "GCC Transformation Programs",
      desc: "Productivity, innovation, and operating model transformation for existing GCCs.",
      icon: <FaRocket className="text-2xl" />,
      color: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50"
    },
    {
      id: "08",
      title: "M&A, Carve-Outs & BOT",
      desc: "Design and execution of BOT, captive carve-outs, and GCC-related M&A.",
      icon: <FaExchangeAlt className="text-2xl" />,
      color: "from-violet-500 to-fuchsia-500",
      bgGradient: "from-violet-50 to-fuchsia-50"
    },
  ];

  /* Scroll-trigger animation */
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("show")),
      { threshold: 0.2 }
    );
    document.querySelectorAll(".fade-up").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* --- Inline Animations --- */}
      <style>{`
        .fade-up { opacity: 0; transform: translateY(25px); transition: all .7s ease-out; }
        .show { opacity: 1 !important; transform: translate(0,0) !important; }
        
        .service-card {
          position: relative;
          overflow: hidden;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--gradient-from), var(--gradient-to));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease-out;
        }
        
        .service-card:hover::before {
          transform: scaleX(1);
        }
      `}</style>

      <section className="bg-gradient-to-b from-white via-gray-50 to-white py-24 px-6 relative overflow-hidden">
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header Section */}
          <div className="text-center mb-16 fade-up">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                Our Services
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#010c41] mb-4">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">GlobalXperts</span> Provides
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A full-stack suite of GCC services across strategy, build, and transformation — 
              from initial concept to operational excellence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="service-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 fade-up
                           transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-transparent"
                style={{
                  '--gradient-from': service.color.split(' ')[0].replace('from-', ''),
                  '--gradient-to': service.color.split(' ')[2]
                }}
              >
                {/* Icon and Number */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  
                  <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.color} opacity-40 group-hover:opacity-100 transition-opacity`}>
                    {service.id}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 text-base mb-3 leading-snug group-hover:text-[#010c41] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {service.desc}
                </p>

                {/* Hover indicator */}
                <div className={`mt-5 pt-5 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <span className={`text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r ${service.color} flex items-center gap-2`}>
                    Learn more →
                  </span>
                </div>

                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity -z-10 rounded-2xl`}></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 fade-up">
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl p-10 relative overflow-hidden">
              
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '40px 40px'
                }}></div>
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Ready to Build Your GCC?
                  </h3>
                  <p className="text-blue-100 text-lg">
                    Let's discuss your vision and create a tailored roadmap for success.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 whitespace-nowrap">
                    Schedule Consultation
                  </button>
                  <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 whitespace-nowrap">
                    Download Guide
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 fade-up">
            {[
              { number: "8+", label: "Core Services" },
              { number: "100%", label: "Success Rate" },
              { number: "50+", label: "GCCs Built" },
              { number: "24/7", label: "Support" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default GlobalXpertsProvides;