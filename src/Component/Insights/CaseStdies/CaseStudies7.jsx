import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import { Helmet } from "react-helmet";
const CaseStudies7 = () => {
  return (
    <>
    <Helmet>
      <title>United Rentals - CISCO Unified Communication
</title>
      <meta name="description" content="Unified communications solutions powered by Cisco—voice, video, messaging, and collaboration tools for modern workplaces." />
      <meta name="keywords" content="Unified communications solutions, Cisco, Voice, Video, Messaging, Collaboration tools, Modern workplaces"/>
    </Helmet>
    <Navbar />
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-12 md:py-0 2xl:py-8 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 md:px-12">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1 ">
              <h2 className="text-3xl sm:mt-48 lg:text-4xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20  ">
                United Rentals - CISCO Unified Communication
              </h2>
              <div className="md:px-0 px-20 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="w-full text-left lg:text-right mt-10 lg:mt-28 order-3 lg:order-2 ">
              <img src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/caseStudies/cs7.png" />
            </div>
          </div>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between text-md text-white  space-y-2 md:space-y-0 px-4 mt-10">
            <div>
              <span className="font-bold">SOLUTION:</span>Cisco Unified
              Communications
            </div>
            <div>
              <span className="font-bold">APPLICATION:</span>Unified Communications
            </div>
            <div>
              <span className="font-bold">MARKET:</span>{" "}
              <span className="">Service Provider</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          United Rentals Unified Communications Redesign
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Background
          </h2>
          <p className="text-gray-600">
            Founded in 1997, United Rentals is the largest equipment rental
            company in the world, with a store network three times the size of
            any other provider with 800+ locations in 49 states and 10 Canadian
            provinces. United Rentals serves a diverse customer base, including
            construction and industrial companies, utilities, municipalities,
            government agencies, and independent contractors.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Deliverables
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Phase 1 – Information Gathering & Assessment Validation
              </h3>
              <ul className="list-disc list-inside pl-5 text-gray-600">
                <li>Detailed Scope of Work and Work Breakdown Structure</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Phase 2 – Planning, Design and Procurement
              </h3>
              <ul className="list-disc list-inside pl-5 text-gray-600">
                <li>
                  Purchase order generation and order placement for platforms by
                  United Rentals
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Phase 3 – Build and Test
              </h3>
              <ul className="list-disc list-inside pl-5 text-gray-600">
                <li>
                  Setup, Configuration, burn in of the Cisco Unified
                  Communications Manager, PSTN Gateways, Unity Connect, Edge
                  Call Flow, Edge Call Flow Integration and Cisco Emergency
                  Responder platforms.
                </li>
                <li>
                  Proof of Concept Testing of the Unified Communications
                  Servers, PSTN Gateways, Unity Connect, Edge Call Flow, Edge
                  Call Flow Integration, Cisco Emergency Responder and SIP
                  Trunking Functionality.
                </li>
                <li>Developing Base production configuration settings</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Phase 4 – Staging and Implementation
              </h3>
              <ul className="list-disc list-inside pl-5 text-gray-600">
                <li>Onsite (DC 1 and DC 2) Implementation</li>
                <li>Full System Migration</li>
                <li>Acceptance Testing</li>
                <li>Post Implementation Support Handoff</li>
                <li>Day Two Support Staff Training</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Phase 5 – Project Closure
              </h3>
              <ul className="list-disc list-inside pl-5 text-gray-600">
                <li>
                  Network documentation, configuration parameters of Voice
                  appliances.
                </li>
                <li>
                  Presentation of the working End-State solution to UR
                  stakeholders
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Challenge
          </h2>
          <p className="text-gray-600">
            United Rental needed a professional service IT firm to manage the
            design and implementation of a new Cisco unified communications
            network for 800 locations and two data centers. This included
            installation and configuration of multiple types of Cisco
            technology, as well as design and implementation of SIP
            functionality at all United Rental locations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Solution
          </h2>
          <p className="text-gray-600">
            GlobalXperts supplied a team of engineers with extensive knowledge
            of Cisco Technologies to work on the project. GlobalXperts both
            designed and executed a plan to implement, set up, and configure all
            necessary equipment for the Unified Communications network redesign
            according to industry best practices. The project was completed in
            about four months.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Benefits
          </h2>
          <p className="text-gray-600">
            The redesign of United Rental’s Unified Communication network was an
            enormous success, thanks to the work of GlobalXperts' knowledgeable
            and professional engineers. The new system has dramatically improved
            communication within the company and allows United Rentals to better
            meet company objectives.
          </p>
        </section>
      </div>

      <div className="mt-8 p-4">
        <ContactCard />
      </div>
      <Footer />
    </>
  );
};

export default CaseStudies7;
