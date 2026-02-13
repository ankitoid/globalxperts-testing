// File: src/components/ThreeTierSolution.jsx
import React, { useState } from "react";

export default function ThreeTierSolution() {
  const [selected, setSelected] = useState("bronze"); // default open on gold for emphasis

  const tiers = [
    {
      id: "bronze",
      name: "Bronze",
      subtitle: "Contact Center Only",
      short:
        "Cloud-Based Contact Center for Small Businesses",
      bullets: [
        "Basic IVR & Routing: Simple auto-attendant and skills-based routing.",
        "Channels: Voice & Email support.",
        "Agent Workspace: Amazon Connect browser-based softphone.",
        "Integrations: CRM screen-pop, simple data lookups via Lambda.",
        "Reporting: Real-time & historical metrics.",
        "Security: AWS encryption and basic security profiles.",
      ],
      icon: IconPhone,
      color: "from-amber-50 to-amber-100",
      accent: "amber",
    },
    {
      id: "silver",
      name: "Silver",
      subtitle: "OmniBot Virtual Assistant",
      short:
        "Cloud-Based Contact Center for Growing Companies Includes Bronze ",
      bullets: [
        "Automation & Intelligence: Amazon Lex chatbots & Natural Language IVR.",
        "Channels: Web Chat with Lex integration.",
        "Agent Productivity: CRM integrations & task management.",
        "Advanced Analytics: Contact Lens for speech analytics, sentiment tracking, and compliance.",
        "WEM: Forecasting, scheduling, and capacity planning."
      ],
      icon: IconRobot,
      color: "from-sky-50 to-sky-100",
      accent: "sky",
    },
    {
      id: "gold",
      name: "Gold",
      subtitle: "Agent Assist & GenAI",
      short:
        "Cloud-Based Contact Center for Large Enterprises  – AI-Powered & Proactive CX Includes Silver",
      bullets: [
        "AI & Predictive Intelligence: 360° customer view, real-time sentiment alerts, AI agent assistance, and predictive routing.",
        "Channels: Full Omni-channel (Voice, Email, Chat, SMS, Social).",
        "Advanced WEM: Integration with Calabrio, NICE, or Aspect for forecasting, quality, and gamification.",
        "Security & Identity: Amazon Connect Voice ID for seamless authentication.",
        "Outbound Engagement: High-volume campaigns & proactive notifications.",
      ],
      icon: IconSpark,
      color: "from-violet-50 to-violet-100",
      accent: "violet",
      recommended: true,
    },
  ];

  const selectedTier = tiers.find((t) => t.id === selected);

  return (
    <section className="bg-gradient-to-b from-slate-100 to-white/90 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            3-Tiered Contact Centre Solution
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Select the right CX capabilities for your team — from a robust contact center to advanced Agent Assist with GenAI.
            Click a tier to reveal detailed features and recommended use cases.
          </p>
        </div>

        {/* tier cards */}
        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => {
            const active = tier.id === selected;
            return (
              <button
                key={tier.id}
                onClick={() => setSelected(tier.id)}
                aria-pressed={active}
                className={
                  "relative group overflow-visible rounded-2xl p-6 transition-all duration-300 transform focus:outline-none " +
                  "ring-offset-2 focus-visible:ring-2 focus-visible:ring-offset-4 " +
                  (active
                    ? "bg-white border border-transparent shadow-[0_30px_60px_-24px_rgba(2,6,23,0.12)] -translate-y-1 scale-[1.01]"
                    : "bg-white/95 border border-transparent hover:-translate-y-1 hover:shadow-lg")
                }
              >
                {/* halo */}
                <span
                  aria-hidden
                  className={
                    "absolute -bottom-6 left-6 right-6 h-8 rounded-2xl blur-3xl transition-colors duration-300 " +
                    (active ? "bg-violet-200/30" : "bg-slate-200/20")
                  }
                  style={{ zIndex: -1 }}
                />

                {/* Recommended badge */}
                {tier.recommended && (
                  <div className="absolute -top-3 right-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold shadow-sm border border-rose-100">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 22v-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Recommended
                    </div>
                  </div>
                )}

                {/* top icon */}
                <div className="flex flex-col items-center">
                  <div
                    className={
                      "w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-sm " +
                      "bg-gradient-to-br " +
                      tier.color
                    }
                  >
                    <div className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center">
                      <tier.icon className="w-5 h-5 text-slate-800" />
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-sm font-semibold text-slate-900">
                      {tier.name}
                      <span className="text-slate-500 font-medium">{" — " + tier.subtitle}</span>
                    </div>

                    <p className="mt-3 text-sm text-slate-600 font-bold max-w-[260px] mx-auto">
                      {tier.short}
                    </p>
                  </div>
                </div>

                {/* animated accent bottom border */}
                <div
                  className={`absolute left-6 right-6 bottom-4 h-1 rounded-full transition-all duration-500 ${
                    active ? "opacity-100 scale-x-100" : "opacity-40 scale-x-[0.7]"
                  }`}
                  style={{
                    zIndex: 1,
                    background:
                      active
                        ? "linear-gradient(90deg, rgba(99,102,241,0.9), rgba(139,92,246,0.9))"
                        : "linear-gradient(90deg, rgba(148,163,184,0.25), rgba(148,163,184,0.15))",
                    transformOrigin: "left center",
                  }}
                />

                {/* chevron */}
                <div className="absolute right-4 bottom-4">
                  <div
                    className={
                      "w-9 h-9 rounded-full flex items-center justify-center transition " +
                      (active ? "bg-white/95 shadow" : "bg-white/8")
                    }
                    aria-hidden
                  >
                    <Chevron className="w-4 h-4 text-slate-700" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* details panel */}
        <div className="mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* left: detailed features */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br to-violet-100 from-violet-50 shadow-inner">
                  <selectedTier.icon className="w-7 h-7 text-slate-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {selectedTier.name} — {selectedTier.subtitle}
                  </h3>
                  <p className="mt-2 text-slate-600 font-semibold">{selectedTier.short}</p>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedTier.bullets.map((b, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <div className="mt-1 shrink-0">
                          <CheckIcon />
                        </div>
                        <div className="text-sm text-slate-700">{b}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Gold expanded sections */}
              {/* {selectedTier.id === "gold" && (
                <div className="mt-6 border-t pt-6 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Agent Assist Capabilities</h4>
                    <p className="mt-2 text-slate-600">
                      Empower agents with real-time suggestions, contextual knowledge and auto summarizations — reduce handle time and increase resolution rates.
                    </p>
                    <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc pl-6 text-slate-700">
                      <li>Context-aware prompts to reduce handle time</li>
                      <li>Smart routing & priority classification</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Enhanced Manager Assist</h4>
                    <p className="mt-2 text-slate-600">Concise performance insights and faster coaching workflows.</p>
                    <ul className="mt-3 list-disc pl-6 text-slate-700 space-y-1">
                      <li>Concise contact summarization and sentiment insights</li>
                      <li>Faster agent coaching with contextual highlights</li>
                    </ul>
                  </div>

                 
                </div>
              )} */}
            </div>

            {/* right: CTA / compare box */}
            {/* <aside className="bg-gradient-to-b from-white to-slate-100 rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col gap-4">
              <div>
                <div className="text-xs text-slate-500 uppercase font-semibold">Selected</div>
                <div className="text-lg font-bold text-slate-900 mt-1">{selectedTier.name} Tier</div>
                <div className="text-sm text-slate-600 mt-1">{selectedTier.subtitle}</div>
              </div>

              <div className="mt-2 flex-1">
                <div className="text-sm text-slate-700">Perfect for:</div>
                <div className="text-sm text-slate-600 mt-2">
                  {selectedTier.id === "bronze" &&
                    "Companies that need a reliable, fully managed contact center."}
                  {selectedTier.id === "silver" &&
                    "Teams that want conversational assistants and knowledge-driven automation."}
                  {selectedTier.id === "gold" &&
                    "Enterprises that require Agent Assist, advanced GenAI capabilities and manager tooling."}
                </div>

                <div className="mt-4 text-xs text-slate-500">Starting from</div>
                <div className="mt-1 text-2xl font-extrabold text-slate-900">Contact us</div>
                <div className="text-sm text-slate-500">Custom pricing and enterprise packages available</div>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold shadow hover:scale-[1.01] transition"
                >
                  Contact us
                </a>
               
              </div>
            </aside> */}
          </div>
        </div>
      </div>
    </section>
  );
}


function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" {...props}>
      <path d="M21 16.92V21a1 1 0 01-1.09 1A19 19 0 013 6.09 1 1 0 014 5h4.09a1 1 0 01.95.68l.72 2.36a1 1 0 01-.24.95L8.7 11.7a12 12 0 005.6 5.6l1.71-1.8a1 1 0 01.95-.24l2.36.72a1 1 0 01.68.95z" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconRobot(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" {...props}>
      <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="0.9" />
      <path d="M7 7V5a2 2 0 012-2h6a2 2 0 012 2v2" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 12h.01M16 12h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSpark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" {...props}>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="currentColor" strokeWidth="0.95" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-emerald-500" fill="none" {...props}>
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Chevron(props) {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-slate-700" fill="none" {...props}>
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
