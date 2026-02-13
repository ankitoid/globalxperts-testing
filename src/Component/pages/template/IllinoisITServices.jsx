import React from "react";
import { Helmet } from "react-helmet";

const IllinoisITServices = () => {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* SEO */}
      <Helmet>
        <title>
          IT Services in Illinois | Managed IT, Cloud & Cybersecurity
        </title>
        <meta
          name="description"
          content="GlobalXperts provides Managed IT, AWS Cloud, cybersecurity, healthcare IT & onsite field services for businesses across Chicago, Springfield & Naperville."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          IT Services in Illinois
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          End-to-end Managed IT, Cloud, and Cybersecurity services for businesses in
          Chicago, Springfield, Peoria, Naperville, and Rockford.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            <span className="font-semibold">GlobalXperts</span> delivers
            comprehensive IT services across Illinois, supporting businesses in
            Chicago, Springfield, Peoria, Naperville, and Rockford. Our offerings
            include{" "}
            <span className="font-medium">
              Managed IT, AWS Cloud consulting, cybersecurity, virtualization,
              healthcare IT, and IT field services
            </span>
            , tailored for industries like manufacturing, healthcare, finance,
            and education.
          </p>

          <p>
            Whether you’re a <span className="font-semibold">hospital</span> in
            Chicago or a <span className="font-semibold">manufacturing firm</span>{" "}
            in Peoria, we design IT strategies that drive efficiency and
            compliance.
          </p>

          <p>
            Illinois businesses face increasing demands for secure, scalable, and
            cost-efficient IT systems. GlobalXperts provides{" "}
            <span className="font-medium">
              24/7 IT monitoring, cloud optimization, HIPAA and NIST compliance,
              and onsite engineers
            </span>{" "}
            for statewide coverage.
          </p>

          <p>
            With our combination of local presence and global expertise, Illinois
            businesses gain a reliable technology partner that ensures their IT
            environment is built to support{" "}
            <span className="font-semibold">growth and resilience</span>.
          </p>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Supporting Illinois Industries
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
            <p className="text-sm text-gray-600">
              Scalable IT systems to boost efficiency for Illinois manufacturers.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
            <p className="text-sm text-gray-600">
              HIPAA-compliant IT solutions for hospitals and healthcare providers.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Finance</h3>
            <p className="text-sm text-gray-600">
              Secure and compliant IT services for banks and financial firms.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-sm text-gray-600">
              Reliable IT infrastructure supporting Illinois schools and
              universities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Your Trusted Illinois IT Partner
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Partner with GlobalXperts for Managed IT, Cloud, and Cybersecurity
          services that power your business across Chicago, Springfield,
          Naperville, and beyond.
        </p>
        <a
          href="/contact-us"
          className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Contact Our Illinois Team
        </a>
      </section>
    </div>
  );
};

export default IllinoisITServices;
