import React from "react";
import { Link } from "react-router-dom";
import { FaCloud, FaRocket, FaCogs } from "react-icons/fa";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
const AviationCloud = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Aviation in the Cloud
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

            <div className="w-full text-center lg:text-left mt-10 lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed text-left">
                At GlobalXperts, we specialize in the IT infrastructure that
                aviation companies rely on to keep operations running, whether
                on-premises or in the cloud. We are experts in the foundational
                IT environments that support flight operations and crew
                management systems inside and out. From data centers and
                networks to virtualization, security, and cloud migration, we
                help aviation businesses modernize and manage the technical
                backbone behind their critical systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Section 1 */}
        <div className="flex flex-col items-start mb-6 rounded-lg shadow-lg overflow-hidden p-4 bg-blue-100">
          <div className="w-full">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              <FaCogs className="inline-block text-blue-500 mr-2" />
              Reliable IT Expertise for Complex Environments
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Airlines and aviation companies operate in some of the most
              complex and demanding IT environments. At GlobalXperts, our
              strength lies in designing, building, and supporting the
              infrastructure those systems depend on. We offer:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Architecture and implementation of scalable, high-performance
                environments.
              </li>
              <li>
                Support for hybrid infrastructures — on-prem, cloud, or both.
              </li>
              <li>
                Ongoing maintenance and 24/7 managed services to keep everything
                running smoothly.
              </li>
            </ul>
            <p className="mt-4 text-gray-700">
              We work alongside your domain teams like crew management and
              tracking to ensure your IT environment is optimized for
              performance, uptime, and reliability.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col items-start mb-10 rounded-lg shadow-lg overflow-hidden p-4 bg-gray-100">
          <div className="w-full ">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              <FaCloud className="inline-block text-blue-500 mr-2" />
              Cloud Solutions Built for Aviation Scale
            </h2>
            <p className="text-gray-700 mb-4">
              As aviation companies expand globally and seek to modernize legacy
              systems, cloud infrastructure becomes a critical piece of the
              puzzle. GlobalXperts helps organizations take full advantage of
              AWS cloud services with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Seamless migration to cloud environments designed for scale and
                resilience.
              </li>
              <li>
                Strong security and compliance frameworks to meet industry
                standards.
              </li>
              <li>High-availability architectures for always-on operations.</li>
            </ul>
            <p className="mt-4 text-gray-700">
              We understand aviation often demands infrastructure in remote or
              distributed regions. With AWS, we help clients leverage:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
              <li>
                Global cloud coverage via AWS’s extensive network of regions and
                edge locations.
              </li>
              <li>Hybrid solutions using AWS Outposts and Direct Connect.</li>
              <li>
                Data residency support through services like AWS Wavelength.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-16">
          {/* Text */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              <FaRocket className="inline-block text-yellow-500 mr-2" />
              Enabling Innovation Through Strong IT Foundations
            </h2>
            <p className="text-gray-700 mb-4">
              Many aviation companies are looking to adopt technologies like AI,
              IoT, and real-time analytics. Our role at GlobalXperts is to
              provide the stable, secure, and scalable IT environments that
              enable those innovations. We support initiatives such as:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Deploying infrastructure for AI/ML applications and smart
                assistants.
              </li>
              <li>
                Building cloud-native platforms to support scalable operations.
              </li>
              <li>
                Supporting IoT systems that track assets, equipment, and
                vehicles in real time.
              </li>
              <li>
                Enhancing cybersecurity to protect critical systems and
                passenger data.
              </li>
            </ul>
          </div>

          {/* Image (This one stays) */}
          <div className="md:w-1/2 bg-white p-4 rounded-xl shadow-xl">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Industries/aviation.jpg"
              alt="Innovation in Aviation IT"
              className="rounded-lg w-full"
            />
          </div>
        </div>

        {/* Final Statement */}
        <div className="bg-blue-50 p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            A Trusted IT Partner for Aviation-Driven Businesses
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At GlobalXperts, we understand the critical role that technology
            plays in the aviation industry. With deep expertise in designing and
            implementing complex IT infrastructures, both in the cloud and
            on-premises, we deliver the resilient, scalable systems aviation
            businesses need to succeed. From IT architecture and cloud migration
            to managed services, our team is equipped to support
            enterprise-scale environments with precision and reliability. We
            work alongside your internal teams and industry experts to provide
            the IT horsepower that drives innovation, operational excellence,
            and growth.
          </p>
        </div>
      </div>

      <div className="mt-4 mb-4">
        <ContactCard />
      </div>
      <Footer />
    </>
  );
};

export default AviationCloud;
