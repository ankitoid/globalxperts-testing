import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import { Helmet } from "react-helmet";
const CaseStudies6 = () => {
  return (
    <>
    <Helmet>
      <title></title>
      <meta name="description" content="Learn how GlobalXperts optimized WAN performance for Disney using NEC technology—enhancing speed and reducing latency." />
    </Helmet>
   
    <Navbar/>
         <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-12  md:py-8 2xl:py-16 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 md:px-20">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-2xl sm:mt-48 lg:text-4xl font-bold text-white mt-10 lg:mt-28 2xl:mt-20 ">
              NEC Disney
              </h2>
              <div className="md:px-0 px-20flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="w-full text-left lg:text-right mt-10 lg:mt-28 order-3 lg:order-2">
              <img src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/caseStudies/CS6.png" />
            </div>
          </div>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between text-md text-white  space-y-2 md:space-y-0 px-4 mt-16">
            <div>
              <span className="font-bold">SOLUTION:</span> Cisco Routers
            </div>
            <div>
              <span className="font-bold">APPLICATION:</span> WAN Optimization
            </div>
            <div>
              <span className="font-bold">MARKET:</span>{" "}
              <span className="">Media & Entertainment</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Overview Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Overview
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            The Walt Disney Company is a globally recognized leader in family
            entertainment, renowned for its rich history of creating iconic
            content and memorable experiences for audiences of all ages.
            Established early in the 20th century, Disney has built an
            impressive portfolio of beloved intellectual properties, including
            the legendary cartoon character Mickey Mouse, Pixar Animation
            Studios, Marvel Entertainment, and the Star Wars franchise.{" "}
          </p>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            As the world's foremost producer and provider of entertainment and
            information, Disney leverages its diverse array of brands to deliver
            differentiated content, innovative services, and engaging consumer
            products. Committed to creativity and innovation, Disney
            continuously seeks to develop the most captivating and profitable
            entertainment experiences and related products, solidifying its
            position as a trailblazer in the global entertainment industry.
          </p>
        </section>

        {/* Background Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Background
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Client: Disney
            <br />
            Solutions: Field Engineering Services
            <br />
            Services: WAN Optimization
          </p>
        </section>

        {/* Challenge Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            The Challenge
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Disney had a rapid turnaround requirement that consisted of Global
            WAN optimization for over 25 countries. Disney was in search of a
            company of professionals that needed little advance notice and could
            mobilize work teams quickly. This is where GlobalXperts came in.{" "}
          </p>
        </section>

        {/* Solution Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            The Solution
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Our task was to deploy a WAN Optimization and Technology Refreshment
            requirement in over 25 countries (Europe, Africa, Asia Pacific,
            South America, Middle East and Australia) in very short order.
            Because of GlobalXperts’ unique international technical assets, a
            proposal was made to them to support their multi-national
            requirements with professional field services.{" "}
          </p>
          {/* <ul className="list-disc pl-6 text-gray-700 text-base leading-relaxed space-y-2">
          <li>Deploying Cisco routers and Riverbed/McAfee components</li>
          <li>Conducting site assessments and configuring new routers (ASR1k)</li>
          <li>Providing onsite support for installations and testing</li>
        </ul> */}
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            The IT upgrade project consisted of primarily implementing new Cisco
            routers along with some Riverbed and MacAfee components. After each
            installation,
          </p>
        </section>

        {/* Deliverables Section */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Deliverables
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Delivered Router Refresh services to:
              </h3>
              <ul className="list-inside list-disc pl-5 text-gray-600">
                <li>Bangkok, Thailand</li>
                <li>Bangalore, India</li>
                <li>Brisbane, Australia</li>
                <li>Kuala Lumpur, Malaysia</li>
                <li>New Delhi, India</li>
                <li>Manila, Philippines</li>
                <li>Sydney, Australia</li>
                <li>Mumbai, India</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Assessments to sites in Japan, Hong Kong, Singapore:
              </h3>
              <ul className="list-inside list-disc pl-5 text-gray-600">
                <li>Review/analyze current config of 7206 routers</li>
                <li>Design and develop ASR1k config to replace 7206</li>
                <li>Rack and stack ASR1K and sequencer</li>
                <li>Install, test and verify config and IOS in the ASR1K</li>
                <li>Install, test and verify config in sequencer</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                At Disney in Australia:
              </h3>
              <ul className="list-inside list-disc pl-5 text-gray-600">
                <li>
                  Onsite support to install, test and verify line cards in ISRs
                </li>
                <li>Rack and Stack</li>
                <li>Installation and Commissioning</li>
                <li>Ensure default configuration</li>
                <li>Coordinate with ACS-Inc/Disney</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            The Benefits
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            GlobalXperts’ quick turnaround and professional global presence
            ensured Disney’s WAN optimization was completed on time. This
            allowed Disney to transfer data efficiently and maintain excellent
            customer service delivery across regions.
          </p>
        </section>
      </div>

      <div className="mt-8 p-4">
        <ContactCard />
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </>
  );
};

export default CaseStudies6;
