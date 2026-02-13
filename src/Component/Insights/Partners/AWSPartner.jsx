import React from "react";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const AWSPartner = () => {
  const certifications = [
    {
      title: "Solutions Architect",
      level: "Professional",
      description:
        "Earners of this certification have an extensive understanding of designing technical strategies to accomplish specific business goals. They demonstrated the ability to balance best practices...",
      imageUrl:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/partners/certi1.png",
    },
    {
      title: "Solutions Architect",
      level: "Associate",
      description:
        "Earners of this certification have a comprehensive understanding of AWS services and technologies. They demonstrated the ability to build secure and robust solutions...",
      imageUrl:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/partners/certi2.png",
    },
    {
      title: "Security",
      level: "Specialty",
      description:
        "Earners of this certification have an in-depth understanding of AWS security services and the shared responsibility model (between AWS and the customer)...",
      imageUrl:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/partners/certi3.png",
    },
    {
      title: "DevOps Engineer",
      level: "Professional",
      description:
        "Earners of this certification have an extensive understanding of implementing continuous delivery systems and methodologies on the AWS Cloud. They demonstrated the ability to automate resilient applications and infrastructure deployments using AWS services. Badge owners are able to enforce policies, implement automated monitoring, and configure event management of an environment.",
      imageUrl:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/partners/certi4.png",
    },
    {
      title: "Advanced Networking",
      level: "Associate",
      description:
        "Earners of this certification have the ability to design and maintain network architecture for all AWS services. They demonstrated the ability to leverage tools to automate AWS networking tasks based on business needs. Badge owners are able to design and implement AWS and hybrid IT network architectures at scale.",
      imageUrl:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/partners/certi5.png",
    },
    {
      title: "Cloud Practitioner",
      level: "Foundational",
      description:
        "Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.",
      imageUrl:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/partners/certi6.png",
    },
  ];
  return (
    <>
      <Helmet>
        <title></title>
        <meta
          name="description"
          content="GlobalXperts is an AWS Partner, delivering cloud-native solutions, migrations, and modernization strategies with AWS best practices."
        />
          <link rel="canonical" href="https://globalxperts.net/partners/aws-partnership" />

      </Helmet>
      <Navbar />
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-4xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Amazon Partner Information
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
                GlobalXperts leverages its extensive cloud expertise to support
                clients worldwide at every stage of their cloud journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between mt-20 px-4">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Amazon Partner Information
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4 p-2">
            GlobalXperts leverages its extensive cloud expertise to support
            clients worldwide at every stage of their cloud journey. From
            consulting and migration to 24/7 managed services, DevOps, and cost
            optimization, we provide comprehensive solutions tailored to your
            unique needs.
          </p>
        </div>
        {/* Image Section */}
        <div className="relative mt-12 lg:mt-0 lg:w-1/2">
          <img
            className="w-auto rounded-lg"
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/partners/aws.jpg"
            alt="A man working on a laptop in a server room."
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
            {/* You can add additional content here if needed */}
          </div>
        </div>
      </div>
      <div className="bg-white py-12 mt-8 p-4">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mt-20">
              The Staff Members - AWS Technology Competencies
            </h2>
            <p className="text-gray-600">
              AWS Technology Competencies are a way for AWS Partners to
              demonstrate their deep technical expertise and proven customer
              success in specialized areas across industry, use case, and
              workload. AWS Partners are vetted and validated against a high bar
              to achieve the AWS Competency designation.
            </p>
          </div>

          {/* Badge Section */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
            {/* Block Storage Badge */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-white rounded-lg flex items-center justify-center mb-4">
                {/* Placeholder for image (can replace with actual image src) */}
                <img
                  src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/partners/awspartner1.png"
                  alt="block-storage-1"
                  className="object-contain max-h-40 w-auto"
                />
              </div>
              <h3 className="text-gray-800 font-bold mb-2">
                Block Storage Specialized
              </h3>
              <p className="text-gray-500">
                Earners of this badge have developed the technical skills and
                knowledge of AWS storage services with a focus on Amazon Elastic
                Block Store (EBS).
              </p>
            </div>

            {/* Data Protection Badge */}
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-white rounded-lg flex items-center justify-center mb-4">
                {/* Placeholder for image */}
                <img
                  src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/partners/awspartner2.png"
                  alt="AWS Technology Badge"
                  className="object-contain max-h-48 w-auto"
                />
              </div>
              <h3 className="text-gray-800 font-bold mb-2">
                AWS Data Protection Badge
              </h3>
              <p className="text-gray-500">
                Earners of this badge have developed technical skills and
                knowledge of AWS storage services with a focus on data
                protection and disaster recovery.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-center mb-2 p-2">
        Staff Members - AWS Certifications
      </h2>
      <p className="text-center text-gray-600 mb-10 p-2">
        AWS Architect certification is to demonstrate your skills and knowledge
        in designing, deploying, and managing cloud solutions on AWS.
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 p-4">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <img
              src={cert.imageUrl}
              alt={`${cert.title} ${cert.level}`}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center mb-2">
              {cert.title} - {cert.level}
            </h3>
            <p className="text-gray-600 text-center text-sm">
              {cert.description}
            </p>
          </div>
        ))}
      </div>

      {/* capabilities */}
      <h2 className=" max-w-7xl mx-auto text-4xl text-center mt-10   font-bold mb-2 text-black">
        Cloud Practitioner - Foundational
      </h2>

      {/* Capability Sections */}
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 space-y-12 py-2">
        {/* Section 1 */}
        <p className="text-gray-600 text-center text-lg">
          Earners of this certification have a fundamental understanding of IT
          services and their uses in the AWS Cloud. They have demonstrated cloud
          fluency and foundational AWS knowledge. Badge owners are able to
          identify essential AWS services necessary to manage AWS-focused
          projects.
        </p>
      </div>
      <div className="mt-8 mb-6 p-2">
        <ContactCard />
      </div>
      <Footer />
    </>
  );
};

export default AWSPartner;
