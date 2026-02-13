import React from "react";
import { Helmet } from "react-helmet";

const TexasITServices = () => {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* SEO */}
      <Helmet>
        <title>
          IT Services in Texas | Managed IT, Cloud & Cybersecurity
        </title>
        <meta
          name="description"
          content="GlobalXperts provides Managed IT, AWS Cloud, cybersecurity, healthcare IT & onsite field support in Dallas, Houston, Austin, San Antonio & Fort Worth."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          IT Services in Texas
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          End-to-end Managed IT, Cloud, and Cybersecurity services across
          Dallas, Houston, Austin, San Antonio, and Fort Worth.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            <span className="font-semibold">GlobalXperts</span> delivers
            end-to-end IT services in Texas, covering Dallas, Houston, Austin,
            San Antonio, and Fort Worth. Our offerings include{" "}
            <span className="font-medium">
              Managed IT, AWS Cloud consulting, cybersecurity, virtualization,
              healthcare IT, and IT field services
            </span>
            , helping Texas businesses thrive in fast-changing industries.
          </p>

          <p>
            From <span className="font-semibold">oil and gas</span> in Houston to{" "}
            <span className="font-semibold">healthcare</span> in Dallas and{" "}
            <span className="font-semibold">tech startups</span> in Austin, we
            provide IT strategies tailored to your specific business landscape.
          </p>

          <p>
            As a trusted Texas MSP, we combine{" "}
            <span className="font-medium">local responsiveness</span> with{" "}
            <span className="font-medium">global capability</span>. Our team
            ensures secure and scalable IT infrastructures that reduce downtime,
            optimize cloud spend, and safeguard data under{" "}
            <span className="font-semibold">HIPAA and NIST standards</span>.
          </p>

          <p>
            With 24/7 monitoring, proactive maintenance, and engineers available
            for onsite field support, GlobalXperts is the{" "}
            <span className="font-semibold">technology partner Texas businesses
            can rely on</span> to stay ahead.
          </p>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Supporting Texas Industries
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Oil & Gas</h3>
            <p className="text-sm text-gray-600">
              Secure IT solutions supporting Houston’s energy and oil industry.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
            <p className="text-sm text-gray-600">
              HIPAA-compliant healthcare IT systems and 24/7 support in Dallas.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Technology</h3>
            <p className="text-sm text-gray-600">
              Scalable cloud and cybersecurity for Austin’s startup ecosystem.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-sm text-gray-600">
              IT infrastructure and security solutions for schools and
              universities statewide.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Partner with GlobalXperts in Texas
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Build resilience, scalability, and security with our Managed IT, Cloud,
          and Cybersecurity services across Dallas, Houston, Austin, San Antonio,
          and beyond.
        </p>
        <a
          href="/contact-us"
          className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Contact Our Texas Team
        </a>
      </section>
    </div>
  );
};

export default TexasITServices;
