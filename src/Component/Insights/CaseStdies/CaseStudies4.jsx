// src/CaseStudies3.js
import React from "react";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CaseStudies4 = () => {
  return (
    <>
    <Helmet>
      <title> NEC Wireless Site Survey</title>
      <meta name="description" content="NEC wireless site survey services for optimized coverage, performance, and interference mitigation in enterprise environments." />
      <meta name="keywords" content="NEC Wireless Site Survey" />
    </Helmet>
      <Navbar />
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 md:py-10 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:mt-40 lg:text-4xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
              NEC Wireless Site Survey
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
            <div className="w-full items-left lg:items-right mt-10 lg:mt-28 order-3 lg:order-2 md:p-4 p-1">
              <img src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/caseStudies/CS4.png">
                {/* “Founded in 1971, Close Up Foundation is a nonprofit, nonpartisan, civic education organization that believes a strong democracy requires active, informed participation by all citizens. ” */}
              </img>
            </div>
          </div>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between text-md text-white  space-y-2 md:space-y-0 px-4 mt-16">
            <div>
              <span className="font-bold">SOLUTION:</span> WLAN
            </div>
            <div>
              <span className="font-bold">APPLICATION:</span> Wireless services
            </div>
            <div>
              <span className="font-bold">MARKET:</span>{" "}
              <span className="">Healthcare</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
     

      {/* Overview Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
        <p className="text-gray-700 text-base leading-relaxed">
          GlobalXperts partnered with NEC, a major manufacturer, Cisco Gold
          Partner, and systems integrator with offices in over 50 countries. NEC
          specializes in manufacturing communication equipment and managing IT
          networks for large multinational corporations. One of their clients,
          Amgen, is a pioneer in using living cells to create biologic medicines
          and a global leader in biotech innovation. For this partnership,
          GlobalXperts supported NEC’s systems integration and IT field support
          division to meet their high-profile client requirements.
        </p>
      </section>

      {/* Challenge Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Challenge</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Despite NEC’s vast international presence, the technical expertise
          required to meet the communication needs of their IT support
          division’s global customers was limited in some locations. Their
          high-profile clients required rapid turnaround, demanding a partner
          that could provide professional services worldwide with minimal notice
          and execute projects swiftly.
        </p>
        <p className="text-gray-700 text-base leading-relaxed">
          For this project, NEC’s end-user client was expanding its real estate
          leasing assets across several countries and needed these properties to
          be operational within three months. This required comprehensive
          wireless LAN site surveys to be performed under strict time
          constraints.
        </p>
      </section>

      {/* Solution Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Solution</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Wireless LAN site surveys were conducted inside and outside customer
          buildings using analytic tools to measure radio frequency propagation
          levels and identify existing access points. A spectrum analysis was
          performed to detect RF levels in the 2.4 to 5 GHz spectrum, recording
          data on known and potential interference sources.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          To meet the tight schedule, GlobalXperts deployed two teams across 18
          countries in three weeks, performing wireless LAN site surveys under
          a white-label agreement with NEC. The surveys were completed within
          budget and ahead of the customer’s deadline.
        </p>
      </section>

      {/* Results Section */}
      <section className="bg-gray-100 py-6 px-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Outcomes</h2>
        <p className="text-gray-700 text-base leading-relaxed">
          The end-user real estate client successfully met their three-month
          occupancy target, ensuring operational readiness for their customers.
          GlobalXperts continues to provide international technical services to
          NEC, reinforcing their partnership and commitment to excellence.
        </p>
      </section>
    </div>

    <div className="mt-8 p-4">
        <ContactCard />
      </div>
      <div className="mt-8">
      <Footer/>
      </div>
    </>
  );
};

export default CaseStudies4;
