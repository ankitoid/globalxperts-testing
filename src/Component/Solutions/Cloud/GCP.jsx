import React from "react";
import cloudService from "../../../Assets/gcpIMG.png";
import Navbar from "../../Navbar";
import { FaChartPie, FaCloud, FaServer, FaShieldAlt } from "react-icons/fa"; // Import relevant icons for GCP
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const GCP = () => {
  const services = [
    {
      title: "360-Degree Requirement Analysis",
      description:
        "Assessment of existing IT framework, software/hardware dependencies, and user needs for hassle-free adoption and optimized TCO.",
    },
    {
      title: "User Experience Optimization",
      description:
        "Strategic cloud-evolution with post-implementation support for seamless, consistent, and enhanced user experience.",
    },
    {
      title: "Compliance and Governance",
      description:
        "100% adherence to company policies and compliance regulations. Solid documentation to support post-implementation governance.",
    },
    {
      title: "Flexible Client Support",
      description:
        "Custom support: SLA-based, blended offshore/onshore teams, fractional or ad-hoc support, knowledge transfer, and Google Cloud Platform consulting.",
    },
    {
      title: "Domain Competency",
      description:
        "Expertise in several AWS products coupled with a deep understanding of several industry-specific processes, for value-driven cloud adoption.",
    },
    {
      title: "Technology CoE",
      description:
        "Centers of excellence in a wide range of technologies to implement niche integrations and customizations.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Google Cloud Platform Service</title>
        <meta name="description" content="Google Cloud Platform Service" />
      </Helmet>
      <Navbar />
       <div className=" bg-blueCustomColor  w-full">
              <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
                <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
                  <div className="w-full  text-center lg:text-left order-2 lg:order-1">
                    <h2 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                      Google Cloud Platform Service{" "}
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                      <Link
                        to="/contact-us"
                        className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                      >
                        Contact Us
                      </Link>
                     
                    </div>
                  </div>
                  <div className="w-full text-center lg:text-right mt-10 lg:mt-0 order-3 lg:order-2">
                    <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                      Our end-to-end GCP services help our clients achieve
                      increased reliability and frequency of software releases.
                    </p>
                  </div>
                </div>
              </div>
            </div>


      <div className="py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              GCP Cloud Solutions
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              GlobalXperts leverages its extensive cloud expertise to support
              clients worldwide at every stage of their cloud journey on Google
              Cloud Platform. From consulting and migration to 24/7 managed
              services, DevOps, and cost optimization, we provide comprehensive
              GCP solutions tailored to your unique needs.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <img
              className="w-full rounded-lg"
              src={cloudService}
              alt="Google Cloud solutions visual representation."
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-green-900 mb-4">
            Cloud Consulting and Design
          </h1>
          <p className="text-gray-700">
            Explore our cloud consulting & design services, crafted to architect
            tailored GCP solutions that align with your business goals.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Service 1 - Holistic assessment */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <FaChartPie className="text-green-700 w-12 h-12" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-900">
                Holistic Assessment
              </h3>
              <p className="text-gray-600">
                We start by conducting a comprehensive assessment of your IT
                landscape, business objectives, and technology requirements to
                understand your unique GCP needs.
              </p>
            </div>
          </div>

          {/* Service 2 - Tailored cloud solutions */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <FaCloud className="text-green-700 w-12 h-12" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-900">
                Tailored Cloud Solutions
              </h3>
              <p className="text-gray-600">
                Using assessment insights, we design customized GCP solutions
                aligned with your business objectives, focusing on scalability,
                security, and efficiency.
              </p>
            </div>
          </div>

          {/* Service 3 - Seamless integration */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <FaServer className="text-green-700 w-12 h-12" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-900">
                Seamless Integration
              </h3>
              <p className="text-gray-600">
                Our experts ensure smooth integration of GCP technologies with
                your existing infrastructure, minimizing downtime and maximizing
                compatibility.
              </p>
            </div>
          </div>

          {/* Service 4 - Future-ready vision */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <FaShieldAlt className="text-green-700 w-12 h-12" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-900">
                Future-Ready Vision
              </h3>
              <p className="text-gray-600">
                Our approach to GCP cloud architecture anticipates your
                organization’s evolving needs, creating a scalable and adaptable
                foundation for future advancements.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose GlobalXperts' Google Cloud Services?
          </h2>
          <p className="text-gray-700 mb-10">
            Experience in legacy landscape and industry processes along with a
            broad range of technology capabilities helps us deliver a
            world-class cloud solution.
          </p>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white 2xl:bg-gray-200 shadow-lg rounded-lg p-6 border border-gray-200 flex flex-col text-left transition-transform transform hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-blue-600 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white text-center py-16 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          Transform Your Business with <br /> Risk-free Cloud Migration
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We put cloud-powered competency right at the core of the client
          organization, establishing a sustainable competitive advantage.
        </p>
        <hr className="mt-6 mb-12 w-16 mx-auto border-2 border-red-500" />

        {/* Feature Cards Section */}
        <div className="bg-blueCustomColor text-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8 shadow-lg">
          {/* Card 1 */}
          <div className="flex items-start space-x-4 bg-blueCustomColor p-6   hover:bg-greenCustomColor2 transition duration-300">
            <div className="text-5xl text-red-400">🌩️</div>{" "}
            {/* Replace with an actual icon */}
            <div>
              <h3 className="font-bold text-lg">
                Cloud Strategy and Assessment
              </h3>
              <p className="text-sm mt-2">
                Deep audit of application estate and IT framework for
                transformation roadmap, gap and readiness check, cloud
                architecture, capacity planning and space forecasting, and risk
                assessment.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start space-x-4 bg-blueCustomColor p-6  hover:bg-greenCustomColor2 transition duration-300">
            <div className="text-5xl text-yellow-400">📂</div>{" "}
            {/* Replace with an actual icon */}
            <div>
              <h3 className="font-bold text-lg">Cloud Application Services</h3>
              <p className="text-sm mt-2">
                Re-factoring and re-platforming to integrate applications in the
                cloud, reengineering to build cloud-native applications,
                replacement of apps with SaaS, or managed ISV applications on
                the public cloud.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start space-x-4 bg-blueCustomColor p-6  hover:bg-greenCustomColor2 transition duration-300">
            <div className="text-5xl text-blue-400">💻</div>{" "}
            {/* Replace with an actual icon */}
            <div>
              <h3 className="font-bold text-lg">
                Cloud Infrastructure Services
              </h3>
              <p className="text-sm mt-2">
                Data center modernization with Infrastructure as a Service
                (IaaS), infrastructure migration, hybrid cloud infrastructure,
                risk mitigation, and disaster recovery.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-start space-x-4 bg-blueCustomColor p-6  hover:bg-greenCustomColor2 transition duration-300">
            <div className="text-5xl text-green-400">⚙️</div>{" "}
            {/* Replace with an actual icon */}
            <div>
              <h3 className="font-bold text-lg">Legacy Modernization</h3>
              <p className="text-sm mt-2">
                Increase productivity, scalability, and performance—Platform as
                a Service (PaaS), API-based app modernization, Legacy
                Application Migration, Desktop Application Migration, etc.
              </p>
            </div>
          </div>
        </div>
      </div>

     

      <div className="mt-2">
        <ContactCard />
      </div>
      <div className="mt-6">
        <Footer />
      </div>
    </>
  );
};

export default GCP;
