import React, { useEffect } from "react";
import {
  StarIcon,
  GlobeAltIcon,
  HandRaisedIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const WhyGlobalXperts = () => {
  const cards = [
    {
      title: "Specialist GCC focus",
      desc: "We work exclusively on GCC and global operations mandates, not generic outsourcing.",
      icon: StarIcon,
    },
    {
      title: "India + global ecosystems",
      desc: "Deep networks across India’s cities, regulators, partners, and talent ecosystems.",
      icon: GlobeAltIcon,
    },
    {
      title: "End-to-end journey partner",
      desc: "From board conversations to day-to-day execution, we stay accountable across the lifecycle.",
      icon: HandRaisedIcon,
    },
    {
      title: "Tech, transformation & risk",
      desc: "Unique blend of technology, operations, and regulatory expertise to de-risk scale.",
      icon: ShieldCheckIcon,
    },
  ];

  /* Scroll-trigger animation */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
      { threshold: 0.2 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ---------- INLINE ANIMATIONS ---------- */}
      <style>{`
        .fade-up { opacity: 0; transform: translateY(25px); transition: all .7s ease-out; }
        .show { opacity: 1 !important; transform: translate(0,0) !important; }
      `}</style>

      {/* ------------------ WHY GLOBAL XPERTS SECTION ------------------ */}
      <section className="bg-[#010c41] py-20 px-6 text-white">
        <div className="max-w-7xl mx-auto fade-up">

          <h2 className="text-3xl font-bold">Why GlobalXperts ?</h2>
          <p className="text-gray-300 mt-2 mb-10 max-w-xl">
            A GCC-only focus, deep India expertise, and end-to-end capabilities.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {cards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg ring-1 ring-black/5 p-6 
                           flex gap-4 items-start fade-up
                           hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                <card.icon className="h-8 w-8 text-[#010c41]" />

                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------ CTA SECTION ------------------ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center fade-up">

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Build Your Future-Ready GCC with Us
          </h2>

          <p className="text-gray-600 mt-3 mb-8 max-w-xl mx-auto leading-relaxed">
            Share your current context and ambitions. We'll respond with a tailored GCC perspective
            and a clear next step.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            <Link
              to="/contact-us"
              className="bg-[#010c41] text-white px-7 py-2.5 rounded-lg font-medium  hover:bg-[#051a70] transition-all shadow-md">
              Contact Us
            </Link>
            {/* <button className="text-[#010c41] border border-[#010c41] px-7 py-2.5 rounded-lg 
                               font-medium hover:bg-[#010c41]/10 transition-all shadow-sm">
              Email Us
            </button> */}
          </div>

          {/* Email Note */}
          <p className="text-sm text-gray-500">
            Or write to us at{" "}
            <a href="mailto:gx@globalxperts.com" className="text-[#010c41] font-medium hover:underline">
              info@globalxperts.net
            </a>
          </p>

        </div>
      </section>
    </>
  );
};

export default WhyGlobalXperts;
