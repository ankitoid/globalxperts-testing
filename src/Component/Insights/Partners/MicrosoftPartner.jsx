import React from "react";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MicrosoftPartner = () => {
  return (
    <>
    <Helmet>
      <title>Microsoft Partner Information</title>
      <meta name="description" content="GlobalXperts' partnership with Microsoft enables cloud, collaboration, and security solutions through certified support and delivery." />
      <meta name="keywords" content="Microsoft Partner Information" />
        <link rel="canonical" href="https://globalxperts.net/partners/microsoft-partnership" />

    </Helmet>
      <Navbar />

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-4xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Microsoft Partner Information
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

            <div className="w-full text-center lg:text-right  lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed text-left">
                Optimize across workloads and environments and accomplish more
                with a comprehensive cloud platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between mt-20 px-4 ">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About Microsoft
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Microsoft is a Fortune 500 company that is world famous for its line
            of Windows software products. They have also brought much notoriety
            to their Office 365 products, which are considered to be a form of
            Software as a Service (SaaS). Additionally, Microsoft offers other
            cloud services through their Azure platform. Explore what
            GlobalXperts can do for you using Microsoft software.
          </p>
        </div>
        {/* Image Section */}
        <div className="relative mt-12 lg:mt-0 lg:w-1/2">
          <img
            className="w-full rounded-lg"
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/microsoftImage.jpg"
            alt="A man working on a laptop in a server room."
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
            {/* You can add additional content here if needed */}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10 mt-8 p-4">
        {/* About Microsoft Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-black mb-4">
            About Microsoft
          </h2>
          <p className="text-gray-700 max-w-5xl mx-auto">
            Microsoft Power Platform can help you accelerate innovation while
            reducing costs when compared to other low-code development
            platforms.
          </p>
          <p className="text-gray-700 max-w-5xl mx-auto">
            Power BI, Power Apps, Power Automate, and Power Virtual Agents –
            easily create connectors to your custom or legacy systems.
          </p>
        </div>

        {/* Products Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Microsoft Power Platform */}

          {/* Microsoft Azure */}
          <div className="flex flex-col items-center text-left">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/partners/ms-azure.png"
              alt="Microsoft Azure"
              className="h-24 mb-4"
            />
            {/* <h3 className="text-xl font-semibold mb-2">Microsoft Azure</h3> */}
            <p className="text-gray-700">
              Microsoft Azure – Optimize across workloads and environments and
              accomplish more with a comprehensive cloud platform. Get started
              now with pay-as-you-go pricing. There’s no upfront
              commitment—cancel anytime.
            </p>
          </div>

          {/* SharePoint */}
          <div className="flex flex-col items-center text-left">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/partners/spharepoint.png"
              alt="SharePoint"
              className="h-24 mb-4"
            />
            {/* <h3 className="text-xl font-semibold mb-2">SharePoint</h3> */}
            <p className="text-gray-600">
              SharePoint empowers teamwork with dynamic and productive team
              sites for every project team, department, and division. Share
              files, data, news, and resources. Customize your site to
              streamline your team’s work. Collaborate effortlessly and securely
              with team members inside and outside your organization, across
              PCs, Macs, and mobile devices.
            </p>
          </div>

          {/* Dynamics 365 */}
          <div className="flex flex-col items-center text-left sm:col-span-2 lg:col-span-1">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/partners/d362.png"
              alt="Dynamics 365"
              className="h-24 mb-4"
            />
            {/* <h3 className="text-xl font-semibold mb-2">Dynamics 365</h3> */}
            <p className="text-gray-600">
              Dynamics 365 launched in 2016 when Microsoft brought together
              Dynamics AX, its ERP application, and the Dynamics CRM
              application. Dynamics 365 is a comprehensive suite of services
              enabling all-in-one solutions so that you don’t have to pick and
              choose from the plethora of options available.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto  p-6 md:p-4 space-y-10">
          {/* Title Section */}
          <h2 className="text-4xl font-extrabold text-gray-900 text-center">
            GlobalXperts Capabilities
          </h2>

          {/* Description Section */}
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            As a Microsoft partner, GlobalXperts offers a comprehensive suite of
            services including installation, administration, and support for
            Windows operating systems, Office 365 support, PowerShell scripting,
            and ticket management. We ensure seamless integration and
            optimization of Microsoft products within your existing IT
            infrastructure.
          </p>
          <div className="text-center">
            <p className="text-gray-700 ">
              Additionally, we provide Azure CSP support services such as VM
              creation, backup maintenance, and subscription management.
            </p>
          </div>
          {/* Partnership Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900">
                Partnership
              </h3>
              <p className="text-gray-700 mt-2">
                GlobalXperts has an established partnership with Microsoft
                starting back in 2018. If you just need hardware, we can provide
                a quote to you.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mt-2">
                We also provide professional services that can assist your
                deployment of that equipment. When you utilize our professional
                service to deploy your equipment, we will adjust the hardware
                pricing by 30% to 50% based on the size and scope of your
                project.
              </p>
            </div>
          </div>
        </div>

        {/* Microsoft Content Service Provider Title */}
        <div className="text-center mb-10 mt-16">
          <h2 className="text-3xl font-bold text-black">
            Microsoft Content Service Provider
          </h2>
        </div>

        {/* Centered Sections */}
        <div className="flex flex-col items-center justify-center space-y-12 p-4">
          {/* License Purchases Section */}
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-black mb-4">
              License Purchases
            </h3>
            <p className="text-gray-700 mb-4">
              Through our partnership with Microsoft we can provide licensing
              for the following products:
            </p>
            <ul className="list-disc mx-auto max-w-md text-left text-gray-700">
              <li>Office 365 – Government and Commercial</li>
              <li>SharePoint</li>
              <li>Dynamics</li>
            </ul>
            <h3 className="text-2xl font-bold text-black mb-4 mt-8">
              Professional Services
            </h3>
            <ul className="list-disc mx-auto max-w-md text-left text-gray-700">
              <li>Azure</li>
              <li>SharePoint</li>
              <li>Dynamics</li>
            </ul>
          </div>
          {/* Professional Services Section */}
        </div>
      </div>
      <div className="mt-8 mb-6 p-2">
        <ContactCard />
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </>
  );
};

export default MicrosoftPartner;
