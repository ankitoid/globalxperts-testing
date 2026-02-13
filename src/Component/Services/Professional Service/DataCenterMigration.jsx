import React from "react";
import {
  FaCogs,
  FaDollarSign,
  FaHeadset,
  FaRegClock,
  FaRocket,
  FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar";

const DataCenterMigration = () => {
  return (
    <>
      <Helmet>
        <title>Data Center Migration - GlobalXperts</title>
        <meta name="description" content="GlobalXperts offers USA data-center migration services: seamless infrastructure relocation, minimal downtime, and expert execution to future-proof your IT environment." />
        <link rel="canonical" href="https://globalxperts.net/service/professional-services/data-center-migration" />

      </Helmet>
      <Navbar />
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Data Center Migration
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

            <div className="w-full text-left mt-10 lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                Are you tired of dealing with the complexity and high costs of
                managing your own data center? Do you want to take advantage of
                the flexibility and scalability of the cloud? Let us migrate
                your workloads. Our team of experts will work with you every
                step of the way, from planning and design to implementation and
                optimization, to ensure a successful migration that meets your
                specific needs and requirements. Contact us today to learn more!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-gray-100 md:bg-white">
        <h1 className="text-3xl lg:text-4xl text-center font-bold text-gray-700 ">
          Value Proposition
        </h1>
        <p className="text-lg leading-relaxed text-center text-gray-600 mt-8">
          These are the benefits of our migration services
        </p>
        <div className="  bg-gray-100 md:bg-gray-100 2xl:bg-white max-w-7xl mx-auto py-4 ">
          <div className="bg-gray-100  2xl:bg-white flex items-center justify-center  2xl:mt-8 mb-12 md:p-8 lg:p-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mb-8">
              {/*  Improved Productivity and Efficiency Card */}
              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaUserTie />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Expertise and Experience
                  </h3>
                  <p className="text-sm text-gray-600 mb-0 text-left">
                    GlobalXperts has a team of highly skilled and experienced
                    professionals who specialize in data center migrations and
                    cloud computing. They have in-depth knowledge of the latest
                    technologies and best practices, ensuring a smooth and
                    successful migration.
                  </p>
                </div>
              </div>

              {/*  Cards */}
              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaCogs />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
                    Customized Solutions
                  </h3>
                  <p className="text-sm text-gray-600 mb-0 text-left">
                    GlobalXperts works closely with clients to understand their
                    specific needs and requirements, and provides customized
                    solutions that meet their unique business needs. We offer
                    hybrid cloud solutions and can build solutions with AWS,
                    Azure, or GCP.
                  </p>
                </div>
              </div>

              {/* Onsite IT Support Card */}
              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaRegClock />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
                    Reduced Downtime and Risk
                  </h3>
                  <p className="text-sm text-gray-600 mb-0 text-left">
                    GlobalXperts uses a proven methodology and advanced tools to
                    minimize downtime and mitigate risks during the migration
                    process, ensuring minimal disruption to business operations.
                  </p>
                </div>
              </div>

              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaRocket />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
                    Faster Time-to-Value
                  </h3>
                  <p className="text-sm text-gray-600 mb-0 text-left">
                    GlobalXperts has a track record of completing data center
                    migrations and cloud deployments faster than traditional
                    methods, allowing clients to realize the benefits of their
                    new infrastructure sooner.
                  </p>
                </div>
              </div>

              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaDollarSign />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
                    Cost-Effective Solutions
                  </h3>
                  <p className="text-sm text-gray-600 mb-0 text-left">
                    GlobalXperts provides cost-effective solutions that help
                    clients optimize their IT infrastructure, reduce costs, and
                    increase operational efficiency.
                  </p>
                </div>
              </div>

              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <FaHeadset />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-left">
                    Ongoing Support
                  </h3>
                  <p className="text-sm text-gray-600 mb-0 text-left">
                    GlobalXperts provides ongoing support to ensure that
                    clients' IT infrastructure remains up-to-date and secure,
                    and that they continue to benefit from the latest
                    technologies and best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 mb-4 p-4">
        <ContactCard />
      </div>
      <Footer />
    </>
  );
};

export default DataCenterMigration;
