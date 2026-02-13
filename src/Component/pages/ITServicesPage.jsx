import React from "react";
import { motion } from "framer-motion";
import {
  FaServer,
  FaCloud,
  FaShieldAlt,
  FaHospital,
  FaTools,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const hubs = [
  {
    state: "California",
    city: "San Francisco & Los Angeles",
    desc: "Supporting startups and enterprises with 24/7 managed IT, cloud, and cybersecurity.",
    icon: <FaServer className="text-4xl text-blue-600" />,
    link: "/it-services-california",
  },
  {
    state: "Texas",
    city: "Dallas & Houston",
    desc: "Healthcare IT, HIPAA compliance, and robust field support for critical operations.",
    icon: <FaHospital className="text-4xl text-green-600" />,
    link: "/it-services-texas",
  },
  {
    state: "New York",
    city: "NYC & Albany",
    desc: "Financial firms and SMBs gain cloud optimization and enterprise security.",
    icon: <FaShieldAlt className="text-4xl text-purple-600" />,
    link: "/it-services-new-york",
  },
  {
    state: "Florida",
    city: "Miami",
    desc: "Agile IT solutions for diverse industries with responsive onsite support.",
    icon: <FaTools className="text-4xl text-yellow-600" />,
    link: "/it-services-florida",
  },
  {
    state: "Illinois",
    city: "Chicago",
    desc: "Manufacturers and enterprises thrive with scalable virtualization & IT services.",
    icon: <FaCloud className="text-4xl text-pink-600" />,
    link: "/it-services-illinois",
  },
];
export default function ITServicesPage() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          IT Services Across the USA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg md:text-xl"
        >
          At GlobalXperts, we provide end-to-end IT services across California,
          Texas, New York, Florida, and Illinois. From 24/7 Managed IT to AWS
          Cloud consulting and cybersecurity, we deliver scalable, secure, and
          cost-efficient solutions tailored to your business.
        </motion.p>
        {/* <div className="mt-6">
          <Link
            to="/services"
            className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
          >
            Explore Services
          </Link>
        </div> */}
      </section>

      {/* Hubs Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Our Technology Hubs
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {hubs.map((hub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <Link to={hub.link}>
                <div className="flex items-center gap-4 mb-4">
                  {hub.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {hub.state}
                    </h3>
                    <p className="text-sm text-gray-600">{hub.city}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {hub.desc}
                </p>
                <span className="block mt-3 text-blue-700 font-semibold hover:underline">
                  Learn More →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Your Trusted Managed Service Provider
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          With certified engineers, a proactive service model, and a nationwide
          presence, GlobalXperts is your long-term technology partner for
          growth, compliance, and security.
        </p>
        <Link
          href="/contact-us"
          className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Get Started Today
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700 py-6 text-center text-sm">
        © {new Date().getFullYear()} GlobalXperts. All rights reserved.
      </footer>
    </div>
  );
}
