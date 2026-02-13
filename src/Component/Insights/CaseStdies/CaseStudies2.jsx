import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import ContactCard from "../../Contact/ContactCard";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CaseStudies2 = () => {
  return (
    <>
      {" "}
      <Navbar />
      <Helmet>
        <title>Case Studies | Arista Install Services - Entel-Chile</title>
        <meta name="description" content="Deployment of Arista network solutions for Entel Chile. Reliable infrastructure for high availability and growth scalability." />
      </Helmet>
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:mt-40 lg:text-4xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Arista Install Services- <br></br> Entel-Chile
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
            <div className="w-full text-left lg:text-right mt-10 lg:mt-20 order-3 lg:order-2 p-4">
           <img src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/caseStudies/cs2.png" />
            </div>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between text-md text-white  space-y-2 md:space-y-0 px-4 mt-16">
            <div>
              <span className="font-bold">TECHNOLOGY:</span> UCN
            </div>
            <div>
              <span className="font-bold">SOLUTION:</span> Networking
            </div>
            <div>
              <span className="font-bold">INDUSTRY:</span>{" "}
              <span className="">Telecom</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Title Section */}

        {/* Overview Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Overview
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Arista Networks is an industry leader in data-driven,
            client-to-cloud networking for large data center, campus, and
            routing environments. The company delivers products across the data
            center and campus with routing and software solutions for monitoring
            and network detection and response worldwide. Headquartered in Santa
            Clara, California, Arista has offices around the world. Arista has a
            prestigious set of customers, including Fortune 500 global companies
            in markets such as cloud titans, enterprise, financials, and
            specialty cloud service providers.
          </p>
        </section>

        {/* Challenge Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Challenge
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Arista developed a Layer 2 Leaf-Spine architecture for Entel, a
            major Chilean telecom company, to support their Content Delivery
            Network (CDN) across both main and remote facilities in Chile.
            Arista needed technical resources assistance to provide
            comprehensive professional services, including onsite
            implementation, travel logistics, and remote project scoping and
            review, to ensure the successful deployment of the architecture in
            these diverse locations.
          </p>
        </section>

        {/* Solution Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Solution
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Through its master agreement with Arista, GlobalXperts delivered
            engineers to deploy the Universal Cloud Network (UCN) Leaf-Spine
            architecture at the main site and three remote sites in Las Condes,
            Maipu, and Ñuñoa, Chile. Deployment of the architecture was
            completed in two days to complete pre/post cutover verification
            testing.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Remote scoping of the project consisted of validating the solution,
            network architecture, LLD, HLD, Network Intrusion Protection,
            Network Readiness for Use, User Acceptance Testing test cases, and
            timelines as well as project debrief calls with the client (Arista).
          </p>
          <ul className="list-disc pl-5 text-gray-700 text-base space-y-2">
            <li>
              Professional services to deploy the UCN Layer-2 Leaf-Spine (L2LS)
              architecture to support Entel’s CDN solution at specified sites.
            </li>
            <li>
              Deployment of Arista devices at the main site in an L2LS UCN
              design.
            </li>
            <li>
              Certification of one or two Multi-Chassis Link Aggregation Group
              (MLAG) pairs to support the content delivery infrastructure at
              each of the three remote sites.
            </li>
          </ul>
        </section>

        {/* Outcome Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Outcome</h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            GlobalXperts’ involvement in the project enabled Arista to
            efficiently meet the bank’s specific requirements, delivering a
            tailored solution that aligned with the customer’s needs. The
            project was completed on schedule, ensuring a smooth implementation
            of the data center systems. All solutions were documented for future
            reference, providing valuable insights for ongoing support.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            The end user expressed satisfaction with the results, reflecting the
            success of the collaboration and the quality of the implementation.
          </p>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gray-100 py-6 px-4 rounded-lg shadow-md text-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Want to learn more about this or any of our case study projects?
          </h2>
          <p className="text-gray-700 mb-4">
            Call GlobalXperts at{" "}
            <a
              href="tel:9193425482"
              className="text-blue-600 font-semibold underline"
            >
              919-342-5482
            </a>{" "}
            or visit us at{" "}
            <a
              href="https://www.globalxperts.net/contact"
              className="text-blue-600 font-semibold underline"
            >
              www.globalxperts.net/contact
            </a>
            .
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

export default CaseStudies2;
