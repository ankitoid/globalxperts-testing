import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import { FaServicestack } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import Footer from "../../Footer";
import ContactCard from "../../Contact/ContactCard";
import { Helmet } from "react-helmet";

const FieldServiceEng = () => {
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
      question:
        "What types of on-site services does your Field Engineering team provide?",
      answer:
        "We offer comprehensive on-site services, including equipment installation, network setup, structured cabling, site assessments, and troubleshooting for IT infrastructure. Our team ensures efficient, hands-on support to optimize your operations.",
    },
    {
      question: "How does your team handle technology upgrades or refreshes?",
      answer:
        "Our engineers conduct technology refreshes by assessing your current infrastructure, replacing outdated equipment, and upgrading systems to ensure your network stays up-to-date with minimal disruption to business continuity.",
    },
    {
      question:
        "Can you assist with network equipment rack-and-stack services?",
      answer:
        "We provide expert network rack-and-stack services, ensuring proper installation, configuration, and testing of equipment to optimize performance and reduce downtime.",
    },
    {
      question: "Do you offer site assessments before starting a project?",
      answer:
        "We perform detailed site assessments to understand your current IT setup and identify any improvements needed for better efficiency, scalability, and performance.",
    },
    {
      question: "How do you ensure smooth equipment moves and migrations?",
      answer:
        "Our team plans and executes equipment moves and migrations with precision, minimizing downtime and ensuring a seamless transition of your systems from one location to another.",
    },
    {
      question:
        "What kind of support can we expect during 'Device deployment'?",
      answer:
        "We provide end-to-end device deployment services, from configuring and installing hardware to testing and ensuring everything works as intended. Our goal is to make the deployment process as efficient and smooth as possible.",
    },
  ];

  return (
    <>
      <Navbar />

      <Helmet>
        <title>Field Engineering Services</title>
        <meta name="description" content="Global field engineering services for multi-location deployments, installations, and on-site IT support." />
          <link rel="canonical" href="https://globalxperts.net/service/field-services/field-engineering-services" />

      </Helmet>

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-20 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Field Engineering Services{" "}
              </h1>
              <div className="px-20 lg:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="w-full sm:w-auto bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full w-full sm:w-auto"
                  onClick={scrollToFAQs}
                >
                  FAQs <span className="ml-2">→</span>
                </button>
              </div>
            </div>

            <div className="w-full text-center lg:text-right mt-10 lg:mt-0 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed mt-8 text-left">
                With over 5,000 highly skilled professionals positioned in 120+
                countries and 750+ cities, GlobalXperts is helping businesses
                across industries maintain high performance while reducing
                operational burdens. Our team serves as an extension of your IT
                team.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-white 2xl:bg-white   rounded-lg shadow-md p-6 py-4 max-w-7xl mx-auto mt-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Field-Services/image+(9).png" // Replace with the actual image path
            alt="Field Engineering Service"
            className="rounded-lg"

          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6">
          <h2 className="text-3xl font-bold text-gray-800">
            GlobalXperts Field Engineering Services
          </h2>
          <p className="mt-4 text-gray-600">
          Managing today’s complex IT environments demands agility, expertise, and a commitment to minimizing downtime. We provide unparalleled Field Engineering Services designed to seamlessly integrate with your business operations. Whether you need to deploy modern technology, upgrade infrastructure, resolve outages, or scale operations following a cloud migration, our global network of engineers and Smart Hands technicians ensure your IT challenges are met with efficiency and expertise.
          </p>
          <button className=" px-6 py-3 bg-white text-blue-700 border border-blue-900 rounded-xl font-semibold hover:bg-blue-900 hover:text-white mt-12">
            Download Brochure
          </button>
        </div>
      </div>

      <div className="bg-gray-100 2xl:bg-white max-w-7xl mx-auto py-4">
        {" "}
        <h2 className="text-3xl font-bold text-gray-800 text-center mt-12">
          Our Approach to IT Field Engineering Services
        </h2>
        <div className="bg-gray-100 2xl:bg-white max-w-7xl mx-auto flex items-center justify-center p-8">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
            {/* Field Engineering Card */}
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-12    hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center min-h-[450px] ">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-md w-16 h-16 text-green-600 text-3xl mb-">
                  <FaServicestack />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center mt-16">
                  Service Solutions for Rapid Response{" "}
                </h3>
                <p className="text-sm text-gray-600 mb-4 text-center ">
                  At GlobalXperts, we emphasis speed and consistency. Downtime
                  can significantly impact operations, which is why our team is
                  structured for swift mobilization. From the initial call to
                  ticket resolution, our dispatch centers, co-located with our
                  24/7 Network Operations Centers (NOCs), manage your requests
                  with precision. Whether your need is routine maintenance or a
                  time-sensitive emergency, our technicians and Smart Hands
                  personnel are on standby to ensure minimal disruption to your
                  business operations.
                </p>
              </div>
            </div>

            {/* Technology Refresh Card */}
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-12 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-md w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaClipboardList />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center mt-4">
                  Onboarding and Alignment with Your Needs
                </h3>
                <p className="text-sm text-gray-600 mb-4 text-center">
                  The foundation of our services is built during the onboarding
                  process. Our dedicated project managers work closely with your
                  stakeholders to understand your business environment, IT
                  infrastructure, and operational goals. This ensures that the
                  technical team assigned to your account has the right skillset
                  and tools to deliver the outcomes you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100  2xl:bg-white py-2 max-w-6xl mx-auto md:text-center   ">
        <h1 className="text-3xl font-bold text-center text-gray-800  ">
          Our Core Services
        </h1>
        <p1 className="text-xl text-center  text-gray-700 mt-12 p-4 ">
          GlobalXperts provides end-to-end support for every stage of your IT
          lifecycle, from site preparation to ongoing maintenance. Our
          comprehensive offerings include:
        </p1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 bg-gray-100 2xl:bg-white max-w-7xl mx-auto px-4 py-4">
          {[
            {
              title: "Deployment and Installation",
              points: [
                "Rack and stack services for servers, routers, and switches.",
                "Installation of SD-WAN, VoIP, Wi-Fi access points, and other IT solutions.",
                "Software and hardware installations, including Microsoft 365, SharePoint, and Cisco Telepresence.",
              ],
            },
            {
              title: "Specialized Telecom Solutions",
              points: [
                "Expertise in fiber optics, DSL, satellite, and SD-WAN technologies.",
                "Network optimization to improve data transmission and performance.",
              ],
            },
            {
              title: "Break-Fix and Troubleshooting",
              points: [
                "Emergency response for outages and hardware failures.",
                "Troubleshooting and resolution of connectivity issues.",
                "Industry-best first-dispatch completion rate of 98%.",
              ],
            },
            {
              title: "Maintenance and Change Management",
              points: [
                "RMA (Return Merchandise Authorization) management.",
                "Patch updates and ongoing change management.",
                "Preventative maintenance and proactive problem-solving.",
              ],
            },
            {
              title: "Site Preparation and Assessments",
              points: [
                "Infrastructure audits and readiness evaluations.",
                "Technology refresh and modernization planning.",
              ],
            },
            {
              title: "Custom Solutions for Complex IT Needs",
              points: [
                "Unified communications for messaging, voice, video, and collaboration.",
                "Data center migrations, hybrid cloud transitions, and disaster recovery planning.",
              ],
            },
          ].map((box, index) => (
            <div
              key={index}
              className="bg-white 2xl:bg-gray-100    rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl text-center font-semibold text-blue-700 mb-2">
                  {box.title}
                </h3>
                <div className="border-t-2 border-blue-700 mt-2 mb-4"></div>
                <ul className="list-disc pl-6 space-y-2 text-gray-800 justify-center">
                  {box.points.map((point, i) => (
                    <li key={i} className="text-md">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-8 px-8 lg:px-16">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* A Team You Can Trust Section */}
          <div className="bg-white border border-gray-200 shadow-md rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
              A Team You Can Trust
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our engineers undergo rigorous vetting and certification to ensure
              they are equipped to meet the demands of your IT environment. With
              expertise in Cisco solutions, cloud migrations, SD-WAN, and more,
              our team is capable of managing diverse IT ecosystems with
              precision.
            </p>
          </div>

          {/* Transparency and Reporting Section */}
          <div className="bg-white border border-gray-200 shadow-md rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
              Transparency and Reporting
            </h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              We believe that transparency is essential to successful IT service
              delivery. IP access allows our customers visibility into the
              tickets being processed for them. Each ticket is followed up with
              a report on the issue including time reported, time closed, vendor
              consultations (if needed), whether escalation was needed etc.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Because we are always in training mode, we hold chalk talk
              sessions on a regular basis to discuss the most interesting
              problems and how the tickets were resolved.
            </p>
          </div>

          {/* Emergency Response Section */}
          <div className="bg-white border border-gray-200 shadow-md rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
              Emergency Response: When Downtime Isn’t an Option
            </h2>
            <p className="text-gray-600 leading-relaxed">
              In cases of critical system failures or hard-down emergencies, our
              field engineers are deployed with the urgency your business
              requires. Whether it's testing, installing new equipment, or
              troubleshooting device issues, we ensure your systems are back
              online with minimal disruption.
            </p>
          </div>

          {/* The GlobalXperts Commitment Section */}
          <div className="bg-white border border-gray-200 shadow-md rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
              The GlobalXperts Commitment
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At GlobalXperts, we go beyond service delivery—we build
              partnerships. Our commitment to quality, transparency, and
              continuous improvement ensures that your IT infrastructure remains
              robust, efficient, and aligned with your business goals.
            </p>
            <div className="text-center mt-8">
              <a
                href="/contact-us"
                className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                Ready to transform your IT operations? Contact GlobalXperts
                today.
              </a>
            </div>
          </div>
        </div>
      </div>

      <div ref={faqSectionRef} className="max-w-7xl mx-auto px-4 py-16">
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

      <div className="mb-8 p-4">
        {" "}
        <ContactCard />
      </div>
      <Footer />
    </>
  );
};

export default FieldServiceEng;
