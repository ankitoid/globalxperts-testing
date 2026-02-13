import React, { useEffect } from "react";
import { FaRocket, FaBrain, FaGlobeAmericas, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const GCC2025Trends = () => {
    const trends = [
        {
            year: "2023",
            title: "Shift from cost to innovation",
            desc: "GCCs transition into global innovation hubs, owning products, platforms, and IP.",
            icon: <FaRocket className="text-xl" />,
            color: "from-blue-500 to-cyan-500"
        },
        {
            year: "2024–2027",
            title: "AI-native GCCs",
            desc: "Data, AI, and automation are embedded into every function, from operations to R&D.",
            icon: <FaBrain className="text-xl" />,
            color: "from-purple-500 to-pink-500"
        },
        {
            year: "2026",
            title: "Multi-location, one-operations",
            desc: "Integrated GCC networks across India and global hubs deliver follow-the-sun capabilities.",
            icon: <FaGlobeAmericas className="text-xl" />,
            color: "from-green-500 to-emerald-500"
        },
        {
            year: "2028–2030",
            title: "Regulation-ready, resilience-first",
            desc: "GCCs become the center of gravity for governance, risk, compliance, and operational resilience.",
            icon: <FaShieldAlt className="text-xl" />,
            color: "from-orange-500 to-red-500"
        },
    ];

    const insights = [
        {
            text: "Design GCC charters focused on strategic outcomes, not efficiency alone.",
            icon: "🎯"
        },
        {
            text: "Build AI-native, cloud-first, automation-led capabilities.",
            icon: "🤖"
        },
        {
            text: "Prepare for global regulatory alignment—data, privacy & compliance.",
            icon: "⚖️"
        },
        {
            text: "Invest in leadership, culture, and talent for scalable mandates.",
            icon: "👥"
        }
    ];

    // Scroll-trigger animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("show");
                });
            },
            { threshold: 0.2 }
        );

        document
            .querySelectorAll(".fade-up, .fade-left, .fade-right")
            .forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* ---------- Inline Animation Styles ---------- */}
            <style>{`
        .fade-up, .fade-left, .fade-right {
          opacity: 0;
          transition: all 0.8s ease-out;
        }
        .fade-up { transform: translateY(25px); }
        .fade-left { transform: translateX(-25px); }
        .fade-right { transform: translateX(25px); }
        .show {
          opacity: 1 !important;
          transform: translate(0,0) !important;
        }
        
        .timeline-glow {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }
      `}</style>

            <section className="bg-gradient-to-br from-[#010c41] via-[#02145a] to-[#010c41] py-24 px-6 text-white relative overflow-hidden">
                
                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    
                    {/* Section Header */}
                    <div className="text-center mb-16 fade-up">
                        <div className="inline-block mb-4">
                            <span className="text-sm font-semibold text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                                Future Outlook
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            GCC Trends <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">2025–2030</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* LEFT SIDE – Animated Timeline */}
                        <div className="fade-left">
                            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                                The GCC of the next decade is a <span className="font-semibold text-white">strategic value creator</span>. We help you prepare
                                for where the model is going—not where it started.
                            </p>

                            <div className="relative pl-8 space-y-8">
                                {/* Animated timeline line */}
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

                                {trends.map((t, index) => (
                                    <div 
                                        key={index} 
                                        className="relative group fade-up"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        {/* Timeline icon bullet */}
                                        <div className={`absolute -left-10 top-2 w-6 h-6 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs timeline-glow group-hover:scale-125 transition-transform`}>
                                            {t.icon}
                                        </div>

                                        {/* Card */}
                                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group-hover:translate-x-2">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${t.color} text-white`}>
                                                    {t.year}
                                                </span>
                                                <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
                                            </div>

                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {t.title}
                                            </h3>

                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                {t.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT SIDE – Enhanced Insight Card */}
                        <div className="flex justify-center lg:justify-end fade-right">
                            <div className="w-full max-w-md">
                                {/* Main insight card */}
                                <div className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
                                    
                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                                            💡
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[#010c41] text-xl">
                                                What this means for you
                                            </h3>
                                            <p className="text-sm text-gray-600">Strategic imperatives</p>
                                        </div>
                                    </div>

                                    {/* Insights list */}
                                    <div className="space-y-4">
                                        {insights.map((insight, index) => (
                                            <div 
                                                key={index}
                                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                                            >
                                                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                                                    {insight.icon}
                                                </div>
                                                <p className="text-sm text-gray-700 leading-relaxed pt-1">
                                                    {insight.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2">
                                            <span>Get Your GCC Roadmap</span>
                                            <FaCheckCircle />
                                        </button>
                                    </div>
                                </div>

                                {/* Bottom stats card */}
                                <div className="mt-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                                            ✓
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-semibold text-white">Future-Ready Framework</p>
                                            <p className="text-xs text-gray-300 mt-0.5">Preparing 500+ GCCs for 2030</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default GCC2025Trends;