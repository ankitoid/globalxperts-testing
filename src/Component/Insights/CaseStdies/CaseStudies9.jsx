import React from "react";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const CaseStudies9 = () => {
  return (
    <>
    <Helmet>
      <title>Close Up Foundation</title>
      <meta name="description" content="Troubleshooting case study on a web server issue resolved for Close-Up Foundation by GlobalXperts. See how our experts made a difference." />
    </Helmet>
    <Navbar />
    <div className=" bg-blueCustomColor  w-full">
      <div className="max-w-7xl mx-auto py-20 lg:h-[80vh] 2xl:h-[50vh]">
        <div className="h-auto  flex flex-col items-center lg:flex-row justify-between px-6 lg:px-16">
          <div className="w-full  text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-12 2xl:mt-20">
              Close Up Foundation
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
            <img src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/caseStudies/cs9.png">
            </img>
          </div>
          
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between text-md text-white mb-8 space-y-2 md:space-y-0 px-4 mt-8">
            <div>
              <span className="font-bold">TECHNOLOGY:</span> AWS
            </div>
            <div>
              <span className="font-bold">SOLUTION:</span> Web
            </div>
            <div>
              <span className="font-bold">INDUSTRY:</span>{" "}
              <span className="">Nonprofit</span>
            </div>
          </div>
        
      </div>
    </div>
    {/* Header Section */}
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* About Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Customer Background
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
        Founded in 1971, Close Up Foundation is a nonprofit, nonpartisan, civic education organization that believes a strong democracy requires active, informed participation by all citizens. Therefore, they seek to serve young people from all communities and all backgrounds, regardless of race, religion, gender, socioeconomic level, or academic standing.
        </p>
      </section>

      {/* Challenge Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          The Challenge
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          <strong>GlobalXperts</strong>, acting as a subcontractor for Red River, was engaged to diagnose a web server issue involving an Amazon AWS server Instance (EC2), and produce a functional AWS server.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mt-4">
          <strong>Data-driven insights:</strong> We provided detailed reports and analytics, empowering the team to understand server performance and behavior and optimize compute power needed and storage needs.
        </p>
      </section>

      {/* Solution Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Solution
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-base space-y-2">
          <li>
            <strong>Configuration and Testing:</strong> Dedicated engineers
            deployed a Sandbox test environment to stage the new recommended
            compute and storage server based on the data-driven insights.
          </li>
          <li>
            <strong>Day One Support:</strong> Our Engineers provided “Next Day
            Support” for any issues that might have occurred after cutover.
          </li>
        </ul>
      </section>

      {/* Results Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Outcomes</h2>
        <ul className="list-disc pl-5 text-gray-700 text-base space-y-2">
          <li>
            <strong>Improved Reliability:</strong> The overall system has
            become more reliable and efficient.
          </li>
          <li>
            <strong>Reduced Staff Workload:</strong> Leveraging AWS freed up
            staff by 40%, enabling them to focus on new initiatives.
          </li>
          <li>
            <strong>Time Saving Solution:</strong> The provided solution is
            time saving in terms of configuring resources, reporting issues,
            fault recovery, and general operations.
          </li>
        </ul>
      </section>

      {/* Key Takeaways Section */}
      <section className="bg-gray-100 py-6 px-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Key Takeaways
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          Data-driven insights can help optimize performance and storage
          requirements. This leads to cost-optimized service that meets
          performance requirements.
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
  )
}

export default CaseStudies9
