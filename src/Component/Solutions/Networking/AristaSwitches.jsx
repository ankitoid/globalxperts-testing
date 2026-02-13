import React from 'react';
import ContactCard from '../../Contact/ContactCard';
import Navbar from '../../Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../Footer';
import { Helmet } from 'react-helmet';

const MkSwitches = () => {
  return (
    <>
    <Helmet>
  <title>Arista Switches | High-Performance Networking</title>
  <meta name="description" content="Deploy high-performance Arista switches with GlobalXperts. Reliable, scalable switching for enterprise and data centers." />
  <link rel="canonical" href="https://globalxperts.net/networking/arista-switches" />
</Helmet>

      <Navbar />
      <div className="w-full py-10 bg-gray-100 flex justify-center mt-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-8 bg-white rounded-lg shadow-md p-6">
          {/* Left Side - Image */}
          <div className="w-full sm:w-1/2">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Networking/arista8.webp"
              alt="Meraki Switches"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          {/* Right Side - Description */}
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">
              Cisco Meraki Switches
            </h3>
            <p className="text-gray-700 mb-4">
              Cisco Meraki switches provide easy-to-manage networking solutions for businesses of all sizes. Their cloud-based management simplifies device configuration, allowing administrators to focus on business needs rather than repetitive tasks.
            </p>
            <p className="text-gray-700 mb-4">
              With plug-and-play setup, switches can be operational within minutes. The centralized management interface offers deep visibility into network performance, allowing for effective monitoring, port configuration, and security management from the Meraki dashboard.
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

      </div>    </>
  );
};

export default MkSwitches;
