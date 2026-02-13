const engagementModels = [
  {
    title: "Fixed Price",
    desc: "Best for well-defined projects with clear scope.",
    active: false,
  },
  {
    title: "Dedicated Team",
    desc: "Extension of your internal team for long-term projects.",
    active: true,
  },
  {
    title: "Time & Material",
    desc: "Flexible model for evolving requirements.",
    active: false,
  },
];

export function EngagementModelsSection() {
  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      
      {/* subtle background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
          Engagement Models
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {engagementModels.map((model, idx) => (
            <div
              key={idx}
              className={`
                group relative overflow-hidden rounded-2xl p-8
                border transition-all duration-500
                ${
                  model.active
                    ? "border-blue-500 bg-blue-50 shadow-2xl -translate-y-2"
                    : "border-gray-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl"
                }
              `}
            >
              {/* Top gradient bar */}
              <div
                className={`
                  absolute top-0 left-0 h-1 w-full
                  bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
                  transition-transform duration-500
                  ${model.active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                  origin-left
                `}
              />

              {/* Glow for active */}
              {model.active && (
                <div className="absolute inset-0 bg-blue-200/30 blur-2xl opacity-40" />
              )}

              <div className="relative z-10">
                {/* Badge */}
                {model.active && (
                  <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold rounded-full bg-blue-600 text-white">
                    Recommended
                  </span>
                )}

                <h3
                  className={`text-xl font-semibold mb-4 transition-colors
                    ${
                      model.active
                        ? "text-blue-700"
                        : "text-gray-800 group-hover:text-blue-600"
                    }`}
                >
                  {model.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {model.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
