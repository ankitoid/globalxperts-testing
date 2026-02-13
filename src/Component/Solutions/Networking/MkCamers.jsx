import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import ContactCard from "../../Contact/ContactCard";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MkCameras = () => {
  return (
    <>
    <Helmet>
      <title>Cloud-Managed Smart Cameras</title>
      <meta name="description" content="Deploy and manage MK Camera systems with GlobalXperts for smart surveillance, remote monitoring, and enterprise-grade video analytics." />
      <link rel="canonical" href="https://globalxperts.net/networking/mkcamera" />

    </Helmet>
      <Navbar />
      <div className="w-full py-10 bg-gray-100 flex justify-center mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-md p-6">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Networking/mkcamera.avif"
              alt="Cloud-Managed Smart Cameras"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Description Section */}
          <div className="w-full md:w-1/2 md:pl-6">
            <h2 className="text-2xl font-bold mb-4">Cloud-Managed Smart Cameras</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The MV Smart Camera family combines simplicity with powerful data-driven intelligence. Each model is equipped with a high-performance processor similar to those in modern smartphones, reducing the need for extensive physical infrastructure and complex software.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These cameras not only enhance physical security but also deliver valuable business insights. MV smart cameras feature fast processing capabilities, robust security, and sophisticated analytics—all within a user-friendly design.
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

export default MkCameras;
