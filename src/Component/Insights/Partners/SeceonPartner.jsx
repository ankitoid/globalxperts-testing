import React from "react";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const SeceonPartner = () => {
  return (
    <>
    <Helmet>
      <title>Seceon Partner Information</title>
      <meta name="description" content="Seceon and GlobalXperts provide AI-driven cybersecurity and threat detection solutions for proactive enterprise protection." />
    </Helmet>
      <Navbar />

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-4xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Seceon Partner Information
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
                Seceon enables MSPs, MSSPs, and Enterprises to reduce cyber
                threat risks and their security stack complexity while greatly
                improving their ability to detect and block threats and breaches
                at scale. Seceon’s Open Threat Management (OTM) platform
                augments and automates MSP and MSSP security services with their
                AI and ML-powered aiSIEM, aiXDR and aiMSSP platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 mt-16">
        {/* About Seceon Section */}
        <section className="flex flex-col md:flex-row items-center mb-16 space-y-8 md:space-y-0 md:space-x-8">
          {/* Text Section (Left) */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">
              Seceon Partner Information
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              It’s all enriched and analyzed in real-time by applying threat
              intelligence, AI and ML models built on behavioral analysis, and
              correlation engines to create reliable, transparent detections and
              alerts.{" "}
            </p>
          </div>

          {/* Image Section (Right) */}
          <div className="md:w-1/2">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/seceon.png"
              alt="Seceon Illustration"
              className="w-full h-auto object-cover rounded-lg "
            />
          </div>
        </section>

        <hr className="border-t-2 border-blue-600 mb-16" />

        {/* aiSIEM Section */}
        <section>
          <h1 className="text-3xl font-bold mb-4">aiSIEM</h1>
          <p className="text-lg text-gray-700 mb-6">
            Seceon® aiSIEM is a powerful complement to Next-Generation Firewalls
            (NGFW) empowering Enterprises and MSSPs to detect and eliminate all
            known and unknown cyber threats in real-time. It uses elastic
            compute power, dynamic threat models, behavioral analytics, advanced
            machine learning (ML), AI with actionable intelligence with
            proprietary feature engineering and anomaly detection algorithms --
            without a need for daily tuning. It provides a zero-trust security
            in the digital era and increases SOC efficiency by over 80% while
            dramatically lowering its operational cost.{" "}
          </p>
          <h2 className="text-lg mb-4">
            The key salient features of the aiSIEM solution includes:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Robust, large-scale data collection from cloud and all data
              sources (network, endpoints, identities, etc.) in streaming
              platforms, which scale to billions of event handlings per second
              with context.
            </li>
            <li>
              Analyzes logs & data and incorporates threat intelligence feeds
              for correlation and enrichment.
            </li>
            <li>
              Enhanced data analytics beyond rules with contextual real-time
              alerts for “threats-that-matter” and automated response.
            </li>
            <li>Simplified licensing for comprehensive threat detection.</li>
            <li>
              Scalable architecture with support for multi-tenancy & data
              segregation.
            </li>
          </ul>
        </section>

        {/* ML Threat Detection Section */}
        <section>
          <h1 className="text-3xl font-bold mb-4 mt-10">AI Threat Detection</h1>
          <p className="text-lg text-gray-700 mb-6">
            Cyberthreats have become increasingly powerful and evasive. The
            traditional threat-detection systems of the past may not be
            sufficient anymore. This is why Seceon has used their in-house
            machine learning models to power their Open Threat Management (OTM)
            platform. This ML model inspects vast amounts of data in order to
            better detect threats and provide intelligence. These models are
            updated with continuous learning feedback and decaying outdated
            data, and several detection algorithms may be used.
          </p>
        </section>

        {/* GX Capabilities Section */}
        <div>
          <h1 className="text-3xl font-bold mb-4">GX Capabilities</h1>
          <p className="text-lg text-gray-700 mb-6">
            As a Seceon partner, GlobalXperts offers a comprehensive suite of
            managed security services. We ensure seamless integration and
            optimization of Seceon products within your existing IT
            infrastructure.
          </p>
        </div>
      </div>

      {/* Contact and Footer Section */}
      <div className="mt-8 mb-6 p-2">
        <ContactCard />
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </>
  );
};

export default SeceonPartner;
