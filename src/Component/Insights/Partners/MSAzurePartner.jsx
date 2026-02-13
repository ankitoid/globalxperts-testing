import React from "react";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MSAzurePartner = () => {
  return (
    <>
    <Helmet>
  <title>Azure Partnership</title>
  <meta name="description" content="Azure cloud partnership services by GlobalXperts." />
  <link rel="canonical" href="https://globalxperts.net/partners/azure-partnership" />
</Helmet>

      <Navbar />

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-4xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Microsoft Azure Partner Information
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
                Microsoft Azure – Optimize across workloads and environments and
                accomplish more with a comprehensive cloud platform. Get started
                now with pay-as-you-go pricing. There’s no upfront
                commitment—cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 mt-14">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Azure Cloud Information
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Microsoft Azure is a cloud computing platform offered by
              Microsoft. Azure offers a wide range of services, including
              computing, storage, databases, networking, and more. Azure is
              known for its security and compliance features, as well as its
              integration with other Microsoft products. Some of the key
              benefits of Azure include:
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              className="w-full rounded-lg"
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/azure.jfif"
              alt="Hewlett Packard Solutions"
            />
          </div>
        </div>
      </div>

      {/* Azure Cloud Information Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-blue-600 text-2xl font-semibold">
          Azure Cloud Information
        </h2>
       

        <ul className="list-disc pl-5 mt-4 space-y-3 text-gray-700">
          <li>
            <strong>Integration with other Microsoft products:</strong> If your
            organization already uses Microsoft products, Azure can integrate
            seamlessly with them.
          </li>
          <li>
            <strong>Strong security and compliance:</strong> Azure offers a
            range of security and compliance features, including encryption,
            identity and access management, and more.
          </li>
          <li>
            <strong>Hybrid cloud capabilities:</strong> Azure offers hybrid
            cloud capabilities, allowing you to easily integrate your
            on-premises infrastructure with the cloud.
          </li>
          <li>
            <strong>Scalability:</strong> With Azure, you can easily scale your
            resources up or down to meet changing demands.
          </li>
        </ul>
      </div>

      <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">
          GlobalXperts Capabilities
        </h1>
        <p className="">
          GlobalXperts can build and manage customized cloud solutions for you
          using cutting-edge technologies and services from Microsoft Azure, and
          we can help you integrate your other Microsoft services into the
          solution. We can also help you to optimize performance and cost with
          Azure’s pay-as-you-go pricing. There’s no upfront commitment—cancel
          anytime. Contact us today to learn more.
        </p>
      </div>

      {/* Contact & Footer */}
      <div className="mt-8 mb-6 p-2">
        <ContactCard />
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </>
  );
};

export default MSAzurePartner;
