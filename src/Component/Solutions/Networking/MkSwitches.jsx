import React from 'react';
import ContactCard from '../../Contact/ContactCard';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const MkSwitches = () => {
  return (
    <>
    <Helmet>
  <title>Cisco Meraki Switches | Cloud Managed</title>
  <meta name="description" content="Deploy Cisco Meraki switches for reliable, cloud-managed networking. Enterprise switching by GlobalXperts." />
  <link rel="canonical" href="https://globalxperts.net/networking/mkswitches" />
</Helmet>

      <Navbar />
      <div className="w-full py-10 bg-gray-100 flex justify-center mt-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-8 bg-white rounded-lg shadow-md p-6">
          {/* Left Side Image */}
          <div className="w-full sm:w-1/2">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Networking/mkswitches.avif"
              alt="Meraki Switches"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          {/* Right Side Description */}
          <div className="w-full sm:w-1/2 space-y-4">
            <h3 className="text-2xl font-semibold mb-4">Cisco Meraki Switches</h3>
            <p className="text-gray-700">
              Cisco Meraki switches provide a range of networking solutions designed for easy management without sacrificing power or flexibility. Ideal for businesses of all sizes, they offer seamless connectivity with centralized management.
            </p>
            <p className="text-gray-700">
              Managed through a cloud-based interface, Meraki switches allow administrators to focus on business needs with plug-and-play setup, operational within minutes.
            </p>
            <p className="text-gray-700">
              A centralized management interface offers visibility into network performance, allowing for efficient monitoring, port configuration, and event log analysis.
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

export default MkSwitches;
