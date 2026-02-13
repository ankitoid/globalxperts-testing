import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";

const Implementation = () => {
  return (
    <>
      <Helmet>
        <title>Implementation - GlobalXperts</title>
        <meta name="description" content="Need IT implementation in the USA? GlobalXperts executes infrastructure, software and hardware projects end-to-end—seamless deployment, vendor-neutral, business-ready." />
        <meta name="keywords" content="Implementation" />
        <meta name="author" content="GlobalXperts" />
          <link rel="canonical" href="https://globalxperts.net/service/professional-services/implementation" />

      </Helmet>
      <Navbar />
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-16 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-20 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Implementation
              </h1>
              <div className="px-20 lg:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-left mt-10 lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                At GlobalXperts, certified professionals, including PMP®, ITIL®,
                and AWS-certified experts, lead the way, employing best
                practices for project evaluation, planning, scheduling, and
                management. Our meticulous processes ensure transparency,
                collaboration, and measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-10 px-6 md:px-16 max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Overview of GlobalXperts' Program Management Organization (PMO)
          </h1>
          <p className="text-lg text-gray-600 text-left">
            GlobalXperts' Program Management Organization (PMO) is a key part of
            our professional services, ensuring the seamless implementation of
            IT systems and solutions for our customers. Our PMO follows
            industry-leading methodologies such as PMI's PMBOK®, Agile, and ITIL
            frameworks to deliver projects on time, within scope, and on budget.
            Leveraging decades of experience and a customer-first approach, we
            align every project with your business objectives while mitigating
            risks and optimizing resources.
          </p>

          <p className="text-lg text-left text-gray-600 font-bold mt-4">
            Key Elements of GlobalXperts' PMO:
          </p>
        </div>

        {/* Key Elements Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Element 1: Project Evaluation */}
          <div className="flex flex-col items-center bg-white p-6 shadow-xl rounded-lg text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl mb-4">
              <span role="img" aria-label="Evaluation">
                🔍
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Comprehensive Project Evaluation
            </h3>
            <p className="text-gray-600">
              In-depth analysis of project scope, requirements, and business
              impact.
            </p>
          </div>

          {/* Element 2: Strategic Planning */}
          <div className="flex flex-col items-center bg-white p-6 shadow-xl rounded-lg text-center">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-3xl mb-4">
              <span role="img" aria-label="Planning">
                📅
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Strategic Planning
            </h3>
            <p className="text-gray-600">
              Creation of detailed project roadmaps with milestones,
              deliverables, and resource allocation.
            </p>
          </div>

          {/* Element 3: Agile Execution */}
          <div className="flex flex-col items-center bg-white p-6 shadow-xl rounded-lg text-center">
            <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-3xl mb-4">
              <span role="img" aria-label="Agile Execution">
                ⚡
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Agile Execution
            </h3>
            <p className="text-gray-600">
              Use of Agile and Scrum frameworks for iterative progress and
              flexibility.
            </p>
          </div>

          {/* Element 4: Certified Expertise */}
          <div className="flex flex-col items-center bg-white p-6 shadow-xl rounded-lg text-center">
            <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-3xl mb-4">
              <span role="img" aria-label="Certified Expertise">
                🎓
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Certified Expertise
            </h3>
            <p className="text-gray-600">
              Deployment of vetted professionals certified in leading
              technologies and methodologies.
            </p>
          </div>

          {/* Element 5: Risk Management */}
          <div className="flex flex-col items-center bg-white p-6 shadow-xl rounded-lg text-center">
            <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-3xl mb-4">
              <span role="img" aria-label="Risk Management">
                ⚠️
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Robust Risk Management
            </h3>
            <p className="text-gray-600">
              Proactive identification and mitigation of potential challenges.
            </p>
          </div>

          {/* Element 6: Advanced Tools */}
          <div className="flex flex-col items-center bg-white p-6 shadow-xl rounded-lg text-center">
            <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-3xl mb-4">
              <span role="img" aria-label="Advanced Tools">
                🛠️
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Advanced Project Tools
            </h3>
            <p className="text-gray-600">
              Utilization of modern platforms like MS Project, Jira, and
              ServiceNow for real-time updates and tracking.
            </p>
          </div>

          {/* Element 7: Performance Analytics */}
          <div className="flex flex-col items-center bg-white p-6 shadow-xl rounded-lg text-center">
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-3xl mb-4">
              <span role="img" aria-label="Analytics">
                📊
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Performance Analytics
            </h3>
            <p className="text-gray-600">
              Continuous monitoring and reporting to ensure measurable success
              and accountability.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Let GlobalXperts' PMO be your partner in achieving seamless IT
            transformations.
          </h2>
          {/* <p className="text-lg text-gray-600 mb-6">
            Partner with GlobalXperts' PMO to ensure the smooth implementation
            and management of your IT projects. We align every project with your
            business objectives, mitigate risks, and optimize resources for
            maximum impact.
          </p> */}
          {/* <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300">
            Contact Us Today
          </button> */}
        </div>
      </div>
      <div className="mt-4 mb-4 p-4">
        <ContactCard />
      </div>
      <Footer />
    </>
  );
};

export default Implementation;
