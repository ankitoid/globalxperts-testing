import React, { useRef, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {
  FaShoppingCart,
  FaCogs,
  FaUserFriends,
  FaChartLine,
} from "react-icons/fa";
import ContactCard from "../Contact/ContactCard";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Retail = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const handleToggle = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };
  const contactRef = useRef(null);

  const handleContactUsClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
    <Helmet>
      <title> IT Services for Retail Businesses - GlobalXperts</title>
      <meta name="description" content="GlobalXperts empowers retail businesses with IT and cloud solutions tailored for omnichannel operations, secure infrastructure and rapid digital-growth."/>
    </Helmet>

      <div className="w-full">
        <Navbar />
        <div className=" bg-blueCustomColor  w-full">
          <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
            <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
              <div className="w-full  text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                  Retail
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

              <div className="w-full text-center lg:text-left mt-10 lg:mt-20 order-3 lg:order-2 p-3">
                <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                  In the fast-paced retail world, advanced IT solutions enhance
                  customer experiences, streamline operations, and drive growth.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white min-h-screen">
          <div className="p-8 max-w-7xl mx-auto">
            {/* Retail Industry Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8 mt-16 rounded-lg">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Text Section */}
                <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Retail
                  </h2>
                  <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                    In the fast-paced retail world, advanced IT solutions
                    enhance customer experiences, streamline operations, and
                    drive growth.
                  </p>
                  <div className="mt-12 flex">
                    {/* <button
                  onClick={handleContactUsClick}
                  className="px-6 py-3 border-2 border-transparent bg-greenCustomColor2 text-white font-semibold rounded hover:bg-blueCustomColor hover:text-white transition-colors duration-300 hover:border hover:border-customblueColor shadow-md text-lg"
                >
                  Contact Us
                </button> */}
                  </div>
                </div>
                {/* Image Section */}
                <div className="relative mt-12 lg:mt-0 lg:w-1/2">
                  <img
                    className="w-full rounded-lg"
                    src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Industries/Retail.webp"
                    loading="lazy"
                    alt="Retail technology solutions"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
                </div>
              </div>
            </div>

            {/* Overview Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8 mt-12 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Overview
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                In the retail sector, IT solutions enhance customer experiences,
                optimize operations, and drive growth. From point-of-sale
                systems and inventory management to CRM and data analytics, our
                services transform retail operations. Embracing technology
                enables retailers to streamline processes and deliver
                personalized experiences, ensuring a competitive edge.
              </p>
            </div>

            {/* Capabilities Section */}
            <div className="py-12 px-4 sm:px-6 lg:px-8 mt-12 rounded-lg">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                  Capabilities
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  GlobalXperts offers a range of IT solutions designed to
                  support and enhance retail operations, helping businesses
                  adapt to the evolving market landscape.
                </p>

                <div className="space-y-8">
                  <div>
                    <div className="flex items-center mb-3">
                      <FaShoppingCart className="text-blue-500 text-2xl mr-3" />
                      <h3 className="text-2xl font-semibold text-gray-800">
                        Point-of-Sale Systems
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Our POS systems provide seamless and efficient transaction
                      processing, inventory management, and sales reporting,
                      enhancing the overall retail experience for both staff and
                      customers.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <FaCogs className="text-blue-500 text-2xl mr-3" />
                      <h3 className="text-2xl font-semibold text-gray-800">
                        Inventory Management
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Optimize your inventory with our advanced management
                      solutions, which offer real-time tracking, automated
                      reordering, and insights to help you maintain optimal
                      stock levels and reduce costs.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <FaUserFriends className="text-blue-500 text-2xl mr-3" />
                      <h3 className="text-2xl font-semibold text-gray-800">
                        Customer Relationship Management
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Our CRM solutions enable personalized customer engagement,
                      data analysis, and targeted marketing campaigns, helping
                      you build stronger relationships and drive customer
                      loyalty.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <FaChartLine className="text-blue-500 text-2xl mr-3" />
                      <h3 className="text-2xl font-semibold text-gray-800">
                        Data Analytics
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Leverage data analytics to gain valuable insights into
                      customer behavior, sales trends, and operational
                      performance, enabling data-driven decisions that enhance
                      business outcomes.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mt-8 text-center">
                  At GlobalXperts, we are committed to transforming the retail
                  industry through innovative IT solutions that drive
                  efficiency, engagement, and growth.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4 text-center">
                  Contact us today to discover how our retail IT solutions can
                  help you stay ahead in the competitive market.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div ref={contactRef}>
          <ContactCard />
        </div>
        <div className="mt-8 p-3">
          <Footer />
        </div>{" "}
      </div>
    </>
  );
};

export default Retail;
