import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Helmet } from "react-helmet";

const CaseStudies10 = () => {
  return (
    <>
    <Helmet>
      <title>Arista Data Center Implementation Experts</title>
      <meta name="description" content="Discover how GlobalXperts successfully implemented an Arista-based data center for improved scalability and performance." />
      <meta name="keywords" content="Case Studies" />
    </Helmet>
      <Navbar />
      <div className=" bg-blueCustomColor  w-full mt-4  ">
        <div className="max-w-7xl mx-auto  py-10 md:py-0 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-between px-6 md:px-20">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-48 lg:text-5xl font-bold text-white mt-10 lg:mt-20 ">
                Arista Data Center Implementation 
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
            <div className="w-full text-left lg:text-right mt-10 md:mt-10 lg:mt-16 order-3 lg:order-2">
              <img src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/arsitaDataCenter.png" />
            </div>
          </div>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between text-md text-white  space-y-2 md:space-y-0 px-4 mt-16">
            <div>
              <span className="font-bold">TECHNOLOGY:</span> Arista Network
              Devices
            </div>
            <div>
              <span className="font-bold">SOLUTION:</span> Datacenter
              Implementation
            </div>

            <div>
              <span className="font-bold">INDUSTRY:</span>{" "}
              <span className=""> Service Provider</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 mr-6">
          Customer Background
        </h2>
        <section className="mb-4 flex items-center">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
            <div className="text-gray-600 md:w-1/2">
              <p>
                Arista Networks was tasked with designing and delivering
                software-driven cloud networking solutions for a large data
                center storage and computing environment. Arista's award-winning
                platforms, ranging in Ethernet speeds from 10 to 400 gigabits
                per second, redefine scalability, agility and resilience. Arista
                has shipped more than 75 million cloud networking ports
                worldwide as of 2023 with Cloud Vision and EOS, an advanced
                network operating system.
              </p> <br></br> <br></br>
              <p>Arista’s client, CMS Energy, is one of the nation’s largest combination electric and natural gas utilities. Consumers Energy Company (CMS), Michigan’s largest electric and natural gas utility, serves 6.8 million of the state’s 10 million residents. With their subsidiary, NorthStar Clean Energy, CMS is also engaged in independent power generation in several states.</p>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/arsitaDataCenter2.png"
                alt="Arista System"
                className="w-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

     
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Challenge
          </h2>
          <p className="text-gray-600">
            CMS Energy required assistance with the architectural design and
            deployment of Arista data center products and technologies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Solution
          </h2>
          <p className="text-gray-600">
            The GlobalXperts engineer provided CMS with architectural design and
            implementation assistance for the successful deployment of Arista
            data center products and technologies. The engineer analyzed and
            documented the existing CMS network environment and provided
            migration, integration, application deployment, testing, and
            troubleshooting services for CMS’s data center network.
          </p>
        </section>

        <div className="mb-8">
          <h5 className="text-2xl font-bold mb-4">What We Delivered</h5>
          <div className="flex flex-wrap md:flex-nowrap items-start gap-8">
            {/* Left Column - Image */}
            <div className="md:w-1/2">
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/aristaDevixe.webp"
                alt="Arista Devix"
                className="w-full rounded-lg shadow-md"
              />
            </div>

            {/* Right Column - List */}
            <div className="md:w-1/2">
              <ul className="list-disc ml-5 space-y-2 text-gray-800">
                <li> <strong>Collaboration: </strong>Attended CMS project/progress meetings.</li>
                <li> <strong>Planning: </strong>Attended Arista planning meetings.</li>
                <li> <strong>Requirements: </strong>
                  Gather relevant CMS technical information for use in Arista
                  design and migration development
                </li>
                <li> <strong>Validation: </strong>
                  Validation and confirmation of CMS technical information
                </li>
                <li> <strong>Design: </strong>
                  Participate in ARISTA design and migration planning
                  development
                </li>
                <li> <strong>Communication: </strong>
                  Communicate and promote ARISTA design and migration approaches
                  to CMS
                </li>
                <li> <strong>Coordination: </strong>
                  Coordinate required resources to carry out project tasks,
                  migration, and cutover work activities successfully
                </li>
                <li> <strong>Implementation: </strong>
                Deployed the solution according to high- & low-level designs provided by ARISTA.
                </li>
                <li> <strong>Troubleshooting: </strong> Discover and perform onsite network troubleshooting</li>
                <li> <strong>Issues:</strong>
                Maintained active issues list and ensured all technical or procedural issues raised by CMS were closed satisfactory.
                </li>
              </ul>
            </div>
          </div>
        </div>


        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Outcomes
          </h2>
          <p className="text-gray-600">
            Thanks to the close working relationship between GlobalXperts,
            Arista, and CMS Energy’s stakeholders, the data center migration,
            implementation and cutover was executed flawlessly. The new,
            cloud-based platform is up and running and Arista’s client, CMS
            Energy, is extremely pleased with the services provided.
          </p>
        </section>
      </div>

      <div className="mt-8 p-4">
        <ContactCard />
      </div>      <div className="mt-4">
        <Footer />
      </div>
    </>
  );
};

export default CaseStudies10;
