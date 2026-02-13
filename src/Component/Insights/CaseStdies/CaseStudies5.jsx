import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Helmet } from "react-helmet";
const CaseStudies5 = () => {
  return (
    <>
    <Helmet>
      <title>Global IT Managed Services</title>
      <meta name="description" content="End-to-end Managed IT Services tailored to your business goals. 24/7 monitoring, support, and optimization by GlobalXperts." />
    </Helmet>
    <Navbar/>
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[75vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1 ">
              <h2 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20 ">
                Global IT Managed Services
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
            <div className="w-full text-left lg:text-right mt-10 lg:mt-28 order-3 lg:order-2">
              <img  src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/caseStudies/CS5.png"/>
            </div>
          </div>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between text-md text-white  space-y-2 md:space-y-0 px-4 mt-16">
            <div>
              <span className="font-bold">SOLUTION:</span> Managed Services
            </div>
            <div>
              <span className="font-bold">APPLICATION:</span> Networking
            </div>
            <div>
              <span className="font-bold">MARKET:</span>{" "}
              <span className="">Digital Services</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
     

      {/* Overview Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
        The company (“Customer”) GlobalXperts partnered with to deliver managed services to is one of the largest and most successful IT solutions providers in the world.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
        They are a global digital services and solutions provider offering accelerated business transformation through secured technology modernization. Their highly skilled teams of engineers and solutions architects with deep expertise across cloud, security, networking, and modern data center infrastructure help customers acquire, deploy, and operate technology that delivers impactful business outcomes.
        </p>
        <p className="text-gray-700 text-base leading-relaxed">
        With forty locations in the United States and offices around the world, this trusted strategic advisor with a flexible full life cycle model of professional, managed, and support and staffing services to help execute, secure, operationalize and maintain technology solutions for thousands of clients.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mt-2">
        Their offices are geographically placed to optimize their “local delivery” model which enhances client relationships.
        </p>
      </section>

 {/* Industry and GX Provided Section */}
 <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Industry */}
          <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          GX Services
        </h2>
        <ul className="list-disc pl-6 text-gray-700 text-base leading-relaxed space-y-2">
          <li>Managed Services</li>
          <li>Helpdesk</li>
          <li>Professional Services</li>
          <li>Support Services</li>
        </ul>
          </div>

          {/* Right Column: GX Provided */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              GX Provided
            </h2>
            <ul className="list-disc pl-6 text-gray-700 text-base leading-relaxed space-y-2">
              <li>Remote Network Operations Center</li>
              <li>Continuous 24x7x365 Service</li>
              <li>Co-management MSP Model</li>
              <li>Ongoing Network Monitoring and Maintenance</li>
            </ul>
          </div>
        </div>
      </section>

   

      {/* Challenge Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Challenge</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          In the early 2000s, the customer had a strong technical team but not
          enough personnel to scale their consulting, systems integration, and
          managed services operations. They required a partner with advanced
          Cisco expertise and a 24x7 Network Operations Center (NOC) to handle
          their rapidly growing client demands.
        </p>
      </section>

      {/* Solution Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Solution</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          In 2005, GlobalXperts entered into a co-management agreement to
          provide Level 1 remote monitoring support during non-business hours
          and weekends. This allowed the customer to focus their technical
          staff on core IT solutions. Over time, GlobalXperts’ role expanded to
          include Level 2 and Level 3 technical support, covering both on-premises
          and cloud environments. The partnership leveraged shared Network
          Management Software, ensuring seamless hand-offs and real-time
          visibility into trouble tickets.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits</h2>
        <ul className="list-disc pl-6 text-gray-700 text-base leading-relaxed space-y-2">
          <li>
            The customer retained focus on developing and deploying solutions
            while relying on GlobalXperts for managed services.
          </li>
          <li>
            Transparent collaboration through shared tools enabled smooth
            operations.
          </li>
          <li>
            Expanded support to higher technical levels improved service quality
            for clients.
          </li>
        </ul>
      </section>

      {/* Services Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Services Provided</h2>
        <ul className="list-disc pl-6 text-gray-700 text-base leading-relaxed space-y-2">
          <li>Remote Network Operations Center</li>
          <li>24x7x365 Service</li>
          <li>Co-management MSP Model</li>
          <li>Ongoing Network Monitoring and Maintenance</li>
          <li>Helpdesk</li>
          <li>Professional Services</li>
          <li>Support Services</li>
        </ul>
      </section>

      {/* Types of Tickets Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Types of Enterprise Tickets Handled
        </h2>
        <ul className="list-disc pl-6 text-gray-700 text-base leading-relaxed space-y-2">
          <li>Firewall upgrades for various vendors</li>
          <li>Security advisory upgrades for Cisco ISE</li>
          <li>
            Configuring security policies for Palo Alto, Cisco ASA, Fortinet,
            and Meraki
          </li>
          <li>Wireless LAN creation and troubleshooting</li>
          <li>VPN configuration and troubleshooting (e.g., Cisco DMVPN)</li>
          <li>Managing Meraki infrastructure</li>
          <li>
            Renewing and troubleshooting certificates in DMVPN and CA
            architectures
          </li>
          <li>Generating custom reports from Palo Alto and Cisco Sourcefire</li>
          <li>Routing changes during network outages with RCA</li>
          <li>Device health checks and alert verification</li>
        </ul>
      </section>

      {/* CISCO Collaboration Section */}
      <section className="bg-gray-100 py-6 px-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Cisco Collaboration Services
        </h2>
        <ul className="list-disc pl-6 text-gray-700 text-base leading-relaxed space-y-2">
          <li>OS and Firmware Upgrades</li>
          <li>Vulnerability Assessments</li>
          <li>Certificate Management</li>
          <li>Customer Maintenance Support</li>
          <li>Health Checks</li>
          <li>QBR Information Gathering</li>
          <li>Configuration and Troubleshooting</li>
        </ul>
      </section>
    </div>

    <div className="mt-8 p-4 mb-4">
        <ContactCard />
      </div>
    <Footer/>
    </>
  );
};

export default CaseStudies5;
