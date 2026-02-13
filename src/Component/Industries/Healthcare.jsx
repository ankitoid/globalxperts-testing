import React, { useRef } from "react";
import {
  FaLaptopMedical,
  FaNotesMedical,
  FaHospital,
  FaHeartbeat,
  FaUserNurse,
} from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactCard from "../Contact/ContactCard";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Healthcare = () => {
  const contactRef = useRef(null);

  const handleContactUsClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <Helmet>
        <title>Managed Healthcare IT Services in Raleigh, USA - GlobalXperts </title>
        <meta name="description" content="GlobalXperts provides IT solutions for healthcare organizations - secure clinics and hospitals with compliant infrastructure, cloud services and expert support."/>
    </Helmet>
      <div className="w-full">
        <Navbar />

        <div className=" bg-blueCustomColor  w-full">
          <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
            <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
              <div className="w-full  text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                  Healthcare{" "}
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
                IT services are essential in healthcare, optimizing operations, reducing costs, and improving care. Advanced analytics and machine learning enhance decision-making, driving better patient outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white min-h-screen">
          <div className="p-8 max-w-7xl mx-auto">
            {/* Healthcare Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8 mt-24 rounded-lg">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Text Section */}
                <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Healthcare
                  </h2>
                  <p className="mt-3 text-lg text-gray-500">
                    Technology is transforming healthcare, enhancing patient
                    care and improving outcomes through innovative IT solutions
                    like electronic health records (EHRs) and telemedicine.
                    These advancements help streamline operations, cut costs,
                    and improve the patient experience with data-driven insights
                    and machine learning.
                  </p>
                </div>
                {/* Image Section */}
                <div className="relative mt-12 lg:mt-0 lg:w-1/2">
                  <img
                    className="w-full rounded-lg"
                    src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Industries/healthcare.webp"
                    alt="Healthcare setting"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* <button
                onClick={handleContactUsClick}
                className="px-6 py-2 mt-16 border-2 border-transparent bg-greenCustomColor2 text-white font-semibold rounded hover:bg-blueCustomColor transition-colors duration-300"
              >
                Contact Us
              </button> */}
            </div>

            {/* Overview Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8 mt-12 text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Overview
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                IT services are essential in healthcare, optimizing operations,
                reducing costs, and improving care. Advanced analytics and
                machine learning enhance decision-making, driving better patient
                outcomes.
              </p>
            </div>

            {/* Capabilities Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8 mt-12">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                  Capabilities
                </h2>

                <div className="space-y-8">
                  <div className="flex items-center mb-3">
                    <FaLaptopMedical className="text-blue-500 text-2xl mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-800">
                      Healthcare IT Infrastructure
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Tailored solutions to improve operational efficiency and
                    data security for healthcare providers.
                  </p>

                  <div className="flex items-center mb-3">
                    <FaNotesMedical className="text-blue-500 text-2xl mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-800">
                      Electronic Health Records (EHRs)
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Secure, easy-to-access systems that streamline workflows and
                    enhance patient outcomes.
                  </p>

                  <div className="flex items-center mb-3">
                    <FaHospital className="text-blue-500 text-2xl mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-800">
                      Telemedicine Solutions
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Remote consultations expand access to care and reduce
                    in-person visits.
                  </p>

                  <div className="flex items-center mb-3">
                    <FaHeartbeat className="text-blue-500 text-2xl mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-800">
                      Patient Monitoring and Analytics
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Real-time data insights for better decision-making and
                    patient care.
                  </p>

                  <div className="flex items-center mb-3">
                    <FaUserNurse className="text-blue-500 text-2xl mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-800">
                      Healthcare Consulting Services
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Expert guidance on IT strategy, technology adoption, and
                    compliance.
                  </p>
                </div>

                <p className="text-gray-700 text-center mt-8">
                  Partner with GlobalXperts to enhance your healthcare services
                  and improve patient outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white py-12">
          <div ref={contactRef}>
            <ContactCard />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Healthcare;
