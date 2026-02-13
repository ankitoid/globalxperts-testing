import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { FaDatabase, FaAngleDoubleUp, FaAdjust } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";
import { Helmet } from "react-helmet";

const TechnologyRefresh = () => {
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

  const faqs = [
    {
      question: "Why should I consider an IT technology refresh?",
      answer:
        "Outdated technology can slow down your business operations and cause you to miss potential clients or opportunities. A technology refresh ensures your IT systems are modern, fast, and reliable.",
    },
    {
      question:
        "How does improved productivity and efficiency benefit my business?",
      answer:
        "With our IT field engineering service, businesses can access on-demand support for remote locations, minimizing downtime and disruptions to operations.",
    },
    {
      question: "What are the cybersecurity benefits of a technology refresh?",
      answer:
        "The latest technology includes advanced security features to protect your business from cyber threats and safeguard sensitive data.",
    },
    {
      question: "How can a technology refresh reduce downtime?",
      answer:
        "Outdated technology is prone to crashes and malfunctions. Our technology refresh program ensures systems are updated and running smoothly, minimizing downtime and maximizing uptime.",
    },
    {
      question: "What support is provided for remote locations?",
      answer:
        "Our IT field engineering service provides on-demand support for remote locations, ensuring quick and efficient help whenever issues arise.",
    },
    {
      question: "How can I get started with a technology refresh?",
      answer:
        "Contact us to evaluate your current IT systems and design a tailored technology refresh plan that meets your business needs.",
    },
  ];

  return (
    <>
      <Navbar />

      <Helmet>
        <title>Technology Refresh</title>
        <meta name="description" content="Techonolgy Refresh Services" />
          <link rel="canonical" href="https://globalxperts.net/service/field-services/technology-refresh" />

      </Helmet>

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:mt-20 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Technology Refresh
              </h2>
              <div className="px-20 lg:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
                  onClick={scrollToFAQs}
                >
                  FAQs <span className="ml-2">→</span>
                </button>
              </div>
            </div>
            <div className="w-full text-center lg:text-right mt-10 lg:mt-0 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                Revitalize your business with our IT technology refresh
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-white 2xl:bg-white   rounded-lg shadow-md p-6 py-4 max-w-7xl mx-auto mt-12">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Field-Services/TechnologyRefresh.png"
            alt="Technology Refresh"
            className="rounded-xl shadow-md object-cover h-auto w-full"
          />
        </div>

        {/* Right Section - Text */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-4">
            <h2 className="text-3xl font-bold text-gray-800">
              {" "}
              Technology Refresh
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg leading-relaxed text-gray-600">
            Are you tired of dealing with outdated technology that slows down
            your business operations? Are you tired of losing out on potential
            clients or opportunities because your IT systems can’t keep up? It’s
            time for an IT technology refresh!
          </p>
        </div>
      </div>

        <div className="  bg-gray-100 md:bg-gray-100 2xl:bg-white max-w-7xl mx-auto py-4 ">
          <h1 className=" text-3xl font-bold text-center  mb-2 mt-10 md:py-2 lg:py-0">
          Why Choose GlobalXperts?
          </h1>
          <p className="text-lg leading-relaxed text-center text-gray-600 mb-4">Does your business need access to the latest technology solutions available? Consider our technology refresh program, which provides these benefits</p>
          <div className="bg-gray-100  2xl:bg-white flex items-center justify-center  2xl:mt-8 mb-12 md:p-8 lg:p-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mb-8">
              {/*  Improved Productivity and Efficiency Card */}
              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <AiFillProduct />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Improved Productivity and Efficiency
                  </h3>
                  <p className="text-sm text-gray-600 mb-0 text-center">
                    With our IT field engineering service, businesses can have
                    access to on-demand support for their remote locations. This
                    means that they can get quick and efficient help whenever
                    there is an issue, minimizing downtime and disruption to
                    business operations.
                  </p>
                </div>
              </div>

              {/*  Cards */}
              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow ">
                  <div className="flex items-center justify-center bg-white  rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <MdSecurity />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Enhanced Cybersecurity
                  </h3>
                  <p className="text-sm text-gray-600 mb-0 text-center">
                    With the latest technology, you can benefit from advanced
                    security features that protect your business from cyber
                    threats and keep your sensitive data safe.
                  </p>
                </div>
              </div>

              {/* Onsite IT Support Card */}
              <div className="bg-white  2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <RxCountdownTimer />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Reduced Downtime
                  </h3>
                  <p className="text-sm text-gray-600 mb-0 text-center">
                    Outdated technology is prone to crashes and malfunctions,
                    leading to costly downtime that can disrupt your operations.
                    Our technology refresh program ensures that your systems are
                    up-to-date and running smoothly, minimizing downtime and
                    maximizing uptime.
                  </p>
                </div>
              </div>

              <div className="bg-white 2xl:bg-gray-100 shadow-2xl  p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px] ">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaAngleDoubleUp />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Increased Employee Satisfaction
                  </h3>
                  <p className="text-sm text-gray-600 mb-4   text-center">
                    Upgraded technology not only improves productivity, but it
                    also boosts employee morale and satisfaction. By providing
                    your team with the tools they need to succeed, you’ll create a
                    more positive work environment and reduce turnover.
                  </p>
                </div>
              </div>

              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaAdjust />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-5 text-center">
                    Competitive Advantage
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 text-center">
                    By investing in the latest technology, you can gain a
                    competitive advantage in your industry. You’ll be able to
                    offer your customers better services, faster response times,
                    and more innovative solutions that set you apart from your
                    competitors.
                  </p>
                </div>
              </div>

              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaDatabase />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-5 text-center">
                    Datacenter Optimization
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 text-center">
                    Our team of experts can assess your datacenter and suggest an
                    approach for optimization. They can upgrade your hardware and
                    software, and they can migrate your data to a cloud solution,
                    which we can build.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className=" mt-10 max-w-6xl  mx-auto flex flex-col lg:flex-row items-center  2xl:bg-gray-50 rounded-lg shadow-lg p-8">
        <div className="mt-20 text-center lg:text-left lg:w-1/2 lg:pr-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            GlobalXperts Technology Refresh
          </h2>
          <p className="mt-3 text-lg text-gray-500 sm:mt-4">
            Overall, our IT technology refresh program is designed to help you
            achieve your business goals by providing you with the latest
            technology solutions that deliver exceptional value. We work closely
            with you to understand your unique needs and tailor our program to
            meet your specific requirements. Contact us today to learn more
            about how we can help you with your technology refresh needs.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-0 lg:w-1/2 px-5 ">
          {/* Embedded YouTube Video */}
          <div className="relative">
            <img
              className="w-full aspect-video rounded-lg shadow-lg"
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Field-Services/TechnologyRefreshImg.png"
          />
          </div>
        </div>
      </div>

      <div ref={faqSectionRef} className="max-w-7xl mx-auto px-4 py-16 ">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Frequently Asked Questions
        </h1>
        <div className="border border-blue-700 rounded-lg  mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <h2
                className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                onClick={() => handleToggle(index)}
              >
                {faq.question}
              </h2>
              {activeQuestion === index && (
                <p className="text-lg mb-4 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12  px-5 p-2">
        <ContactCard />
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </>
  );
};
export default TechnologyRefresh;
