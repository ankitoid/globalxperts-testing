import React from 'react';
import Navbar from '../../Navbar';
import ContactCard from '../../Contact/ContactCard';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AristaWAN = () => {
  return (
    <>
      <Helmet>
        <title>Arista WAN Solutions | Secure SD-WAN Connectivity</title>
        <meta
          name="description"
          content="Transform enterprise connectivity with Arista WAN solutions from GlobalXperts. Secure, scalable SD-WAN networking for modern hybrid work environments."
        />
        <link
          rel="canonical"
          href="https://globalxperts.net/networking/aristawan"
        />
      </Helmet>

      <Navbar />
      <div className="w-full py-10 bg-gray-100 flex justify-center mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-md p-6">
          {/* Left Side - Description */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl font-bold mb-6 text-blue-900">
              Transforming Enterprise Connectivity with Arista WAN
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              In the hybrid work environment, productivity remains strong. To support this shift, campus administrators must tackle new challenges related to security, collaboration, and remote support.
            </p>
            <p className="text-lg leading-relaxed">
              The rapid deployment of IoT devices is essential for a distributed workforce, driving productivity and ensuring seamless operations. Arista WAN solutions provide the scalable, secure, and reliable network connectivity needed for this modern infrastructure.
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
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Networking/aristaWAN.png"
              alt="Arista WAN"
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

export default AristaWAN;
