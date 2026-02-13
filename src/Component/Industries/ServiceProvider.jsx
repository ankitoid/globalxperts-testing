import React, { useRef } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactCard from "../Contact/ContactCard";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ServiceProvider = () => {
  const contactRef = useRef(null);

  const handleContactUsClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title> IT Solutions for Service Providers - GlobalXperts

        </title>
        <meta name="description"
          content="GlobalXperts provides IT and cloud solutions for service providers across the USA - scalable infrastructure, managed support, and reliable performance."
        />
      </Helmet>
      <div className="w-full">
        <Navbar />

        <div className=" bg-blueCustomColor  w-full">
          <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
            <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
              <div className="w-full  text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                  Service Providers
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
                  Our IT solutions improve efficiency, support growth, and drive innovation. From infrastructure to data analytics, we align our services with your business goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="p-8 max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8 mt-14">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                {/* Text Section */}
                <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Service Providers
                  </h2>
                  <p className="mt-3 text-lg text-gray-500 sm:mt-4">
                    IT services are crucial for enhancing service delivery and
                    customer satisfaction. Advanced tools optimize operations
                    and provide insights for personalized services.
                  </p>
                </div>
                {/* Image Section */}
                <div className="relative mt-12 lg:mt-0 lg:w-1/2">
                  <img
                    className="w-full rounded-lg"
                    src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Industries/service.webp"
                    loading="lazy"
                    alt="Service providers working on IT solutions"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
            <div className="max-w-7xl text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Overview
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Our IT solutions improve efficiency, support growth, and drive
                innovation. From infrastructure to data analytics, we align our
                services with your business goals.
              </p>
            </div>
          </div>

          {/* Additional Insights Section */}
          <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Enhancing Service Delivery
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                IT solutions streamline operations and enhance service quality,
                enabling personalized customer experiences.
              </p>
            </div>
          </div>

          {/* Contact Card Section */}
          <div
            id="contact-card"
            ref={contactRef}
            className="bg-white py-12 px-4  p-2 sm:px-6 lg:px-8 flex justify-center"
          >
            <ContactCard />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ServiceProvider;
