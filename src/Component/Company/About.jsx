import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import Navbar from "../Navbar";
import Footer from "../Footer";

import ContactCard from "../Contact/ContactCard";
import { Helmet } from "react-helmet";
import { SiTransmission } from "react-icons/si";
import { GiNightVision } from "react-icons/gi";

const About = () => {
  const navigate = useNavigate();

  const AboutVideoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "About GlobalXperts",
    description:
      "we provide tailored solutions designed to meet your unique needs, whether it’s improving operational efficiency, securing your infrastructure, or scaling your IT capabilities, our commitment to excellence ensures that we don’t just meet expectations—we exceed them.",
    thumbnailUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/imageAbout.webp",
    uploadDate: "2025-03-07",
    contentUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/About3.mp4",
    embedUrl: "https://www.globalxperts.net/Company/About-us",
  };
  return (
    <>
      <Helmet>
        <title>About Us - GlobalXperts </title>
        <meta
          name="description"
          content="GlobalXperts is your U.S. partner for IT strategy, cloud migration and ongoing managed services - trusted experts helping companies thrive with technology. "
        />
        <meta
          name="keywords"
          content="About GlobalXperts Inc., Managed IT Services Raleigh, AWS Cloud Consulting Raleigh, Cybersecurity Raleigh, Field Engineering Raleigh, IT Consulting Raleigh, Remote IT Support, Endpoint Security, Proactive Maintenance, AWS Migration Raleigh, SIEM, Threat Detection, On-site IT Support Raleigh, Digital Transformation Raleigh, Tech Stack Modernization"
        />

        <meta
          property="og:title"
          content="About - GlobalXperts Inc. | Raleigh IT Services & Consulting"
        />
        <meta
          property="og:description"
          content="Learn about GlobalXperts, a trusted MSP delivering innovative IT solutions, certified services, and cloud expertise across the US."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://globalxperts.net/about" />
        <meta
          property="og:image"
          content="https://globalxperts.net/images/social-banner.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About - GlobalXperts Inc." />
        <meta
          name="twitter:description"
          content="Trusted IT solutions provider in Raleigh – offering AWS, cybersecurity, managed services, and more."
        />
        <meta
          name="twitter:image"
          content="https://globalxperts.net/images/twitter-banner.jpg"
        />

        <meta
          property="og:description"
          content="Find answers to common IT service questions in Raleigh. Learn about our managed IT services for small businesses, AWS migration support, cybersecurity solutions, and more."
        />
        <meta
          name="og:keywords"
          content="Raleigh IT Services FAQ, Managed IT for Small Business Raleigh, AWS Migration Raleigh, Cybersecurity Raleigh, IT Support Raleigh, Cloud Services Raleigh, Field Engineering Raleigh"
        />

        <script type="application/ld+json">
          {JSON.stringify(AboutVideoJsonLd)}
        </script>
      </Helmet>
      <Navbar />
      <div
        className="bg-blueCustomColor text-white min-h-screen flex items-center justify-center bg-cover bg-center mt-0 bg-fixed	"
        loading="lazy"
        alt="People in an office setting"
        style={{
          backgroundImage: `url(https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/imageAbout.webp)`,
        }}
      >
        <div className="2xl:max-w-7xl w-full mx-auto text-left justify-center px-8 ">
          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold mb-64 top-7">
            Discover how the world works with <br></br>GlobalXperts
          </h1>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4  justify-center 2xl:mt-96 ">
            <button
              onClick={() => navigate("/insights/media-library")}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
            >
              Read Brochures
            </button>
            <button
              onClick={() => navigate("/insights/caseStudies")}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              View CaseStudies
            </button>
          </div>
        </div>
      </div>

      <div className="2xl:max-w-7xl  2xl:mx-auto w-full flex flex-col md:flex-row p-5 mt-10 gap-4">
        <div className="w-full rounded-lg">
          <video
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/About3.mp4"
            className="h-full w-full object-cover rounded-md"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>
        <div className="w-full mx-5 mt-5 md:mt-0">
          <h1 className="text-3xl sm:text-4xl text-center py-5 text-black font-bold">
            About GlobalXperts
          </h1>
          <p className="text-lg px-2 font-medium">
            At GlobalXperts, we understand that no two businesses are the same.
            That’s why we provide tailored solutions designed to meet your
            unique needs, whether it’s improving operational efficiency,
            securing your infrastructure, or scaling your IT capabilities, our
            commitment to excellence ensures that we don’t just meet
            expectations—we exceed them.
          </p>
        </div>
      </div>

      <div className="bg-blueCustomColor w-full">
        <div className="2xl:max-w-7xl 2xl:mx-auto w-full flex flex-col md:flex-row p-5 mt-10 gap-4 2xl:py-16">
          <div className="w-full rounded-lg flex justify-center items-center">
            <p className="text-lg text-white sm:text-xl text-center">
              Welcome to GlobalXperts, your trusted partner in managed IT
              solutions. Based in the heart of Raleigh, North Carolina, we
              specialize in delivering comprehensive IT services that empower
              businesses to thrive in an ever-evolving digital landscape.
            </p>
          </div>
          <div className="w-full  mt-5 md:mt-0 ">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/About.webp"
              alt="People in an office setting"
            />
          </div>
        </div>
      </div>

      {/* What we do */}
      <div className="2xl:max-w-7xl 2xl:mx-auto mt-10">
        <div className="bg-gray-100 py-16 px-8">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
            {/* Left Section */}
            <div className="flex flex-col space-y-8 md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                What We Do
              </h2>
              <p className="text-xl text-gray-900">
                As a full-service Managed Service Provider (MSP), we deliver a
                wide range of IT solutions designed to simplify technology and
                enable growth:
              </p>
              <ul className="list-disc list-inside text-black space-y-4">
                <li>
                  <strong>Proactive IT Management:</strong> End-to-end
                  monitoring, maintenance, and support to keep your business
                  running seamlessly.
                </li>
                <li>
                  <strong>Cybersecurity Services:</strong> Advanced protection
                  against evolving threats, ensuring your data and systems are
                  secure.
                </li>
                <li>
                  <strong>Cloud Solutions:</strong> Expertise in migrations,
                  optimization, and management for AWS, Azure, and hybrid
                  environments.
                </li>
                <li>
                  <strong>Data Backup & Disaster Recovery:</strong> Robust
                  strategies to safeguard your data and minimize downtime in any
                  scenario.
                </li>
              </ul>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => navigate("/contact-us")}
              >
                Contact
              </button>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2">
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/CollegrationAbout.webp"
                alt="People talking"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="text-left mt-8">
                <ul>
                  <li>
                    <strong>Helpdesk Support:</strong> Responsive, 24/7
                    assistance for your IT needs, so you’re never left without
                    support.
                  </li>
                  <li>
                    <strong>Network Design & Optimization:</strong> Scalable,
                    high-performance networks tailored to your business demands.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why choose GlobalXperts */}
      <div className="2xl:max-w-7xl 2xl:mx-auto mt-10 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold py-4 text-center">
          Why GlobalXperts?
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
          Choosing the right MSP isn’t just about solving IT challenges—it’s
          about finding a partner you can trust to drive innovation and growth.
          Here’s why businesses across the USA choose GlobalXperts:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Unmatched Expertise */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/AboutUM.webp"
              className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"
              alt="Unmatched Expertise"
            />
            <h3 className="text-xl font-bold mb-4">Unmatched Expertise</h3>
            <p className="text-gray-600 text-base">
              From small businesses to enterprises, our certified professionals
              deliver solutions that help your business succeed.
            </p>
          </div>

          {/* Customer-Centric Approach */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/AboutCCA.webp"
              className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"
              alt="Customer-Centric Approach"
            />
            <h3 className="text-xl font-bold mb-4">
              Customer-Centric Approach
            </h3>
            <p className="text-gray-600 text-base">
              We listen, understand, and tailor strategies to align with your
              goals.
            </p>
          </div>

          {/* Proactive Problem Solving */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/aboutPS.webp"
              className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"
              alt="Proactive Problem Solving"
            />
            <h3 className="text-xl font-bold mb-4">
              Proactive Problem Solving
            </h3>
            <p className="text-gray-600 text-base">
              Our proactive approach minimizes disruptions and ensures your IT
              stays ahead of the curve.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 mt-16">
          {/* Mission and Vision Section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 ">
            {/* Mission Box */}
            <div className="bg-gray-100 rounded-xl shadow-lg p-8 flex flex-col items-center text-center md:w-1/2 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-200 rounded-full p-6 mb-4 ">
                <SiTransmission />
              </div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses with innovative, reliable, and
                cost-effective IT solutions that drive success in a connected
                world.
              </p>
            </div>

            {/* Vision Box */}
            <div className="bg-gray-100 rounded-xl shadow-lg p-8 flex flex-col items-center text-center md:w-1/2 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-200 rounded-full p-6 mb-4">
                <GiNightVision />
              </div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-4 flex h-[60px] lg:h-auto">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be the go-to MSP for businesses seeking trusted,
                transformative IT partnerships.
              </p>
            </div>
          </div>

          {/* Closing Section */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Let’s Build the Future Together
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
              At GlobalXperts, we’re not just an IT provider—we’re your partner
              in growth. Whether you need help navigating today’s challenges or
              planning for tomorrow’s opportunities, our team is ready to
              deliver the expertise and support you need.
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Contact us today to discover how we can help you harness the power
              of technology to achieve your goals.
            </p>
            {/* <button
              onClick={() => alert("Contact Us!")} // Replace with your contact form functionality
              className="bg-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Us
            </button> */}
          </div>
        </div>
      </div>

      <div className="mt-8 p-4">
        <ContactCard />
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </>
  );
};

export default About;
