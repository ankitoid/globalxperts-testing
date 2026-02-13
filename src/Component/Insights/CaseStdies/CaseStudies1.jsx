// src/AristaCaseStudy.js
import React from "react";
import Navbar from "../../Navbar"; // Adjust the path if needed
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CaseStudies1 = () => {
  return (
    <>
    <Helmet>
      <title>Live Video Streaming</title>
      <meta name="description" content="Deliver secure, high-performance live video streaming with AWS. Ideal for events, media, education, and corporate broadcasting." />
      <meta name="keywords" content="Live Video Streaming" />
    </Helmet>
      <Navbar />
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Live Video Streaming
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
            <div className="w-full text-left lg:text-right mt-10 lg:mt-28 order-3 lg:order-2 sm:p-2 md:p-0">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 text-left p-4 md:p-0">
                To enhance the live streaming experience for its fans, a
                leading Tire 1 sports franchise partnered with GlobalXperts to
                deliver a reliable, high-quality streaming service.
              </p>
            </div>
          </div>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between text-md text-white  space-y-2 md:space-y-0 px-4 mt-20">
            <div>
              <span className="font-bold">TECHNOLOGY:</span> AWS
            </div>
            <div>
              <span className="font-bold">SOLUTION:</span> Video Streaming
            </div>
            <div>
              <span className="font-bold">INDUSTRY:</span>{" "}
              <span className="">Entertainment</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-8 w-full  ">
        <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="text-gray-700 text-sm space-y-1">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Background</h2>
          <p className="text-base lg:text-lg">
            <strong>Client:</strong> A major sports franchise, through Presidio
          </p>
          <p className="text-base lg:text-lg">

            <strong>Service Provider:</strong> GlobalXperts (Managed Services)
          </p>
          <p className="text-base lg:text-lg">

            <strong>Year:</strong> 2023
          </p>
          <p className="text-base lg:text-lg">

            <strong>Solutions:</strong> Managed Services
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-4 lg:mt-0">
          <img src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/caseStudies/CS1.png" />
        </div>
        </div>
       
      </section>

      {/* Challenge Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Challenge</h2>
        <p className="text-gray-700 text-base lg:text-lg">
          The national sports franchise struggled with unreliable live streaming
          during games, leading to buffering, latency issues, and outages. This
          negatively impacted fan engagement and potential revenue.
        </p>
      </section>

      {/* Solution Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Solution</h2>
        <ul className="list-disc pl-5 text-gray-700 text-base lg:text-lg space-y-2">
          <li>
            <strong>Real-Time Monitoring:</strong> 24/7 tracking of KPIs like
            bitrate and latency for proactive issue resolution.
          </li>
          <li>
            <strong>AWS Media Services:</strong> Video delivery solutions
            including AWS Media Connect, AWS Elemental Live, AWS Media Live, and
            AWS S3.
          </li>
          <li>
            <strong>Subjective Monitoring:</strong> Broadcast professionals
            ensured smooth streaming with quick issue resolution.
          </li>
          <li>
            <strong>Configuration & Maintenance:</strong> Pre-game testing,
            resource deployment, and real-time adjustments during events.
          </li>
          <li>
            <strong>Data Insights:</strong> Post-event analytics optimized
            future content strategies.
          </li>
        </ul>
      </section>

      {/* Results Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Results</h2>
        <ul className="list-disc pl-5 text-gray-700 text-base lg:text-lg space-y-2">
          <li>
            <strong>85% Reduction:</strong> Buffering and latency, ensuring
            uninterrupted viewing.
          </li>
          <li>
            <strong>Increased Engagement:</strong> Longer watch times and
            positive social feedback.
          </li>
          <li>
            <strong>Revenue Growth:</strong> Opened monetization opportunities
            and strengthened brand reputation.
          </li>
          <li>
            <strong>Cost Savings:</strong> 70-80% reduction in infrastructure
            costs with AWS.
          </li>
          <li>
            <strong>Operational Efficiency:</strong> 60% workload reduction
            through automation.
          </li>
        </ul>
      </section>

      {/* Key Takeaways Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Key Takeaways
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-base lg:text-lg space-y-2">
          <li>
            Proactive monitoring and rapid issue resolution ensure seamless live
            streaming.
          </li>
          <li>
            Data-driven insights enhance audience engagement and revenue
            potential.
          </li>
          <li>
            Partnering with a managed service provider reduces operational
            burdens and optimizes results.
          </li>
        </ul>
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

export default CaseStudies1;
