import React from 'react';
import Navbar from '../../Navbar';
import ContactCard from '../../Contact/ContactCard';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AristaWifi = () => {
  return (
    <>
    <Helmet>
  <title>Arista CCS-710 WiFi Solutions</title>
  <meta
    name="description"
    content="Discover Arista CCS-710 compact WiFi switching solutions by GlobalXperts. Ideal for space-constrained environments with silent, powerful performance."
  />
  <link
    rel="canonical"
    href="https://globalxperts.net/networking/aristawifi"
  />
</Helmet>

      <Navbar />
      <div className="w-full py-10 bg-gray-100 flex justify-center mt-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-md p-6">
          {/* Left Side - Description */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Arista CCS-710: Compact and Powerful Switching Solutions
            </h2>
            <p className="text-lg mb-4 leading-relaxed">
              The Arista CCS-710 fanless, compact Power over Ethernet (PoE) switch series is designed to extend the Cognitive Campus network into space-constrained and quiet environments. Ideal for locations such as conference rooms, retail showrooms, and broadcast control rooms, the CCS-710 delivers both power and performance in tight spaces.
            </p>
            <p className="text-lg leading-relaxed">
              With flexible mounting options, the CCS-710 series is perfect for deployments where sound and space management are critical, ensuring efficient, silent, and powerful network connectivity wherever it's needed most.
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
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Networking/Arista-Switches.webp"
              alt="Arista Switches"
              className="w-full h-auto object-cover rounded-lg shadow-md"
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

export default AristaWifi;
