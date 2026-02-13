import React from "react";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const AmazonEVS = () => {
  return (
    <>
    <Navbar />
    <Helmet>
      <title>Amazon EVS</title>
      <meta name="description" content="Simplify VMware workloads on AWS with Amazon Elastic VMware Service. Migrate securely with GlobalXperts support." />
      <meta name="keywords" content="Amazon Elastic VMware Service, Amazon EVS, VMware on AWS, VMware migration, VMware workloads on AWS, GlobalXperts" />
    </Helmet>

    <div className="w-full bg-blueCustomColor">
      <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20 ml-10">
            Amazon EVS
            </h1>
            <div className="px-20 md:px-0 flex flex-col ml-10 sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact-us"
                className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="w-full text-center lg:text-left mt-10 lg:mt-20 order-3 lg:order-2 p-4">
            <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
              Since Broadcom acquired VMWare, Amazon discontinued VMware Cloud
              on AWS. Many have wondered: Would you still be able to rehost
              your legacy virtual machines onto AWS? The answer is yes; you
              can.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="py-12 px-4 sm:px-6 lg:px-8 mt-16 max-w-7xl mx-auto">
      <div className="2xl:max-w-7xl  2xl:mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
          Amazon Elastic VMware Service (EVS) offers a compelling blend of familiar VMware tools and the vast potential of AWS cloud services. However, successfully managing this hybrid environment comes with its own set of operational challenges. Here’s a breakdown of some key hurdles you might encounter and strategies to navigate them:
          </p>
        </div>
        {/* Image Section */}
        <div className="relative mt-12 lg:mt-0 lg:w-1/2">
          <img
            className="w-full rounded-lg"
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/VMwareAWS.png"
            alt="A man vmware  page."
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
            {/* Optional additional content */}
          </div>
        </div>
      </div>
    </div>

    <div className="p-8 max-w-7xl mx-auto">
      {/* Additional Tips Section */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Additional Tips:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Standardization:</span> Maintain
            consistent configurations for VMs across your hybrid environment
            to simplify management and troubleshooting.
          </li>
          <li>
            <span className="font-semibold">Monitoring and Logging:</span>{" "}
            Implement comprehensive monitoring tools to gain visibility into
            the health and performance of your hybrid infrastructure across
            VMware Cloud and AWS resources.
          </li>
          <li>
            <span className="font-semibold">Automation:</span> Automate
            routine tasks like provisioning, patching, and backups to reduce
            manual errors and improve efficiency.
          </li>
        </ul>
        <p className="mt-4">
          By acknowledging these challenges and implementing the suggested
          strategies, you can successfully leverage its potential to optimize
          your hybrid cloud environment.
        </p>
      </div>

      {/* Cost Savings Projections Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold flex items-center">
          <span className="">Cost Savings Projections</span>
        </h2>

        <div className="flex flex-wrap mt-6 space-x-4 justify-center">
          {/* Projection Boxes */}
          <div className="bg-gradient-to-b from-blue-300 to-gray-100 rounded-xl shadow-lg p-6 w-44 text-center sm:mt-4">
            <h3 className="text-3xl font-bold text-blue-700">361%</h3>
            <p className="text-gray-600 mt-2">
              three-year return on investment
            </p>
          </div>

          <div className="bg-gradient-to-b from-blue-300 to-gray-100 rounded-xl shadow-lg p-6 w-52 text-center sm:mt-4">
            <h3 className="text-3xl font-bold text-blue-700">6 months</h3>
            <p className="text-gray-600 mt-2">payback on investment</p>
          </div>

          <div className="bg-gradient-to-b from-blue-300 to-gray-100 rounded-xl shadow-lg p-6 w-52 text-center sm:mt-4">
            <h3 className="text-3xl font-bold text-blue-700">22%</h3>
            <p className="text-gray-600 mt-2">lower cost of infrastructure</p>
          </div>

          <div className="bg-gradient-to-b from-blue-300 to-gray-100 rounded-xl shadow-lg p-6 w-52 text-center sm:mt-4">
            <h3 className="text-3xl font-bold text-blue-700">95%</h3>
            <p className="text-gray-600 mt-2">reduced unplanned downtime</p>
          </div>
        </div>

        <p className="text-gray-500 mt-4 text-sm text-center">
          Source:{" "}
          <a href="" className="text-blue-600 underline">
            VMware Cloud on AWS: Business Value in Hybrid Cloud Environments,
            IDC Business Value Snapshot, sponsored by VMware by Broadcom |
            January 2024
          </a>
        </p>
      </div>
    </div>

    <div className="p-8 bg-gray-50 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-semibold">Why Choose GlobalXperts</h2>
      </div>
      <p className="text-gray-500 ml-2 mb-4">
        GlobalXperts can design and build a solution on AWS that is right for
        your business, and we can migrate your VMs to help you achieve all the
        benefits of the cloud.
      </p>

      {/* Bullet Points */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-7xl mx-auto">
        <ul className="list-disc pl-6 space-y-4 text-gray-700">
          <li>
            <span className="font-semibold">
              Familiar VMware tools and skillset:
            </span>{" "}
            If your team is already comfortable using VMware for on-premises
            virtualization, Amazon EVS lets you leverage those existing skills
            and tools in the cloud environment. This reduces complexity and
            training needs during migration.
          </li>
          <li>
            <span className="font-semibold">
              Consistent infrastructure and operations:
            </span>{" "}
            Amazon EVS provides a consistent environment that bridges your
            on-premises data center and the AWS cloud. This simplifies
            management and minimizes the challenges of working with two
            completely different environments.
          </li>
          <li>
            <span className="font-semibold">
              Simplified cloud migration:{" "}
            </span>{" "}
            Amazon EVS is designed for seamless migration of existing VMware
            workloads to the cloud. You can potentially migrate your virtual
            machines (VMs) without needing to convert or re-architect them,
            reducing downtime and costs.
          </li>
          <li>
            <span className="font-semibold">Leverage AWS innovation: </span>{" "}
            While maintaining a familiar VMware environment, Amazon EVS also
            allows you to tap into the vast range of AWS services and
            innovations. This lets you extend the capabilities of your
            existing applications and build next-generation cloud-native
            applications.
          </li>
          <li>
            <span className="font-semibold">Shared support model:</span>{" "}
            Amazon EVS offers a combined support model from both VMware and
            AWS. This ensures you get expert assistance whenever needed.
          </li>
        </ul>

        {/* Conclusion Text */}
        <p className="mt-4 text-gray-700">
          Overall, Amazon EVS is a good choice if you’re looking for a smooth
          and familiar path to migrate your VMware workloads to the cloud
          while also being able to leverage the benefits and innovation of
          AWS.
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto p-8 bg-gray-50">
      <div className="flex items-center mb-6  ">
        <h2 className="text-2xl font-semibold">Typical Solution</h2>
      </div>

      <img
        className="w-full h-auto"
        src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/VMwareCloud.png"
      />
    </div>

    <div className="mt-8">
      <ContactCard />
    </div>
    <div className="mt-8">
      <Footer />
    </div>
  </>
  )
}

export default AmazonEVS
