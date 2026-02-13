import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer";
import ContactCard from "../Contact/ContactCard";
import { FcCustomerSupport } from "react-icons/fc";
import {  CloudCog, CloudUpload, CloudLightning } from "lucide-react";
import { Server } from 'lucide-react';
import { Helmet } from "react-helmet";

const Cloud = () => {
  const images = [
    "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud/aws2.jpg",
    "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud/cloud.avif",
  ]; // Array of image imports
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageSubIndex, setCurrentImageSubIndex] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const faqSectionRef = useRef(null); // Reference to the FAQ section
  const contactRef = useRef(null); // Reference to the contact section
  const handleToggle = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const scrollToFAQs = () => {
    if (faqSectionRef.current) {
      faqSectionRef.current.scrollIntoView({
        behavior: "smooth", // Smooth scrolling effect
        block: "start", // Scroll to the start of the section
      });
    }
  };

  const handleContactUsClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Combine both setState functions into one `afterChange` function
  const handleAfterChange = (index) => {
    setCurrentImageIndex(index);
    setCurrentImageSubIndex(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    afterChange: handleAfterChange,
  };

  const texts = ["Amazon Partner Information", "Microsoft Azure"];

  const subTexts = [
    "Software and Services Staff Members – AWS Technology Competencies are a way for AWS",
    "Overview Microsoft Azure – Optimize across workloads and environments and accomplish more with a comprehensive cloud platform.",
  ];

  const Card = ({ title, link }) => (
    <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition">
      <a
        href={link}
        className="text-xl font-semibold text-indigo-600 hover:text-indigo-800"
      >
        {title}
      </a>
    </div>
  );
  const faqs = [
    {
      question: "How does GlobalXperts support cloud migrations and optimization? ",
      answer:
        "As an AWS Partner, we help clients plan, migrate, and optimize workloads using Well-Architected Frameworks, secure landing zones, and automation to reduce cloud costs while improving performance and scalability. ",
    },
    {
      question: "Can GlobalXperts support hybrid environments?",
      answer:
        "Absolutely. We have deep expertise in managing mixed environments from legacy data centers to modern cloud-native infrastructure and seamlessly integrating VMware, Cisco, Microsoft, AWS, and more. It is a common practice to keep certain legacy systems, compliance/legal data and high IOPS datasets on-premises and migrate everything else.",
    },
    {
      question:
        "How can GlobalXperts help us leverage AI and machine learning in our business?",
      answer:
        "Our team helps SMBs, and mid-market companies identify practical AI and ML use cases like generative AI/content development, intelligent alerting, customer behavior modeling, and process automation then designs and implements scalable solutions using cloud-native tools and open frameworks.",
    },
    {
      question: "How can these technologies improve our operational performance?",
      answer:
        "By applying AI/ML for faster insights, automation for consistent processes, and DevOps for rapid innovation, GlobalXperts helps you reduce downtime, improve resource utilization, accelerate deployment cycles, and make data-driven decisions with confidence.",
    },
    {
      question: "Can GlobalXperts integrate advanced technologies into legacy environments?",
      answer:
        "Absolutely. We excel at designing hybrid strategies that combine legacy systems with modern tech—using APIs, microservices, containerization, and secure automation layers to extend the value of your existing infrastructure while modernizing gradually and strategically.",
    },
    {
      question: "What ongoing support does GlobalXperts provide after cloud migration?",
      answer:
        "We offer continuous optimization, security monitoring, performance tuning, cost management, and compliance support post-migration. Our managed services ensure your cloud environment remains secure, efficient, and aligned with your evolving business goals.",
    },
  ];

  return (
    <>
    <Helmet>
      <title>Cloud Solutions for Businesses in USA - GlobalXperts</title>
      <meta name="description" content="Unlock the power of the cloud with GlobalXperts. We deliver expert AWS cloud migration, management & security support for businesses across the USA from Raleigh, NC."/>
     <link rel="canonical" href="https://globalxperts.net/solutions/cloud" />

    </Helmet>
      <div>
        <Navbar />

        <div className=" bg-blueCustomColor  w-full">
          <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh] ">
            <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
              <div className="w-full  text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                  Cloud
                </h1>
                <div className="px-20 md:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    to="/contact-us"
                    className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Contact Us
                  </Link>
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
                    onClick={scrollToFAQs}
                  >
                    FAQs <span className="ml-2">→</span>
                  </button>
                </div>
              </div>

              <div className="w-full text-center lg:text-right mt-10 lg:mt-20 order-3 lg:order-2">
                <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed text-left">
                  GlobalXperts delivers expert cloud solutions, from consulting
                  and migration to DevOps and 24/7 support, ensuring optimal
                  performance and cost efficiency throughout your cloud journey.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-7xl mx-auto  p-4">
          <h2 className="text-4xl font-bold text-center mt-28">Overview</h2>
          <p className="text-center mt-5 text-gray-700 text-xl">
            GlobalXperts is your one-stop shop for cloud computing, offering
            independent expertise and services from strategy development to
            workload migration and continuous optimization.
          </p>
          <p className="text-center mt-5 text-gray-700 text-xl">
            We align your people, processes, and technology, ensuring visibility
            and resilience as your cloud infrastructure scales with business
            growth.
          </p>
        </div>

        {/* Cloud service that we provide */}

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 p-12 max-w-7xl mx-auto">
          <Card
            icon={<Server className="w-6 h-6 text-blue-600" />}
            title="Amazon Web Services (AWS)"
            link="/solutions/cloud/aws"
          />
          <Card
            icon={<CloudCog className="w-6 h-6 text-purple-600" />}
            title="Multi Cloud"
            link="/solutions/cloud/multi-cloud"
          />
          <Card
            icon={<CloudLightning className="w-6 h-6 text-yellow-500" />}
            title="Hybrid Cloud"
            link="/solutions/cloud/aws-hybrid-cloud"
          />
          <Card
            icon={<CloudUpload className="w-6 h-6 text-green-600" />}
            title="Cloud Migration"
            link="/solutions/cloud/cloud-solution"
          />
        </div>

        <div className="max-w-7xl mx-auto relative bg-white p-8 mt-10">
          <h1 className="text-3xl font-bold  py-5">Cloud Partners</h1>
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <Slider {...settings}>
                  {images.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  {texts[currentImageIndex]}
                </h2>
                <p className="text-gray-600 mb-6">
                  {subTexts[currentImageSubIndex]}
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/solutions/cloud/aws"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Discover Solution
                  </Link>
                  <button
                    onClick={handleContactUsClick}
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 shadow-lg"
                  >
                    <FcCustomerSupport size={24} />
                    <span>Contact Us</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div className="relative mt-4 bg-white 2xl:bg-gray-100 rounded-2xl shadow-lg p-8  flex items-center flex-col lg:flex-row justify-between max-w-6xl mx-auto">
        <div className="text-section max-w-lg">
          <h5 className="text-3xl font-bold text-gray-800 leading-tight mb-12">
            Why Choose GlobalXperts for
            <span className="text-blue-600"> Cloud Solutions?</span>
          </h5>
          <ul className="list-disc pl-8 text-gray-600 space-y-2">
            <li>
              <strong>Global Coverage:</strong> Over 120 countries supported
              with local technical resources.
            </li>
            <li>
              <strong>24x7 Availability:</strong> Round-the-clock support for
              emergencies and planned maintenance.
            </li>
            <li>
              <strong>Cost Efficiency:</strong>Avoid staffing overhead while
              accessing skilled IT professionals when and where you need them.
            </li>
          </ul>

          <a
            href="https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Brochures-2025/GlobalXperts+DC-Cloud+Brochure.pdf"
            download="hybrid.pdf"
            target="_blank"
            className="ml-8 mt-8 inline-block px-4 py-2 bg-blue-600 text-white font-normal text-lg rounded-lg shadow-md hover:bg-blue-800 transition duration-300"
          >
            DOWNLOAD BROCHURE
          </a>
        </div>

        <div className="relative mt-12 lg:mt-0 lg:w-1/2 px-5  ">
          <div className="relative">
            <img
              className="w-full aspect-video rounded-md shadow-lg"
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/MOM/mainMigration.png"
            />
          </div>
        </div>
      </div>
        <div ref={faqSectionRef} className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
            Frequently Asked Questions
          </h1>
          <div className="border border-blue-700 rounded-lg  mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <h2
                  className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                  onClick={() => handleToggle(index)}
                >
                  {faq.question}
                </h2>
                {activeQuestion === index && (
                  <p className="text-lg mb-4 text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={contactRef}>
        <ContactCard />
      </div>
      <div className="mt-6">
        <Footer />
      </div>
    </>
  );
};

export default Cloud;
