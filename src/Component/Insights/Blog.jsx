import React, { useRef } from "react";
import ContactCard from "../Contact/ContactCard";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Blog = () => {
  const contactRef = useRef(null); // Ref to contact card

  const handleContactUsClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const blogPosts = [
    {
      title:
        "GlobalXperts Soars to New Heights: Achieves AWS Select Partner Status!",
      description:
        "Raleigh, North Carolina – February 12, 2024 – We are thrilled to announce that GlobalXperts Inc. has officially achieved the AWS Select Partner status, marking a significant milestone in our journey to becoming a leading cloud solutions provider.",
      date: "February 13, 2024",
      link: "/AWS-select-partner-status",
    },
    {
      title: "GlobalXperts Awarded 8(a) STARS III GWAC",
      description:
        "New STARS GWAC has a $50 billion ceiling and a focus on emerging technologies. This award enables us to offer innovative IT services to federal agencies, driving growth and technological advancement.",
      date: "December 7, 2021",
      link: "/Awarded-8a-stars-III-GWAC",
    },
  ];

  return (
    <>
    <Helmet>
      <title> IT Strategy, Cloud & Managed Services Blog - GlobalXperts </title>
      <meta name="description" content="Explore the GlobalXperts blog for expert IT insights - cloud strategy, managed services tips, and infrastructure best practices to power your business." />
      <meta name="keywords" content="GlobalXperts Insights" />
        <link rel="canonical" href="https://globalxperts.net/insights/blog" />

    </Helmet>
      <Navbar />
      <div className="bg-blueCustomColor w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto flex flex-col items-center lg:flex-row justify-between px-6 lg:px-16">
            {/* Left Section: Title and Buttons */}
            <div className="w-full text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Blog
              </h2>

              <div className="px-20 md:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded-full w-full sm:w-auto"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Section: Description */}
            <div className="w-full text-center lg:text-right mt-10 lg:mt-28 order-3 lg:order-2">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed text-left">
                Discover the latest news and updates from GlobalXperts. Learn
                how we are revolutionizing the service provider industry with
                cutting-edge technologies and expert solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Post Section */}
      <div className="p-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest News</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
              style={{ minHeight: "350px" }} // Optional: Adjust based on your desired card height
            >
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  {post.title}
                </h4>
                <p className="mt-2 text-gray-600">{post.description}</p>
                <p className="mt-4 text-gray-500 text-sm mb-4">{post.date}</p>
              </div>
              <div className="mt-auto flex justify-center">
                <a
                  href={post.link}
                  className="bg-greenCustomColor2 hover:bg-greenCustomColor text-white font-bold py-3 px-12 rounded focus:outline-none focus:shadow-outline flex justify-center items-center"
                >
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Case Studies Section */}
      <div className="p-8 max-w-7xl mx-auto bg-white mt-12 rounded-lg shadow-lg">
        <h4 className="text-2xl font-semibold text-gray-900 mb-4">
          Latest Case Studies
        </h4>
        <div className="border-t-4 border-blue-500 py-6">
          <p className="text-lg text-gray-600">
            Explore our recent case studies, where we helped companies optimize
            their infrastructure and operations through innovative IT solutions
            and cloud services.
          </p>
          <div className="mt-6 ">
            <Link
              to="/Insights/CaseStudies"
              className="mt-6 px-6 py-2 bg-greenCustomColor2 text-white font-semibold rounded-lg hover:bg-blueCustomColor hover:text-white transition-colors duration-300 hover:border hover:border-customblueColor shadow-md"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="p-8 max-w-7xl mx-auto bg-white mt-12 rounded-lg">
        <h4 className="text-2xl font-semibold text-gray-900 mb-6">
          Why Choose GlobalXperts?
        </h4>
        <p className="text-lg text-gray-600 mb-6">
          At GlobalXperts, we specialize in providing tailored IT solutions to
          help businesses thrive in a competitive market. Our expertise spans
          cloud infrastructure, storage optimization, and customer-centric
          solutions like Amazon Connect.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-2">
            Custom cloud infrastructure design and implementation
          </li>
          <li className="mb-2">
            Advanced storage solutions with AWS expertise
          </li>
          <li className="mb-2">
            Seamless integration of CRM and contact center technologies
          </li>
          <li className="mb-2">
            Proven track record of success with major government contracts
          </li>
        </ul>
        <div className="mt-6">
          <Link
           to="/solutions/cloud/aws"
            className="px-6 py-2 bg-greenCustomColor2 text-white font-semibold rounded-lg hover:bg-blueCustomColor hover:text-white transition-colors duration-300 hover:border hover:border-customblueColor shadow-md"
          >
            Learn More About Our Services
          </Link>
        </div>
      </div>

      {/* Contact Card Section */}
      <div
        id="contact-card"
        ref={contactRef}
        className="bg-white py-12 px-4 sm:px-6 lg:px-8 flex justify-center"
      >
        <ContactCard />
      </div>

      <Footer />
    </>
  );
};

export default Blog;
