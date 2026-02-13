import React from "react";
import { Link } from "react-router-dom";
import { FaServer, FaWifi, FaCheckCircle } from "react-icons/fa";
import { MdAssessment } from "react-icons/md";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar";
const SiteSurveys = () => {
  return (
    <>
    <Helmet>
        <title>Site Surveys</title>
        <meta name="description" content="Professional IT site survey services for network design, wireless planning, and infrastructure optimization by GlobalXperts." />
          <link rel="canonical" href="https://globalxperts.net/service/professional-services/site-surveys" />

    </Helmet>
    <Navbar/>
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Site Surveys | Data Center | Wireless
              </h1>
              <div className="px-20 lg:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-center lg:text-left mt-10 lg:mt-20 order-3 lg:order-2">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                Looking for a reliable and experienced team to conduct
                professional site surveys? We can help. Let us provide you with
                the reports and insights that help your business to make the
                best use of your site. Contact us today to learn more!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-5xl text-center font-bold text-gray-700 mb-6">
          Value Proposition
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          We have assembled a team of highly skilled professionals who can
          gather the information you need about your site. Let us handle the
          fine details, so you can focus on what differentiates your business.
        </p>

        <div className="bg-gray-100 2xl:bg-white py-8 md:p-10 mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Pre-Data Center Card */}
            <div className="bg-white shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="flex items-center justify-center bg-blue-100 rounded-full w-16 h-16 text-blue-600 mb-4">
                <FaServer className="text-3xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Pre-Data Center
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                You can rest assured that your data center relocation will go
                smoothly. Our team will identify any potential issues and
                provide you with a comprehensive report that outlines all of the
                necessary steps to ensure a successful transition.
              </p>
            </div>

            {/* Wireless Surveys Card */}
            <div className="bg-white shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="flex items-center justify-center bg-teal-100 rounded-full w-16 h-16 text-teal-600 mb-4">
                <FaWifi className="text-3xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Wireless Surveys
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                We provide you with the information you need to design, install,
                and optimize your wireless network. We’ll help you identify the
                best locations for access points, assess signal strength and
                coverage, and make recommendations for improving your wireless
                network.
              </p>
            </div>

            {/* Additional Service Card */}
          </div>
        </div>
      </div>

      <div className="mt-4 mb-4">
        <ContactCard />
      </div>
      <Footer />
    </>
  );
};

export default SiteSurveys;
