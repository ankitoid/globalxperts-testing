import React, { useState, useEffect, useRef } from "react";
import { FaServer, FaCloud, FaCogs, FaArrowAltCircleUp } from "react-icons/fa"; // Import icons from react-icons library
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { DiModernizr } from "react-icons/di";
import { GiLevelTwoAdvanced } from "react-icons/gi";
import {
  SiAmazoncloudwatch,
  SiAmazons3,
  SiAmazoneks,
  SiAwslambda,
  SiAmazonec2,
  SiAmazondocumentdb,
} from "react-icons/si";

const AWS = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [activeQuestion, setActiveQuestion] = useState(null);
  const faqSectionRef = useRef(null); // Reference to the FAQ section

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

  const slides = [
    {
      id: 1,
      title: "Data Strorage & Analytics",
      description:
        "Optimize data storage with secure, scalable cloud solutions tailored to your needs, using Hyperconverged Storage and TrueNAS for hybrid environments.",
      image:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/AWS/DataStorage.webp",
      link: "/solutions/cloud-solutions/titanX-data-transformation",
    },

    {
      id: 2,
      title: " High-Performance Storage",
      description:
        "Streamline your cloud journey with AWS Migration Hub, a central platform for planning and tracking data center migrations.",
      image:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/AWS/HighPerformanceStorage.webp",
      link: "/solutions/aws-solutions/piosa-high-performance-storage"
    },

    {
      id: 3,
      title: "Virtual Machines",
      description:
        "Empower remote work with Amazon WorkSpaces, a managed cloud desktop service offering secure, high-performance virtual desktops accessible from anywhere.",
      image:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/AWS/VirtualMachine.webp",
      link: "/solutions/cloud-solutions/amazon-elastic-vmware-service",
    },
    {
      id: 4,
      title: "AI & Machine Learning Insight",
      description:
        "Optimize data storage with secure, scalable cloud solutions tailored to your needs, using Hyperconverged Storage and TrueNAS for hybrid environments.",
      image:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/AWS/AiMLinsight.webp",
      link: "/solutions/ai-ml-solutions",
    },
    {
      id: 5,
      title: "Video Streaming",
      description:
        "Empower remote work with Amazon WorkSpaces, a managed cloud desktop service offering secure, high-performance virtual desktops accessible from anywhere.",
      image:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/AWS/StreamingVideo.webp",
      link: "/solution/aws-solutions/opsis-live-streaming",
    },

    {
      id: 6,
      title: "Contact Center",
      description:
        "Transform customer interactions with GX Customer Connect, a cloud-based contact center solution that boosts efficiency and scales with AI-powered features.",
      image:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/gxConnect.webp",
      link: "/solutions/aws-solutions/customer-collaboration",
    },
    
  ];
  const allSlides = [...slides, ...slides, ...slides]; // Tripled slides for infinite loop
  const [currentSlide, setCurrentSlide] = useState(slides.length); // Start in the middle

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust threshold for mobile detection
    };

    checkMobile(); // Initial check on mount

    window.addEventListener("resize", checkMobile); // Listen for screen size changes
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        const nextSlide = prevSlide + 1;
        if (nextSlide >= slides.length * 2) {
          setTimeout(() => setCurrentSlide(slides.length), 0); // Reset to middle
          return slides.length;
        }
        return nextSlide;
      });
    }, 6000); // Slide changes every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);
  const handleSlideClick = (link) => {
    window.location.href = link; // Redirect to clicked slide's link
  };

  const services = [
    {
      title: "Amazon EC2",
      description:
        "Are you looking to replace on-premise VMs in the cloud? We can help you build a solution with EC2. It provides a reliable infrastructure and 99.99% availability. Resources can be scaled up or down, in or out, and we can build a solution that scales automatically.",
      icon: SiAmazonec2,
      iconType: "simple-icon",
      iconColor: "text-blue-500",
    },
    {
      title: "Amazon S3",
      description:
        "Need object storage in the cloud? Utilize Amazon S3 to securely store and organize data and access it from anywhere, anytime. Designed for businesses of any size, it delivers exceptional scalability as well as lower cost options for solutions that access data infrequently.",
      icon: SiAmazons3,
      iconType: "simple-icon",
      iconColor: "text-red-600",
    },
    {
      title: "Amazon EKS",
      description:
        "Are you looking to replatform a containerized application onto the cloud? We can help you migrate and build a solution with Amazon Elastic Kubernetes Service (EKS). EKS is a fully-managed Kubernetes service that is perfect for building scalable containerized apps.",
      icon: SiAmazoneks,
      iconType: "simple-icon",
      iconColor: "text-green-500",
    },
    {
      title: "AWS Lambda",
      description:
        "AWS Lambda is a serverless compute service that lets you create functions that can be called elsewhere in your application. Lambda is a very cost-effective option for many applications, requiring you to pay only for compute time that you use. We can help you make use of AWS Lambda in your application.",
      icon: SiAwslambda,
      iconType: "simple-icon",
      iconColor: "text-yellow-500",
    },
    {
      title: "AWS Glue",
      description:
        "Need more serverless services? AWS Glue is a data integration service that lets you build data pipelines for app development, analytics, and machine learning at any scale. We can make use of AWS Glue when we build a data solution for your business, so you can manage your data lakes, ETL pipelines, and much more with ease.",
      icon: SiAmazoncloudwatch, // Closest alternative since there's no dedicated AWS Glue icon
      iconType: "simple-icon",
      iconColor: "text-orange-600",
    },
    {
      title: "Amazon Bedrock",
      description:
        "Looking to build an AI powered application? Amazon Bedrock is a fully managed service that provides foundation models (FM) from leading AI companies. You can customize the machine learning models to your needs and – you guessed it – Bedrock is serverless. We can build an application using Amazon Bedrock to provide you with the most powerful AI innovations of our time.",
      icon: SiAmazondocumentdb, // This may not be available yet; use SiAmazonaws as an alternative
      iconType: "simple-icon",
      iconColor: "text-purple-600",
    },
  ];
  const faqs = [
    {
      question:
        "What services does GlobalXperts offer for AWS Cloud Solutions?",
      answer:
        "GlobalXperts provides comprehensive AWS cloud services, including consulting, migration, 24/7 managed services, DevOps, and cost optimization. These services are tailored to support clients throughout their entire cloud journey.",
    },
    {
      question:
        "What is included in your cloud consulting and design services?",
      answer:
        "Our cloud consulting and design services include a holistic assessment of your IT landscape, crafting tailored cloud solutions, seamless integration with existing infrastructure, and designing a future-ready, scalable cloud architecture.",
    },
    {
      question: "How does GlobalXperts approach cloud architecture design?",
      answer:
        "We start with a holistic assessment of your business needs, analyzing your infrastructure and applications to design a robust, scalable, and cost-effective cloud architecture that aligns with your long-term goals.",
    },
    {
      question:
        "What are AWS Elemental Media Services, and how can they benefit my business?",
      answer:
        "AWS Elemental Media Services offer reliable and flexible media solutions designed to meet your business needs. These services enable advanced features to streamline media operations and support business growth with secure and adaptable capabilities.",
    },
    {
      question: "What are the benefits of using Amazon S3 for data storage?",
      answer:
        "Amazon S3 is a highly scalable object storage service that securely stores and organizes data, allowing access anytime and anywhere. It is ideal for businesses of any size and offers exceptional scalability to meet growing data storage demands.",
    },
    {
      question: "How does Amazon CloudFront improve content delivery?",
      answer:
        "Amazon CloudFront accelerates content delivery by enabling high-speed data transfer, allowing viewers to access content at low latency. This service enhances website and app performance by reducing load times for users.",
    },
    {
      question: "What is Amazon EC2, and how does it support business growth?",
      answer:
        "Amazon EC2 is a secure, resizable cloud computing service that provides reliable infrastructure with 99.99% availability. It allows businesses to scale resources up or down based on demand, providing flexible and reliable computing power.",
    },
    {
      question: "How does Amazon IVS enhance live streaming experiences?",
      answer:
        "Amazon IVS (Interactive Video Service) offers low-latency live streaming, making live videos more engaging for viewers worldwide. It includes interactive features like live polls, quizzes, and real-time chat to create an engaging video experience.",
    },
    {
      question:
        "What is Amazon RDS, and how does it optimize database management?",
      answer:
        "Amazon RDS (Relational Database Service) is a managed SQL database that automates tasks like provisioning and patching. It allows rapid deployment, has built-in security, and offers cost-effective pricing based on usage, optimizing total cost of ownership.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>AWS Cloud Management & Consulting Services USA - GlobalXperts</title>
        <meta
          name="description"
          content="GlobalXperts delivers expert AWS cloud architecture, migration and managed services to businesses across the USA - secure, scalable, and cost efficient."
        />
        <meta
          name="keywords"
          content="AWS, Amazon Web Services, cloud solutions, compute, storage, security, analytics, migration, optimization, GlobalXperts, Raleigh, Texas"
        />
          <link rel="canonical" href="https://globalxperts.net/solutions/cloud/aws" />

      </Helmet>
      <Navbar />

      <div className=" bg-blueCustomColor  w-full ">
        <div className="max-w-7xl mx-auto py-12 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                AWS Solutions
              </h2>
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
            <div className="w-full text-left lg:text-right mt-10 lg:mt-28 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 text-left">
                Are you looking for a cloud solution that is scalable,
                resilient, globally distributed, and cost-effective? Then AWS is
                the cloud service provider for you. At GlobalXperts, we build
                solutions on AWS and can help you manage them after they are
                built. We can help you choose which services to use to optimize
                performance, cost, security, and compatibility with your
                existing systems. Let’s explore the possibilities of AWS
                solutions together.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto lg:max-w-6xl lg:mx-auto mt-6 p-4">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-black mb-4">Our Services</h1>
          <p className="text-black">
            Explore our cloud consulting & design services designed to architect
            tailored cloud solutions that align with your business goals.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Service 1 - Customized Cloud Solutions */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <FaServer className="text-green-500 w-16 h-16" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">
                Customized Cloud Solutions
              </h3>
              <p className="text-black">
                Based on our assessment, we design and implement cloud solutions
                that are customized to your business needs. Our team of experts
                designs a cloud architecture focused on scalability,
                performance, cost-optimization, and compatibility with existing
                infrastructure. And yes, we can also build hybrid cloud
                solutions on AWS! Whatever solution you need, we can build it.
              </p>
            </div>
          </div>

          {/* Service 2 - Cloud Assessment */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <FaCloud className="text-green-500 w-16 h-16" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">
                Cloud Assessment
              </h3>
              <p className="text-black">
                We will assess your current IT landscape, business objectives,
                and technology needs. This involves analyzing your existing
                infrastructure, applications, and processes to develop a
                comprehensive understanding of your organization's requirements.
              </p>
            </div>
          </div>

          {/* Service 3 - Cloud Integration */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <FaCogs className="text-green-500 w-16 h-16" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">
                Cloud Integration
              </h3>
              <p className="text-black">
                We facilitate a seamless integration of cloud services with your
                existing infrastructure. Ensuring compatibility is our job—rest
                assured that what we build will work together like a well-oiled
                machine. If you prefer one of the services of another cloud
                provider, such as Azure or Google Cloud, we can integrate these
                too, creating a robust multi-cloud solution.
              </p>
            </div>
          </div>

          {/* Service 4 - Migration Services with MAP link */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <FaArrowAltCircleUp className="text-green-500 w-16 h-16" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">
                Migration Services
              </h3>
              <p className="text-black">
                Migrating to AWS can transform your business operations. Our AWS
                migration services are tailored to reduce the cost of migration
                and ensure a smooth transition. We provide end-to-end support,
                minimizing downtime and disruption. We can also help you take
                advantage of savings programs such as the{" "}
                <Link
                  to="/migration-acceleration-program-map/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Migration Acceleration Program (MAP)
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Service 5 - Advanced Optimization Techniques */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <GiLevelTwoAdvanced className="text-green-500 w-16 h-16" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">
                Advanced Optimization Techniques
              </h3>
              <p className="text-black">
                To get the most out of your AWS investment, our optimization
                services focus on enhancing performance and efficiency. We
                ensure that your AWS environment is finely tuned to meet your
                business goals with a strong emphasis on cost optimization to
                keep your expenses in check.
              </p>
            </div>
          </div>

          {/* Service 6 - Modernization */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <DiModernizr className="text-green-500 w-16 h-16" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">
                Modernization
              </h3>
              <p className="text-black">
                When we build a solution, we anticipate your future needs by
                designing our solutions to be customizable, scalable, and
                cost-effective. We also build emerging technologies into our
                solutions, such as data analytics, AI and machine learning
                (AI/ML), and more. Take full advantage of the modern technology
                of cloud computing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Popular AWS Services
          </h2>
          <p className="text-gray-700 mb-10">
            Make your business stand apart from competitors using our reliable
            and cost-effective AWS services.
          </p>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200 flex flex-col items-center text-left transition-transform transform hover:scale-105"
              >
                <div className={`text-6xl ${service.iconColor} mb-4`}>
                  <service.icon />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <div className="w-full h-1 bg-blue-500 mb-4 rounded-sm"></div>
                <p className="text-gray-700 text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto   mt-8 p-5">
        <h1 className="text-4xl text-center font-bold text-gray-900 mb-4">
          Why AWS?{" "}
        </h1>
        <p className="text-gray-700 text-lg">
          Amazon Web Services offers the most comprehensive set of cloud
          services available on the market. It is excellent for AI and machine
          learning development, contact center solutions, and high-performance
          storage solutions. AWS also has the greatest global region coverage,
          so it might be the perfect choice if your application requires low
          latency across the globe. And if spending is your worry, AWS also
          offers cost savings plans with services that are highly scalable. So,
          whether you are a Fortune 500 company, a small business, or a one-man
          show, AWS has a service for you, and GlobalXperts can help you build
          your application and migrate your data.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-8 mb-4 text-center p-2">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-3xl">
          Our AWS Certifications
        </h1>
        <p className="text-center  mt-4 mb-4">
          We are a Select Tier AWS Partner. Our AWS team members have achieved
          various certifications to show their knowledge and expertise.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-4">
          {/* Cloud Practitioner */}
          <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/AWS+certificate/CloudProtitioner.png" // Replace with actual image path
              alt="Cloud Practitioner"
              className="w-32 h-32 mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-800">
              Cloud Practitioner
            </h3>
          </div>

          {/* Solution Architect */}
          <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/AWS+certificate/SolutionArchitect.png" // Replace with actual image path
              alt="Solution Architect"
              className="w-32 h-32 mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-800">
              Solution Architect
            </h3>
          </div>

          {/* DevOps Engineer */}
          <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/AWS+certificate/DevopsEngineer.png" // Replace with actual image path
              alt="DevOps Engineer"
              className="w-32 h-32 mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-800">
              DevOps Engineer
            </h3>
          </div>

          {/* Security */}
          <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Devops/AWS+certificate/security.png" // Replace with actual image path
              alt="Security"
              className="w-32 h-32 mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-800">Security</h3>
          </div>

          {/* Storage, Data Protection & Disaster Recovery */}
          {/* <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md">
            <img
              src={StorageDataProtection} // Replace with actual image path
              alt="Storage, Data Protection & Disaster Recovery"
              className="w-32 h-32 mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-800">
              Storage, Data Protection & Disaster Recovery
            </h3>
          </div> */}

          {/* Block Storage */}
          {/* <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md">
            <img
              src={BlockStorage} // Replace with actual image path
              alt="Block Storage"
              className="w-32 h-32 mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-800">
              Block Storage
            </h3>
          </div> */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto  justify-center flex mt-16 ">
        <div className="text-center  mx-10">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Software
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Do you need a solution for a common use case? Consider one of our
            AWS solutions.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto relative mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {allSlides.slice(0, 6).map((slide, index) => (
          <div
            key={index}
            className="flex flex-col border rounded-md cursor-pointer justify-between items-center bg-white h-full border-greenCustomColor2 p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-md"
            onClick={() => handleSlideClick(slide.link)}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-48 object-cover"
            />
            <div className="text-center p-5">
              <h3 className="text-xl font-bold text-green-800">
                {slide.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div ref={faqSectionRef} className="max-w-7xl mx-auto px-4 py-16 ">
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
      <div className="mt-8 p-4">
        <ContactCard />
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </>
  );
};

export default AWS;
