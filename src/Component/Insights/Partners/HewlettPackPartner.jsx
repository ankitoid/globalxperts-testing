import React from "react";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
import {
  MdComputer, // Compute
  MdMemory, // HPC & AI
  MdStorage, // Storage
  MdRouter, // Intelligent Edge
  MdBuild, // HPE Services
  MdCloudQueue, // HPE GreenLake
} from "react-icons/md";
import { Helmet } from "react-helmet";

const HewlettPackPartner = () => {
  const services = [
    {
      title: "Compute",
      description:
        "Offers both general purpose servers for multi-workload computing and workload optimized servers to deliver the best performance and value for compute-heavy applications.",
      icon: <MdComputer className="w-12 h-12 text-blue-600 mb-4" />,
    },
    {
      title: "HPE Services",
      description:
        "Advises on digital transformation, designs IT solutions and helps businesses consume IT as-a-service.",
      icon: <MdBuild className="w-12 h-12 text-blue-600 mb-4" />,
    },
    {
      title: "HPE GreenLake Cloud Services",
      description:
        "Provides customers with a consistent cloud experience for all applications and data wherever they live: at the edge, data center, colocation facility, or across public clouds.",
      icon: <MdCloudQueue className="w-12 h-12 text-blue-600 mb-4" />,
    },
    {
      title: "HPC & AI",
      description:
        "Delivers standard and custom hardware, software, and data management solutions designed to support supercomputers, high performance compute, converged edge systems, and data-intensive workloads like data analytics and artificial intelligence applications.",
      icon: <MdMemory className="w-12 h-12 text-blue-600 mb-4" />,
    },
    {
      title: "Storage",
      description:
        "Offers storage as-a-service and cloud data services with portfolio offerings like primary storage, hyper-converged infrastructure, disaster and ransomware recovery, big data solutions, management offerings, and storage for unstructured data and analytics workloads, plus traditional tape, storage networking, and disk products.",
      icon: <MdStorage className="w-12 h-12 text-blue-600 mb-4" />,
    },
    {
      title: "Intelligent Edge",
      description:
        "Operates platforms and services at network edges, connecting devices and applications via Aruba solutions such as wired and wireless local area network, campus and data center switching, software defined wide area networking, and network security.",
      icon: <MdRouter className="w-12 h-12 text-blue-600 mb-4" />,
    },
  ];

  return (
    <>
    <Helmet>
      <title>Hewlett Packard Partnership</title>
      <meta name="description" content="Learn about GlobalXperts’ partnership with Hewlett Packard. Delivering innovative tech solutions with trusted hardware and services." />
      <meta name="keywords" content="Hewlett Packard Partner" />
        <link rel="canonical" href="https://globalxperts.net/partners/hewlett-packard-partnership" />

    </Helmet>
      <Navbar />
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-4xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                HPE Partner Information
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
                HPE delivers unique, open, and intelligent technology solutions
                as a service – spanning Cloud Services, Compute, High
                Performance Computing & AI, Intelligent Edge, Software, and
                Storage
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-14">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Hewlett Packard
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              HPE delivers unique, open, and intelligent technology solutions as
              a service – spanning Cloud Services, Compute, High Performance
              Computing & AI, Intelligent Edge, Software, and Storage – with a
              consistent experience across all clouds and edges, helping
              customers develop new business models, engage in new ways, and
              increase operational performance.
            </p>
          </div>
          {/* Image Section */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <img
              className="w-full rounded-lg"
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/partners/hpE.jpg"
              alt="Hewlett Packard Solutions"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 p-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 p-5 shadow-lg rounded-lg flex flex-col items-center text-left"
          >
            {service.icon}
            <h2 className="text-lg font-bold mb-2">{service.title}</h2>
            <p className="text-gray-700 text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto bg-white  p-8 md:p-12 flex flex-col items-center text-center space-y-6">
        <h2 className="text-4xl font-extrabold text-gray-900">
          GX Capabilities
        </h2>

        <p className="max-w-3xl text-gray-700 text-lg leading-relaxed">
          As a Hewlett Packard partner, GlobalXperts offers a comprehensive
          suite of services including the HPE products and services listed
          above.
        </p>

        <p className="text-lg font-medium text-gray-900">
          Additionally, we provide these services:
        </p>

        <ul className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-lg">
          <li className="flex items-center space-x-2">
            ✅ <span>Desktop Support</span>
          </li>
          <li className="flex items-center space-x-2">
            ✅ <span>Hyper-converged storage and compute</span>
          </li>
          <li className="flex items-center space-x-2">
            ✅ <span>Network-attached infrastructure</span>
          </li>
          <li className="flex items-center space-x-2">
            ✅ <span>Technology refresh</span>
          </li>
          <li className="flex items-center space-x-2">
            ✅ <span>Cloud-based virtual desktops</span>
          </li>
        </ul>
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

export default HewlettPackPartner;
