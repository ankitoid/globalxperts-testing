import React from "react";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import {
  FaCloud,
  FaShieldAlt,
  FaMicrochip,
  FaNetworkWired,
  FaMobileAlt,
  FaServer,
} from "react-icons/fa";
import { FiShield, FiServer, FiGlobe } from "react-icons/fi";
import {
  MdArchitecture, // Innovative Infrastructure
  MdOutlineAutoGraph, // Future-Ready Solutions
  MdSecurity, // Comprehensive Security
  MdWorkspaces, // Enhanced Productivity
  MdTrendingUp, // Cost-Effective Scaling
  MdSupportAgent, // 24/7 Global Support
} from "react-icons/md";
import { Helmet } from "react-helmet";

const VMWarePartner = () => {
  const services = [
    {
      title: "App Platform",
      description:
        "Build and modernize cloud-native applications seamlessly across hybrid and multi-cloud environments.",
      icon: <FaCloud className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Anywhere Workspace",
      description:
        "Empower a flexible workforce with secure access from any device, supporting hybrid work models.",
      icon: <FaMobileAlt className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Simplify cloud operations and enable consistent application performance across multiple cloud providers.",
      icon: <FaServer className="w-10 h-10 text-purple-500" />,
    },
    {
      title: "Security",
      description:
        "Comprehensive security solutions for safeguarding apps, networks, and endpoints in a zero-trust model.",
      icon: <FaShieldAlt className="w-10 h-10 text-red-500" />,
    },
    {
      title: "Networking",
      description:
        "Optimize and secure app performance with advanced network virtualization solutions from Broadcom and VMware NSX.",
      icon: <FaNetworkWired className="w-10 h-10 text-yellow-500" />,
    },
    {
      title: "Telco Cloud",
      description:
        "Facilitate efficient, scalable service delivery from core to edge, transforming telecom infrastructure.",
      icon: <FaMicrochip className="w-10 h-10 text-indigo-500" />,
    },
  ];

  return (
    <>
    <Helmet>
        <title>VMWare Partner</title>
        <meta name="description" content="Partnered with Broadcom to offer enterprise-grade network and software solutions tailored to high-demand business needs." />
        
    </Helmet>
      <Navbar />

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-4xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Broadcom Partner Information
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

            <div className="w-full text-center lg:text-right  lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed text-left">
                A collaborative powerhouse driving cutting-edge infrastructure
                and cloud solutions that empower companies worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Broadcom and VMware Partnership
            </h2>

            <p className="mt-3 text-md text-gray-500">
              Broadcom and VMware deliver a unique combination of
              high-performance network infrastructure and robust cloud
              virtualization technologies. Together, they help enterprises
              achieve high reliability, secure operations, and seamless
              integration across diverse IT environments.
            </p>
          </div>
          {/* Image Section */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <img
              className="w-full rounded-lg"
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/partners/bVM.jpeg"
              alt="Broadcom and VMware Partnership"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center space-y-4"
            >
              <div className="bg-gray-100 p-4 rounded-full">{service.icon}</div>
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center px-6 space-y-12 py-12">
        <h2 className="text-4xl font-bold text-black text-center">
          GX Capabilities
        </h2>
        <p className="max-w-3xl text-gray-700 text-center">
          As a VMware partner, GlobalXperts provides a wide range of
          capabilities to drive the digital transformation of enterprises. Our
          services include:
        </p>

        {/* Icons and Features */}
        <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="flex flex-col items-center text-center space-y-4">
            <FiShield className="w-12 h-12 text-blue-600" />
            <h3 className="text-xl font-semibold">Managed NSX Support</h3>
            <p className="text-gray-600">
              Expert support for NSX data center environments, ensuring security
              and reliability.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <FiServer className="w-12 h-12 text-blue-600" />
            <h3 className="text-xl font-semibold">End-to-End Virtualization</h3>
            <p className="text-gray-600">
              Comprehensive virtualization solutions to optimize infrastructure
              performance.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <FiGlobe className="w-12 h-12 text-blue-600" />
            <h3 className="text-xl font-semibold">Seamless Integration</h3>
            <p className="text-gray-600">
              Integration with Broadcom’s high-speed network solutions for
              superior performance.
            </p>
          </div>
        </div>

        <p className="max-w-3xl text-gray-700 text-center">
          This partnership enables businesses to experience superior network
          performance, streamlined operations, and enhanced scalability, backed
          by 24/7 technical support and proactive monitoring.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-black text-center">
          Why Choose Broadcom and VMware?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <MdArchitecture className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-2">
              Innovative Infrastructure
            </h3>
            <p className="text-gray-700">
              Broadcom and VMware deliver an unmatched infrastructure stack
              designed for optimal performance, stability, and agility.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <MdOutlineAutoGraph className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Future-Ready Solutions</h3>
            <p className="text-gray-700">
              With support for multi-cloud deployments and advanced networking,
              businesses gain a future-proof IT framework capable of adapting to
              evolving demands.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <MdSecurity className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Comprehensive Security</h3>
            <p className="text-gray-700">
              VMware and Broadcom prioritize security, delivering intrinsic
              security solutions across networks, applications, and data.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <MdWorkspaces className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Enhanced Productivity</h3>
            <p className="text-gray-700">
              By providing Anywhere Workspace solutions, organizations empower
              employees with flexible, reliable access.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <MdTrendingUp className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Cost-Effective Scaling</h3>
            <p className="text-gray-700">
              Solutions from Broadcom and VMware minimize operational costs
              while offering scalable, efficient resource management.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <MdSupportAgent className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-2">24/7 Global Support</h3>
            <p className="text-gray-700">
              GlobalXperts provides around-the-clock support, ensuring minimized
              downtime and swift issue resolution.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 mb-6 p-2">
        <ContactCard />
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </>
  );
};

export default VMWarePartner;
