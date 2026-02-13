import React, { useEffect } from "react";
import {
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  KeyIcon,
  BoltIcon,
  ChartBarIcon,
  GlobeAltIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

const DigitalTechAndTransform = () => {
  const capabilities = [
    [
      { icon: CpuChipIcon, text: "AI / ML engineering & MLOps" },
      { icon: ShieldCheckIcon, text: "Cybersecurity & resilience" },
      { icon: Cog6ToothIcon, text: "Product & experience engineering" },
    ],
    [
      { icon: CloudIcon, text: "Cloud platforms & SRE" },
      { icon: KeyIcon, text: "Identity, privacy & access" },
      { icon: BoltIcon, text: "DevSecOps & automation" },
    ],
    [
      { icon: ChartBarIcon, text: "Data platforms & analytics" },
      { icon: GlobeAltIcon, text: "Network & platform engineering" },
      { icon: ChartBarIcon, text: "Analytics & decision support" },
    ],
  ];

  const transformSteps = [
    { num: "1", title: "Assess", desc: "Baseline GCC mandate, performance & stakeholder expectations.", icon: ChartBarIcon },
    { num: "2", title: "Re-imagine", desc: "Define future-state GCC model, charters & value roadmap.", icon: GlobeAltIcon },
    { num: "3", title: "Execute", desc: "Talent, delivery, technology & governance interventions.", icon: BoltIcon },
    { num: "4", title: "Sustain", desc: "Embed continuous improvement and innovation programs.", icon: ShieldCheckIcon },
  ];

  // Scroll-trigger animation
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
      { threshold: 0.2 }
    );
    document.querySelectorAll(".fade-up, .fade-left, .fade-right").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ---------- INLINE ANIMATIONS ---------- */}
      <style>{`
        .fade-up, .fade-left, .fade-right { opacity: 0; transition: all .7s ease-out; }
        .fade-up { transform: translateY(25px); }
        .fade-left { transform: translateX(-25px); }
        .fade-right { transform: translateX(25px); }
        .show { opacity: 1 !important; transform: translate(0,0) !important; }
      `}</style>

      {/* ------------------ DIGITAL & TECH CAPABILITIES ------------------ */}
      <section className="bg-[#010c41] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto fade-up">
          
          <h2 className="text-3xl font-bold">Digital & Tech Capabilities</h2>
          <p className="text-gray-200 mt-2 mb-10 max-w-xl">
            Build your GCC as a modern digital, AI, and cyber powerhouse.
          </p>

          {/* Capability Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-[15px]">
            {capabilities.map((col, i) => (
              <ul key={i} className="space-y-4 fade-up">
                {col.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition"
                  >
                    <item.icon className="h-6 w-6 text-[#4fd1c5]" />
                    <span className="font-medium text-gray-200">{item.text}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------ TRANSFORMING EXISTING GCCs ------------------ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* LEFT CONTENT */}
          <div className="fade-left">
            <h2 className="text-3xl font-bold text-[#010c41]">
              Transforming Existing GCCs
            </h2>

            <p className="text-gray-600 mt-2 mb-6">
              Transform legacy GCCs into high-impact innovation and operations engines.
            </p>

            <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
              <li>• Full GCC health-check: mandate, model, talent & technology.</li>
              <li>• Productivity & value realization with measurable outcomes.</li>
              <li>• Re-chartering GCCs toward innovation & digital leadership.</li>
              <li>• Talent, portfolio & operating model redesign for the next decade.</li>
            </ul>
          </div>

          {/* RIGHT SIDE — Transformation Steps */}
          <div className="fade-right">
            <h3 className="font-semibold text-[#010c41] mb-4">Transformation Path</h3>

            <div className="space-y-6">
              {transformSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-4 fade-up">
                  
                  {/* Number + Icon Badge */}
                  <div className="flex items-center justify-center w-12 h-12 bg-[#010c41]/10 rounded-full shadow-md">
                    <step.icon className="h-6 w-6 text-[#010c41]" />
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="font-semibold text-gray-900">{step.title}</h4>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">{step.desc}</p>
                  </div>

                </div>
              ))}
            </div>

            {/* Bottom Card */}
            <div className="bg-white shadow-lg ring-1 ring-gray-200 rounded-xl p-6 mt-8 
                            hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 fade-up">
              <h4 className="font-semibold text-[#010c41] text-sm mb-2">
                From cost center to value creator
              </h4>
              <p className="text-sm text-gray-600">
                We help GCCs evolve into strategic engines linked directly to business outcomes.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalTechAndTransform;
