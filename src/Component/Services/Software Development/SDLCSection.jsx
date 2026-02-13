import React, { useState } from "react";
import { 
  Lightbulb, 
  FileText, 
  Code, 
  TestTube, 
  Rocket, 
  Settings,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Target
} from "lucide-react";

const SDLCSection = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [hoveredPhase, setHoveredPhase] = useState(null);

  const sdlcPhases = [
    {
      id: 1,
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Planning & Requirements",
      shortTitle: "Planning",
      description: "We gather requirements, define project scope, and create a comprehensive roadmap for success.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      deliverables: ["Project Charter", "Requirement Document", "Feasibility Study", "Timeline & Budget"],
      duration: "1-2 Weeks"
    },
    {
      id: 2,
      icon: <FileText className="w-8 h-8" />,
      title: "Design & Architecture",
      shortTitle: "Design",
      description: "Our team creates detailed system architecture, UI/UX designs, and technical specifications.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      deliverables: ["System Architecture", "UI/UX Designs", "Database Schema", "API Documentation"],
      duration: "2-3 Weeks"
    },
    {
      id: 3,
      icon: <Code className="w-8 h-8" />,
      title: "Development & Implementation",
      shortTitle: "Development",
      description: "Expert developers build your solution using agile methodologies and best coding practices.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      deliverables: ["Source Code", "Version Control", "Unit Tests", "Code Documentation"],
      duration: "4-8 Weeks"
    },
    {
      id: 4,
      icon: <TestTube className="w-8 h-8" />,
      title: "Testing & Quality Assurance",
      shortTitle: "Testing",
      description: "Rigorous testing ensures your software is bug-free, secure, and performs optimally.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      deliverables: ["Test Plans", "Bug Reports", "Performance Metrics", "QA Sign-off"],
      duration: "2-3 Weeks"
    },
    {
      id: 5,
      icon: <Rocket className="w-8 h-8" />,
      title: "Deployment & Release",
      shortTitle: "Deployment",
      description: "We deploy your solution to production with zero downtime and comprehensive monitoring.",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      deliverables: ["Production Deploy", "User Training", "Documentation", "Go-Live Support"],
      duration: "1 Week"
    },
    {
      id: 6,
      icon: <Settings className="w-8 h-8" />,
      title: "Maintenance & Support",
      shortTitle: "Maintenance",
      description: "Ongoing support, updates, and optimization to keep your software running smoothly.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      deliverables: ["24/7 Support", "Regular Updates", "Performance Monitoring", "Bug Fixes"],
      duration: "Ongoing"
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Structured Approach",
      description: "Clear phases ensure nothing is overlooked"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Process",
      description: "Regular client involvement at every stage"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timely Delivery",
      description: "Predictable timelines and milestones"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Quality Assured",
      description: "Rigorous testing and validation"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Our Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Software Development Life Cycle
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven SDLC methodology to deliver high-quality software solutions on time and within budget
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="mb-16">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-blue-200 to-indigo-200"></div>
            
            {/* Phases */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
              {sdlcPhases.map((phase, index) => (
                <div
                  key={phase.id}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    activePhase === index ? 'scale-105' : hoveredPhase === index ? 'scale-102' : ''
                  }`}
                  onClick={() => setActivePhase(index)}
                  onMouseEnter={() => setHoveredPhase(index)}
                  onMouseLeave={() => setHoveredPhase(null)}
                >
                  {/* Card */}
                  <div
                    className={`${phase.bgColor} border-2 ${
                      activePhase === index ? phase.borderColor : 'border-transparent'
                    } rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300`}
                  >
                    {/* Phase Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${phase.iconBg} rounded-xl flex items-center justify-center ${phase.iconColor}`}>
                        {phase.icon}
                      </div>
                      <div className="text-3xl font-bold text-gray-300">
                        0{phase.id}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {phase.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4">
                      {phase.description}
                    </p>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Clock className="w-4 h-4" />
                      <span>{phase.duration}</span>
                    </div>

                    {/* Deliverables */}
                    {activePhase === index && (
                      <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
                        <p className="text-xs font-semibold text-gray-700 mb-2">Key Deliverables:</p>
                        <div className="space-y-1">
                          {phase.deliverables.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                              <CheckCircle2 className="w-3 h-3 text-green-500" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Arrow indicator for active phase */}
                    {activePhase === index && (
                      <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br ${phase.color} rounded-lg rotate-45 shadow-lg`}></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Phase Details */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-50"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${sdlcPhases[activePhase].color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                {sdlcPhases[activePhase].icon}
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Currently Viewing</p>
                <h3 className="text-2xl lg:text-3xl font-bold">
                  {sdlcPhases[activePhase].title}
                </h3>
              </div>
            </div>

            <p className="text-lg text-gray-300 mb-6">
              {sdlcPhases[activePhase].description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  What We Deliver
                </h4>
                <ul className="space-y-2">
                  {sdlcPhases[activePhase].deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <ArrowRight className="w-4 h-4 text-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-400" />
                  Timeline
                </h4>
                <p className="text-gray-300 text-lg font-semibold">
                  {sdlcPhases[activePhase].duration}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Duration may vary based on project complexity and requirements
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
            Why Our SDLC Approach Works
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>       
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SDLCSection;