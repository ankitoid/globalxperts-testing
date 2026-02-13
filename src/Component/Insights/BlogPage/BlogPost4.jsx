import React from 'react';
import Navbar from '../../Navbar';
import ContactCard from '../../Contact/ContactCard';
import Footer from '../../Footer';
import { Helmet } from 'react-helmet';

const BlogPost4 = () => {
  return (
    <>
    <Helmet>
        <title>GlobalXperts Awarded 8(a) STARS III GWAC</title>
        <meta name="description" content="Case study: Cisco Telepresence deployment for Towne Bank to enhance remote collaboration and enterprise communication efficiency." />
          <link rel="canonical" href="https://globalxperts.net/awarded-8a-stars-iii-gwac" />

    </Helmet>
      <Navbar />
      <div className="flex justify-center items-center bg-gray-100 py-12">
        <div className="bg-white max-w-6xl w-full p-6 sm:p-8 rounded-lg shadow-md text-gray-800">
          <h1 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4 text-center">
            GlobalXperts Awarded 8(a) STARS III GWAC
          </h1>
          <h2 className="text-lg sm:text-xl text-gray-700 mb-2 text-center">
            New STARS GWAC has a $50 billion ceiling and focuses on emerging technologies
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mb-6 text-justify">
            RALEIGH, N.C., December 7, 2021 (Newswire.com) – GlobalXperts Inc. is pleased to announce that they have received an award on the General Services Administration (GSA) 8(a) Streamlined Technology Acquisition Resources for Services (STARS) III Government-wide Acquisition Contract (GWAC) vehicle.
          </p>

          <p className="text-gray-700 text-sm sm:text-lg mb-4 text-justify">
            The STARS III GWAC has a $50 billion ceiling over 10 years and offers government users flexible access to customized IT solutions and emerging technologies from a diverse pool of 8(a) industry partners.
          </p>

          <blockquote className="italic border-l-4 border-blue-600 pl-4 mb-4 text-gray-700">
            “I am delighted and proud of our team for securing an award on this important contract vehicle,” stated Neil Kumar, CTO, after receiving GSA’s award announcement. “Through hard work and planning, we were able to capture one of the sought-after awards on this crucial contract vehicle.”
          </blockquote>

          <p className="text-gray-700 text-sm sm:text-lg mb-4 text-justify">
            The 8(a) STARS GWACs are known governmentwide as best-in-class, easy-to-use, streamlined procurement solutions to purchase information technology services from 8(a) prime contractors. DoD and Civilian agencies throughout the government will benefit from obtaining their services from STARS prime contractors that have been preapproved and vetted.
          </p>

          <blockquote className="italic border-l-4 border-blue-600 pl-4 mb-4 text-gray-700">
            “This win marks an important achievement in GlobalXperts’ development enabling us to deliver advanced IT solutions and services to more customers,” Neil went on to say.
          </blockquote>

          <p className="text-gray-700 text-sm sm:text-lg mb-6 text-justify">
            For more information on GSA 8(a) STARS III, please visit the U.S. GSA website at:{" "}
            <a href="http://www.gsa.gov/stars3" className="text-blue-500 hover:underline">
              GSA 8(a) STARS III
            </a>
          </p>

          {/* <p className="text-gray-700 text-sm sm:text-lg mb-6 text-justify">
            For more information on GlobalXperts, please visit{" "}
            <a href="https://www.globalxperts.net" className="text-blue-500 hover:underline">
              www.globalxperts.net
            </a>, or check out our{" "}
            <a href="https://www.linkedin.com/company/globalxperts-inc-/mycompany/" className="text-blue-500 hover:underline">
              LinkedIn Overview
            </a>.
          </p> */}

          {/* <p className="text-gray-700 text-sm sm:text-lg mb-6 text-justify">
            To contact GlobalXperts, send us an email at{" "}
            <a href="mailto:marketing@globalxperts.net" className="text-blue-500 hover:underline">
              marketing@globalxperts.net
            </a>, or give us a call at (919) 342-5482.
          </p> */}
          <ContactCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost4;
