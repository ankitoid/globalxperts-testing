import React from "react";
import { Helmet } from "react-helmet"; // for SEO tags

const CaliforniaITService = () => {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* SEO */}
      <Helmet>
        <title>
          IT Services in California | Managed IT, Cloud & Cybersecurity
        </title>
        <meta
          name="description"
          content="GlobalXperts delivers Managed IT, AWS Cloud, cybersecurity, healthcare IT & onsite support across Los Angeles, San Francisco, San Diego & beyond."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          IT Services in California
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Comprehensive IT solutions for businesses across Los Angeles, San
          Francisco, San Diego, San Jose, and Sacramento.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            At <span className="font-semibold">GlobalXperts</span>, we provide
            comprehensive IT services across California, supporting businesses
            in Los Angeles, San Francisco, San Diego, San Jose, and Sacramento.
            Our certified team delivers{" "}
            <span className="font-medium">
              Managed IT, AWS Cloud, cybersecurity, virtualization, healthcare
              IT, and field support
            </span>
            , ensuring your business runs with reliability and agility.
          </p>

          <p>
            Whether you’re a <span className="font-semibold">startup</span> in
            Silicon Valley or an{" "}
            <span className="font-semibold">established enterprise</span> in Los
            Angeles, we help you leverage technology to scale operations,
            protect sensitive data, and meet compliance requirements.
          </p>

          <p>
            California’s diverse industries — from{" "}
            <span className="font-semibold">tech and healthcare</span> to{" "}
            <span className="font-semibold">entertainment and manufacturing</span>{" "}
            — demand tailored IT solutions. GlobalXperts meets these needs with{" "}
            <span className="font-medium">
              proactive 24/7 monitoring, secure cloud migrations, HIPAA-compliant
              healthcare systems, and onsite engineers
            </span>{" "}
            available across the state.
          </p>

          <p>
            With us as your partner, you gain{" "}
            <span className="font-semibold">responsive local support</span>{" "}
            backed by nationwide expertise, enabling your California business to
            grow securely in today’s digital-first world.
          </p>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Serving California’s Leading Industries
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Technology</h3>
            <p className="text-sm text-gray-600">
              Supporting Silicon Valley startups and tech enterprises with
              scalable IT infrastructure.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
            <p className="text-sm text-gray-600">
              HIPAA-compliant healthcare IT solutions and secure patient data
              management.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Entertainment</h3>
            <p className="text-sm text-gray-600">
              Secure and agile IT services for California’s entertainment
              industry.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
            <p className="text-sm text-gray-600">
              Reliable IT infrastructure and disaster recovery for manufacturers
              in California.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Partner with GlobalXperts in California
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Get reliable Managed IT, Cloud, and Cybersecurity solutions tailored
          to California’s businesses — from San Francisco to Los Angeles and
          beyond.
        </p>
        <a
          href="/contact-us"
          className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Contact Our California Team
        </a>
      </section>
    </div>
  );
};

export default CaliforniaITService;
