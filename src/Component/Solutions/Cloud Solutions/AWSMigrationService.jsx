import React, { useState } from "react";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Helmet } from "react-helmet";
import awsMigrationService from "../../../Assets/planningDesign.png";
const AWSMigrationService = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the AWS Migration Acceleration Program (MAP)?",
      answer:
        "The AWS Migration Acceleration Program (MAP) provides financial support and best practices to assist organizations in migrating to AWS efficiently and cost-effectively. It includes resources and tools designed to streamline the migration process and reduce associated costs.",
    },
    {
      question: "How does AWS support cloud migration?",
      answer:
        "AWS facilitates cloud migration through tools such as the Application Migration Service (MGN) and the Database Migration Service (DMS), complemented by expert guidance from AWS Professional Services. These resources enable a smooth transition to the cloud, allowing organizations to benefit from AWS's scalability, security, and cost-effectiveness.",
    },
    {
      question: "What is the Prolific I/O – Storage Accelerator?",
      answer:
        "The Prolific I/O – Storage Accelerator is a solution that addresses workloads requiring high throughput or IOPS during peak periods. It enhances throughput and IOPS capacity only when demand is elevated, thereby reducing costs associated with idle capacity during low-demand periods.",
    },
    {
      question: "How can I save money during migration to AWS?",
      answer:
        "To achieve cost savings during migration, organizations can utilize the Migration Acceleration Program (MAP), which offers financial assistance. Additionally, the Prolific I/O – Storage Accelerator can optimize resource use and manage costs related to variable workload demands.",
    },
    {
      question:
        "What should I do if my workloads experience performance issues on AWS?",
      answer:
        "In cases of performance degradation due to workload spikes on AWS, implementing the Prolific I/O – Storage Accelerator is advisable. This solution enhances storage performance, ensuring efficient operation of workloads while minimizing unnecessary costs.",
    },
  ];

  const services = [
    {
      title: "Amazon Web Services (AWS)",
      imgSrc:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/MOM/AWservice.jfif",
      description:
        "AWS is an excellent choice if your application requires extremely high performance or low latency in remote regions of the globe. We can migrate your workloads and help you take advantage of Amazon’s migration services, such as AWS Migration Hub, AWS Snowmobile, and the Migration Acceleration Program 2.0.",
      bullets: [
        "AI & Machine Learning",
        "High-performance storage",
        "Greatest variety of services",
        "Widest global distribution",
        "Excellent cost-savings plans",
      ],
      link: "/solutions/cloud/aws",
    },
    {
      title: "Microsoft Azure",
      imgSrc:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/MOM/MicrosoftAzure.png",
      description:
        "Azure is an excellent choice if you need to integrate with other Microsoft services such as Office 365. It is also considered to be the most suitable for hybrid-cloud solutions. We can build a solution and migrate your workloads, ensuring minimal downtime and optimal performance.",
      bullets: [
        "Integrates with Office 365",
        "Hybrid-cloud friendly",
        "Robust Security",
      ],
    },
    {
      title: "Google Cloud Platform (GCP)",
      imgSrc:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/MOM/google2.jpg",
      description:
        "GCP is an excellent choice for data analytics and machine learning solutions. We can build a solution that protects your data, and we can migrate your workloads, ensuring minimal downtime and optimal performance.",
      bullets: [
        "AI & machine learning",
        "Data and analytics",
        "High-performance capabilitiesy",
      ],
    },
  ];
