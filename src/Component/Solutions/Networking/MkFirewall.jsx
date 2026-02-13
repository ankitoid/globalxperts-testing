import React from 'react';
import Navbar from '../../Navbar';
import ContactCard from '../../Contact/ContactCard';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const MkFirewall = () => {
  return (
    <>
      <Helmet>
        <title>Cisco Meraki MX Firewall & SD-WAN</title>
        <meta
          name="description"
          content="Deploy robust MK Firewall solutions with GlobalXperts. Ensure secure, fast, and reliable network protection for your enterprise."
        />
        <link
          rel="canonical"
          href="https://globalxperts.net/networking/mkfirewall"
        />
      </Helmet>

      <Navbar />
      <div className="w-full py-10 bg-gray-100 flex justify-center mt-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-md p-6">
          {/* Left Side - Image */}


          {/* Right Side - Description */}
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-2xl font-semibold mb-4">Cisco Meraki MX Firewall & SD-WAN</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The Cisco Meraki MX is a multifunctional security and SD-WAN enterprise appliance that provides secure connectivity to hub locations and multi-cloud environments, all from a single device. Organizations rely on it for delivering application quality of experience (QoE) through advanced machine learning analytics.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Fully cloud-managed, the MX allows for zero-touch installation and remote management, making it ideal for distributed branches, campuses, and data centers. Its comprehensive suite of secure network capabilities eliminates the need for multiple appliances.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Key features include application-based firewalling, content filtering, intrusion detection and prevention, and site-to-site Auto VPN, among others. SD-WAN capabilities optimize access to public and private cloud resources via virtual MX appliances (vMX) supported by AWS, Azure, Google Cloud, and Alibaba Cloud.
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
          <div className="w-full md:w-1/2">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Networking/mkFirewall.avif"
              alt="Meraki Firewall"
              className="w-full h-auto object-cover rounded-md"
            />
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

export default MkFirewall;
