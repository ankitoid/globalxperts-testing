import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import ContactCard from "../../Contact/ContactCard";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const MkWireless = () => {
  return (
    <>
      <Helmet>
        <title>Cisco Meraki Wireless | Enterprise WiFi</title>
        <meta name="description" content="Deliver secure, high-speed enterprise WiFi with Cisco Meraki wireless solutions by GlobalXperts." />
        <link rel="canonical" href="https://globalxperts.net/networking/mkwireless" />
      </Helmet>

      <Navbar />
      <div className="w-full py-10 bg-gray-100 flex justify-center mt-8">

        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-8 bg-white rounded-lg shadow-md p-6">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Networking/mkwireless.jpg"
              alt="Meraki Wireless Access Points"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Description Section */}
          <div className="w-full md:w-1/2 md:pl-6 mt-6 md:mt-0">
            <h2 className="text-2xl font-bold mb-4">
              Meraki Wireless Cloud-Managed Access Points
            </h2>
            <p className="text-gray-700 mb-4">
              The Meraki cloud-managed architecture enables seamless management of campus-wide Wi-Fi and distributed networks. It features zero-touch provisioning, network-wide visibility, self-learning RF optimization, and easy firmware updates.
            </p>
            <p className="text-gray-700">
              Adding new sites to a network is quick and doesn't require extensive training for staff. Meraki's self-provisioning devices support large deployments efficiently, leveraging AI and data to provide essential insights for decision-making.
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

export default MkWireless;
