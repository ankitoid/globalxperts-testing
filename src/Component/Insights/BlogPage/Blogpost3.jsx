import React from "react";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";

const BlogPost3 = () => {
  return (
    <>
      <Navbar />
      <div className="w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-4">
        <div className="max-w-6xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
          {/* Title and Image Row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Left Side: Title and Text */}
            <div className="lg:w-3/5">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                GlobalXperts Takes Pole Position in AWS Storage Expertise
              </h1>
            </div>

            {/* Right Side: Image */}
            <div className="lg:w-2/5">
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/customerBlog.webp"
                alt="AWS Storage"
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* New Content */}
          <div className="bg-white p-6 sm:p-8 mt-8 text-gray-800">
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              Raleigh, North Carolina – January 30, 2024 –
            </p>
            <p className="text-gray-700 text-sm sm:text-lg mb-4">
              Buckle up, cloud enthusiasts, because GlobalXperts Inc. just
              shifted gear and roared past a major milestone! We’re thrilled to
              announce that we’ve successfully navigated the rigorous gauntlet
              of the Amazon Storage Field Technical Review, emerging as
              certified masters of the AWS storage domain.
            </p>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              Raleigh, NC – November 7, 2023 –
            </p>
            <p className="text-gray-700 text-sm sm:text-lg mb-4">
              GlobalXperts Inc., a provider of cloud computing and contact
              center solutions, today announced that it has completed the AWS
              Foundational Technical Review for Amazon Connect. This achievement
              demonstrates GlobalXperts’ deep technical expertise and commitment
              to providing its customers with the best possible solutions on
              AWS.
            </p>
            <p className="text-gray-700 text-sm sm:text-lg mb-4">
              The AWS Foundational Technical Review is a rigorous assessment of
              a partner’s technical capabilities in a specific AWS service area.
              To pass the review, partners must meet stringent requirements in
              areas such as solution architecture, deployment, and management.
            </p>
            <p className="text-gray-700 text-sm sm:text-lg mb-4">
              "We are proud to have completed the AWS Foundational Technical
              Review for Amazon Connect," said Neil Kumar. "This achievement is
              a testament to our team's deep technical expertise and our
              commitment to providing our customers with the best possible
              solutions on AWS."
            </p>
            <p className="text-gray-700 font-bold mb-6">Neil Kumar, CTO</p>
            <p className="text-gray-700 text-sm sm:text-lg mb-4">
              As an AWS Select Consulting Partner, GlobalXperts has a proven
              track record of success in helping businesses migrate to,
              optimize, and manage their workloads on AWS. The company’s team of
              certified AWS experts has a deep understanding of Amazon Connect
              and can help businesses of all sizes implement and use the
              solution to achieve their business goals.
            </p>
            <p className="text-gray-700 text-sm sm:text-lg mb-4">
              "Amazon Connect is a powerful cloud-based contact center solution
              that can help businesses of all sizes improve customer service and
              reduce costs," said Scott Hartman. "We are excited to be able to
              help our customers leverage the full potential of Amazon Connect
              with our deep technical expertise."
            </p>
            <p className="text-gray-700 font-bold mb-6">
              Scott Hartman, AWS Practice Lead
            </p>
            <p className="text-gray-700 text-sm sm:text-lg mb-4">
              GlobalXperts Inc. is a provider of cloud computing and contact
              center solutions. The company helps businesses of all sizes
              migrate to, optimize, and manage their workloads on AWS.
              GlobalXperts is an AWS Select Consulting Partner and has a proven
              track record of success in helping businesses achieve their cloud
              goals.
            </p>
           
          </div>
          <div className="max-w-7xl mx-auto">
            <ContactCard />
          </div>
        </div>

        {/* Contact Section */}
      </div>

      <Footer />
    </>
  );
};

export default BlogPost3;
