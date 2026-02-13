import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import ContactCard from "../Contact/ContactCard";
import Footer from "../Footer";

const Privatepolicy = () => {
  return (
    <>
      <Navbar />
      <Helmet>
        <title>Privacy Policy - GlobalXperts </title>
        <meta name="description" content=" Review how GlobalXperts collects, uses and protects your personal data. Our Privacy Policy details your rights and our USA-based IT services and cloud support." />
        <meta name="keywords" content="Privacy Policy" />
      </Helmet>
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-20 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Privacy Statement
              </h1>
              <div className="px-20 md:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-center lg:text-right mt-10 lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-base text-left lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                At GlobalXperts Inc., we respect your privacy and are committed
                to protecting your personal information.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 text-gray-700 py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto space-y-8">
          <p>
            This privacy statement explains how we collect, use, and share your
            personal information when you visit our website or use our online
            services.
          </p>
          <section title="Privacy Policy">
            <h3 className="text-xl font-semibold mb-4">
              What Information Do We Collect?
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Contact Information:</strong> Name, email address, phone
                number, and mailing address.
              </li>
              <li>
                <strong>Account Information:</strong> Username, password, and
                billing details.
              </li>
              <li>
                <strong>Usage Information:</strong> Pages visited, links
                clicked, and searches performed.
              </li>
              <li>
                <strong>Device Information:</strong> IP address, browser type,
                and operating system.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4">
              How Do We Use Your Information?
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Providing requested products and services.</li>
              <li>Communicating about accounts and transactions.</li>
              <li>Improving our website and online services.</li>
              <li>Sending marketing materials if opted-in.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4">
              How Do We Share Your Information?
            </h3>
            <p className="text-gray-700">
              We may share personal information with third-party service
              providers for operational purposes. We do not sell or rent
              personal information.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">Your Choices</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Opt-out of marketing emails via the unsubscribe link.</li>
              <li>
                Request access or deletion of data via our{" "}
                <Link  to="/contact-us" className="text-blue-400">
                  Contact Us
                </Link>{" "}
                page.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-4">Security</h3>
            <p className="text-gray-700">
              We take reasonable measures to protect your data but cannot
              guarantee absolute security.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-4">
              Changes to This Policy
            </h3>
            <p className="text-gray-700">
              We may update this policy. Significant changes will be notified
              via email or website announcements.
            </p>
          </section>
        </div>
      </div>

      <div className="bg-white py-8 p-4">
        <ContactCard />
      </div>
      <Footer />
    </>
  );
};

export default Privatepolicy;
