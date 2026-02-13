import React from "react";
import Navbar from "../../Navbar";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaTools } from "react-icons/fa";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import { SiBento } from "react-icons/si";

const OmniBot = () => {
  return (
    <>
      <Navbar />
      <Helmet>
        <title> OmniBot - GlobalXperts</title>
        <meta name="description" content="OmniBot from GlobalXperts uses AWS SageMaker for GenAI-powered conversations and workflows - enhance customer support, streamline tasks and scale smarter." />
        <meta name="keywords" content="OmniBot GenAI, AWS-powered generative AI, customer support, automation, business intelligence, AI-powered chatbot, AI-driven automation, AI-powered analytics" />
        <link rel="canonical" href="https://globalxperts.net/solutions/aws-solutions/omnibot-genai" />
      </Helmet>

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                OmniBot{" "}
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
                Omnibot is a GenAI-driven interaction platform built by
                GlobalXperts using Amazon SageMaker. It can be used to provide
                assistance and insights for many parts of your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-white 2xl:bg-white   rounded-lg shadow-md p-6 py-4 max-w-7xl mx-auto mt-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/MOM/image+(9).png" // Replace with the actual image path
            alt="Boost outcomes"
            className="rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6 ">
          <h2 className="text-3xl font-bold text-gray-800">OmniBot</h2>
          <p className="mt-4 text-gray-600 mb-8">
            Imagine you are in a sci-fi movie, and you have an interactive AI
            that can assist you with whatever task you could conceive. Now
            imagine that you could build and customize an interactive AI for
            your company’s specific needs. With Omni-Bot, you can.
          </p>
        
          <a
            href="https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Omnibot+Brochure.pdf"
            download="omnibot.pdf"
            target="_blank"
            className=" px-6 py-3 bg-white text-blue-700 border border-blue-900 rounded-xl font-semibold hover:bg-blue-900 hover:text-white mt-12"          >
            DOWNLOAD BROCHURE
          </a>
        </div>
      </div>

      <div className="bg-white md:max-w-7xl md:mx-auto flex items-center justify-center p-0 mt-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-12  ">
          <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8   hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[400px]">
            <div className="flex flex-col items-center flex-grow">
              <div className="flex items-center justify-center bg-white rounded-md shadow-md w-16 h-16 text-green-600 text-3xl mb-4">
                <SiBento />
              </div>

              <h3 className="text-xl font-semibold text-gray-800">Benefits</h3>
              <ul className="mt-4 list-inside list-disc text-gray-600">
                <li>Increase productivity</li>
                <li>Gain customer insights</li>
                <li>
                  Provide conversational chatbots to employees and customers
                </li>
                <li>Suggest decisions based on a knowledge base</li>
                <li>And many more capabilities</li>
              </ul>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="bg-white 2xl:bg-gray-100 shadow-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[400px]">
            <div className="flex flex-col items-center flex-grow">
              <div className="flex items-center justify-center bg-white rounded-md shadow-md w-16 h-16 text-green-600 text-3xl mb-4">
                <FaTools />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
              Features
              </h3>
              <ul className="mt-4 list-inside list-disc text-gray-600 ">
                <li>Front-end using AWS Amplify</li>
                <li>Conversational AI interface using Amazon Lex</li>
                <li>QnA-Bot metrics and data storage using Amazon S3</li>
                <li>Extract insights from text with Amazon Comprehend</li>
                <li>
                  Large language model (LLM) and text generation using Amazon
                  SageMaker
                </li>
                <li>Saves queries with AWS Lambda</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white border-2 border-gray-600 rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-gray-800 text-center border-b-2 border-blue-500 pb-2">
            Features
          </h3>
          <div className="flex flex-col items-center mt-6">
            <h4 className="text-lg font-semibold text-gray-800 text-center">
              OmniBot has several features that make it the intelligent solution
              that it is.
            </h4>
            <ul className="mt-6 list-inside list-disc text-gray-600 space-y-2">
              <li>
                Conversational and/or graphical interface to help
                decision-making
              </li>
              <li>Enterprise knowledge management</li>
              <li>Customer sentiment-driven workflow</li>
              <li>Omni-channel communication</li>
              <li>GenAI capability on AWS</li>
              <li>Leverage AWS Chatbot</li>
            </ul>
            <p className="mt-6 text-gray-600 text-center leading-relaxed">
              Using AWS SageMaker for its machine learning capabilities, we can
              create quickly deployable platforms to meet these requirements and
              scale these platforms without boiling the ocean.
            </p>
          </div>
        </div>
      </div>

      {/* OmniBot Can Do Section */}
      <h3 className="text-xl font-semibold text-gray-800 text-center mt-16">
        What OmniBot Can Do
      </h3>
      <div className="bg-white p-6 max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center justify-center border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 text-center mt-2">
              Document Insights
            </h3>
            <ul className="mt-4 list-inside list-disc text-gray-600">
              <li>Check spelling or code syntax</li>
              <li>Classify documents</li>
              <li>Identify key phrases or topics</li>
              <li>
                Identify and remove personal identifiable information (PII)
              </li>
              <li>Provide sentiment analysis</li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center border-2 border-gray-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-800">Chatbot</h4>
            <ul className="mt-4 list-inside list-disc text-gray-600">
              <li>Engage in natural language conversations</li>
              <li>Provide an interactive customer support chatbot</li>
              <li>Provide a virtual assistant for employees</li>
              <li>Assist with decision-making based on insights</li>
              <li>Provide insights regarding business analyses</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Who Can Use OmniBot Section */}
     
      <div className="bg-white md:max-w-7xl md:mx-auto  items-centerrounded-md shadow-2xl justify-center p-0 mt-8 mb-4">
      <h3 className="text-xl font-semibold text-gray-800 text-center p-6">
        Who Can Use OmniBot?
      </h3>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mt-6">
          <div className="flex flex-col items-center justify-center  rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-800">
              Management Teams
            </h4>
            <ul className="mt-4 list-inside list-disc text-gray-600">
              <li>Measure customer churn rate</li>
              <li>Generate satisfaction scores</li>
              <li>Provide inventory updates</li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center  rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-800">Sales Teams</h4>
            <ul className="mt-4 list-inside list-disc text-gray-600">
              <li>Lead generation</li>
              <li>Propensity to buy model</li>
              <li>Personalization of marketing messages</li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center  rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-800">
              Customer Care
            </h4>
            <ul className="mt-4 list-inside list-disc text-gray-600">
              <li>Analyze negative and positive feedback</li>
              <li>Do the heavy lifting of text chat conversation</li>
            </ul>
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

export default OmniBot;
