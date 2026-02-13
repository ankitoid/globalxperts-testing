import React, { useRef, useState } from "react";
import Navbar from "../Navbar";
import ContactCard from "../Contact/ContactCard";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { AiOutlineLineChart } from "react-icons/ai";
import { MdOutlineContentPaste } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { FaAngleDoubleUp, FaAdjust } from "react-icons/fa";

import { Helmet } from "react-helmet";

const GenAI = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const faqSectionRef = useRef(null); // Reference to the FAQ section

  const handleToggle = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const scrollToFAQs = () => {
    if (faqSectionRef.current) {
      faqSectionRef.current.scrollIntoView({
        behavior: "smooth", // Smooth scrolling effect
        block: "start", // Scroll to the start of the section
      });
    }
  };



  return (
    <>
      <Helmet>
        <title>AI/ML Solutions - GlobalXperts</title>
        <meta name="description" content="GlobalXperts unlocks value with AI & ML solutions - build, deploy and scale intelligent systems that drive insights, automation and growth for US businesses." />
       <link rel="canonical" href="https://globalxperts.net/solutions/ai-ml-solutions" />

      </Helmet>
      {/* Navbar Section */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Main Section */}
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                AI Solutions
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

            <div className="w-full text-center lg:text-right mt-10 lg:mt-20 order-3 lg:order-2">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                Innovative artificial intelligence solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-white 2xl:bg-gray-100   rounded-lg shadow-md p-6 py-4 max-w-7xl mx-auto mt-12">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Ai-Solutions/genaii.webp"
            loading="lazy"
              alt="AI and ML Solutions"
            className=" object-cover h-auto w-auto rounded-lg"
          />
        </div>

        {/* Right Section - Text */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-4">
            <h2 className="text-3xl font-bold text-gray-800"> AI Solutions</h2>
          </div>

          {/* Description */}
          <p className="text-lg leading-relaxed text-gray-600">
            GlobalXperts can build AI/ML solutions for a wide range of
            capabilities.  These capabilities can improve businesses in many
            meaningful ways.
          </p>
          <div className="mt-8">
            <Link
              to="/AI-Machine-Learning-on-AWS"
              className=" px-6 py-3 bg-greenCustomColor text-white border border-green-900 rounded-xl font-semibold hover:bg-blue-900 hover:text-white mt-16"
            >
              AI & Machine Learning on AWS
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 2xl:bg-white p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 mt-8 text-center">
          GlobalXperts AI Solutions
        </h1>
        <div className="bg-gray-100 2xl:bg-white flex items-center justify-center 2xl:mt-8 mb-12 md:p-8 lg:p-4 md:mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mb-8 ">
            {/* Improve Business Operations Card */}
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px]">
              <div className="flex flex-col items-center flex-grow">
                {/* Icon for Business Operations */}
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <AiOutlineLineChart />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Improve Business Operations
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-left">
                  And to ensure a seamless workflow, GlobalXperts also offers
                  AI/ML tools that can improve the internal operations of your
                  business, from management to security.
                </p>
                <ul className="mt-4 list-disc list-inside pl-0 text-gray-600 text-sm">
                  <li>Document processing and insights</li>
                  <li>Content moderation</li>
                  <li>Data augmentation</li>
                  <li>Predictive maintenance</li>
                  <li>Quality control</li>
                  <li>Fraud detection</li>
                </ul>
              </div>
            </div>

            {/* Creativity and Content Creation Card */}
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
              <div className="flex flex-col items-center flex-grow">
                {/* Icon for Creativity */}
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <MdOutlineContentPaste />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Creativity and Content Creation
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-left">
                  Our AI/ML tools can also help in enhancing your creative
                  content as well.{" "}
                </p>
                <ul className="mt-4 list-disc list-inside pl-0 text-gray-600 text-sm">
                  <li>Text, image, and video generation</li>
                  <li>Product design</li>
                  <li>Music creation</li>
                  <li>Media enhancement</li>
                  <li>Modelling</li>
                  <li>Creating animations</li>
                </ul>
              </div>
            </div>

            {/* Boosting Employee Productivity Card */}
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
              <div className="flex flex-col items-center flex-grow">
                {/* Icon for Productivity */}
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaChartLine />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Boosting Employee Productivity
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-left">
                  We can also Improve productivity within your business by
                  deploying AI/ML tools that  can help employees accomplish
                  their tasks in an effective manner.
                </p>
                <ul className="mt-4 list-disc list-inside pl-0 text-gray-600 text-sm">
                  <li>Conversational search</li>
                  <li>Agent assist</li>
                  <li>Content creation</li>
                  <li>Code generation</li>
                  <li>Text summarization</li>
                  <li>Sales scripts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 2xl:bg-white flex flex-col items-center justify-center 2xl:mt-8 mb-4 md:p-8 lg:p-4">
          {/* Card Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl">
            {/* Optimization Card */}
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
              <div className="flex flex-col items-center flex-grow ">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaAdjust />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-5 text-center">
                  Optimization
                </h3>
                <p className="text-sm text-gray-600 mb-4 text-left">
                  To carry out these developments, GlobalXperts offers several
                  features that will provide businesses with the tools they need
                  to optimize their environment.
                </p>
                <p className="text-sm text-gray-600 mb-4 text-left">
                  Our AI/ML offerings can be used to do the following:{" "}
                </p>
                <ul className="mt-4 list-disc list-inside pl-0 text-gray-600 text-sm">
                  <li>
                    Construct complex event-driven workflows dictated by dynamic
                    rules.
                  </li>
                  <li>
                    Rearchitect applications by reconstructing and redeploying
                    services.
                  </li>
                  <li>
                    Modernize and upgrade code within a short span of time.
                  </li>
                  <li>
                    Build SaaS platforms on the Cloud or SaaSify existing
                    applications.
                  </li>
                </ul>
              </div>
            </div>

            {/* Enhancing Customer Experience Card */}
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaAngleDoubleUp />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Enhancing Customer Experience
                </h3>
                <p className="text-sm text-gray-600 mb-4 text-left">
                  GlobalXperts can enhance your customer experience by offering
                  AI/ML tools that can generate positive customer engagement.
                </p>
                <ul className="mt-4 list-disc list-inside pl-0 text-gray-600 text-sm">
                  <li>Chatbots</li>
                  <li>Virtual assistants</li>
                  <li>Post-call analytics</li>
                  <li>Personalization</li>
                  <li>Identity verification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8 bg-blue-300 rounded-lg shadow-xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Industries That Benefit From AI
          </h2>
          <p className="text-lg text-gray-600">
            With GlobalXperts’s suite of AI/ML services, the following
            industries can leverage our solutions:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Healthcare and Life Sciences Box */}
          <div className="bg-gradient-to-r from-green-400 to-blue-500 shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-white">
              Healthcare and Life Sciences
            </h3>
          </div>

          {/* Industrial and Manufacturing Box */}
          <div className="bg-gradient-to-r from-yellow-500 to-red-500 shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-white">
              Industrial and Manufacturing
            </h3>
          </div>

          {/* Financial Services Box */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg rounded-lg p-7 text-center">
            <h3 className="text-xl font-semibold text-white">
              Financial Services
            </h3>
          </div>

          {/* Retail Box */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg rounded-lg p-9 text-center">
            <h3 className="text-xl font-semibold text-white">Retail</h3>
          </div>

          {/* Media and Entertainment Box */}
          <div className="bg-gradient-to-r from-orange-400 to-pink-400 shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-white">
              Media and Entertainment
            </h3>
          </div>
        </div>

        <p className="text-gray-800 text-center mt-8 max-w-3xl mx-auto text-lg">
          AI and machine learning solutions can greatly benefit your business.
          Contact us today to learn more about the AI solutions we can build for
          you.
        </p>
      </div>

      <div className="relative mt-4 bg-white 2xl:bg-gray-100 rounded-2xl shadow-lg p-8  flex items-center flex-col lg:flex-row justify-between max-w-7xl mx-auto">
        {/* Left Side Content */}
        <div className="text-section max-w-lg">
          <h5 className="text-3xl font-bold text-gray-800 leading-tight mb-4">
            Why Choose GlobalXperts for
            <span className="text-blue-600"> Ai Solutions</span>
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
            href="https://main-website-brochures1.s3.ap-south-1.amazonaws.com/AI-ML+Brochure.pdf"
            download="field_services.pdf"
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
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Ai-Solutions/aiSolutions.webp"
              loading="lazy"
              alt="AI and ML Solutions"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <ContactCard />
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default GenAI;
