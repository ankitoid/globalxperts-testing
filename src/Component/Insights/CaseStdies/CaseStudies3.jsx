// src/CaseStudies3.js
import React from "react";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
// import cs3 from "../../../Assets/CaseStudiesImage/cs3.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const CaseStudies3 = () => {
  return (
    <>
    <Helmet>
        <title>Case Studies | Web3Auth</title>
        <meta name="description" content="End-to-end design and installation of Cisco Webex Meeting systems for hybrid work, virtual collaboration, and secure conferencing." />
        <meta name="keywords" content="Web3Auth, Web3Auth Case Studies" />
    </Helmet>
      <Navbar />
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-12 md:py-0 2xl:py-8 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 md:px-20">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-2xl sm:mt-48 lg:text-3xl font-bold text-white mt-10 lg:mt-28 2xl:mt-20 p-2">
                Design and Installation - Cisco Webex Meetings Server (CWMS)
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
            <div className="w-full text-left lg:text-left mt-10 lg:mt-28 order-3 lg:order-2 p-6">
              <img src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/caseStudies/cs3.png">
                {/* “Founded in 1971, Close Up Foundation is a nonprofit, nonpartisan, civic education organization that believes a strong democracy requires active, informed participation by all citizens. ” */}
              </img>
            </div>
          </div>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between text-md text-white mb-8 space-y-2 md:space-y-0 px-4 mt-8">
            <div>
              <span className="font-bold">TECHNOLOGY:</span>  Wireless Services, CWMS
            </div>
            <div>
              <span className="font-bold">SOLUTION:</span> Unified Communications
            </div>
            <div>
              <span className="font-bold">INDUSTRY:</span>{" "}
              <span className="">Financial</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Title Section */}

        {/* Company Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Company</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            FirstCaribbean is a major Caribbean bank offering a full range of
            market-leading financial services in Corporate Banking, Retail
            Banking, Wealth Management, Credit Cards, Treasury Sales and
            Trading, and Investment Banking. It is the largest, regionally
            listed bank in the English and Dutch-speaking Caribbean. The bank
            has over 3,500 staff, 68 branches, 22 banking centers, and seven
            offices in 17 regional markets.
          </p>
        </section>

        {/* Challenge Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Challenge
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Communication within a corporation is key to continued success.
            FirstCaribbean Bank realized that to communicate as effectively as
            possible, it needed to upgrade its systems. Although they were
            already using a great Cisco product, they needed a high-level design
            upgrade to ensure even more efficient communication and experience.
          </p>
        </section>

        {/* Solution Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Solution
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            GlobalXperts, with a business focus on Advanced Cisco Solutions,
            developed a High-Level Design for an upgrade/installation that
            required changes to the entire product line as a premise-based
            solution. Cisco Meeting Place/Webex was upgraded to CWMS or Webex
            Cloud. GlobalXperts, collaborating with the customer, completed a
            full PPDIO (Prepare, Plan, Design, Implement, and Operate) cycle to
            achieve the customer’s end goal.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            GX’s consulting engineer was able to work remotely, coordinating,
            collaborating, and communicating with FirstCaribbean Bank to
            finalize the design. Additionally, a GX engineer traveled to
            Barbados during the first week for the project kickoff, survey
            review, and introduction.
          </p>
        </section>

        {/* Results Section */}
        <section className="bg-gray-100 py-6 px-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Outcomes</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            The high-level design for the implementation of CWMS at First
            Caribbean International Bank was a tremendous success. By generating
            an insightful and accurate design, GlobalXperts enhanced
            communication within the company, enabling productivity and
            increasing customer satisfaction.
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

export default CaseStudies3;
