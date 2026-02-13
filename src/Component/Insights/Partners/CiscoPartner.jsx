import React from "react";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import Navbar from "../../Navbar";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CiscoPartner = () => {
  return (
    <>
    <Helmet>
      <title>Cisco Partner Information</title>
      <meta name="description" content="Partnered with Cisco for delivering secure networking, voice, video, and infrastructure services tailored to enterprise IT needs." />
    </Helmet>
      <Navbar />
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-4xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Cisco Partner Information
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
                CISCO Systems is a conglomerate that develops communications and
                computer networking technologies. CISCO is famous for their
                enterprise routers and switches.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Main Container for Partner Information */}
      <div className="max-w-7xl mx-auto py-16 px-4 lg:px-8">
        {/* Two-column Layout for Image and Content */}
        <div className="lg:flex lg:items-center lg:space-x-12">
          {/* Left Column: Text */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Cisco Partner Information
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              CISCO Systems is a conglomerate that develops communications and
              computer networking technologies. CISCO is famous for their
              enterprise routers and switches. They also are an industry leader
              in network infrastructure certifications, providing a means for
              people to demonstrate their proficiency with networking
              technologies with rigorous exams and labs.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <img
              className="w-full rounded-lg"
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/cisco.jpg"
              alt="Cisco Meraki Partner"
            />
          </div>
        </div>
      </div>
      {/* Container for Certifications */}
      <div className="max-w-7xl mx-auto py-16 px-4 lg:px-8">
        <h1 className="text-3xl font-semibold text-center mb-8">
          CISCO Certifications{" "}
        </h1>
        <p className="text-lg text-center text-gray-500 max-w-3xl mx-auto mb-10">
          Our staff possess one or more of the following certifications. The
          purpose of getting a Cisco certification is to demonstrate your skills
          and knowledge in designing, deploying, and managing enterprise network
          infrastructure solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Certification 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/partners/ccieEmeritus.png"
              alt="CCIE Emeritus"
              className="w-full h-auto object-contain mb-4"
            />
            <p className="text-gray-600">
              The Cisco Certified Internetworking Expert (CCIE) certification
              indicates the highest level of network expertise. Earners of the
              Emeritus status have possessed the CCIE certification for 10
              years. Earners of the Lifetime Emeritus status have held this
              certification for 20.
            </p>
          </div>

          {/* Certification 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/partners/ccieDataCenter.png"
              alt="CCIE Data Center"
              className="w-full h-auto object-contain mb-4"
            />
            <p className="text-gray-600">
              The CCIE certification has a Data Center track, which focuses on
              data center networking. Earners of this track can design,
              implement, and manage data center infrastructure.
            </p>
          </div>

          {/* Certification 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/partners/ccieSecurity.png"
              alt="CCIE Security"
              className="w-full h-auto object-contain mb-4"
            />
            <p className="text-gray-600">
              The CCIE certification has a Security track. Earners of this track
              can architect, implement, support and troubleshoot CISCO security
              technologies using the current best practices of cybersecurity.
            </p>
          </div>

          {/* Certification 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/partners/ccnpNetwork.png"
              alt="CCIE Enterprise"
              className="w-full h-auto object-contain mb-4"
            />
            <p className="text-gray-600">
              The Cisco Certified Network Professional certification indicates
              extensive networking expertise. Holders of this certification can
              build and maintain enterprise networks and possess knowledge of
              network infrastructure, virtualization, automation, assurance, and
              security.
            </p>
          </div>
        </div>
      </div>
      {/* GX Capabilities Section */}
      <div className="max-w-7xl mx-auto flex flex-col items-center mb-8 space-y-6 ">
        <h2 className="text-4xl font-bold mb-8 text-black text-center">
          GX Capabilities
        </h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-center">
          As a CISCO partner, GlobalXperts offers a comprehensive suite of
          services including configuration, maintenance, support and
          troubleshooting of CISCO devices. We also have a suite of network
          patching and network security services that we offer.
        </p>
        <p className=" text-gray-700 text-center">
          We also offer services involving these industry solutions:
        </p>
        <ul className="list-disc list-inside text-gray-700 max-w-3xl mx-auto space-y-2 text-left">
          <li>Edge Firewalls (MX Series)</li>
          <li>Switches</li>
          <li>Wi-Fi</li>
          <li>Cameras with AI assist</li>
          <li>Cloud managed from a single portal</li>
          <li>Contact center solutions</li>
          <li>Collaboration solutions</li>
        </ul>
      </div>
      {/* Contact Card and Footer */}
      <div className="mt-8 mb-6 p-2">
        <ContactCard />
      </div>
      <div className="mt-8">
        <Footer />
      </div>{" "}
    </>
  );
};

export default CiscoPartner;
