import React from "react";
import { Link } from "react-router-dom";
import { FaNetworkWired, FaCloud, FaCogs, FaUsers } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Helmet } from "react-helmet";

const TechStaffAug = () => {
  return (
    <>
    <Helmet>
      <title> Technical Staff Augmentation</title>
      <meta name="description" content="On-demand technical staff augmentation services for scaling your IT team with certified professionals across domains." />
    </Helmet>
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Technical Staff Augmentation
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

            <div className="w-full text-center lg:text-left mt-10 lg:mt-20 order-3 lg:order-2">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                If you’re looking to take your business to the next level, you
                need a team of experts who can get the job done. With our staff
                augmentation program, you can access top-tier talent without the
                hassle of recruiting, training, and managing new employees.
                Contact us today to learn more about how we can help you build
                your team.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-5xl text-center font-bold text-gray-700 mb-6">
          Value Proposition
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Our staff augmentation program is designed to seamlessly integrate our
          professionals with your existing team, allowing you to scale your
          workforce up or down as needed without incurring the costs and risks
          associated with traditional hiring processes.
        </p>

        <div className="bg-gray-100 2xl:bg-white py-8 md:p-10 mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
            We can augment your staff for these areas of expertise, and many
            more:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Networking Card */}
            <div className="bg-white shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="flex items-center justify-center bg-green-100 rounded-full w-16 h-16 text-green-600 mb-4">
                <FaNetworkWired className="text-3xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Networking
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Our enterprise network architects can help you design and
                implement a robust and secure network infrastructure that meets
                your specific needs.
              </p>
            </div>

            {/* Cloud Card */}
            <div className="bg-white shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="flex items-center justify-center bg-blue-100 rounded-full w-16 h-16 text-blue-600 mb-4">
                <FaCloud className="text-3xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Cloud
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Our cloud architects can help you migrate your applications to
                the cloud, optimize your cloud infrastructure, and reduce costs.
              </p>
            </div>

            {/* Application Card */}
            <div className="bg-white shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="flex items-center justify-center bg-yellow-100 rounded-full w-16 h-16 text-yellow-600 mb-4">
                <FaCogs className="text-3xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Application
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Our application developers can help you build custom software
                that meets your unique requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits of Staff Augmentation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          <div className="bg-white shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="flex items-center justify-center bg-green-100 rounded-full w-16 h-16 text-green-600 mb-4">
              <FaUsers className="text-3xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Scale Your IT Workforce
            </h3>
            <p className="text-sm text-gray-600">
              Quickly scale your IT workforce to meet business needs without the
              costs and risks of traditional hiring.
            </p>
          </div>

          <div className="bg-white shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="flex items-center justify-center bg-blue-100 rounded-full w-16 h-16 text-blue-600 mb-4">
              <MdOutlineBusinessCenter className="text-3xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Access Highly Skilled Professionals
            </h3>
            <p className="text-sm text-gray-600">
              Gain access to highly skilled professionals with deep expertise in
              areas like Enterprise Architecture, Cloud Architecture, and
              Application Development.
            </p>
          </div>

          <div className="bg-white shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="flex items-center justify-center bg-purple-100 rounded-full w-16 h-16 text-purple-600 mb-4">
              <FaUsers className="text-3xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Improve IT Agility
            </h3>
            <p className="text-sm text-gray-600">
              Improve the quality and agility of your IT operations by
              leveraging expert resources.
            </p>
          </div>

          <div className="bg-white shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="flex items-center justify-center bg-orange-100 rounded-full w-16 h-16 text-orange-600 mb-4">
              <FaUsers className="text-3xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Focus on Core Functions
            </h3>
            <p className="text-sm text-gray-600">
              Focus your internal resources on core business functions while
              leveraging our professionals to manage complex IT environments and
              projects.
            </p>
          </div>

          <div className="bg-white shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="flex items-center justify-center bg-teal-100 rounded-full w-16 h-16 text-teal-600 mb-4">
              <FaUsers className="text-3xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Achieve Greater Flexibility
            </h3>
            <p className="text-sm text-gray-600">
              Achieve greater flexibility and control over your IT workforce,
              with the ability to ramp up or down as needed to meet changing
              business demands.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 mb-4">
        <ContactCard/>
      </div>
      <Footer/>
    </>
  );
};

export default TechStaffAug;
