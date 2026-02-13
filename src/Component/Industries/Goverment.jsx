import React, { useRef } from "react";
import { FaCloud, FaDatabase, FaMagento, FaServicestack } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactCard from "../Contact/ContactCard";
import { Link } from "react-router-dom";
import { FaComputerMouse, FaFileCode } from "react-icons/fa6";
import { SiManageiq } from "react-icons/si";
import { Helmet } from "react-helmet";
import { HiDownload, HiDocumentText } from "react-icons/hi";
const Government = () => {
  const contactRef = useRef(null); // Ref to contact card

  return (
    <>
      <Helmet>
        <title>IT Services for Government Agencies - GlobalXperts  </title>
        <meta name="description" content="GlobalXperts empowers U.S. government agencies with secure, scalable IT infrastructure, cloud and managed services designed for public-sector transformation. " />
      </Helmet>
      <div className="w-full">
        <Navbar />

        <div className=" bg-blueCustomColor  w-full">
          <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
            <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
              <div className="w-full  text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                  Government{" "}
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
                  GlobalXperts, we deliver the agility and personalized
                  attention of a small business while offering the depth of
                  expertise and resources of a large enterprise.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="p-8 max-w-7xl mx-auto">
            <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-14">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Government
                  </h2>
                  <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                    At GlobalXperts, we deliver the agility and personalized
                    attention of a small business while offering the depth of
                    expertise and resources of a large enterprise. Established
                    in 2005, GlobalXperts is a woman-owned 8(a) small business
                    with a proven history of designing, implementing, and
                    managing IT infrastructure solutions. We leverage
                    best-in-class technologies from Cisco, Microsoft, VMware,
                    AWS, Arista, and others to meet the needs of our customers.
                  </p>
                </div>
                <div className="relative mt-12 lg:mt-0 lg:w-1/2">
                  <img
                    className="w-full rounded-lg"
                    src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Industries/goverment.jpg"
                    alt="A man working on a laptop in a server room."
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="  bg-gray-100 md:bg-gray-100 2xl:bg-white max-w-7xl mx-auto py-4 ">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl text-center mb-4">
                Capabilities
              </h2>
              <p className="text-lg leading-relaxed text-center text-gray-600 mb-4">
                GlobalXperts is a trusted IT partner for federal agencies,
                delivering secure, innovative solutions that address their
                unique operational and compliance requirements. Our expertise
                includes data centers, cloud platforms, artificial intelligence,
                edge computing, collaboration, unified communication,
                professional services, and managed services.
              </p>
              <div className="bg-gray-100  2xl:bg-white flex items-center justify-center  2xl:mt-8 mb-12 md:p-8 lg:p-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mb-8">
                  {/*  Improved Productivity and Efficiency Card */}
                  <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px]">
                    <div className="flex flex-col items-center flex-grow">
                      <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                        <FaDatabase />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                        Data Centers
                      </h3>
                      <p className="text-sm text-gray-600 mb-0 text-left">
                        Data centers are the backbone of modern IT operations.
                        We offer services for designing and managing secure,
                        scalable, and reliable data centers that meet the unique
                        needs of federal agencies. Whether modernizing
                        infrastructure or implementing hybrid solutions, we
                        ensure operational excellence, maximum uptime, and
                        compliance with government standards.
                      </p>
                    </div>
                  </div>

                  {/*  Cards */}
                  <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                    <div className="flex flex-col items-center flex-grow ">
                      <div className="flex items-center justify-center bg-white  rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                        <FaCloud />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                        Cloud Solutions
                      </h3>
                      <p className="text-sm text-gray-600 mb-0 text-left">
                        Embracing cloud technology is essential for agility,
                        scalability, and cost-effectiveness. As an AWS partner,
                        we offer tailored public, private, and hybrid cloud
                        solutions, including our GlobalXperts branded solutions
                        for cloud-based video streaming, contact center,
                        storage, and an innovative solution for agencies that
                        want to migrate to the cloud to run high throughput data
                        workloads that generate very high-performance speeds.
                        Our team assists with migration, optimization, and
                        modernization of cloud-based applications and data while
                        ensuring robust security and seamless integration.
                      </p>
                    </div>
                  </div>

                  {/* Onsite IT Support Card */}
                  <div className="bg-white  2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                    <div className="flex flex-col items-center flex-grow">
                      <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                        <FaMagento />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                        Artificial Intelligence and Machine Learning
                      </h3>
                      <p className="text-sm text-gray-600 mb-0 text-left">
                        AI and ML are transforming how federal agencies analyze
                        data, make decisions, and deliver services. Our
                        AI-powered solutions include predictive analytics,
                        natural language processing, and automation tools
                        designed to streamline workflows, identify patterns in
                        large datasets, and enhance operational efficiency.
                        Whether it's automating routine processes, improving
                        cybersecurity with intelligent threat detection, or
                        personalizing citizen interactions, our AI and ML
                        expertise helps agencies achieve their digital
                        transformation goals.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white 2xl:bg-gray-100 shadow-2xl  p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px] ">
                    <div className="flex flex-col items-center flex-grow">
                      <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                        <FaComputerMouse />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                        Collaboration and Unified Communication
                      </h3>
                      <p className="text-sm text-gray-600 mb-4   text-left">
                        Efficient collaboration is essential for government
                        agencies to streamline operations and enhance
                        productivity. We provide secure, user-friendly platforms
                        for real-time collaboration including document sharing,
                        video conferencing, and project management. Leveraging
                        industry-leading tools, we enable seamless collaboration
                        across teams and locations, ensuring compliance with
                        government regulations.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
                    <div className="flex flex-col items-center flex-grow">
                      <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                        <FaServicestack />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-5 text-center">
                        Professional Services
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 text-left">
                        Through our GSA STARS III contract, we provide
                        exceptional IT consulting and professional services. Our
                        offerings include strategic planning, design, technology
                        assessments, implementation, system integration, and
                        project management to help federal agencies achieve
                        their IT objectives.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px] ">
                    <div className="flex flex-col items-center flex-grow">
                      <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                        <FaFileCode />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-5 text-center">
                        Field Services
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 text-left">
                        We also deliver field engineering services on-site,
                        including break-fix and troubleshooting support. We
                        offer a 4-hour response SLA in over 120 countries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center ">
              <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center min-h-[450px] max-w-[350px]">
                <div className="flex flex-col items-center flex-grow">
                  <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                    <SiManageiq />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-5 text-center">
                    Managed Services
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 text-left">
                    Federal agencies require dependable IT support to maintain
                    operational excellence. Our managed services include
                    helpdesk support, real-time monitoring, threat
                    detection/mitigation, maintenance, and technical assistance
                    from our 24/7 network operations center (NOC). We
                    proactively address issues, implement system updates,
                    deliver detailed reports, and ensure minimal downtime. This
                    comprehensive support allows agencies to focus on their
                    mission-critical objectives.
                  </p>
                </div>
              </div>
            </div>

            <p className="max-w-6xl mx-auto text-md text-gray-700 mb-4 text-left mt-4">
              At GlobalXperts, we are committed to providing innovative, secure,
              and customer-focused IT services and solutions that enable federal
              agencies to thrive in an increasingly digital world.
            </p>

            <div className="my-12 text-center">
              <h2 className="text-3xl font-bold ">Contact US</h2>

              <p className="p-6 md:p-2 text-lg md:text-xl mb-4 text-gray-700 ">
                Partner with<strong>GlobalXperts </strong> to equip your federal
                agency with advanced IT solutions, including AI tools and cloud
                services. Contact us today to learn more about how we can help
                modernize your infrastructure and optimize your operations.
              </p>
            </div>

            <div className="relative mt-4 bg-white 2xl:bg-gray-100 rounded-2xl shadow-lg p-8  flex items-center flex-col lg:flex-row justify-between max-w-6xl mx-auto">
              {/* Left Side Content */}
              <div className="text-section max-w-lg">
                <h5 className="text-3xl font-bold text-gray-800 leading-tight mb-4">
                  <span className="text-blue-600">Government</span>
                </h5>
                <ul className="list-disc pl-8 text-gray-600 space-y-2">
                  <li>
                    <strong>Global Coverage:</strong> Over 120
                    countries supported with local technical resources.
                  </li>
                  <li>
                    <strong>24x7 Availability:</strong> Round-the-clock support
                    for emergencies and planned maintenance.
                  </li>
                  <li>
                    <strong>Cost Efficiency:</strong>Avoid staffing overhead
                    while accessing skilled IT professionals when and where you
                    need them.
                  </li>
                </ul>
                {/* Download Brochure Button */}
                <div className="flex flex-wrap mt-6">
                  <a
                    href="https://main-website-brochures1.s3.ap-south-1.amazonaws.com/STARS+III+Brochure+July+2021.pdf"
                    download="STARS_III_Brochure.pdf"
                    target="_blank"
                    className="flex items-center gap-2 mb-4 mr-4 px-5 py-3 bg-blue-600 text-white text-base font-medium rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300"
                  >
                    <HiDocumentText className="text-xl" />
                    8(a) STARS III Brochure
                    <HiDownload className="text-xl ml-1" />
                  </a>

                  <a
                    href="https://main-website-brochures1.s3.ap-south-1.amazonaws.com/GX-Capabilities-Statement.pdf"
                    download="GX_capabilities.pdf"
                    target="_blank"
                    className="flex items-center gap-2 mb-4 px-5 py-3 bg-blue-600 text-white text-base font-medium rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300"
                  >
                    <HiDocumentText className="text-xl" />
                    GX Capabilities
                    <HiDownload className="text-xl ml-1" />
                  </a>
                </div>
              </div>

              {/* Right Side Image */}
              <div className="relative mt-12 lg:mt-0 lg:w-1/2 px-5  ">
                {/* Embedded image */}
                <div className="relative">
                  <img
                    className="w-full aspect-video rounded-md shadow-lg"
                    src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Industries/goverment2.webp"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Place the ContactCard here if necessary */}
            <div ref={contactRef} className="mt-6">
              <ContactCard />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Government;
