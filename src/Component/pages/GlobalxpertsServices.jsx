import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const GlobalXpertsServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const observerRefs = useRef([]);

  // Replace these with your actual S3 video URLs
  const VIDEO_URLS = {
    fieldServices: "https://main-website-images1.s3.ap-south-1.amazonaws.com/templates/fs.mp4",
    managedServices: "https://main-website-images1.s3.ap-south-1.amazonaws.com/templates/Managed+Sevices.mp4",
    professionalServices: "https://main-website-images1.s3.ap-south-1.amazonaws.com/templates/Professional-Service.mp4"
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const heroSlides = [
    {
      badge: "Trusted IT Solutions Since 2005",
      title: "GlobalXperts",
      subtitle:
        "Empowering businesses worldwide with expert IT solutions that maintain, optimize, and transform your infrastructure.",
    },
  ];

  const stats = [
    { value: "24/7", label: "Support" },
    { value: "120+", label: "Countries" },
    { value: "18+", label: "Years" },
    { value: "1000+", label: "Clients" },
  ];

  const fieldServices = [
    {
      icon: "📦",
      title: "Dispatch Services",
      description:
        "Get on-site IT support for your routers, switches, and WiFi! Our expert technicians provide quick installation, configuration, maintenance, and repair services. We tailor solutions to minimize downtime.",
    },
    {
      icon: "🔄",
      title: "Technology Refresh",
      description:
        "Stay ahead with our Technology Refresh services. We upgrade hardware and software, ensuring your IT infrastructure is current and optimized. Enhancing performance, security, and scalability.",
    },
  ];

  const supportServices = [
    {
      title: "Remote Services",
      items: [
        "Instant, expert IT support reducing response time and enabling efficient issue resolution.",
        "Streamline new software rollouts with confidence.",
        "IT discovery services to identify assets and dependencies.",
      ],
    },
    {
      title: "On-Site Services",
      items: [
        "When remote support isn't enough, we dispatch expert engineers for hands-on solutions.",
        "Four-hour on-site response for critical problems.",
        "Resolve hardware failures and network disruptions efficiently.",
      ],
    },
    {
      title: "Smart Hands Support",
      items: [
        "Technicians act as your on-demand, on-site IT team to handle critical tasks.",
        "Deploy and optimize IT infrastructure with precision.",
        "Keep systems secure with upgrades and patching.",
        "Prevent downtime with proactive scheduled visits.",
      ],
    },
  ];

  const managedTiers = [
    {
      tier: "Tier 1",
      title: "Basic IT Management",
      features: [
        "24/7 System Monitoring",
        "Help Desk Support",
        "Patch Management",
        "Antivirus & Malware Protection",
        "Backup & Disaster Recovery",
      ],
      highlighted: false,
    },
    {
      tier: "Tier 2",
      title: "Advanced IT Management",
      subtitle: "Includes all Tier 1 services plus",
      features: [
        "Advanced Network Management",
        "Cloud Optimization & Management",
        "Device Management (Mobile & Desktop)",
        "Vendor Management",
        "User Training & Security Awareness",
      ],
      highlighted: true,
    },
    {
      tier: "Tier 3",
      title: "Comprehensive IT Management",
      subtitle: "Includes all Tier 1 & 2 services plus",
      features: [
        "Cybersecurity Incident Response",
        "Custom IT Strategy & Roadmap",
        "Compliance Management (HIPAA, GDPR)",
        "Data Analytics & Reporting",
        "AI/ML and IoT Support",
      ],
      highlighted: false,
    },
  ];

  const professionalServices = [
    {
      icon: "💡",
      title: "Consulting and Advisory",
      description:
        "Prioritize the right initiatives to accelerate your digital transformation. We craft tailored strategies that enhance operational efficiencies.",
    },
    {
      icon: "☁️",
      title: "Cloud Migration",
      description:
        "Seamlessly transition to the cloud with GlobalXperts. Our team specializes in data center migrations, leveraging advanced tools and AWS expertise.",
    },
    {
      icon: "⚙️",
      title: "Implementation",
      description:
        "Expert installation and project management, ensuring seamless integration of hardware, software, and networks. Minimize downtime, optimize performance.",
    },
    {
      icon: "👥",
      title: "Staff Augmentation",
      description:
        "Access solutions architects, PMs, and cloud architects. We support wireless networks, system upgrades, and AI/ML initiatives in over 100 countries.",
    },
    {
      icon: "📊",
      title: "Site Surveys",
      description:
        "Reliable reports and insights to help your business make the best use of your site. We handle the fine details so you can focus on differentiation.",
    },
    {
      icon: "🏢",
      title: "Data Center Migration",
      description:
        "Move away from the complexity of managing your own data center. Our experts help you migrate workloads to the cloud with flexibility and scalability.",
    },
  ];

  const VideoPlaceholder = ({ videoUrl, section }) => (
    <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl group">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(37,99,235);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(147,51,234);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='450' fill='url(%23grad)'/%3E%3C/svg%3E"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:opacity-0 transition-opacity duration-300"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl w-full">

          {/* 🌟 TOP CENTER BLOCK */}
          <div className="text-center mb-10">
            {/* Trusted badge */}
            <div className="inline-block bg-white/10 backdrop-blur-md rounded-full border border-white/20 px-6 py-2 mb-4">
              <span className="text-gray-200 text-sm tracking-wide">Trusted By 250+ Clients</span>
            </div>

            {/* Welcome + Logos Inline */}
            <div className="flex justify-center items-center gap-2 text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span>Welcome to</span>
              <div className="flex">
                <img
                  src="https://main-website-images1.s3.ap-south-1.amazonaws.com/templates/firstlogo.png"
                  className="h-10 w-auto object-contain mt-5"
                  alt="small logo"
                />
                <img
                  src="https://main-website-images1.s3.ap-south-1.amazonaws.com/templates/secondlogo.png"
                  className="h-16 w-auto mt-2 object-contain"
                  alt="big logo"
                />
              </div>
            </div>
          </div>

          {/* -------------------------------------------------- */}
          {/* 📍 BELOW TWO COLUMNS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE (Subtitle + Stats) */}
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed mb-10 mx-auto md:mx-0">
                Empowering businesses worldwide with expert IT solutions that maintain, optimize,
                and transform your infrastructure. We deliver seamless support, global coverage,
                and reliable IT excellence that accelerates business growth.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-md mx-auto md:mx-0">
                {[
                  { value: "24/7", label: "Support" },
                  { value: "120+", label: "Countries" },
                  { value: "18+", label: "Years" },
                  { value: "1000+", label: "Clients" }
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="text-center transform hover:scale-110 transition-transform duration-300"
                  >
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-xs uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE (Video) */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full md:w-[620px] h-[280px] sm:h-[350px] rounded-lg overflow-hidden shadow-xl border border-white/10">
                <video
                  className="w-full h-full object-cover"
                  src="https://main-website-images1.s3.ap-south-1.amazonaws.com/templates/globalxperts-serviceVid.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>

          </div>
          {/* -------------------------------------------------- */}

        </div>
      </section>




      {/* Field Services Section */}
      <section
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
        ref={(el) => (observerRefs.current[0] = el)}
        data-section="field-services"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`mb-6 transform transition-all duration-700 ${isVisible['field-services'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">
              FIELD SERVICES
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
            <div className={`transform transition-all duration-700 delay-100 ${isVisible['field-services'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Global reliability, local expertise.
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                At GlobalXperts, we empower businesses by delivering expert
                Field Services to maintain, optimize, and upgrade your IT
                infrastructure—whether it's on-premises, cloud-based, or hybrid
                environments. With a proven global reach and 24/7 operational
                capabilities, we ensure your IT systems remain reliable, secure,
                and efficient.
              </p>
            </div>

            <div className={`transform transition-all duration-700 delay-200 ${isVisible['field-services'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <VideoPlaceholder videoUrl={VIDEO_URLS.fieldServices} section="field" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {fieldServices.map((service, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform ${isVisible['field-services'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${300 + idx * 100}ms` }}
              >
                <div className="text-4xl sm:text-5xl mb-4 animate-bounce-slow">{service.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {supportServices.map((service, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform ${isVisible['field-services'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${500 + idx * 100}ms` }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h3>
                <ul className="space-y-4">
                  {service.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-gray-600 text-sm leading-relaxed flex gap-3 hover:text-gray-900 transition-colors"
                    >
                      <span className="text-blue-500 mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managed IT Services Section */}
      <section
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-white"
        ref={(el) => (observerRefs.current[1] = el)}
        data-section="managed-services"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
            <div className={`transform transition-all duration-700 ${isVisible['managed-services'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Managed IT Services
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our comprehensive managed services model is designed to support
                every aspect of your IT infrastructure. We offer managed
                services remotely or on-site, rain or shine, tailored to your
                business needs.
              </p>
            </div>

            <div className={`transform transition-all duration-700 delay-200 ${isVisible['managed-services'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <VideoPlaceholder videoUrl={VIDEO_URLS.managedServices} section="managed" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {managedTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:-translate-y-2 transform ${tier.highlighted
                  ? "bg-white  shadow-2xl lg:scale-100"
                  : "bg-white  shadow-lg hover:shadow-xl"
                  } ${isVisible['managed-services'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <h3
                  className={`text-xl sm:text-2xl font-bold mb-2 ${tier.highlighted ? "text-gray-900" : "text-gray-900"
                    }`}
                >
                  {tier.tier}
                </h3>
                <p className="text-gray-600 font-semibold mb-2 text-sm sm:text-base">{tier.title}</p>
                {tier.subtitle && (
                  <p className="text-gray-500 text-xs sm:text-sm mb-6">{tier.subtitle}</p>
                )}

                <ul className="space-y-4 mb-8 text-left">
                  {tier.features.map((feature, featureIdx) => (
                    <li
                      key={featureIdx}
                      className="text-gray-600 text-sm flex gap-3 hover:text-gray-900 transition-colors"
                    >
                      <span className="text-blue-500 flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
        ref={(el) => (observerRefs.current[2] = el)}
        data-section="professional-services"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`mb-6 transform transition-all duration-700 ${isVisible['professional-services'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">
              PROFESSIONAL SERVICES
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
            <div className={`transform transition-all duration-700 delay-100 ${isVisible['professional-services'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Simplify operations, accelerate success.
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                GlobalXperts offers a full suite of Professional Services
                designed to drive meaningful outcomes, enhance operational
                efficiency, and support your digital transformation journey.
                From IT Consulting to Cloud Migration.
              </p>
            </div>

            <div className={`transform transition-all duration-700 delay-200 ${isVisible['professional-services'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <VideoPlaceholder videoUrl={VIDEO_URLS.professionalServices} section="professional" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {professionalServices.map((service, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform ${isVisible['professional-services'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${300 + idx * 100}ms` }}
              >
                <div className="text-4xl sm:text-5xl mb-4 animate-bounce-slow">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 sm:mb-10  animation-delay-600 mt-10">
          <Link
            to="https://globalxperts.net/"
            target="_blank"
            className="px-6 sm:px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 transform">
            Visit Main Website <ExternalLink className="w-5 h-5" />
          </Link>
        </div>

      </section>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes counter {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-slide-down {
          animation: slide-down 0.8s ease-out;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-counter {
          animation: counter 0.8s ease-out;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default GlobalXpertsServices;