import React from "react";

import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AiFillProduct } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";

const ManagedCollaborationTech = () => {
  return (
    <>
      <Navbar />

      <Helmet>
        <title>Managed Collaboration Technologies</title>
        <meta name="description" content="Managed collaboration technologies including Webex, Zoom, and Microsoft Teams—deployed and supported by experts." />
          <link rel="canonical" href="https://globalxperts.net/service/managed-services/managed-collaboration-technologies" />

      </Helmet>

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-between px-6 lg:px-8">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Managed Collaboration Technologies
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

            <div className="w-full text-center lg:text-left mt-10 lg:mt-10 order-3 lg:order-2 ">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 text-left">
              Are you looking for a comprehensive managed services solution
                for your collaboration technologies that covers all aspects of
                your communication infrastructure?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl flex flex-col lg:flex-row items-center mx-auto justify-between mt-8 pb-10">
        {/* Image Section */}
        <div className="relative mt-16 lg:mt-0 lg:w-1/2 px-6">
          <img
            className="w-full rounded-lg"
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Managed-Services/collebratin.webp"
            alt="Managed Collaboration Technologies"
            loading="lazy"
          />
        </div>

        {/* Text Section */}
        <div className=" lg:text-left lg:w-1/2 lg:pr-8 mt-6 lg:mt-0">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl text-center ">
            Managed Collaboration Technologies
          </h2>
          <p className=" text-center mt-2 text-xl text-gray-500 sm:mt-4">
            Are you looking for a comprehensive managed services solution for
            your collaboration technologies that covers all aspects of your
            communication infrastructure?
          </p>
          <p className=" text-left pl-4  text-md text-gray-700 sm:mt-4">
            We can help. Our team has extensive knowledge of:
          </p>
          <ul className="mt-0 space-y-1 space-x-4 text-gray-700 list-disc p-4 ">
            <li className="ml-4">Cisco Unified Communications</li>
            <li>Cisco Call Manager</li>
            <li>Cisco Cube</li>
            <li> E911 services</li>
            <li>SIP gateways</li>
            <li> Telecom PSTN technologies.</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-100 py-4">
        <h1 className=" text-3xl font-bold text-center  mb-2 mt-10">
          Why Choose GlobalXperts?
        </h1>
        <p className="text-lg leading-relaxed text-center text-gray-600 max-w-6xl mx-auto">
          Our managed services for collaboration technologies provide a
          comprehensive solution to optimize your communication infrastructure
          and improve your team’s productivity.
        </p>

        <div className="bg-gray-100  2xl:bg-white flex items-center justify-center  2xl:mt-8 mb-12 p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mb-8">
            {/*  Improved Productivity and Efficiency Card */}
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <AiFillProduct />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Expertise
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-center">
                  Firstly, our team of experts has in-depth knowledge of Cisco’s
                  collaboration technologies and can provide you with the latest
                  features and upgrades to optimize your communication
                  infrastructure. We Not only will we ensure that your team has
                  access to emergency services at all times, and we but we will
                  also provide reliable and secure voice communication
                  capabilities with our SIP gateways and Telecom PSTN
                  technologies.
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
                  Reliability
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-center">
                  Secondly, we provide a reliable solution that minimizes
                  downtime and maximizes productivity. Our proactive monitoring
                  and support ensure that any issues are resolved quickly,
                  allowing your team to focus on their work without any
                  interruptions.
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
                  Customization
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-center">
                  Finally, we take a customized approach to managed services and
                  tailor our solution to meet your unique needs. Whether you
                  need a complete overhaul of your communication infrastructure
                  or simply want to optimize your current setup, we have the
                  expertise to deliver the solution that fits your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 mb-4 p-4">
        {" "}
        <ContactCard />
      </div>
      <Footer />
    </>
  );
};

export default ManagedCollaborationTech;
