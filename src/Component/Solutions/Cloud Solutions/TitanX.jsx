import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

import {
  FaCloud,
  FaBriefcase,
  FaDatabase,
  FaUserFriends,
  FaLightbulb,
} from "react-icons/fa";
import { CgPerformance } from "react-icons/cg";
import ContactCard from "../../Contact/ContactCard";
import { Helmet } from "react-helmet";


const DataAssurance = () => {
  return (
    <>
      <Navbar />

      <Helmet>
        <title> Titan X - Data Transformation Solutions - GlobalXperts</title>
        <meta name="description" content="Unlock actionable insights with TitanX-powered data transformation by GlobalXperts - turn raw data into strategy, analytics & growth across your cloud ecosystem. " />
        <meta name="keywords" content="Data Transformation, Advanced Analytics, Automation, Scalable Architecture, TitanX Solutions" />
          <link rel="canonical" href="https://globalxperts.net/solutions/cloud-solutions/titanx-data-transformation" />

      </Helmet>

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
              Titan X - Data Transformation
              </h1>
              <div className="px-20 mdLpx-0 sm:w-auto flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-center lg:text-left mt-10 lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-base text-left lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
              A solution to protect and transform your data.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center mt-10 mb-8 ">Overview</h2>
      <p className="text-lg text-left mb-4  max-w-6xl mx-auto p-4 ">
        Are you concerned about the integrity of your data? Are you tired of
        worrying about the threat of breaches? Do you wish you could have a
        single pane of glass from which to manage your data? Meet Titan X, a
        cloud-based storage service that provides a secure, scalable, and
        cost-effective way to store and retrieve data.
      </p>
      {/*  boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12  mb-8 max-w-6xl mx-auto">
        {/*  Improved Productivity and Efficiency Card */}
        <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between md:min-h-[300px]  md:max-w-2xl max-w-xs sm:max-w-[200px] w-full mx-auto">
          <div className="flex flex-col items-center flex-grow">
            <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
              <CgPerformance />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
              Cutting-Edge Performance{" "}
            </h3>
            <p className="text-sm text-gray-600 mb-0 text-center">
              Say goodbye to delays and enjoy seamless access to your data
              whenever you need it. Experience lightning-fast upload and
              retrieval speeds, leveraging the cutting-edge infrastructure and
              network capabilities.
            </p>
          </div>
        </div>

        {/* Technology Refresh Card */}
        <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between md:min-h-[400px] md:max-w-2xl max-w-xs sm:max-w-[200px] w-full mx-auto">
          <div className="flex flex-col items-center flex-grow ">
            <div className="flex items-center justify-center bg-white  rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
              <FaCloud />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
              Reliability{" "}
            </h3>
            <p className="text-sm text-gray-600 mb-0 text-center">
              With a track record of 99.99% durability, your data always remains
              safe and accessible. Focus on your core business while we take
              care of your data protection.
            </p>
          </div>
        </div>

        {/* Onsite IT Support Card */}
        <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between md:min-h-[400px]  md:max-w-2xl max-w-xs sm:max-w-[200px] w-full mx-auto">
          <div className="flex flex-col items-center flex-grow">
            <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
              <FaBriefcase />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
              Flexibility and Scalability{" "}
            </h3>
            <p className="text-sm text-gray-600 mb-0 text-center">
              Optimize your storage costs with flexible pricing models. Pay only
              for the storage you use, eliminating unnecessary expenses and
              maximizing your return on investment. Adjust and scale your
              storage as your business grows.
            </p>
          </div>
        </div>

        <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between md:min-h-[400px]  md:max-w-xl max-w-xs sm:max-w-[200px] w-full mx-auto">
          <div className="flex flex-col items-center flex-grow">
            <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
              <FaUserFriends />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
              Data Management{" "}
            </h3>
            <p className="text-sm text-gray-600 mb-4   text-center">
              Easily manage growing volumes of data, reduce storage costs, and
              improve efficiency in your business operations. Stay ahead in the
              data game!
            </p>
          </div>
        </div>

        <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between md:min-h-[400px]  md:max-w-xl max-w-xs sm:max-w-[200px] w-full mx-auto">
          <div className="flex flex-col items-center flex-grow">
            <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
              <FaLightbulb />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-5 text-center">
              Rock Solid Security{" "}
            </h3>
            <p className="text-sm text-gray-600 mb-4 text-center">
              Benefit from encryption of data in transit and at rest. Make use
              of access control features and compliance certifications as well
              as audit logs, notifications, and API monitoring features to
              ensure that your data is safe at all times.
            </p>
          </div>
        </div>

        <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between md:min-h-[400px]  md:max-w-xl max-w-xs sm:max-w-[200px] w-full mx-auto">
          <div className="flex flex-col items-center flex-grow">
            <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
              <FaDatabase />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-5 text-center">
              Compliance and Governance{" "}
            </h3>
            <p className="text-sm text-gray-600 mb-4 text-center">
              Titan X adheres to industry-leading compliance standards,
              including HIPAA, GDPR, and PCI DSS. Rest assured that your data
              remains compliant with regulatory requirements, minimizing legal
              risks and protecting your company’s reputation.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center mt-10 mb-4">
        Service Packages
      </h2>
      <p className="text-lg text-center mb-8">
        With Titan X, you have options for how you would like to protect and
        analyze your data.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 max-w-6xl mx-auto">
        {/* Basic Tier – Data Assurance Card */}
        <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px] md:max-w-xl max-w-xs sm:max-w-[200px] mx-auto rounded-xl">
          <div className="flex flex-col items-center flex-grow">
            <h3 className="text-xl font-semibold text-blue-700 mb-2 text-center">
              Basic Tier – Data Assurance
            </h3>
            <div className="border-b-2 border-blue-700 w-full mb-4"></div>
            <ul className="text-md text-gray-600 mb-0 text-left list-disc ml-4">
              <li>
                Hybrid single back up plane for workloads on-prem and on AWS
              </li>
              <li>
                Default data restore in another zone within the same region
              </li>
              <li>Optional data restore in zone in another region</li>
              <li>Sensitive data discovery and handling</li>
              <li>
                Object storage bucket configuration, backup, audit, and
                notification
              </li>
            </ul>
          </div>
        </div>

        {/* Advanced Tier – Data Analytics Card */}
        <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px] md:max-w-xl max-w-xs sm:max-w-[200px] mx-auto rounded-xl">
          <div className="flex flex-col items-center flex-grow">
            <h3 className="text-xl font-semibold text-blue-700 mb-2 text-center">
              Advanced Tier – Data Analytics
            </h3>
            <div className="border-b-2 border-blue-700 w-full mb-4"></div>
            <ul className="text-md text-gray-600 mb-0 text-left list-disc ml-4">
              <li>Transformation or Enrichment of data in a raw bucket</li>
              <li>Data cleanup</li>
              <li>Creation of a lakehouse architecture</li>
              <li>SQL style query of transformed data</li>
              <li>Presentation dashboards</li>
            </ul>
          </div>
        </div>

        {/* Premium Tier – Data Insights Card */}
        <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px] md:max-w-xl max-w-xs sm:max-w-[200px] mx-auto rounded-xl">
          <div className="flex flex-col items-center flex-grow">
            <h3 className="text-xl font-semibold text-blue-700 mb-2 text-center">
              Premium Tier – Data Insights
            </h3>
            <div className="border-b-2 border-blue-700 w-full mb-4"></div>
            <ul className="text-md text-gray-600 mb-0 text-left list-disc ml-4">
              <li>Data Insights</li>
              <li>Build use case-specific out-of-box models.</li>
              <li>Build custom models.</li>
              <li>Build foundational models & LLMs for specific domains.</li>
            </ul>
          </div>
        </div>
      </div>


      <div className="relative mt-4 bg-white 2xl:bg-gray-100 rounded-2xl shadow-lg p-8  flex items-center flex-col lg:flex-row justify-between max-w-6xl mx-auto">
        {/* Left Side Content */}
        <div className="text-section max-w-lg">
          <h5 className="text-3xl font-bold text-gray-800 leading-tight mb-4">
            Why Choose GlobalXperts for
            <span className="text-blue-600"> Titan X?</span>
          </h5>
          <ul className="list-disc pl-8 text-gray-600 space-y-2">
            <li>
              <strong>Global Coverage:</strong> Over 120 countries supported
              with local technical resources.
            </li>
            <li>
              <strong>24x7 Availability:</strong> Round-the-clock support for
              emergencies and planned maintenance.
            </li>
            <li>
              <strong>Cost Efficiency:</strong>Avoid staffing overhead while
              accessing skilled IT professionals when and where you need them.
            </li>
          </ul>
          {/* Download Brochure Button */}
          <a
            href="https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Titan+X+Brochure.pdf.pdf"
            download ="TitanX.pdf"
            target="_blank"
            className="ml-8 mt-4 inline-block px-4 py-2 bg-blue-600 text-white font-normal text-lg rounded-lg shadow-md hover:bg-blue-800 transition duration-300"
          >
            DOWNLOAD BROCHURE
          </a>
        </div>

        {/* Right Side Image */}
        <div className="relative mt-12 lg:mt-0 lg:w-1/2 px-5  ">
          {/* Embedded image */}
          <div className="relative">
            <img
              className="w-full aspect-video rounded-md shadow-lg"
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/MOM/OngoingSupport.avif"
              alt="Titan X"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-8 mb-8 p-4">
        <ContactCard />
      </div>

      <Footer />
    </>
  );
};

export default DataAssurance;
