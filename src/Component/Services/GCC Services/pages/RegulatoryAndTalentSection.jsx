import React, { useEffect } from "react";
import {
  ShieldCheckIcon,
  AcademicCapIcon
} from "@heroicons/react/24/solid";

const RegulatoryAndTalentSection = () => {
  const frameworks = ["DPDPA", "SEZ", "FDI", "GDPR"];
  const academies = [
    "Digital & cloud academy",
    "Product & agile academy",
    "Data & AI academy",
    "Cyber & risk academy",
    "Operations excellence academy",
    "GCC leadership program",
  ];

  // Scroll-trigger animation
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("show")),
      { threshold: 0.2 }
    );
    document.querySelectorAll(".fade-up, .fade-left, .fade-right").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ---------- Inline Animations ---------- */}
      <style>{`
        .fade-up, .fade-left, .fade-right {
          opacity: 0;
          transition: all .75s ease-out;
        }
        .fade-up { transform: translateY(28px); }
        .fade-left { transform: translateX(-28px); }
        .fade-right { transform: translateX(28px); }
        .show {
          opacity: 1 !important;
          transform: translate(0,0) !important;
        }
      `}</style>

      {/* ===================== REGULATORY & COMPLIANCE ===================== */}
      <section className="bg-gray-100 p-10 px-6 items-center justify-center flex">
        <div className="max-w-7xl mx-auto  gap-16   fade-up">

          {/* LEFT */}
          <div className="fade-left">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheckIcon className="h-8 w-8 text-[#010c41]" />
              <h2 className="text-3xl font-bold text-[#010c41]">
                Regulatory & Compliance
              </h2>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Compliance-first by design — not an afterthought.
            </p>

            <ul className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
              <li>• Advisory on privacy, data protection & cross-border workflows</li>
              <li>• Early alignment with Indian & global regulatory frameworks</li>
              <li>• Governance, controls & risk embedded across GCC operations</li>
            </ul>
          </div>

          {/* RIGHT */}
          

        </div>
      </section>

      {/* ===================== TALENT & CAPABILITY BUILDING ===================== */}
      <section className="bg-white py-20 px-6 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 fade-up">

          {/* LEFT */}
          <div className="fade-left">
            <div className="flex items-center gap-3 mb-4">
              <AcademicCapIcon className="h-8 w-8 text-[#010c41]" />
              <h2 className="text-3xl font-bold text-[#010c41]">
                Talent & Capability Building
              </h2>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Build GCC talent that owns, scales, and leads global mandates.
            </p>

            <ul className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
              <li>• Leadership hiring, development & succession programs</li>
              <li>• Capability blueprints across tech, digital & operations</li>
              <li>• Custom academies in AI, cyber, cloud & engineering</li>
              <li>• Culture alignment & global ways-of-working enablement</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="fade-right">
            <p className="text-sm text-gray-500 mb-4">Capability academies & programs</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {academies.map((academy, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-[#010c41]/10 text-[#010c41] rounded-full text-sm font-medium 
                             hover:bg-[#010c41]/20 transition shadow-sm"
                >
                  {academy}
                </span>
              ))}
            </div>

            {/* Card */}
            <div className="bg-white rounded-xl shadow-md ring-1 ring-black/5 p-6
                            hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-semibold text-[#010c41] text-sm mb-2">
                From hire to high-performing
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                End-to-end pathways that accelerate productivity, leadership readiness, 
                and long-term talent excellence across your GCC.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default RegulatoryAndTalentSection;
