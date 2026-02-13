import React from "react";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { MdOutlineReduceCapacity, MdSecurity } from "react-icons/md";
import { FaUniversalAccess, FaWatchmanMonitoring } from "react-icons/fa";
import { CgPerformance } from "react-icons/cg";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";

const ManagedNetworking = () => {
  return (
    <>
      <Navbar />

      <Helmet>
        <title> Network Operations Center – Enterprise Networking</title>
        <meta name="description" content="Managed NOC and cybersecurity services for proactive network monitoring, threat detection, and compliance assurance." />
        <meta name="keyword" content=" Network Operations Center – Enterprise Networking Globalxperts"/>
          <link rel="canonical" href="https://globalxperts.net/service/managed-services/network-operations-center-enterprise" />

      </Helmet>

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20 p-2 md:p-0">
                Network Operations Center – Enterprise Networking
              </h2>
              <div className="px-20 md:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
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
                Our Network Operation Center (NOC) is one of 3 centralized
                facilities that are responsible for monitoring and managing a
                customer’s network infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-white 2xl:bg-white   rounded-lg shadow-md p-6 py-4 max-w-7xl mx-auto mt-12">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2">
          <img
            className="w-full rounded-lg"
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Managed-Services/NetworkOperationsCenterEnterpriseNetworking.jpg"
            alt="A man working on a laptop in a server room."
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-4">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl">
              Network Operations Center – Enterprise Networking
            </h2>
          </div>
          <p className="mt-3 text-lg text-gray-500 sm:mt-4">
            Our Network Operation Center (NOC) is one of 3 centralized
            facilities that are responsible for monitoring and managing a
            customer’s network infrastructure. The NOC is staffed by trained
            network professionals who monitor network performance, diagnose and
            troubleshoot issues, and implement solutions to maintain the
            reliability, availability, and security of the network.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto  mt-10 px-4 bg-gray-100 2xl:bg-white ">
        <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-4 text-center py-4">
          Enterprise Networking services offered by a NOC include:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  bg-gray-100 2xl:bg-white max-w-7xl mx-auto px-4 py-8">
          {[
            {
              title: "Performance Optimization",
              description:
                "To improve network efficiency and capacity, the NOC team is tasked with identifying and implementing performance optimizations.",
            },
            {
              title: "Network Configuration and Change Management",
              description:
                "Responsible for managing and maintaining the network configurations, the NOC team ensures that changes are implemented in a controlled and consistent manner.",
            },

            {
              title: "Network Documentation",
              description:
                "The NOC team maintains accurate and up-to-date network documentation to ensure that network configurations are easily accessible and understood by all stakeholders.",
            },
            {
              title: "Network Monitoring",
              description:
                "The NOC team constantly monitors the network to identify and resolve issues before they impact business operations. This includes monitoring network traffic, server and device performance, and identifying potential security threats.",
            },
            {
              title: "Security Management",
              description:
                "The NOC team monitors network security threats and implements measures to ensure the security and integrity of the network. This includes implementing firewalls, intrusion detection systems, and other security technologies.",
            },
            {
              title: "Incident Management",
              description:
                " In the event of a network outage or other issue, the NOC team responds promptly to mitigate the impact of the incident and restore services as quickly as possible. This includes performing root cause analysis to identify the underlying cause of the incident and implementing preventative measures to avoid future occurrences.",
            },
          ].map((box, index) => (
            <div
              key={index}
              className="bg-white 2xl:bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-700 mb-2 border-b-2 border-blue-700">
                  {box.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {box.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto   py-4  bg-gray-100 2xl:bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Why Choose GlobalXperts?
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center mt-4 pl-4 pr-4">
          The NOC plays a critical role in maintaining the health and
          availability of the enterprise network and ensures that business
          operations can continue smoothly without interruptions caused by
          network issues.
        </p>

        {/* Boxes Section */}
        <div className="bg-gray-100  2xl:bg-white flex items-center justify-center  2xl:mt-8 mb-0 p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mb-8">
            {/*  Improved Productivity and Efficiency Card */}
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaWatchmanMonitoring />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Proactive Monitoring and Management
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-center">
                  The NOC team constantly monitors network performance and
                  identifies potential issues before they impact business
                  operations. This allows for quick resolution of issues and
                  minimizes downtime, ensuring that business operations are not
                  disrupted.
                </p>
              </div>
            </div>

            {/*  Cards */}
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
              <div className="flex flex-col items-center flex-grow ">
                <div className="flex items-center justify-center bg-white  rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <CgPerformance />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Improved Network Performance
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-center">
                  The NOC team is responsible for optimizing network performance
                  by identifying and implementing solutions to improve network
                  efficiency and capacity. This results in a more reliable and
                  faster network, improving overall business productivity.
                </p>
              </div>
            </div>

            {/* Onsite IT Support Card */}
            <div className="bg-white  2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <MdSecurity />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Enhanced Network Security
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-center">
                  The NOC team implements security measures to protect the
                  network from potential security threats, ensuring the security
                  and integrity of sensitive business data. This reduces the
                  risk of security breaches and associated financial losses,
                  reputation damage, and legal issues.
                </p>
              </div>
            </div>

            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px] max-w-[380px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <MdOutlineReduceCapacity />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Reduced IT Costs
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-center">
                  By outsourcing network management to a NOC, enterprises can
                  reduce the cost of IT infrastructure, including hardware,
                  software, and personnel. The NOC team provides a
                  cost-effective solution to manage and maintain network
                  infrastructure, resulting in reduced IT costs.
                </p>
              </div>
            </div>

            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px] max-w-[380px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaUniversalAccess />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Access to Expertise
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-center">
                  The NOC team comprises trained network professionals with
                  extensive experience in managing complex network
                  infrastructure. This provides enterprises with access to a
                  pool of expertise that can address any network-related issues,
                  ensuring that the network infrastructure is always in good
                  hands.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bg-gray-100 2xl:bg-white flex items-center justify-center   ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center justify-center ">
           
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px] max-w-[380px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <MdOutlineReduceCapacity />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Reduced IT Costs
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-center">
                  By outsourcing network management to a NOC, enterprises can
                  reduce the cost of IT infrastructure, including hardware,
                  software, and personnel. The NOC team provides a
                  cost-effective solution to manage and maintain network
                  infrastructure, resulting in reduced IT costs.
                </p>
              </div>
            </div>

           
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px] max-w-[380px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaUniversalAccess />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Access to Expertise
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-center">
                  The NOC team comprises trained network professionals with
                  extensive experience in managing complex network
                  infrastructure. This provides enterprises with access to a
                  pool of expertise that can address any network-related issues,
                  ensuring that the network infrastructure is always in good
                  hands.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <p className="text-gray-700 leading-relaxed font-semibold text-lg text-center">
             the NOC plays a critical role in maintaining the health and
            availability of the enterprise network and ensures that business
            operations can continue smoothly without interruptions caused by
            network issues.
          </p>
        </div> */}
        <div className="w-full text-lg mb-4 text-gray-600 text-center">
          <p>
            In summary, a NOC delivers secure and efficient network
            infrastructure, allowing enterprises to focus on core activities
            with confidence in effective management.
          </p>
        </div>
      </div>

      <div className="mt-8 mb-8">
        {" "}
        <ContactCard />
      </div>
      <Footer />
    </>
  );
};

export default ManagedNetworking;
