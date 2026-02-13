import React from "react";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { FaAngleDoubleUp, FaAdjust } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";

const ManagedCloud = () => {
  return (
    <>
      <Navbar />

      <Helmet>
        <title>Managed Cloud Application Service</title>
        <meta name="description" content="Managed cloud application services for secure deployment, monitoring, and optimization across cloud platforms." />
       <link rel="canonical" href="https://globalxperts.net/service/managed-services/managed-cloud-application" />

      </Helmet>

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-20 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Managed Cloud Application Service
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

            <div className="w-full text-center lg:text-left mt-10 lg:mt-10 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                Need dependable support for your applications? Our 24/7 Managed
                Application Support guarantees peak performance across AWS
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-white 2xl:bg-white   rounded-lg shadow-md p-6 py-4 max-w-7xl mx-auto mt-12">
        <div className="w-full md:w-1/2 lg:w-3/2">
          <img
            className="w-full rounded-lg"
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Managed-Services/managedCloud.webp"
            alt="A person working on a laptop and providing manageing the cloud."
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-4">
            <h2 className="md:text-3xl font-bold text-gray-900 sm:text-4xl">
              Managed Cloud Application Service
            </h2>
          </div>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Are you looking for a reliable and efficient solution to manage your
            applications? Our team of experienced professionals provides 24/7
            support for all your application needs. We take care of everything
            from infrastructure management to application deployment and
            maintenance, so you can focus on growing your business. We offer
            flexible pricing options that can fit any budget so that you pay for
            only the services that you need.
          </p>
          {/* <button className=" px-6 py-3 bg-white text-blue-700 border border-blue-900 rounded-xl font-semibold hover:bg-blue-900 hover:text-white mt-12">
            GlobalXperts Inc.
          </button> */}
        </div>
      </div>

      <div className="max-w-7xl  mx-auto mt-20 text-center">
        <div className="  bg-gray-100 md:bg-gray-100 2xl:bg-white max-w-7xl mx-auto py-4 p-4">
          <h1 className=" text-3xl font-bold text-center  mb-2 mt-10 md:py-2 lg:py-0">
          Why Choose GlobalXperts?
          </h1>
          <p className="text-lg leading-relaxed text-center text-gray-600 mb-4">
            {" "}
            Our Managed Applications Support service provides you with the
            following benefits:
          </p>
          <div className="bg-gray-100  2xl:bg-white flex items-center justify-center  2xl:mt-8 mb-12 md:p-8 lg:p-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mb-8">
              {/*  Improved Productivity and Efficiency Card */}

              {/*  Cards */}
              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[200px]">
                <div className="flex flex-col items-center flex-grow ">
                  <div className="flex items-center justify-center bg-white  rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <MdSecurity />
                  </div>

                  <p className="text-sm text-gray-600 mb-0 text-center">
                    Increased reliability and uptime for your applications
                  </p>
                </div>
              </div>

              {/* Onsite IT Support Card */}
              <div className="bg-white  2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[200px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <RxCountdownTimer />
                  </div>

                  <p className="text-sm text-gray-600 mb-0 text-center">
                    Rapid resolution of issues, minimizing downtime and business
                    disruption
                  </p>
                </div>
              </div>

              <div className="bg-white 2xl:bg-gray-100 shadow-2xl  p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[200px] ">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaAngleDoubleUp />
                  </div>

                  <p className="text-sm text-gray-600 mb-4   text-center">
                    Proactive monitoring and maintenance of your applications,
                    preventing issues before they occur
                  </p>
                </div>
              </div>

              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[200px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaAdjust />
                  </div>

                  <p className="text-sm text-gray-600 mb-4 text-center">
                    Customized support plans tailored to your specific needs and
                    budget
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-700 text-lg mt-12 sm:py-2 p-4">
        Contact us today to learn more about how our Managed Applications
        Support service can help you streamline your operations, increase
        efficiency, and grow your business.
      </p>

      <div className="mt-8 p-4 mb-8">
        {" "}
        <ContactCard />
      </div>

      <Footer />
    </>
  );
};

export default ManagedCloud;
