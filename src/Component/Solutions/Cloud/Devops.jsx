import React from "react";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import { MdDeveloperMode } from "react-icons/md";
import { SiImprovmx } from "react-icons/si";
import { FaOpera } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Devops = () => {
  return (
    <>
    <Helmet>
        <title>DevOps </title>
        <meta name="description" content="DevOps" />
          <link rel="canonical" href="https://globalxperts.net/solutions/cloud/devops" />

      </Helmet>
      <Navbar />
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                DevOps{" "}
              </h2>
              <div className="px-20 lg:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="w-full text-center lg:text-right mt-10 lg:mt-0 order-3 lg:order-2 p-4">
              <p className="text-base text-left lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                Our end-to-end DevOps services help our clients achieve
                increased reliability and frequency of software releases.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between mt-20 px-4">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            DevOps Consulting
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4 text-left">
            As the best DevOps consultant, we automate the manual infrastructure
            deployment process using modern tools to standardize the
            conventional method. Our end-to-end DevOps services help our clients
            achieve increased reliability and frequency of software releases.
          </p>
        </div>
        {/* Image Section */}
        <div className="relative mt-12 lg:mt-0 lg:w-1/2">
          <img
            className="w-full rounded-lg"
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/devopsIMG.jpeg"
            alt="A man working on a laptop in a server room."
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
            {/* You can add additional content here if needed */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center mt-20 px-4">
        <h1 className="text-3xl font-bold text-gray-900">
          What makes us the top DevOps consulting company?
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* First item */}
          <div className="flex items-start space-x-4">
            <div className="bg-red-500 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p>
              We minimize the chances of{" "}
              <span className="text-blue-400">
                infrastructure deployment failure and successful rollbacks
              </span>{" "}
              after running frequent tests.
            </p>
          </div>

          {/* Second item */}
          <div className="flex items-start space-x-4">
            <div className="bg-red-500 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h18v6H3zm0 6h18v6H3zm0 6h18v6H3z"
                />
              </svg>
            </div>
            <p>
              Our DevOps Consultancy helps in solid source code control,{" "}
              <span className="text-blue-400">cloud computing</span>, and
              automated process monitoring.
            </p>
          </div>

          {/* Third item */}
          <div className="flex items-start space-x-4">
            <div className="bg-red-500 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <p>
              We have collaborative teams with shared objectives, strong working
              principles, and consistent value delivery.
            </p>
          </div>

          {/* Fourth item */}
          <div className="flex items-start space-x-4">
            <div className="bg-red-500 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3"
                />
              </svg>
            </div>
            <p>
              Our best DevOps solutions achieve greater MTTR (Mean Time To
              Recovery) by employing a fully detailed system service
              architecture.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center mb-10 px-4 mt-10">
        <h1 className="text-yellow-400 text-3xl lg:text-4xl font-bold mb-4">
          Why should you get our DevOps consulting services?
        </h1>
        <p className="text-lg">
          Being the leading DevOps consulting company, our best DevOps solutions
          create your roadmap and give 24/7 support.
        </p>
        <p className="text-md mt-2">
          Our end-to-end DevOps consultancy and implementation services boost
          your growth. Need any IT service or application support? Count on us!
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Continuous Delivery */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
            <div className="bg-green-500 rounded-full p-4">
              {/* Icon: Lightning Bolt for speed and automation */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Continuous Delivery</h3>
            <p className="text-center">
              Our DevOps service delivers excellent continuous delivery (CD)
              capabilities with automation to boost your service efficiency.
            </p>
          </div>

          {/* Configuration Management */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
            <div className="bg-yellow-400 rounded-full p-4">
              {/* Icon: Cog for system settings/configuration */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4.055A9.001 9.001 0 002.058 11H5.05a7 7 0 011.4-2.894l1.667 1.667a4 4 0 005.656-5.656L14.44 2.65A7 7 0 0116.94 5h2.992A9.001 9.001 0 0011 4.055z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Configuration Management</h3>
            <p className="text-center">
              We offer consistent deployment services for Configuration
              Management. It eliminates system configuration mismatches while
              optimizing cost.
            </p>
          </div>

          {/* Infrastructure As a Code */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
            <div className="bg-green-500 rounded-full p-4">
              {/* Icon: Code for infrastructure-as-code */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 18l4-4m0 0l-4-4m4 4H8m-4 0l4 4m0 0l-4-4m4 4V8"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Infrastructure As a Code</h3>
            <p className="text-center">
              Our service enables infrastructure provisioning with code,
              ensuring consistency and flexibility in deployments.
            </p>
          </div>

          {/* Monitoring & Logging */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
            <div className="bg-blue-500 rounded-full p-4">
              {/* Icon: Eye for monitoring */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9.75c-1.242 0-2.25 1.008-2.25 2.25s1.008 2.25 2.25 2.25 2.25-1.008 2.25-2.25-1.008-2.25-2.25-2.25zM21 12c0 1.657-1.005 3.403-2.678 5.071C16.631 18.693 14.373 20 12 20s-4.631-1.307-6.322-2.929C4.005 15.403 3 13.657 3 12c0-1.657 1.005-3.403 2.678-5.071C7.369 5.307 9.627 4 12 4s4.631 1.307 6.322 2.929C19.995 8.597 21 10.343 21 12z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Monitoring & Logging</h3>
            <p className="text-center">
              We leverage modern DevOps tools and technologies and follow the
              most appropriate practices for smooth monitoring and logging
              processes.
            </p>
          </div>
        </div>
      </div>
      <div className="container max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Why do large enterprises choose GlobalXperts as the DevOps Consulting
          Company?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-8 text-center justify-items-center">
            <MdDeveloperMode className="text-green-500 text-4xl mb-4" />
            <h2 className="text-2xl font-bold text-green-500 mb-2">
              Faster Deployment
            </h2>
            <p className="text-gray-400 text-lg">
              DevOps enables speedy execution of development, testing, and
              release, along with integrating automated workflows with DevOps
              consulting services.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-8 text-center justify-center items-center">
            <div className="flex justify-center mb-4 rounded-lg shadow-sm ">
            <SiImprovmx className="text-green-500 text-4xl mb-4"  />

            </div>
            {/* <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12 ">
              <SiImprovmx className="" />
            </div> */}
            <h2 className="text-2xl font-bold text-green-500 mb-2">
              Improved Efficiency
            </h2>
            <p className="text-gray-400 text-lg">
              DevOps services can automate deployments and testing and thus
              enhance your business value under the guidance of our top DevOps
              consultant.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
            <FaOpera className="text-green-500 text-4xl mb-4" />

            </div>
            <h2 className="text-2xl font-bold text-green-500 mb-2">
              Smooth Operations
            </h2>
            <p className="text-gray-400 text-lg">
              DevOps streamline your operations by identifying and removing
              unwanted processes. Thus, it speeds up the flow of value by
              positively impacting costs.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <ContactCard />
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </>
  );
};

export default Devops;