// mom
  return (
    <> 
      <Navbar />
      <Helmet>
        <title>AWS Migration, Optimization, & Modernization Services - GlobalXperts</title>
        <meta name="description" content="GlobalXperts delivers AWS Migration Service: seamless, secure migration to AWS from Raleigh, NC - minimize downtime, optimize cost and scale your cloud journey." />
        <meta name="keywords"content="End-to-end AWS migration services"/>
        
      </Helmet>

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[60vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Migration,<br></br> Optimization, & Modernization.
              </h1>
              <div className="px-20 lg:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="w-full text-center lg:text-left mt-10 lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-base text-left lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                Are you planning to migrate your business to the cloud? Do you
                have existing cloud infrastructure in need of optimization? Does
                your business need modernization? We can help. At GlobalXperts,
                we offer migration services, and we can help you to move your
                systems to the cloud, optimizing them for cost-effectiveness,
                performance, and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl max-w-7xl mx-auto p-8 gap-8 items-center mt-8 border-gray-400">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Planning and Design
          </h2>
          <p className="text-gray-600">
            Based on the assessment results, we can create a detailed migration
            plan tailored to your specific requirements. This plan includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Phased Approach:</strong> Dividing the migration into
              manageable phases to reduce risk and ensure smooth transitions.
            </li>
            <li>
              <strong>Resource Mapping:</strong> Identifying the right AWS
              resources (e.g., EC2 instances, RDS databases, S3 buckets, etc.)
              for optimal performance and scalability.
            </li>
            <li>
              <strong>Security Architecture:</strong> Designing a robust
              security architecture, including encryption, access controls, and
              data protection measures.
            </li>
            <li>
              <strong>AWS Migration Hub:</strong> We utilize the AWS Migration
              Hub, which provides a central location to collect server and
              application inventory data for the assessment, planning, and
              tracking of migrations to AWS on a pay-as-you-go basis. New
              clients get Refactor Spaces with 2,160 free environment hours per
              month for 90 days.
            </li>
          </ul>
        </div>

        {/* Right Side Image Placeholder */}
        <div className="w-full md:w-1/2 flex justify-center ">
          <div className="w-full h-64 md:h-80   flex items-center justify-center rounded-xl">
            {/* Replace this div with your image */}
            <img
              src={awsMigrationService}
              alt="Cloud Migration Service"
              className="w-auto h-80 object-contain "
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-4 px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left Box for Migration Execution */}
          <div className="lg:w-1/2 mb-12 lg:mb-13 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Migration Execution
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              During the migration phase, GlobalXperts works closely with the
              client and with AWS to ensure a seamless transition. Our migration
              process encompasses:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <strong>Data Migration:</strong> Safely transferring data from
                the client's on-premises systems to AWS, leveraging AWS Data
                Migration Services such as AWS Snowball.
              </li>
              <li>
                <strong>Application Migration:</strong> Rehosting, refactoring,
                or rearchitecting applications to leverage the full potential of
                AWS services.
              </li>
              <li>
                <strong>Testing and Validation:</strong> Rigorous testing and
                validation of all migrated applications to guarantee
                functionality and performance.
              </li>
            </ul>
          </div>

          {/* Vertical Line */}
          <div className="hidden lg:block w-px h-auto bg-gray-300 mx-8"></div>

          {/* Right Box for Post-Migration Support */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Post-Migration Support
            </h2>
            <p className="text-lg text-gray-500 mb-4">
              After the successful migration, our commitment to the client does
              not end. We provide ongoing support and monitoring services,
              including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <strong>24/7 Support:</strong> Continuous monitoring and
                proactive management to identify and resolve issues promptly.
              </li>
              <li>
                <strong>Optimization and Cost Management:</strong> Regularly
                reviewing AWS usage to optimize resources and control costs.
              </li>
              <li>
                <strong>Performance Enhancement:</strong> Implementing
                strategies to enhance application performance and user
                experience.
              </li>
              <li>
                <strong>AWS Partnership and Collaboration:</strong> As an AWS
                partner, GlobalXperts collaborates closely with AWS during the
                entire migration process. We leverage AWS best practices and
                expertise, ensuring our clients receive the most up-to-date and
                reliable solutions.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-center text-lg font-semibold mb-4">
          By leveraging these tools and services, you can migrate to AWS
          smoothly and efficiently, taking advantage of the scalability,
          security, and cost-effectiveness that the cloud offers.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative p-6 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-lg">
            <h3 className="text-center text-2xl font-bold mb-4">
              Service Types
            </h3>
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/MOM/serviceType.png"
              alt="Service Types"
              className="rounded-lg object-cover w-full h-auto mb-4"
            />
          </div>

          <Link
            to="/migration-acceleration-program-map/"
            className="p-6 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-lg"
          >
            <h3 className="text-center text-2xl font-bold mb-4">
              Ways to Save on Migrations
            </h3>
            <div className="flex items-center justify-center">
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/MOM/accelatorImage.png"
                alt="Migration Acceleration Program"
                className="w-1/3 mb-4 rounded-lg"
              />
            </div>
            <h4 className="text-center text-2xl font-semibold mt-8">
              Migration Acceleration Program (MAP)
            </h4>
            <p className="text-center text-base">
              The Migration Acceleration Program (MAP) is a savings program
              offered by AWS, and we can help you learn more about it.
              <Link
                to="/migration-acceleration-program-map/"
                className="underline ml-1"
              >
                (Click to discover more)
              </Link>
            </p>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Map 2.0 Strategies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Assess
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Discovery Workshops</li>
                <li>TCO</li>
                <li>Directional Business Case</li>
                <li>Application Discovery Service</li>
                <li>Migration Evaluator</li>
                <li>Cloudamize</li>
                <li>CloudChomp</li>
                <li>Migration Portfolio Assessment</li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Mobilize
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Landing Zone</li>
                <li>Security and Compliance</li>
                <li>Deep Dive</li>
                <li>Proof of Concept/EBA</li>
                <li>Control Tower</li>
                <li>AWS MGN</li>
                <li>AWS Elastic DR</li>
                <li>Schema Conversion Tool</li>
                <li>AWS DMS</li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Migrate & Modernize
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Migrate</li>
                <li>Optimize</li>
                <li>Modernize</li>
                <li>Migration Hub</li>
                <li>Refactor Spaces</li>
                <li>App2Container</li>
                <li>Porting Assistant</li>
                <li>CAST</li>
                <li>Amaze</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white py-4 px-4 sm:px-6 lg:px-8 mt-0">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
              Migration Strategies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Strategy 1 – Lift & Shift
                </h3>
                <p className="text-lg text-gray-700 text-left">
                  In this strategy, applications are “rehosted” on cloud
                  services with no changes to the applications themselves. Apps
                  that run on virtual machines can be rehosted on Amazon EC2
                  instances. Apps that run on containers such as Docker or
                  Kubernetes can be rehosted on Amazon EKS.
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Strategy 2 – Migrate & Modernize
                </h3>
                <p className="text-lg text-gray-700 text-left">
                  In this strategy, applications are “refactored,” which means
                  that they are redesigned to take advantage of the available
                  cloud services, resulting in a new, cloud-native application.
                  Apps may be optimized for performance and cost-reduction.
                  Refactoring may include:
                </p>
                <ul className="list-disc pl-5 mt-4 text-gray-700 text-left">
                  <li>Microservices instead of monolithic applications</li>
                  <li>
                    Serverless architectures instead of server-only
                    architectures
                  </li>
                  <li>
                    Open-source software instead of closed-source software
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 rounded-lg shadow-xl p-6 md:max-w-6xl md:mx-auto space-y-6 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              {" "}
              Strategy 3 – Prolific I/O Storage Accelerator
            </h2>
            <p className="mb-4">
              This strategy involves Amazon EC2 and EBS, and it uses a software
              solution that GlobalXperts has developed. This solution is
              designed for workloads with extremely high throughput needs. Such
              workloads would previously have been left on-premises with no
              cost-effective way of being moved to the cloud, and they typically
              would run at extremely high throughputs for short periods of time,
              leading to expensive overprovisioning. Our solution can boost its
              throughput as high as 2 million IOPS, and it can return to a
              baseline throughput to optimize costs.
            </p>
            <Link
              to={"/solutions/AWS-Solutions/PIOSA-high-performance-storage"}
              className="text-blue-600 hover:text-blue-800"
            >
              Read more about Prolific I/O
            </Link>
          </div>

          <Link
            to={"/solutions/AWS-Solutions/PIOSA-high-performance-storage"}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/MOM/iosaImage.png"
              alt="IOSA"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </Link>
        </div>
      </div>

      {/* <div className="max-w-3xl mx-auto container px-4 py-16">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/MOM/migrationfull.png"
              alt="Migration"
              className="w-full h-auto"
            />
    
            <p className="text-lg mt-8">
              Are you ready to take your business to the next level? If you are
              considering cloud migration, contact us today to learn more about what
              GlobalXperts can do for your business.
            </p>
          </div> */}

      <div className="relative mt-4 bg-white 2xl:bg-gray-100 rounded-2xl shadow-lg p-8  flex items-center flex-col lg:flex-row justify-between max-w-6xl mx-auto">
        <div className="text-section max-w-lg">
          <h5 className="text-3xl font-bold text-gray-800 leading-tight mb-4">
            Why Choose GlobalXperts for
            <span className="text-blue-600"> MOM?</span>
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
            href="https://main-website-brochures1.s3.ap-south-1.amazonaws.com/MOM+Brochure.pdf"
            download="MOM.pdf"
            target="_blank"
            className="ml-8 mt-4 inline-block px-4 py-2 bg-blue-600 text-white font-normal text-lg rounded-lg shadow-md hover:bg-blue-800 transition duration-300"
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

      <div className="max-w-7xl mx-auto container px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">FAQs</h1>
        <p className="text-lg mb-12">
          Dive into FAQs related to AWS Migration Services.
        </p>
        <div className="flex mb-16">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-4">
            Contact Us
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
            FAQs
            <span className="ml-2">→</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {faqData.map((faq, index) => (
            <div key={index}>
              <h2
                className="text-xl font-bold mb-2 cursor-pointer text-blue-500"
                onClick={() => toggleAnswer(index)}
              >
                {faq.question}
              </h2>
              {activeIndex === index && (
                <p className="text-base text-gray-700 mb-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <ContactCard />
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </>
  );
};

export default AWSMigrationService;
