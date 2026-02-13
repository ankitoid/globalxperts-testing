import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Helmet } from "react-helmet";

const CaseStudies8 = () => {
  return (
    <>
    <Helmet>
      <title>TowneBank - CISCO Telepresence</title>
      <meta name="description" content="Case study: Cisco Telepresence deployment for Towne Bank to enhance remote collaboration and enterprise communication efficiency." />
    </Helmet>
    <Navbar/>
       <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto  py-10 md:py-0 2xl:py-8 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 md:px-20">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-48 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20 ">
                TowneBank - CISCO Telepresence
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
            <div className="w-full text-left lg:text-right mt-10 lg:mt-28 order-3 lg:order-2">
              <img src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/caseStudies/CS8.png" />
            </div>
          </div>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between text-md text-white mb-8 space-y-2 md:space-y-0 px-4 mt-8">
            <div>
              <span className="font-bold">SOLUTION:</span>Professional SVCS and
              MSP
            </div>
            <div>
              <span className="font-bold">APPLICATION:</span>Collaboration
            </div>
            <div>
              <span className="font-bold">MARKET:</span>{" "}
              <span className="">Financial</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Background
          </h2>
          <p className="text-gray-600">
            Founded in 1999, TowneBank remains one of the largest banks ever
            chartered in Virginia. Named in 2022 as the #9 Best Bank in America
            by Forbes, the success of TowneBank is rooted in our commitment to
            the core values established by our founders more than twenty years
            ago. TowneBank offers a variety of business and financial services,
            focusing on high ethical standards, customer service, and community
            involvement.
          </p>
        </section>

      

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Challenge
          </h2>
          <p className="text-gray-600">
            TowneBank needed end-to-end technical resources to design, install,
            configure, and test a video teleconferencing system allowing them to
            participate in live, remote meetings with their other offices and
            partners.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Solution
          </h2>
          <p className="text-gray-600">
            GlobalXperts chose the Cisco Telepresence SX80 Codec as the best fit
            for this requirement. The codec was integrated with Cisco’s Unified
            Communications (UC) Manager and registered as a SIP Telepresence
            endpoint. The solution was deployed remotely and onsite in
            Greenville, NC, ensuring seamless functionality and full integration
            with the bank’s communication system.
          </p>
        </section>

        <h2 className="text-2xl font-semibold text-gray-700 mb-4 mr-6">
            Benefits
          </h2>
        <section className="mb-8 flex items-center">
         
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-28">
            <div className="text-gray-600 md:w-1/2">
              <p>
                The experienced team provided by GlobalXperts Inc. allowed
                TowneBank to fulfill its business needs and increase its
                profitability and overall employee productivity through enhanced
                employee collaboration.
              </p>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/caseStudies/cs8_Benifit.png"
                alt="Telepresence System"
                className="w-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Deliverables
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Preparation and Configuration
              </h3>
              <ul className="list-decimal list-inside pl-5 text-gray-600">
                <li>
                Prepare the Telepresence Codec SX80 for installation, connectivity, and configuration in accordance with the SOW and survey data.
                </li>
                <li>
                Configure the Telepresence Codec SX80 and integrate with the customer’s UC Call Manager as a single registered SIP Telepresence endpoint.
                </li>
                <li>
                Engineer Telepresence Codec SX80 with a single TV Screen, Precision P60 camera, wireless and wired MICs/Speakers.
                </li>
                <li>
                Set up Telepresence Codec SX80 for presentation with a PC and a Clickshare Server and HDMI.
                </li>
                <li>
                Assist with SIP Dial Plan in customer’s UC Call Manager for incoming/outgoing calls from Telepresence Codec SX80.
                </li>
                <li>
                Test Telepresence Codec SX80 to ensure proper functionality, registration, provisioning, Clickshare server and PC presentations.
                </li>
                <li>
                Test Telepresence Codec SX80 to ensure calls can be made to and from Codec to no more than two test devices reachable from customer’s UC Call Manager.
                </li>
              </ul>
            </div>

          
          </div>
        </section>
      </div>

      <div className="mt-8 p-4">
        <ContactCard />
      </div>

      <Footer/>

    </>
  );
};

export default CaseStudies8;
