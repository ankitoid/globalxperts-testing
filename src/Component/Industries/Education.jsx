import React, { useState, useRef } from "react";
import Navbar from "../Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer";
import ContactCard from "../Contact/ContactCard";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Education = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const handleToggle = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };
  const contactRef = useRef(null);

  const handleContactUsClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Education Solutions - GlobalXperts</title>
        <meta
          name="description"
          content="GlobalXperts brings tailored IT solutions to the education sector: secure infrastructure, cloud-learning platforms and seamless operations for modern institutions."
        />
        <meta
          name="keywords"
          content="IT solutions, education sector, secure networks, collaboration tools, digital learning environments"
        />
      </Helmet>
      <div className="w-full bg-gray-200">
        <Navbar />
        <div className=" bg-blueCustomColor  w-full">
          <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
            <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
              <div className="w-full  text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
IT Solutions for the Education Sector                </h1>
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
                <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed text-left">
                  IT services enable cloud tools and virtual learning,
                  streamlining education and preparing students for the digital
                  age.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 min-h-screen mt-12">
          <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-8">
            {/* Left Section - Image */}
            <div className="w-full md:w-1/2 mr-10">
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Industries/edu.webp"
                alt="Education"
                className="rounded-xl shadow-md object-cover h-auto w-full"
                loading="lazy"
              />
            </div>

            {/* Right Section - Text */}
            <div className=" w-full md:w-1/2 flex flex-col justify-center">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-4">
                <h2 className="text-3xl font-bold text-gray-800">Education</h2>
              </div>

              {/* Description */}
              <p className="text-lg leading-relaxed text-gray-600">
                In today’s digital age, IT services and solutions have become
                essential for the education sector to provide students with a
                modern and effective learning experience. From cloud-based
                collaboration tools to virtual learning environments, there are
                numerous innovative IT solutions available that can help
                educational institutions improve their operations and enhance
                student outcomes.
              </p>
            </div>
          </div>

          {/* Overview Section */}
          <div className="px-4 sm:px-6 lg:px-8 mb-20 mt-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-center">
              Overview
            </h2>
            <p className="text-center mt-5 text-lg sm:text-xl text-gray-700 max-w-5xl mx-auto">
              IT services streamline education, improve outcomes, and create
              engaging learning experiences, preparing students for the digital
              age.
            </p>

            <div className="mt-5 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">
                  Our Education Solutions
                </h3>
                <ul className="list-disc list-inside space-y-3 text-gray-700">
                  <li>
                    <strong>Digital Learning Platforms:</strong> Secure,
                    scalable platforms for online learning and content
                    management.
                  </li>
                  <li>
                    <strong>Network Infrastructure:</strong> Robust solutions to
                    enhance connectivity and collaboration.
                  </li>
                  <li>
                    <strong>Cybersecurity:</strong> Protect data and ensure
                    compliance with security standards.
                  </li>
                  <li>
                    <strong>Cloud Services:</strong> Migrate resources to the
                    cloud for flexibility and cost efficiency.
                  </li>
                  <li>
                    <strong>IT Support & Training:</strong> Ongoing support and
                    training for educators.
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-center mt-10 text-lg sm:text-xl text-gray-700">
              Partner with GlobalXperts to revolutionize education with advanced
              IT solutions.
            </p>
          </div>

          {/* Customized Solutions Section */}
          <div className="bg-blueCustomColor p-6 sm:p-10 lg:p-12 mt-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-8">
              {/* Text Section */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Customized IT Solutions for Education
                </h2>
                <p className="mt-3 text-lg sm:text-xl text-gray-300">
                  We offer tailored IT solutions to meet the challenges of
                  education, from infrastructure to cybersecurity, ensuring a
                  safe and efficient learning environment.
                </p>
              </div>

              {/* Image Section */}
              <div className="lg:w-1/2">
                <img
                  className="w-full rounded-lg shadow-lg object-cover"
                  src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Industries/itedu.webp"
                  alt="A secure and connected digital learning environment."
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div ref={contactRef} className="mt-5 p-2">
            <ContactCard />
          </div>
          <div className="mt-8">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
