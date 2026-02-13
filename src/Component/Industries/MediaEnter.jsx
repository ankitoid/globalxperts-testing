import React, { useRef } from "react";
import {
  FaCode,
  FaNetworkWired,
  FaCloud,
  FaShieldAlt,
  FaCogs,
} from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactCard from "../Contact/ContactCard";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MediaEnter = () => {
  const contactRef = useRef(null);

  const handleContactUsClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <Helmet>
        <title>IT Services for Media & Entertainment - GlobalXperts</title>
        <meta
          name="description"
          content="GlobalXperts empowers media & entertainment companies: secure cloud workflows, scalable infrastructure and expert IT support tailored for creative studios."
        />
   
    </Helmet>
      <div className="w-full">
        <Navbar />

        <div className=" bg-blueCustomColor  w-full">
                <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
                  <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
                    <div className="w-full  text-center lg:text-left order-2 lg:order-1">
                      <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                      Media & Entertainment
                      </h1>
                      <div className="md:px-0 px-20 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                      <Link
                          to="/contact-us"
                          className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        >
                          Contact Us
                        </Link>
                        {/* <button
                                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
                                  onClick={scrollToFAQs}
                                >
                                  FAQs <span className="ml-2">→</span>
                                </button> */}
                      </div>
                    </div>
        
                    <div className="w-full text-center lg:text-left mt-10 lg:mt-20 order-3 lg:order-2 p-3">
                      <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                      IT services power innovation across industries. From cloud solutions to cybersecurity, our services help optimize operations, enhance security, and drive growth.                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
        <div className="bg-white">
          <div className="p-6 max-w-7xl mx-auto">
            {/* IT Industry Section */}
            <div className="py-10 px-4 sm:px-6 lg:px-8 mt-16 rounded-lg">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Text Section */}
                <div className="text-center lg:text-left lg:w-1/2 lg:pr-6">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Media & Entertainment
                  </h2>
                  <p className="mt-3 text-lg text-gray-500 sm:mt-4">
                    Transforming content creation and distribution with
                    cloud-based workflows, cybersecurity, and high-performance
                    network setups. Our solutions enhance production, scale
                    reach, and streamline operations.
                  </p>
                </div>
                {/* Image Section */}
                <div className="relative mt-10 lg:mt-0 lg:w-1/2">
                  <img
                    className="w-full rounded-lg"
                    src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Industries/media.webp"
                    loading="lazy"
                    alt="Media industry technologies."
                  />
                </div>
              </div>
              {/* <button
                onClick={handleContactUsClick}
                className="px-6 py-2 mt-8 border border-transparent bg-greenCustomColor2 text-white font-semibold rounded hover:bg-blueCustomColor transition duration-300 shadow-md"
              >
                Contact Us
              </button> */}
            </div>

            {/* Overview Section */}
            <div className="py-10 px-4 sm:px-6 lg:px-8 mt-10 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
              <p className="mt-3 text-lg text-gray-600">
                IT services power innovation across industries. From cloud
                solutions to cybersecurity, our services help optimize
                operations, enhance security, and drive growth.
              </p>
            </div>

            {/* Capabilities Section */}
            <div className="py-10 px-4 sm:px-6 lg:px-8 mt-10 rounded-lg">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                  Capabilities
                </h2>

                <p className="text-gray-700 leading-relaxed mb-10 text-center">
                  GlobalXperts provides comprehensive IT services designed to
                  enhance business operations, improve security, and support
                  digital transformation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
                  {/* Capability 1 */}
                  <div className="flex items-start  rounded-lg shadow-md p-6 2xl:bg-gray-200">
                    <FaCode className="text-blue-500 text-6xl mr-4 " />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 ">
                        Software Development
                      </h3>
                      <p className="text-gray-700 mt-2">
                        Custom application solutions to optimize business
                        operations, improve efficiency, and meet specific
                        organizational needs.
                      </p>
                    </div>
                  </div>

                  {/* Capability 2 */}
                  <div className="flex items-start  rounded-lg shadow-md p-6 2xl:bg-gray-200">
                    <FaNetworkWired className="text-blue-500 text-6xl mr-4 " />
                    <div>                     
                   
                    <h3 className="text-xl font-semibold text-gray-800">
                        Network Management
                      </h3>
                      <p className="text-gray-700 mt-2">
                        End-to-end network services providing secure and
                        reliable connectivity, supporting business operations
                        and communication.
                      </p> 
                      </div>
                    </div>

                  {/* Capability 3 */}
                  <div className="flex items-start  rounded-lg shadow-md p-6 2xl:bg-gray-200">
                    <FaCloud className="text-blue-500 text-6xl mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Cloud Solutions
                      </h3>
                      <p className="text-gray-700 mt-2">
                        Scalable cloud infrastructure that provides flexibility
                        and cost-effective solutions to meet growing business
                        demands.
                      </p>
                    </div>
                  </div>

                  {/* Capability 4 */}
                  <div className="flex items-start  rounded-lg shadow-md p-6 2xl:bg-gray-200">
                    <FaShieldAlt className="text-blue-500 text-6xl mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Cybersecurity
                      </h3>
                      <p className="text-gray-700 mt-2">
                        Comprehensive security solutions to protect assets from
                        threats, ensuring data privacy and compliance.
                      </p>
                    </div>
                  </div>

                  {/* Capability 5 */}
                  <div className="flex items-start  rounded-lg shadow-md p-6 2xl:bg-gray-200">
                    <FaCogs className="text-blue-500 text-6xl mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        IT Consulting
                      </h3>
                      <p className="text-gray-700 mt-2">
                        Expert IT strategy consulting to help businesses
                        optimize processes, adopt technologies, and drive
                        growth.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mt-8 text-center">
                  At GlobalXperts, we are dedicated to empowering businesses
                  with cutting-edge IT solutions that drive efficiency,
                  security, and growth.
                </p>
                <p className="text-gray-700 mt-4 text-center">
                  Contact us today to learn how our IT services can help your
                  business thrive in the digital era.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div ref={contactRef} className="p-3">
          <ContactCard />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MediaEnter;
