import React from "react";
import Navbar from "../../Navbar";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";

const AIMLonAWS = () => {
  return (
    <>
      <Navbar />
      <Helmet>
        <title>AWS AI/ML Services - GlobalXperts</title>
        <meta name="description" content="GlobalXperts turns data into intelligence with AI & ML on AWS - build, train and deploy models securely, scale fast and gain competitive edge across the USA." />
       <link rel="canonical" href="https://globalxperts.net/ai-machine-learning-on-aws" />

      </Helmet>

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                AWS AI/ML Services
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
            <div className="w-full text-left lg:text-left mt-10 lg:mt-20 order-3 lg:order-2 p-4 ">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                GlobalXperts uses <strong>Amazon Web Services (AWS)</strong> for
                our suite of AI/ML tools. With AWS comes a number of AI
                capabilities that are either designed for general usage or
                specialized for specific tasks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto  p-4 bg-gray-100 2xl:bg-white">
        {/* Main Card */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-6 md:p-10 gap-6 mt-12">
          {/* Left Section - Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Ai-Solutions/awsTextract.png"
              alt="Education"
              className="object-cover w-full h-auto rounded-lg shadow"
            />
          </div>

          {/* Right Section - Text */}
          <div className="w-full md:w-1/2">
            {/* Header */}
            <div className="flex items-center mb-6">
              <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
                Core Services
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              AWS offers{" "}
              <span className="font-semibold text-gray-900">
                generative AI capabilities
              </span>{" "}
              that can support businesses and their general operations. These
              capabilities span areas like
              <span className="font-semibold text-gray-900">
                {" "}
                text, language, object identification,
              </span>{" "}
              and{" "}
              <span className="font-semibold text-gray-900">
                software development.
              </span>
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-gray-50 mt-6 shadow-md p-6 md:p-8">
          {/* Intro */}
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Explore the AWS suite of tools offering specialized services for
            each of these functionalities.
          </p>

          {/* Services List */}
          <ul className="list-disc list-inside space-y-4 text-gray-800 ">
            <li className="text-lg">
              <span className="font-bold">Text and Data Processing:</span>{" "}
              Amazon Textract, Amazon Translate, and Amazon Comprehend excel in
              extracting and processing text and data.
            </li>
            <li className="text-lg">
              <span className="font-bold">Language Processing:</span> Amazon
              Lex, Amazon Transcribe, and Amazon Polly handle conversational and
              language-related inquiries.
            </li>
            <li className="text-lg">
              <span className="font-bold">Object and Scene Recognition:</span>{" "}
              Amazon Rekognition identifies objects, people, text, scenes, and
              activities in video footage.
            </li>
            <li className="text-lg">
              <span className="font-bold">Software Development:</span> Amazon
              CodeWhisperer, Amazon DevOps Guru, and Amazon CodeGuru assist in
              coding and DevOps tasks.
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto  p-4 bg-gray-100 2xl:bg-white">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-6 md:p-10 gap-6 mt-12">
          {/* Left Section - Text */}
          <div className="w-full md:w-1/2">
            {/* Header */}
            <div className="flex items-center mb-6">
              <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
                Specialized Services
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              AWS can also provide
              <span className="font-semibold text-gray-900 ml-1">
                generative AI capabilities
              </span>{" "}
              tailored for specific tasks, such as providing an
              <span className="font-semibold text-gray-900">
                {" "}
                enterprise search engine, assisting in marketing, managing
                information
              </span>{" "}
              for different industries, or even offering health-related
              services.
            </p>
          </div>

          {/* Right Section - Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Ai-Solutions/awsTextract.png"
              alt="Education"
              className="object-cover w-full h-auto rounded-lg shadow"
            />
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg shadow-md mt-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            For each of these avenues, There are AWS services can address their
            needs:
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>
              <span className="font-bold">Amazon Kendra:</span> Offers
              intelligent search engine functionalities for enterprises.
            </li>
            <li>
              <span className="font-bold">Amazon Personalize:</span> Employs
              machine learning to recommend improvements for your brand and
              marketing.
            </li>
            <li>
              <span className="font-bold">AWS HealthLake :</span> can be used to
              create data lakes that are compliant with health records standards
              such as HIPPA.
            </li>
            <p className="mt-4">
              We can also help you make use of these Amazon platforms:
            </p>
            <li>
              <span className="font-bold">
                Amazon Monitron, Amazon Lookout for Equipment, AWS Panorama, and
                Amazon Lookout for Vision
              </span>{" "}
              can manage industrial processes and procedures.{" "}
            </li>
            <li>
              <span className="font-bold">
                AWS HealthImaging, AWS HealthOmics, and AWS HealthScribe
              </span>{" "}
              can provide functionalities to support health-related businesses.{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h5 className="text-3xl font-bold text-gray-900 mb-6">
            Foundation Model
          </h5>
          <h6 className="text-xl font-semibold text-gray-700 mb-6">
            To integrate AWS and their suite of AI/ML tools, GlobalXperts
            employs foundation models (FMs) to design and empower our AI
            services.
          </h6>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Left Column */}
            <div className="md:w-1/2">
              <p className="text-gray-700 leading-relaxed">
                Foundation models are adaptable in developing ML models with the
                benefits of being more cost-effective and time efficient. Due to
                how adaptable they are, GlobalXperts can design AI/ML solutions
                that are well-suited for whatever requirements or use cases are
                demanded of us. The process of employing these FMs includes:
              </p>
            </div>
            {/* Right Column */}
            <div className="md:w-1/2">
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Customizing the FM as needed.</li>
                <li>Integrating the FM with AI services.</li>
                <li>Employing FM-powered AI services.</li>
                <li>Leveraging generative AI solutions.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 2xl:bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-gray-900">
              The Future of Technology
            </h2>
            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
              From the first commercially available computers to the phone’s
              ability to register one’s facial features—technology is forever
              evolving. With every new development, more of these technological
              advancements are being incorporated into our everyday lives.{" "}
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-10 flex flex-col lg:flex-row items-center gap-8">
            {/* Left Section - Text */}
            <div className="lg:w-1/2">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Artificial intelligence (AI)</strong> is but one
                example: a technology that possesses limitless possibilities so
                long as there is information to be sought. At GlobalXperts, we
                strive to employ such devices to support businesses seeking to
                improve their productivity.{" "}
                <span className="font-semibold text-gray-900">
                  GlobalXperts
                </span>
                , we strive to leverage AI to empower businesses and drive
                productivity improvements.
              </p>
            </div>

            {/* Right Section - Image */}
            <div className="lg:w-1/2">
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/aimlSolutions.webp"
                alt="AI and technology"
                className="w-full h-auto object-cover rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <Link
              to="/contact-us"
              className="bg-blueCustomColor text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-all duration-300"
            >
              Explore AI Solutions with Us
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 mb-8">
        <ContactCard />
      </div>
      <Footer />
    </>
  );
};

export default AIMLonAWS;
