import React from "react";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

const PartnerInfo = () => {
  return (
    <>
      <Navbar />

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-4xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Arista Partner Information
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

            <div className="w-full text-center lg:text-right  lg:mt-20 order-3 lg:order-2">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed text-left">
                GlobalXperts has been a Field Services and Consulting Services
                Provider to Arista from 2018 to the present day.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-6 md:p-8 mt-14">
        {/* Heading Section */}
        <div className="text-left mb-8">
          <h2 className="text-3xl font-bold">
            <span className="border-l-4 border-blue-500 pl-2">
              Customer Support and Focus Areas
            </span>
          </h2>
        </div>

        {/* Content and Image Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Content */}
          <div>
            <p className="text-lg md:text-xl mb-2">
              <span className="text-md md:text-md font-bold">History</span> –
              GlobalXperts has been a Field Services and Consulting Services
              Provider to Arista since 2018 to the present day.
            </p>

            <p className=" text-lg md:text-xl mb-2">
              <span className="text-xl md:text-2xl font-bold">
                Field Services
              </span>{" "}
            </p>
            <p className="mb-4">
              We provide Global on-site smart hands services (Master Services
              Agreement) in 165 counties. Our service level agreements include
              24 x 7 x 365 support with a 4 hour response to almost any
              location.
            </p>

            <p className="text-lg md:text-xl mb-2">
              <span className="text-xl md:text-2xl font-bold ">
                Consulting Services
              </span>{" "}
            </p>
            <p className="">
              – Data Center Staff that support Enterprise Data Center for
              Companies that provide Stock/ETF Trading and other fortune 500
              businesses.
            </p>

            <p className=" text-lg md:text-xl mbt-2">
              <span className="text-xl md:text-2xl font-bold ">
                Delivering Success
              </span>{" "}
            </p>
            <p>
              {" "}
              – Through our partnership, we enable support teams and
              design/build to deliver some of the most "state of the art" data
              centers on the planet.
            </p>
          </div>

          {/* Image Content */}
          <div className="flex justify-center items-center">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/partners/AristsFocusArea.png"
              alt="Data center equipment"
              className="w-full h-auto object-cover rounded-md shadow-lg"
            />
          </div>
        </div>

        {/* Arista Certifications Heading */}
        <div className="text-left mb-8 mt-12">
          <h2 className="text-3xl font-bold">
            <span className="border-l-4 border-blue-500 pl-2">
              Arista Certifications
            </span>
          </h2>
          <p className="mt-2 ">
            The purpose of getting an Arista certification is to demonstrate
            your skills and knowledge in designing, deploying, and managing
            datacenter and cloud environments. GlobalXperts has engineers with
            the following certifications.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certification 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/partners/l4.png"
              alt="Arista ACE Cloud Professional L4"
              className="w-48 h-auto object-cover mb-4"
            />
            <p className="text-left">
              ACE: L3 is a 5-day course that is designed around Arista’s
              data-driven Cloud network architectures. Candidates will master
              core technologies found in most modern corporate networks today
              such as MultiProtocol Border Gateway Protocol (MP-BGP), Exterior
              BGP (eBGP) underlays, Ethernet Virtual Private Networks (EVPN),
              and Virtual Extensible LAN protocol (VXLAN). Additional topics
              include security, QoS, multicast, and Cognitive Campus.
            </p>
          </div>

          {/* Certification 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/partners/l13.png"
              alt="Arista ACE Cloud Journeyman L3"
              className="w-48 h-auto object-cover mb-4"
            />
            <p className="text-left">
              ACE: L4 is a 5-day course focused on the Enterprise edge, Service
              Provider WAN, Large Enterprise Transport networks, and Data Center
              Interconnect (DCI) architectures. Candidates will explore the
              advanced routing capabilities available within Arista hardware and
              EOS. Topics such as EVPN, MPLS and Segment Routing will be
              discussed in depth. All topics are taught from both command line
              and CloudVision perspectives, including provisioning, managing,
              troubleshooting, and optimizing.
            </p>
          </div>
        </div>
      </div>
      {/* <div className=" py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-10">
            Arista Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">{product.title}</h2>
                <p className="text-gray-700 mb-4">{product.overview}</p>
                <a
                  href={product.link}
                  className="text-green-600 hover:underline"
                >
                  READ MORE »
                </a>
                <div className="mt-4 text-sm text-gray-500">{product.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div className="mt-8 p-4">
        <ContactCard />
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </>
  );
};

export default PartnerInfo;
