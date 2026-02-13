import React, { useRef, useState } from "react";
import Navbar from "../../Navbar";
import {
  FaServer,
  FaCloud,
  FaCogs,
  FaLightbulb,
  FaLock,
  FaDatabase,
  FaChartBar,
} from "react-icons/fa"; // Import icons
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Azure = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const faqSectionRef = useRef(null); // Reference to the FAQ section

  const handleToggle = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const scrollToFAQs = () => {
    if (faqSectionRef.current) {
      faqSectionRef.current.scrollIntoView({
        behavior: "smooth", // Smooth scrolling effect
        block: "start", // Scroll to the start of the section
      });
    }
  };

  const faqs = [
    {
      question: "What Azure Cloud Solutions does GlobalXperts offer?",
      answer:
        "GlobalXperts provides comprehensive Azure Cloud Solutions including consulting, migration, 24/7 managed services, DevOps, and cost optimization tailored to your unique needs.",
    },
    {
      question:
        "What is included in your Cloud Consulting and Design services?",
      answer:
        "Our Cloud Consulting and Design services help architect cloud solutions aligned with your business goals through a holistic assessment, tailored solutions, seamless integration, and future-ready architectures.",
    },
    {
      question: "How does the holistic assessment process work?",
      answer:
        "We analyze your IT infrastructure, applications, and processes to understand your requirements and create a tailored strategy that aligns with your business objectives.",
    },
    {
      question: "What are Tailored Cloud Solutions?",
      answer:
        "Tailored Cloud Solutions are custom-built cloud architectures that prioritize scalability, security, and cost-efficiency, designed to meet your specific business goals.",
    },
    {
      question:
        "How does GlobalXperts ensure seamless integration of cloud technologies?",
      answer:
        "We minimize downtime and enhance workflow compatibility by ensuring a smooth integration of cloud technologies with your existing infrastructure.",
    },
    {
      question:
        "What are the benefits of Azure Cloud Services compared to traditional servers?",
      answer:
        "Azure allows businesses to leverage existing investments and infrastructure without purchasing new servers, offering a cost-effective, scalable, and flexible cloud computing solution.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Azure Cloud Solutions</title>
        <meta
          name="description"
          content="Azure Cloud Solutions
"
        />
        <meta
          name="keywords"
          content="Azure Cloud Solutions
"
        />
      </Helmet>

      <Navbar />
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Azure Cloud Solutions
              </h2>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
                  onClick={scrollToFAQs}
                >
                  FAQs <span className="ml-2">→</span>
                </button>
              </div>
            </div>
            <div className="w-full text-center lg:text-right mt-10 lg:mt-28 order-3 lg:order-2">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                GlobalXperts leverages its extensive cloud expertise to support
                clients worldwide at every stage of their cloud journey. From
                consulting and migration to 24/7 managed services, DevOps, and
                cost optimization, we provide comprehensive solutions tailored
                to your unique needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-4 md:px-8 lg:px-16 2xl:px-16 2xl:max-w-7xl 2xl:mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-blue-900 sm:text-4xl">
            Cloud Consulting and Design
          </h1>
          <p className="text-gray-700 ">
            Explore our cloud consulting & design services tailored to architect
            cloud solutions aligned with your business goals.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Service 1 - Holistic Assessment */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 text-greenCustomColor">
              <FaServer className="w-16 h-16" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">
                Holistic Assessment
              </h3>
              <p className="text-gray-600">
                Our services start with a holistic assessment of your current IT
                landscape and business objectives. We analyze your
                infrastructure, applications, and processes to develop a
                tailored understanding of your requirements.
              </p>
            </div>
          </div>

          {/* Service 2 - Tailored Cloud Solutions */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 text-greenCustomColor">
              <FaCloud className="w-16 h-16" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">
                Tailored Cloud Solutions
              </h3>
              <p className="text-gray-600">
                Based on assessment insights, we craft customized solutions
                focused on scalability, security, and cost-efficiency to meet
                your business goals.
              </p>
            </div>
          </div>

          {/* Service 3 - Seamless Integration */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 text-greenCustomColor">
              <FaCogs className="w-16 h-16" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">
                Seamless Integration
              </h3>
              <p className="text-gray-600">
                We ensure a smooth integration of cloud technologies with your
                infrastructure, minimizing downtime and enhancing workflow
                compatibility.
              </p>
            </div>
          </div>

          {/* Service 4 - Future-ready Vision */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 text-greenCustomColor">
              <FaLightbulb className="w-16 h-16" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">
                Future-ready Vision
              </h3>
              <p className="text-gray-600">
                Our cloud approach anticipates future needs, designing scalable
                architectures to support long-term success and emerging
                technologies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-4 md:px-8 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl">
            Azure Cloud Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Compared to traditional server-based computing options, Azure allows
            businesses to leverage existing investments and infrastructure
            rather than purchasing new servers and equipment
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl text-black">
              Cloud Migration
            </h3>
            <p className="mt-2 text-gray-700 text-base">
              Microsoft Azure Migrate lets you easily identify how much it would
              cost to migrate VMs from on-premises to the cloud and perform
              quick health checks. It also allows you to search for comparable
              Azure services, and create a roadmap for your migration.
            </p>
          </div>

          {/* Card 2 with border */}
          <div className="bg-white p-6 rounded-lg shadow-md ">
            <h3 className="font-semibold text-xl text-black">SAP On Azure</h3>
            <p className="mt-2 text-gray-700 text-base">
              Microsoft Azure is the only platform that offers you the ability
              to run your SAP workloads on an open, flexible, and scalable cloud
              infrastructure with a consistent experience of tools, platforms,
              and frameworks. In addition, our SAP-certified Virtual Machines
              enable.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl text-black">
              Back Up and Disaster Recovery Services
            </h3>
            <p className="mt-2 text-gray-700 text-base">
              Backup and disaster recovery made simple with Azure Backup and
              Recovery services. Azure’s backup and disaster recovery solutions
              are simple, on-cloud, resilient, and highly available. Safeguard
              your backup environment with built-in security for hybrid.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl text-black">
              Virtual Machines On Azure
            </h3>
            <p className="mt-2 text-gray-700 text-base">
              Azure Virtual Machines are a core Azure service that you can use
              to build highly scalable and reliable applications in the cloud.
              VMs provide you the flexibility to configure operating systems,
              application software, and data centers to suit your precise
              requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-4 md:px-8 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl">
            Why Azure Cloud?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Azure provides high availability, reliability, and scalability
            across multiple industries. The company offers virtual machines,
            databases, and websites that are available at low cost under the
            Azure subscription model.
          </p>
        </div>

        {/* Feature Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Data Security */}
          <div className="text-center flex flex-col items-center">
            <FaLock className="text-greenCustomColor text-4xl mb-4" />
            <h3 className="font-semibold text-lg text-black">Data Security</h3>
            <p className="mt-2 text-gray-700 text-base max-w-xs">
              Microsoft Azure takes a holistic approach to security and gives
              organizations the tools they need to secure applications, data,
              and infrastructure, as well as provide compliance with various
              internal policies.
            </p>
          </div>

          {/* Effective Disaster Recovery */}
          <div className="text-center flex flex-col items-center">
            <FaDatabase className="text-greenCustomColor text-4xl mb-4" />
            <h3 className="font-semibold text-lg text-black">
              Effective Disaster Recovery
            </h3>
            <p className="mt-2 text-gray-700 text-base max-w-xs">
              Database storage is a large part of many organizations, and
              failure to properly protect this vital information could prove
              disastrous. Use Azure Site Recovery to create customized disaster
              recovery plans to meet the needs of your business.
            </p>
          </div>

          {/* Improved Scalability and Business Sustainability */}
          <div className="text-center flex flex-col items-center">
            <FaCloud className="text-greenCustomColor text-4xl mb-4" />
            <h3 className="font-semibold text-lg text-black">
              Improved Scalability and Business Sustainability
            </h3>
            <p className="mt-2 text-gray-700 text-base max-w-xs">
              Microsoft Azure Stack offers scalable, flexible, and highly
              scalable cloud services via its Cloud Platform. This allows
              distributed systems to synchronize seamlessly across locations.
            </p>
          </div>

          {/* Advanced-Data Analytics and Business Insights */}
          <div className="text-center flex flex-col items-center">
            <FaChartBar className="text-greenCustomColor text-4xl mb-4" />
            <h3 className="font-semibold text-lg text-black">
              Advanced-Data Analytics and Business Insights
            </h3>
            <p className="mt-2 text-gray-700 text-base max-w-xs">
              Microsoft offers cloud-based Advanced-Data Analytics and Business
              Insights solutions to simplify the journey to analytics and
              business insights.
            </p>
          </div>
        </div>
      </div>

      <div ref={faqSectionRef} className="max-w-7xl mx-auto px-4 py-16 ">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Frequently Asked Questions
        </h1>
        <div className="border border-blue-700 rounded-lg  mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <h2
                className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                onClick={() => handleToggle(index)}
              >
                {faq.question}
              </h2>
              {activeQuestion === index && (
                <p className="text-lg mb-4 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <ContactCard />
      </div>
      <div className="mt-6">
        <Footer />
      </div>
    </>
  );
};

export default Azure;
