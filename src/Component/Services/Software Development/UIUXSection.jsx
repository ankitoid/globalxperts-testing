export default function UIUXSection() {
  const features = [
    {
      title: "User-Centered Design",
      desc: "We design interfaces grounded in real user behavior, ensuring intuitive navigation and frictionless journeys.",
    },
    {
      title: "Scalable Design Systems",
      desc: "Reusable components and design tokens that scale seamlessly with your product and engineering teams.",
    },
    {
      title: "Performance-First UI",
      desc: "Optimized layouts, minimal reflows, and responsive interactions for lightning-fast experiences.",
    },
    {
      title: "Accessibility & Compliance",
      desc: "WCAG-aligned designs that ensure inclusivity, readability, and usability for all users.",
    },
    {
      title: "UX Research & Validation",
      desc: "Wireframes, prototypes, and usability testing to validate ideas before engineering investment.",
    },
    {
      title: "Conversion-Focused UX",
      desc: "Strategic layouts and flows that guide users toward actions — signups, engagement, and retention.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 px-6">

      {/* subtle background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            UI & UX Engineering Excellence
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We bridge design and engineering to deliver interfaces that are
            intuitive, scalable, accessible, and built for real-world users.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="
                group relative overflow-hidden rounded-2xl
                bg-white border border-gray-200 p-8
                shadow-sm transition-all duration-500
                hover:-translate-y-2 hover:shadow-2xl
              "
            >
              {/* Gradient top bar */}
              <div className="
                absolute top-0 left-0 h-1 w-full
                bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
                scale-x-0 group-hover:scale-x-100
                origin-left transition-transform duration-500
              " />

              {/* Soft gradient hover background */}
              <div className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                bg-gradient-to-br from-blue-50 via-white to-indigo-50
                transition-opacity duration-500
              " />

              <div className="relative z-10">
                {/* Accent dot */}
                <div className="w-10 h-10 mb-4 rounded-xl
                  bg-blue-100 text-blue-600
                  flex items-center justify-center
                  font-bold text-lg
                  group-hover:bg-blue-600 group-hover:text-white
                  transition-colors duration-300">
                  {idx + 1}
                </div>

                <h3 className="
                  text-xl font-semibold text-gray-900 mb-3
                  group-hover:text-blue-600 transition-colors
                ">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
