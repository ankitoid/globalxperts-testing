import React, { useEffect } from "react";
import {
  FaBuilding,
  FaExchangeAlt,
  FaUsers,
  FaCog,
  FaGlobeAsia,
  FaShieldAlt,
  FaStar,
  FaChartLine,
  FaCheckCircle
} from 'react-icons/fa';
import { Link } from "react-router-dom";

const GCCSetupSection = () => {
  const setupModels = [
    {
      title: "Captive GCC",
      desc: "Highest control and alignment — ideal for strategic, IP-led, or regulated mandates.",
      icon: <FaBuilding className="text-2xl" />,
      color: "from-blue-500 to-cyan-500",
      badge: "Most Control",
      link: "/service/gcc-services/captive-gcc", 
      features: ["Full IP ownership", "Strategic alignment", "Regulatory compliance"]
    },
    {
      title: "Build-Operate-Transfer (BOT)",
      desc: "Accelerated time-to-value with lower setup risk, suitable for rapid scaling.",
      icon: <FaExchangeAlt className="text-2xl" />,
      color: "from-purple-500 to-pink-500",
      badge: "Fastest Launch",
      link: "/service/gcc-services/bot-model",
      features: ["Rapid deployment", "Lower initial risk", "Proven playbooks"]
    },
    {
      title: "Hybrid GCC + Partner",
      desc: "Blend of captive leadership with partner execution; ideal for multi-tower models.",
      icon: <FaUsers className="text-2xl" />,
      color: "from-green-500 to-emerald-500",
      badge: "Best Flexibility",
      link: "/service/gcc-services/hybrid-gcc",
      features: ["Balanced control", "Scalable execution", "Cost optimization"]
    },
    {
      title: "Managed Services Extension",
      desc: "Flexible execution for selected functions with outcome-based delivery.",
      icon: <FaCog className="text-2xl" />,
      color: "from-orange-500 to-red-500",
      badge: "Outcome-Based",
      link: "/service/gcc-services/managed-services",
      features: ["Flexible scope", "Performance-driven", "Lower fixed costs"]
    },
  ];

  const useCases = [
    {
      text: "Banks & insurers creating regulated cyber, risk, and compliance hubs.",
      icon: "🏦"
    },
    {
      text: "SaaS and product firms building engineering & AI innovation centers.",
      icon: "💻"
    },
    {
      text: "Industrial firms centralizing digital, automation, and shared services.",
      icon: "🏭"
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Vision & Charter",
      desc: "Define mandate, ownership, and KPIs.",
      icon: <FaGlobeAsia className="text-xl" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Location & Model",
      desc: "Select city, ecosystem, and governance model.",
      icon: <FaBuilding className="text-xl" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "Regulatory & Structure",
      desc: "Entity, approvals, tax, IP & cross-border flows.",
      icon: <FaShieldAlt className="text-xl" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "04",
      title: "Talent & Leadership",
      desc: "Org design, hiring, leadership onboarding.",
      icon: <FaUsers className="text-xl" />,
      color: "from-orange-500 to-red-500"
    },
    {
      step: "05",
      title: "Digital & Tech Stack",
      desc: "Cloud, security, tooling, engineering setup.",
      icon: <FaCog className="text-xl" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      step: "06",
      title: "Scale & Integration",
      desc: "Governance, alignment, workflow integration.",
      icon: <FaChartLine className="text-xl" />,
      color: "from-teal-500 to-cyan-500"
    },
    {
      step: "07",
      title: "Optimize & Transform",
      desc: "Continuous improvement & value acceleration.",
      icon: <FaStar className="text-xl" />,
      color: "from-yellow-500 to-orange-500"
    },
  ];

  // Scroll animations
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("show")),
      { threshold: 0.2 }
    );
    document.querySelectorAll(".fade-left, .fade-right, .fade-up").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ---------- Inline Animation CSS ---------- */}
      <style>{`
        .fade-left, .fade-right, .fade-up { opacity: 0; transition: all .7s ease-out; }
        .fade-left { transform: translateX(-30px); }
        .fade-right { transform: translateX(30px); }
        .fade-up { transform: translateY(30px); }
        .show { opacity: 1 !important; transform: translate(0,0) !important; }
        
        .step-connector {
          position: relative;
        }
        
        @media (min-width: 1024px) {
          .step-connector::after {
            content: '→';
            position: absolute;
            right: -1.25rem;
            top: 50%;
            transform: translateY(-50%);
            color: rgba(255, 255, 255, 0.3);
            font-size: 1.5rem;
            font-weight: bold;
          }
          
          .step-connector:last-child::after {
            content: '';
          }
        }
      `}</style>

      {/* ------------------ TOP SECTION - SETUP MODELS ------------------ */}
      <section className="bg-gradient-to-br from-[#010c41] via-[#02145a] to-[#010c41] py-24 px-6 text-white relative overflow-hidden">

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header */}
          <div className="text-center mb-16 fade-up">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                Setup Options
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              GCC <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Setup Models</span>
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose the right setup model based on your control needs, speed of execution,
              and long-term GCC strategy.
            </p>
          </div>

          {/* Setup Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {setupModels.map((model, i) => (

              <Link key={i} to={model.link} className="block">
                <div
                  className="group cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 
        hover:bg-white/10 hover:border-white/20 transition-all duration-300 fade-up 
        hover:-translate-y-2 hover:shadow-2xl"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Icon and Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${model.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      {model.icon}
                    </div>

                    <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${model.color} text-white`}>
                      {model.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-xl text-white mb-3">
                    {model.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed mb-4">
                    {model.desc}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 pt-4 border-t border-white/10">
                    {model.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <FaCheckCircle className={`text-sm flex-shrink-0 bg-gradient-to-r ${model.color} bg-clip-text text-transparent`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* ✅ CTA Button */}
                  <button
                    className={`mt-6 w-full py-2 rounded-lg font-semibold text-white 
          bg-gradient-to-r ${model.color} opacity-90 
          group-hover:opacity-100 transition`}
                  >
                    Learn More →
                  </button>

                </div>
              </Link>
            ))}
          </div>


          {/* Use Cases Card */}
          <div className="fade-up">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl">
                  💼
                </div>
                <div>
                  <h4 className="font-bold text-[#010c41] text-xl">Typical Use Cases</h4>
                  <p className="text-sm text-gray-600">Industries successfully leveraging GCC models</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {useCases.map((useCase, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{useCase.icon}</span>
                    <p className="text-sm text-gray-700 leading-relaxed">{useCase.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------ BOTTOM SECTION - SETUP FRAMEWORK ------------------ */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-6 relative overflow-hidden">

        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header */}
          <div className="text-center mb-16 fade-up">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-4 py-2 rounded-full border border-purple-200">
                Implementation Process
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#010c41] mb-4">
              GCC <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Setup Framework</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our proven 7-step framework ensures a seamless GCC setup with clarity, speed, and compliance.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="step-connector group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 fade-up border border-gray-100 hover:border-transparent transition-all duration-300 transform hover:-translate-y-2 relative"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Step badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {step.icon}
                  </div>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r ${step.color} text-white`}>
                    {step.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-base text-gray-900 mb-2 leading-tight group-hover:text-[#010c41]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed">
                  {step.desc}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-semibold text-blue-600">View details →</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 px-6">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#010c41] to-[#020d2f] py-20 text-center shadow-2xl">

              {/* dotted background */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              {/* content */}
              <div className="relative z-10 max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                  Ready to Start Your GCC Journey?
                </h2>

                <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-12">
                  Partner with our experts to design and execute a customized GCC
                  implementation roadmap — from strategy to scale.
                </p>

                {/* CTA button */}
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center
                   rounded-full bg-white px-14 py-4
                   text-gray-700 font-semibold text-lg
                   shadow-xl transition-all duration-300
                   hover:scale-105 hover:shadow-2xl"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>


        </div>
      </section>
    </>
  );
};

export default GCCSetupSection;