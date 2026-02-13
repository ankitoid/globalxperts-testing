import React from "react";
import { Helmet } from "react-helmet";

const NewYorkITServices = () => {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* SEO */}
      <Helmet>
        <title>
          IT Services in New York | Managed IT, Cloud & Cybersecurity
        </title>
        <meta
          name="description"
          content="From NYC to Buffalo, GlobalXperts delivers Managed IT, AWS Cloud, cybersecurity, virtualization, healthcare IT & onsite IT support across New York."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          IT Services in New York
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Managed IT, Cloud, and Cybersecurity solutions for businesses across
          New York City, Buffalo, Rochester, Albany, and Syracuse.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            <span className="font-semibold">GlobalXperts</span> supports
            organizations across New York City, Buffalo, Rochester, Albany, and
            Syracuse with comprehensive IT services that keep pace with the
            state’s fast-moving economy. From{" "}
            <span className="font-medium">
              24/7 Managed IT Services, AWS Cloud consulting, cybersecurity,
              virtualization, and healthcare IT
            </span>
            , our certified engineers deliver secure, scalable, and reliable
            solutions that empower businesses in{" "}
            <span className="font-semibold">
              finance, healthcare, education, and technology
            </span>
            .
          </p>

          <p>
            New York companies face unique challenges — strict compliance
            demands, global client bases, and the need for always-on
            availability. GlobalXperts helps meet these demands with{" "}
            <span className="font-medium">
              cloud-first strategies, proactive monitoring, HIPAA and PCI-DSS
              compliance support
            </span>
            , and field engineers ready for onsite services across the state.
          </p>

          <p>
            Whether you’re a{" "}
            <span className="font-semibold">financial firm</span> in Manhattan, a{" "}
            <span className="font-semibold">hospital</span> in Buffalo, or a{" "}
            <span className="font-semibold">university</span> in Albany, we
            ensure your IT environment drives{" "}
            <span className="font-semibold">innovation and resilience</span>.
          </p>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Serving New York’s Key Industries
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Finance</h3>
            <p className="text-sm text-gray-600">
              Enterprise-grade IT and compliance solutions for financial firms in
              Manhattan and beyond.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
            <p className="text-sm text-gray-600">
              HIPAA-compliant healthcare IT services for hospitals and clinics
              across New York.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-sm text-gray-600">
              Reliable IT support for schools, colleges, and universities across
              the state.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Technology</h3>
            <p className="text-sm text-gray-600">
              Scalable cloud and cybersecurity solutions for startups and tech
              enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Partner with GlobalXperts in New York
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Empower your business with Managed IT, Cloud, and Cybersecurity
          services across NYC, Buffalo, Albany, and beyond.
        </p>
        <a
          href="/contact-us"
          className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Contact Our New York Team
        </a>
      </section>
    </div>
  );
};

export default NewYorkITServices;
