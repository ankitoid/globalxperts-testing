import { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Helmet } from "react-helmet";
import ContactCard from "../Contact/ContactCard";
import { Link } from "react-router-dom";
import {
  FaCloud,
  FaDatabase,
  FaServer,
  FaShieldAlt,
  FaDollarSign,
  FaExpand,
  FaUsers,
} from "react-icons/fa";

function SmallandMediumBusiness() {
  const [isMobile, setIsMobile] = useState(false);
  const faqSectionRef = useRef(null); // Reference to the FAQ section

  const faqs = [
    {
      question:
        "Are you a Small and Medium Business looking to streamline operations?",
      answer:
        "SMBs are embracing cloud computing to streamline operations, cut costs, and scale IT resources, allowing them to focus on innovation and growth.",
    },
    {
      question: "What are the benefits of Infrastructure as a Service (IaaS)?",
      answer:
        "IaaS allows you to outsource infrastructure management by renting virtual resources like machines and storage, enabling scalability and cost reduction.",
    },
    {
      question: "How can data backup and recovery help protect my business?",
      answer:
        "Securely protect critical data with cloud storage, simplifying recovery and eliminating physical backup needs.",
    },
    {
      question: "What is Software as a Service (SaaS)?",
      answer:
        "SaaS allows you to access software via the cloud, covering CRM, HR, and more, with subscription-based pricing for cost-effectiveness.",
    },
    {
      question:
        "How can cloud collaboration and communication solutions benefit my business?",
      answer:
        "Leverage cloud-based software for business needs, ensuring accessible and cost-effective solutions.",
    },
    {
      question: "What is GX Customer Connect?",
      answer:
        "GX Customer Connect is a cloud-based contact center solution that boosts efficiency and scales with AI-powered features to transform customer interactions.",
    },
    {
      question: "How does AWS support Small and Medium Businesses?",
      answer:
        "GlobalXperts, in partnership with AWS, offers scalable cloud services for SMBs, including virtual servers and analytics, enhancing operational efficiency.",
    },
    {
      question: "What are AWS Migration Services?",
      answer:
        "AWS Migration Services streamline your cloud journey with AWS Migration Hub, a central platform for planning and tracking data center migrations.",
    },
    {
      question: "How does Amazon WorkSpaces empower remote work?",
      answer:
        "Empower remote work with Amazon WorkSpaces, a managed cloud desktop service offering secure, high-performance virtual desktops accessible from anywhere.",
    },
    {
      question: "What is Titan GX On-site Storage?",
      answer:
        "Titan GX On-site Storage optimizes data storage with secure, scalable cloud solutions tailored to your needs, using Hyperconverged Storage and TrueNAS for hybrid environments.",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust threshold for mobile detection
    };

    checkMobile(); // Initial check on mount

    window.addEventListener("resize", checkMobile); // Listen for screen size changes
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleToggle = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <Helmet>
        <title>Small & Medium Business Solutions (SMBs) - GlobalXperts</title>
        <meta
          name="description"
          content="GlobalXperts empowers small & medium-sized businesses across the USA with scalable IT services, cloud, cybersecurity and managed support for growth."
        />

        <meta
          name="keywords"
          content="Raleigh IT Services, Managed IT Raleigh, Local IT Provider Raleigh, Healthcare IT Raleigh, Finance IT Support, Education IT Solutions, Logistics IT Services Raleigh, Customized IT Support Raleigh, Secure IT Services, Long-term IT Support Raleigh"
        />

        <meta
          property="og:title"
          content="Why Raleigh Businesses Choose Our IT Services | GlobalXperts Inc."
        />
        <meta
          property="og:description"
          content="We provide industry-specific IT services in Raleigh with responsive support, secure infrastructure, and scalable solutions for business growth."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://globalxperts.net/why-raleigh-it-services"
        />
        <meta
          property="og:image"
          content="https://globalxperts.net/images/why-raleigh-it.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Why Raleigh Businesses Choose Our IT Services"
        />
        <meta
          name="twitter:description"
          content="Customized and secure IT support for Raleigh businesses across healthcare, finance, education, and logistics."
        />
        <meta
          name="twitter:image"
          content="https://globalxperts.net/images/why-raleigh-it.jpg"
        />
          <link rel="canonical" href="https://globalxperts.net/solutions/small-medium-business" />

      </Helmet>
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-4xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Small & Medium Business Solutions (SMBs)
              </h1>
              <div className="px-20 md:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
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
                Do you run a small business? Does the scale of enterprise
                solutions present a barrier to entry? Let us break barriers
                together.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="  bg-gray-100 md:bg-gray-100 2xl:bg-white max-w-7xl mx-auto py-1 ">
        <h1 className=" text-3xl font-bold text-center  mb-2 mt-10 md:py-2 lg:py-0">
          Overview
        </h1>
        <p className="text-lg leading-relaxed text-left text-gray-600 mb-4 p-6">
          We build cloud solutions for businesses of all sizes. Whether you are
          a Fortune 500 enterprise, a small business, or anything in between, we
          can build or select a solution that is right for you. Here are some of
          the benefits you could gain from our solutions.
        </p>
        <div className="bg-gray-100  2xl:bg-white flex items-center justify-center  2xl:mt-8 mb-12 md:p-8 lg:p-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mb-8">
            {/*  Improved Productivity and Efficiency Card */}
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[300px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaExpand />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Scalability and Flexibility
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-left">
                  One of the key advantages of cloud computing is the ability to
                  scale resources according to business needs. Whether it's
                  increasing storage capacity, expanding computing power, or
                  accommodating more users, the cloud offers the flexibility to
                  adjust resources on demand. This scalability ensures that SMBs
                  small businesses can adapt to changing market conditions and
                  handle increased workloads efficiently.
                </p>
              </div>
            </div>

            {/*  Cards */}
            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
              <div className="flex flex-col items-center flex-grow ">
                <div className="flex items-center justify-center bg-white  rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaDollarSign />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Cost Savings
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-left">
                  Cloud computing can be cost-effective for small businesses due
                  to its pay-as-you-go model. Instead of investing in expensive
                  hardware and software licenses upfront, businesses can pay for
                  cloud services based on their actual usage. This reduces
                  capital expenditures and allows them to allocate their
                  resources more efficiently. Additionally, SMBs businesses can
                  avoid costs related to maintenance, upgrades, and the physical
                  space required for in-house infrastructure.
                </p>
              </div>
            </div>

            {/* Onsite IT Support Card */}
            <div className="bg-white  2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaShieldAlt />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Enhanced Security and Reliability
                </h3>
                <p className="text-sm text-gray-600 mb-0 text-left">
                  We build security into our solutions, ensuring that you have
                  access to advanced security and compliance features, such as
                  encryption, access controls, backups, disaster recovery
                  mechanisms, and compliance certifications to protect your data
                  and meet regulatory requirements. We also take advantage of
                  the robust security measures implemented in cloud services.
                  Cloud infrastructure is designed to offer high availability,
                  ensuring that businesses have reliable access to their
                  applications and data.
                </p>
              </div>
            </div>

            <div className="bg-white 2xl:bg-gray-100 shadow-2xl  p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px] ">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaServer />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  Infrastructure as a Service (IaaS)
                </h3>
                <p className="text-sm text-gray-600 mb-4   text-left">
                  Our solutions can make use of infrastructure as a service.
                  SMBs Small businesses can use IaaS to offload their
                  infrastructure management to cloud service providers. Instead
                  of maintaining their own servers and data centers, they can
                  rent virtualized computing resources~~,~~ such as virtual
                  machines, storage, and networking —from the cloud. This allows
                  SMBs businesses to scale their infrastructure as needed,
                  reducing costs and increasing flexibility. We can help select
                  the service that is right for you.
                </p>
              </div>
            </div>

            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaDatabase />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-5 text-center">
                  Data Backup and Recovery
                </h3>
                <p className="text-sm text-gray-600 mb-4 text-left">
                  Our solutions are designed to protect your data at all times.
                  Cloud storage services provide SMBs with reliable data backup
                  and recovery solutions. Storing critical business data in the
                  cloud ensures that it is securely protected and can be easily
                  recovered in case of data loss or system failures. Cloud
                  backup also eliminates the need for physical backup devices
                  and simplifies the backup process.
                </p>
              </div>
            </div>

            <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[450px]">
              <div className="flex flex-col items-center flex-grow">
                <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl mb-12">
                  <FaCloud />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-5 text-center">
                  Software as a Service (SaaS)
                </h3>
                <p className="text-sm text-gray-600 mb-4 text-left">
                  We can build or select SaaS solutions that fit your business.
                  SMBs Small businesses often leverage SaaS applications to
                  access software and services through the cloud. This
                  eliminates the need to install and maintain software locally
                  on individual machines. The SaaS applications we provide can
                  cover a wide range of business needs, including customer
                  relationship management, human resources, accounting, project
                  management, and more. SMBs Businesses can pay for SaaS on a
                  subscription basis, making it cost-effective and easily
                  accessible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:bg-gray-100 mb-8 py-4 ">
        <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between items-center min-h-[450px] text-center">
          <div className="w-[280px] h-[350px] flex flex-col items-center justify-center">
            {/* Icon */}
            <div className="flex items-center justify-center bg-white rounded-md shadow-lg w-16 h-16 text-green-600 text-3xl p-4 mb-2 mt-4">
              <FaUsers />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800">
              Collaboration and Communication:
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-sm leading-relaxed text-left">
              Need a collaboration solution? We can build it or help you acquire
              a pre-built one. Cloud-based collaboration tools and communication
              platforms enable SMBs to improve teamwork and communication among
              their employees. These platforms often include features such as
              file sharing, document collaboration, real-time messaging, video
              conferencing, and project management. By centralizing these tools
              in the cloud, SMBs can enhance productivity and facilitate remote
              work.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold text-gray-800">
            Let Us Build a Solution for You{" "}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed text-left">
            We are familiar with the challenges that small businesses face in
            competing with larger organizations in today’s ever-changing IT
            industry. That is why our goal is to always offer our SMB customers
            solutions and services that keep pace with current technology, which
            is scalable and is priced based on usage. Contact us today to learn
            more about what we can build for your business.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4">
        <div ref={faqSectionRef} className=" max-w-7xl mx-auto  ">
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

      <div>
        <div className="mt-0">
          <ContactCard />
        </div>
        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default SmallandMediumBusiness;
