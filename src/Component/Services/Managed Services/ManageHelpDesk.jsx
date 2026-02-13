import React from "react";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AiFillProduct } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import { RxCountdownTimer, RxTrackNext } from "react-icons/rx";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";

const ManageHelpDesk = () => {
  return (
    <>
      <Navbar />

      <Helmet>
        <title>Managed Help Desk</title>
        <meta
          name="description"
          content="24/7 managed help desk services for seamless IT support. Reduce downtime and improve response time with GlobalXperts experts."
        />
        <meta
          name="keywords"
          content="IT issues alone? Our Managed Help Desk service provides you with a team of highly skilled technicians"
        />
          <link rel="canonical" href="https://globalxperts.net/service/managed-services/managed-help-desk" />

      </Helmet>

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:mt-20 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Managed Help Desk
              </h2>
              <div className="px-20 md:px-0  flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-left lg:text-left mt-10 lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                Are you tired of managing your company’s IT issues alone? Our
                Managed Help Desk service provides you with a team of highly
                skilled technicians who will work around the clock to keep your
                systems running smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4"></h2>
        <p className="text-lg text-gray-600 mb-8"></p>

        {/* Boxes Section */}
        <div className="max-w-7xl mx-10 flex flex-col lg:flex-row items-center justify-between mt-32 pb-10">
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Managed Help Desk
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4 text-left">
              Are you tired of managing your company’s IT issues alone? Our
              Managed Help Desk service provides you with a team of highly
              skilled technicians who will work around the clock to keep your
              systems running smoothly. So don’t let IT problems bring your
              business to a standstill. Let us handle your IT needs so that you
              can focus on growing your business. Contact us today to learn
              more.
            </p>
          </div>
          <div className="relative mt-12 lg:mt-0 lg:w-1/2 px-5">
            <img
              className="w-full rounded-lg"
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/Managed-Services/ManagedHelpDesk.png"
              alt="A man working on a laptop in a server room."
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"></div>
          </div>
        </div>

        <div className="mt-20 text-center bg-gray-100 2xl:bg-white py-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose GlobalXperts?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-6xl mx-auto">
            Our Managed Help Desk service offers an unparalleled value
            proposition for your business. Here are some of the key benefits:
          </p>

          {/* Boxes Section */}
          <div className="bg-gray-100  2xl:bg-white flex items-center justify-center  2xl:mt-8 mb-4 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 md:grid-clos-2 max-w-6xl ">
              {/*  Improved Productivity and Efficiency Card */}
              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <AiFillProduct />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Improved Productivity and Uptime
                  </h3>
                  <p className="text-sm text-gray-600 mb-0 text-left p-3">
                    With our proactive network monitoring and fast response
                    times, we can minimize the downtime and keep your systems
                    running smoothly. This will help you to maintain
                    productivity and possibly prevent any revenue loss.
                  </p>
                </div>
              </div>

              {/*  Cards */}
              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow ">
                  <div className="flex items-center justify-center bg-white  rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <MdSecurity />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Cost-Effective IT Support
                  </h3>
                  <p className="text-sm text-gray-600 mb-0 text-left p-3">
                    Our Managed Help Desk service provides you with a team of IT
                    experts at a fraction of the cost of hiring an in-house IT
                    team. You’ll get access to a wide range of expertise without
                    having to worry about salaries, benefits, or training costs.
                  </p>
                </div>
              </div>

              {/* Onsite IT Support Card */}
              <div className="bg-white  2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <RxCountdownTimer />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Scalable Service
                  </h3>
                  <p className="text-sm text-gray-600 mb-0 text-left p-3">
                    As your business grows, your IT needs will grow with it.
                    With our Managed Help Desk service, you can easily scale up
                    or down your IT support to meet your changing needs.
                  </p>
                </div>
              </div>

              <div className="bg-white  2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <RxTrackNext />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    Better Communication and Tracking
                  </h3>
                  <p className="text-sm text-gray-600 mb-0 text-left p-3">
                    Our popular ticketing systems allow for easy communication
                    and tracking of IT issues, ensuring that every problem is
                    addressed in a timely and efficient manner. This will help
                    you to stay informed about the status of your IT issues and
                    the progress being made to resolve them.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-md text-gray-600 mb-0 text-left p-8">
            In summary, our Managed Help Desk service provides cost-effective,
            scalable, and reliable IT support for your business. With our
            proactive monitoring and fast response times, you’ll enjoy improved
            productivity and uptime, as well as peace of mind knowing that your
            IT needs are being taken care of by certified experts. Contact us
            today to learn more about how we can help you take your business to
            the next level.
          </p>
        </div>
      </div>

      <div className="p-4">
        <ContactCard />
      </div>
      <div className=" mt-8">
        <Footer />
      </div>
    </>
  );
};

export default ManageHelpDesk;
