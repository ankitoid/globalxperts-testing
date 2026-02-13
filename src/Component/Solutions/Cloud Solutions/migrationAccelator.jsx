import React from "react";
import Navbar from "../../Navbar";
import AccelerationImage from "../../../Assets/accelatorImage.png";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const migrationAccelator = () => {
  return (
    <>
      <Navbar />
      <Helmet>
        <title>Migration </title>
        <meta
          name="description"
          content="Fast-track your cloud migration with AWS MAP. GlobalXperts helps assess, mobilize, and modernize workloads for long-term success."
        />
      </Helmet>

      <div className="w-full bg-blueCustomColor">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Migration, Optimization, Modernization
              </h1>
              <div className=" px-20 md:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="w-full text-center lg:text-left mt-10 lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 text-left lg:mb-0 leading-relaxed">
                the AWS Migration Acceleration Program can be a valuable tool for businesses looking to migrate their systems to the AWS cloud platform!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 bg-white mt-10 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">
          MAP Program Basics
        </h1>
        <p className="text-center mb-8">
          Here are some of the highlights of the AWS Migration Acceleration
          Program:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-r from-green-200 to-green-50 rounded-lg shadow-md">
            <h2 className="font-bold text-lg">
              Customers looking to migrate workloads to AWS
            </h2>
            <p>
              This is the core requirement. AWS MAP is most beneficial for
              organizations planning to move existing workloads or applications
              to the AWS cloud platform.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-200 to-blue-50 rounded-lg shadow-md">
            <h2 className="font-bold text-lg">Customers of all sizes</h2>
            <p>
              While the program is designed to address enterprise-level
              migrations, businesses of any size can benefit from the guidance
              and support offered by AWS Partners through MAP.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-r from-purple-200 to-purple-50 rounded-lg shadow-md">
            <h2 className="font-bold text-lg">
              Customers interested in cost optimization
            </h2>
            <p>
              The program offers access to potential AWS service credits or
              partner investments to help offset migration expenses.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-r from-teal-200 to-teal-50 rounded-lg shadow-md">
            <h2 className="font-bold text-lg">
              Customers seeking a smoother migration process
            </h2>
            <p>
              MAP provides a structured methodology, tools, and expertise to
              streamline the migration process, reducing complexity and
              potential risks.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center bg-white py-8">
          {/* Text Section */}
          <div className="w-full text-center mb-8">
            <h2 className="text-xl font-bold">
              Overall, the AWS Migration Acceleration Program can be a valuable
              tool for businesses looking to migrate their systems to the AWS
              cloud platform.
            </h2>
          </div>

          {/* Main Content */}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center w-full ">
        {/* Gradient Text Section */}
        <div className="w-full flex-1 bg-gradient-to-r from-blue-200 via-blue-10 to-white p-8 md:min-h-[400px] flex items-center justify-center">
          <h2 className="text-4xl font-bold text-black">Methodology</h2>
        </div>

        {/* YouTube Video Section */}
        <div className="flex-1 md:min-h-[400px] w-full flex items-center justify-center ">
          <iframe
            className="w-full md:w-[80%] h-[210px] md:h-[400px]" // Set a fixed height for video
            src="https://www.youtube.com/embed/_MTDN2r5-oI?start=3"
            title="AWS Migration Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center w-auto mt-8">
        {/* Gradient Text Section */}
        <div className="flex-1 bg-gradient-to-r from-blue-200 via-blue-10 to-white p-8 md:min-h-[400px] flex items-center justify-center">
          <h2 className="text-4xl font-bold text-black">Migration Journey</h2>
        </div>

        {/* Image Section */}
        <div className="flex-1 md:min-h-[400px] w-auto flex items-center justify-center">
          <img
            className="w-full md:w-[80%] h-[210px] md:h-[400px] object-cover" // Set a fixed height for image
            src={AccelerationImage}
            alt="Migration Acceleration"
          />
        </div>
      </div>
      <div className="mt-4">
        <ContactCard />
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </>
  );
};

export default migrationAccelator;
