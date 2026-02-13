import React, { useRef } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactCard from "../Contact/ContactCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Energy = () => {
  const contactRef = useRef(null);

  return (
    <>
    <Helmet>
      <title>Energy Solutions - GlobalXperts </title>
      <meta name="description" content="GlobalXperts delivers IT solutions for the energy sector: secure infrastructure, operational efficiency & cloud-enabled systems designed for utilities and power companies. " />
    </Helmet>
      <div className="w-full">
        <Navbar />
        <div className=" bg-blueCustomColor  w-full">
          <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
            <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
              <div className="w-full  text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-3xl sm:mt-20 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                  Energy{" "}
                </h1>
                <div className="md:px-0 px-20 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    to="/contact-us"
                    className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="w-full text-center lg:text-left mt-10 lg:mt-20 order-3 lg:order-2 p-3">
                <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                Innovative IT solutions for the energy sector. We help optimize operations, ensure compliance, and drive efficiency with tailored technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white mt-4">
          <div className="p-6 max-w-6xl mx-auto">
            {/* Energy Solutions Section */}
            <div className="py-10 flex flex-col lg:flex-row items-center justify-between">
              <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  Energy Solutions
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Innovative IT solutions for the energy sector. We help
                  optimize operations, ensure compliance, and drive efficiency
                  with tailored technology.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <img
                  className="w-full rounded-lg"
                  src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Industries/energy.webp"
                  alt="Energy sector solutions"
                />
              </div>
            </div>
            {/* <button
              onClick={handleContactUsClick}
              className="px-6 py-2 mt-4 border-2 bg-greenCustomColor2 text-white font-semibold rounded-md hover:bg-blueCustomColor hover:text-white transition-colors duration-300 shadow-md"
            >
              Contact Us
            </button> */}
          </div>

          {/* Overview Section */}
          <div className="w-full px-4 mt-10">
            <h2 className="text-3xl font-bold text-center">Overview</h2>
            <p className="text-center mt-4 text-lg text-gray-700">
              We offer end-to-end IT solutions for the energy sector, from
              network design to cybersecurity and cloud integration.
            </p>
            <div className="mt-6 max-w-4xl mx-auto">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Our Expertise</h3>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>
                    IT Consulting: Enhancing operational efficiency and cost
                    savings.
                  </li>
                  <li>
                    Cybersecurity: Protecting critical infrastructure from cyber
                    threats.
                  </li>
                  <li>
                    Data Analytics: Optimizing energy production and
                    distribution.
                  </li>
                  <li>
                    Cloud Integration: Scalable and flexible cloud solutions.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Customized Security Solutions Section */}
          <div className="bg-blueCustomColor p-8 mt-10">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
              <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                <h2 className="text-3xl font-bold text-white">
                  Security Solutions
                </h2>
                <p className="mt-3 text-lg text-gray-300">
                  Tailored security solutions to protect energy assets and
                  manage risks.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <img
                  className="w-full rounded-lg"
                  src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Industries/securitySol.webp"
                  alt="Security Solutions"
                />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div ref={contactRef} className="mt-12 p-2">
            <ContactCard />
          </div>
        </div>
        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Energy;
