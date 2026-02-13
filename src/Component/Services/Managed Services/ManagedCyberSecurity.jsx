import React from "react";
import {
  FaBalanceScale,
  FaClock,
  FaCog,
  FaDollarSign,
  FaShieldAlt,
} from "react-icons/fa";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";

const ManagedCyberSecurity = () => {
  return (
    <>
      <Navbar />

      <Helmet>
        <title>Network Operations Center - Cybersecurity</title>
        <meta
          name="description"
          content="Network Operations Center – Cyber Security"
        />
          <link rel="canonical" href="https://globalxperts.net/service/managed-services/network-operations-center-cybersecurity" />

      </Helmet>

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20 p-2">
                Network Operations Center - Cybersecurity
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

            <div className="w-full text-center lg:text-left mt-10 lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                Protecting your digital world, one byte at a time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto  flex flex-col lg:flex-row items-center justify-between mt-2 pb-10 p-8">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Network Operations Center – Cyber Security
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4 text-left">
            Are you concerned about the security of your organization’s
            sensitive data? Do you want to protect your company from potential
            cyber threats that can harm your reputation, finances, and customer
            trust? If so, you need to invest in a Cyber Security NOC. Our Cyber
            Security NOC is designed to provide comprehensive protection against
            modern cyber threats. Contact us today to learn more.
          </p>
        </div>
        <div className="relative mt-12 lg:mt-0 lg:w-1/2  px-5 ">
          <img
            className="w-full rounded-lg"
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Managed-Services/NetworkOperationsCenterCyberSecurity.jpg"
            alt="A man working on a laptop in a server room."
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
        </div>
        {/* Image Section */}
      </div>

      <div className="max-w-7xl mx-auto py-6 bg-gray-100 2xl:bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Why Choose GlobalXperts?
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Our Cyber Security NOC solution offers a unique value proposition to
          cloud or enterprise data center environments. By deploying our
          solution, you’ll benefit from:
        </p>

        {/* Boxes Section */}
        <div className="bg-gray-100  2xl:bg-white flex items-center justify-center  2xl:mt-8 mb-0 p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mb-8">
            {/*  Improved Productivity and Efficiency Card */}
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaShieldAlt />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Advanced Threat Detection and Response:{" "}
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-left p-2">
                  Our XDR solution uses advanced machine learning algorithms to
                  identify and respond to known and unknown threats in
                  real-time, preventing sophisticated cyber-attacks that
                  traditional security tools may miss. Additionally, our Deep
                  Packet Inspection technology provides deeper visibility into
                  network traffic, enabling us to detect and respond to threats
                  faster and more accurately.
                </p>
              </div>
            </div>

            {/*  Cards */}
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
              <div className="flex flex-col items-center flex-grow ">
                <div className="flex items-center justify-center bg-white  rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaClock />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  24/7 Monitoring and Support
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-left p-2">
                  Our team of experienced cybersecurity professionals is
                  available 24/7 ensuring that your network is protected against
                  threats around the clock. We use XDR (Extended Detection and
                  Response), which is a proactive system that goes beyond
                  traditional security tools such as antivirus and firewalls. It
                  can identify and respond to advanced threats that may go
                  unnoticed by other tools, including zero-day attacks, fileless
                  malware, and ransomware.
                </p>
              </div>
            </div>

            {/* Onsite IT Support Card */}
            <div className="bg-white  2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaDollarSign />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Cost-Effective Solution
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-left p-2">
                  Because our solution is cost-effective, by outsourcing your
                  cybersecurity to us, you will be able to save on hiring,
                  training, and managing an in-house security team.
                </p>
              </div>
            </div>

            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px] max-w-[380px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaBalanceScale />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Compliance and Regulatory Requirements
                </h3>
                <p className="text-sm text-gray-600 mb-0 p-2 text-left">
                  Our solution is designed to help you meet regulatory and
                  compliance requirements, such as HIPAA, GDPR, and PCI DSS. Our
                  solution also ensures that your data is protected and
                  compliant with industry standards.
                </p>
              </div>
            </div>

            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px] max-w-[380px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaCog />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Customized Security Solutions
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-left p-2">
                  Our Cyber Security NOC solution is tailored to meet the unique
                  needs of your organization. We work closely with you to
                  develop a customized cybersecurity solution that is designed
                  to address your specific needs and challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-lg mb-4 text-gray-600 text-center p-4 md:p-0">
          <p>
            Don’t wait until a cyber-attack happens. Contact us today to learn
            more about how we can help protect your cloud or enterprise data
            center from cyber threats.
          </p>
        </div>
      </div>

      <div className="mt-4 mb-4 p-4">
        <ContactCard />
      </div>
      <Footer />
    </>
  );
};

export default ManagedCyberSecurity;
