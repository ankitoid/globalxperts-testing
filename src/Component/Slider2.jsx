import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Slider2() {
  return (
    <div className="container mx-auto mt-2 p-4 md:p-6 2xl:p-0">
      <Helmet>
        <meta
          name="description"
          content="GlobalXperts offers trusted IT services in Raleigh, NC, including managed IT, AWS cloud consulting, cybersecurity, and local IT support for small businesses."
        ></meta>
        <meta
          name="keywords"
          content="IT services in Raleigh, IT support Raleigh, managed IT services Raleigh, IT consultant Raleigh, AWS cloud Raleigh, cybersecurity Raleigh, managed service provider Raleigh, IT solutions Raleigh NC"
        ></meta>
      </Helmet>

      <h2 className="text-2xl md:text-4xl font-bold py-4 text-center md:text-left">
        Trusted IT Services - Managed IT, Support & AWS Cloud
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Professional Service Section */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full">
          <source
            srcSet="https://.../AIEnhancedServices.webp"
            type="image/webp"
          />
          <img
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/AIEnhancedServices.png"
            className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"
            alt="professional services  delivers IT strategy consulting"
            loading="lazy"
          />
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Professional Services
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6 ">
            We build cutting-edge solutions, perform technical surveys and cloud
            migrations, offer technical consulting, supplement technical staff,
            and much more.{" "}
          </p>
          {/* <Link
            to="service/professional-services"
            className="text-blue-500 hover:underline mt-auto"
          >
            Read More
          </Link> */}
          <Link to="/service/professional-services" className="text-blue-500 hover:underline mt-auto">
            Read More
            <span className="sr-only"> about Professional Services</span>
          </Link>

        </div>

        {/* Managed Service Section */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full">
          <source
            srcSet="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/managedServices.webp"
            type="image/webp"
          />
          <img
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/managedServices.png"
            alt="managed services and IT infrastructure"
            className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"
            loading="lazy"
          />
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Managed Services
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6  ">
            We can provide day 2 support, help desk services, network operations
            center (NOC) services, and many more services to help your business
            thrive.{" "}
          </p>
          <Link to="/service/managed-services" className="text-blue-500 hover:underline mt-auto">
            Read More
            <span className="sr-only"> about Managed Services</span>
          </Link>
        </div>

        {/* Networking Consulting Section */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full">
          <source
            srcSet="https://.../NetworkingConsulting.webp"
            type="image/webp"
          />

          <img
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/NetworkingConsulting.png"
            alt="Cloud Solutions and IT Operations"
            className="w-full h-40 md:h-52 object-cover rounded-t-lg mb-4"
            loading="lazy"
          />
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            {/* Cloud Solutions  */} Cloud Solutions
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6 ">
            We build cloud solutions incorporating AI, data analytics, and more.
            Our hybrid and multi-cloud solutions optimize costs, performance,
            and security.
          </p>
          <Link to="/solutions/aws-solutions" className="text-blue-500 hover:underline mt-auto">
            Read More
            <span className="sr-only"> about AWS Cloud Solutions</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Slider2;
