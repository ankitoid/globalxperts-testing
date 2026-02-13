import React from "react";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const AcloudVision = () => {
  return (
    <>
      <Helmet>
        <title>Arista CloudVision | Network Management Platform</title>
        <meta name="description" content="Centralize and automate your network operations with Arista CloudVision. Real-time visibility and analytics by GlobalXperts." />
        <link rel="canonical" href="https://globalxperts.net/networking/acloudvision" />
      </Helmet>

      <Navbar />

      <div className="flex min-h-screen flex-col md:flex-row items-center justify-between p-6 bg-white mt-8">
        {/* Left Side - Description */}
        <div className="md:w-1/2 w-full text-left mb-6 md:mb-0 px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            CloudVision®: The Future of Networking
          </h2>
          <p className="text-base md:text-lg mb-4">
            Arista has pioneered cloud networking with a software-driven
            approach that emphasizes consistency and reliability. CloudVision®
            automates network management across private, public, and hybrid
            clouds, simplifying operations in wired and wireless environments.
          </p>
          <p className="text-base md:text-lg">
            By leveraging cloud technology, big data analytics, and machine
            learning, CloudVision Cognitive Unified Edge (CV-CUE) enhances
            network performance. With root-cause analysis and proactive problem
            resolution, CV-CUE minimizes troubleshooting efforts and reduces
            total cost of ownership.
          </p>
          <div className=" mt-4">
            <Link
              to="/Networking"
              className="bg-green-600 text-white px-6 py-2 rounded-md shadow hover:bg-green-700 transition"
            >
              Back
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Networking/cloudvision.webp"
            alt="CloudVision"
            className="w-full h-auto rounded-lg shadow-md max-w-md md:max-w-full"
          />
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

export default AcloudVision;
