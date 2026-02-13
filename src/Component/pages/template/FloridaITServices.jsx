import React from "react";
import { Helmet } from "react-helmet";

const FloridaITServices = () => {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* SEO */}
      <Helmet>
        <title>
          IT Services in Florida | Managed IT, Cloud & Cybersecurity
        </title>
        <meta
          name="description"
          content="Serving Miami, Orlando, Tampa & Jacksonville, GlobalXperts offers Managed IT, AWS Cloud, cybersecurity, healthcare IT & field support across Florida."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          IT Services in Florida
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Managed IT, Cloud, and Cybersecurity solutions for businesses across
          Miami, Tampa, Orlando, Jacksonville, and Tallahassee.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            <span className="font-semibold">GlobalXperts</span> provides
            full-spectrum IT services in Florida, covering Miami, Tampa,
            Orlando, Jacksonville, and Tallahassee. Our services include{" "}
            <span className="font-medium">
              Managed IT, AWS Cloud, cybersecurity, virtualization, healthcare
              IT, and onsite field support
            </span>
            , ensuring Florida businesses have the tools to stay competitive.
          </p>

          <p>
            Whether you’re a <span className="font-semibold">healthcare provider</span> 
            in Miami, a <span className="font-semibold">tourism leader</span> in
            Orlando, or a <span className="font-semibold">financial firm</span>{" "}
            in Tampa, we deliver IT strategies that improve performance and
            security.
          </p>

          <p>
            Florida businesses operate in a dynamic environment with growing
            compliance requirements and customer expectations. GlobalXperts
            helps organizations overcome these challenges through{" "}
            <span className="font-medium">
              cloud migrations, HIPAA-compliant healthcare solutions, 24/7
              managed services, and local engineers
            </span>{" "}
            who can resolve issues onsite.
          </p>

          <p>
            With us as your IT partner, your Florida business gains the{" "}
            <span className="font-semibold">
              agility, protection, and scalability
            </span>{" "}
            needed to succeed in today’s market.
          </p>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Serving Florida’s Key Industries
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
            <p className="text-sm text-gray-600">
              HIPAA-compliant healthcare IT services for providers in Miami and
              beyond.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Tourism</h3>
            <p className="text-sm text-gray-600">
              Scalable IT infrastructure supporting Orlando’s tourism and
              hospitality industry.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Finance</h3>
            <p className="text-sm text-gray-600">
              Secure cloud and cybersecurity solutions for Florida’s financial
              sector.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Logistics</h3>
            <p className="text-sm text-gray-600">
              Reliable IT systems to streamline Florida’s transportation and
              logistics operations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Partner with GlobalXperts in Florida
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Empower your business with Managed IT, Cloud, and Cybersecurity
          services across Miami, Tampa, Orlando, and beyond.
        </p>
        <a
          href="/contact-us"
          className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Contact Our Florida Team
        </a>
      </section>
    </div>
  );
};

export default FloridaITServices;
