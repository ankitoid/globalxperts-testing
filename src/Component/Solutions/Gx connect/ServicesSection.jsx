import React, { useState } from "react";


export default function ServicesSection() {
  const [activeId, setActiveId] = useState(1);

  const services = [
    {
      id: 1,
      title: "IP Telephony",
      short: "Seamless internet voice comms",
      Icon: IconPhone,
      desc:
        "Enables seamless voice communication over the internet, replacing traditional phone systems with a flexible, scalable, and cost-efficient solution.",
    },
    {
      id: 2,
      title: "Contact Centre",
      short: "Omnichannel customer hub",
      Icon: IconHeadset,
      desc:
        "Serves as the central hub for managing all customer interactions—across voice, chat, email, and digital channels—ensuring seamless communication and consistent service delivery.",
    },
    // {
    //   id: 3,
    //   title: "Omnibot",
    //   short: "AI-powered virtual assistant",
    //   Icon: IconBot,
    //   desc:
    //     "An AI-powered virtual assistant designed to manage customer interactions across multiple channels—voice, chat, email, and social platforms—through a single unified interface.",
    // },
    {
      id: 4,
      title: "Powered by AI/ML",
      short: "Analytics & predictive routing",
      Icon: IconAiMl,
      desc:
        "AI/ML capabilities (e.g., intent classification, analytics, predictive routing) that power smarter automation, better recommendations, and operational insights.",
    },
    {
      id: 5,
      title: "Natural Language Processing (NLP)",
      short: "Understand & respond to language",
      Icon: IconNLP,
      desc:
        "An AI technology that enables systems to understand, interpret, and respond to human language—both spoken and written—improving conversational accuracy and experience.",
    },
  ];

  const active = services.find((s) => s.id === activeId) || services[0];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">
          Services built around your business needs
        </h2>
        <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
          We bring technology expertise and proven CX strategy together to help companies build deeper
          connections with their customers.
        </p>

        {/* --- Desktop: two-column layout. Mobile: stacked cards with description visible --- */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cards column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s) => {
              const isActive = s.id === activeId;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  className={
                    "w-full text-left bg-white rounded-2xl p-5 flex gap-4 items-start transition-shadow transform " +
                    (isActive
                      ? "shadow-xl ring-2 ring-purple-300 -translate-y-1"
                      : "shadow-sm hover:shadow-md")
                  }
                  aria-pressed={isActive}
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-50 to-cyan-50 flex items-center justify-center shrink-0">
                    <s.Icon className="w-7 h-7 text-purple-600" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-base font-semibold text-slate-900">
                          {s.title}
                        </div>
                        <div className="text-sm text-slate-500 mt-1">{s.short}</div>
                      </div>
                      <div className="ml-4">
                        <svg
                          className={`w-5 h-5 transition-transform ${isActive ? "text-purple-600 rotate-90" : "text-slate-300"}`}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Mobile: show description always under each card */}
                    <div className="mt-3 text-sm text-slate-600 lg:hidden">
                      {s.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail / single mixed card (appears on desktop) */}
          <div className="lg:col-span-5">
            <div className="hidden lg:block sticky top-28">
              <div className="bg-gradient-to-br from-white via-slate-50 to-white border border-gray-100 rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-50 to-cyan-50 flex items-center justify-center shrink-0">
                    <active.Icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="">
                    <h3 className="text-xl font-semibold text-slate-900">{active.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{active.short}</p>
                  </div>
                </div>

                <div className="mt-6 text-sm text-slate-700 leading-relaxed">
                  {active.desc}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
                  >
                    Contact sales
                  </a>
                 
                </div>
              </div>
            </div>

            {/* Mobile: an optional compact featured panel below cards */}
            <div className="lg:hidden mt-6">
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-md bg-gradient-to-br from-purple-50 to-cyan-50 flex items-center justify-center">
                    <active.Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-slate-900">{active.title}</div>
                    <div className="text-sm text-slate-500">{active.short}</div>
                  </div>
                </div>
                <div className="mt-3 text-sm text-slate-700">{active.desc}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------
   SVG icons (top)
   ------------------- */

function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M22 16.92v3a1 1 0 01-1.09 1 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 013.08 3.09 1 1 0 014.09 2h3a1 1 0 01.98.8 12.24 12.24 0 00.7 2.79 1 1 0 01-.24 1.03L7.6 8.6a16 16 0 006 6l1.99-1.92a1 1 0 011.03-.24 12.24 12.24 0 002.79.7 1 1 0 01.8.98z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconHeadset(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 13v-1a8 8 0 0116 0v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 14v2a2 2 0 002 2h1v-4H6a1 1 0 01-1 0z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 14v2a2 2 0 01-2 2h-1v-4h1a1 1 0 011 0z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconBot(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="6" y="7" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 11h.01M15 11h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 19v2M8 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconAiMl(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 3v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 8a7 7 0 0014 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12v9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 16h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconNLP(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M21 15a2 2 0 01-2 2H8l-5 3V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 8h10M7 12h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
