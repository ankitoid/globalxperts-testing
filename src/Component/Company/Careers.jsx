// import React, { useState } from "react";
// import Footer from "../Footer";
// import Navbar from "../Navbar";
// import ContactCard from "../Contact/ContactCard";
// import { Helmet } from "react-helmet";
// import axios from "axios";
// import CandidateForm from "./Careers-Pages/CandidateForm";
// import CareersPage from "./Careers-Pages/careers/CareersPage";
// const Careers = () => {
//   // State to store the jobs
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Function to handle job search
//   const handleSearchJobs = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Set loading to true while fetching data

//     try {
//       const response = await fetch("/api/jobs"); // Assuming your backend API endpoint is /api/jobs
//       const data = await response.json();
//       setJobs(data); // Update the jobs state with fetched data
//     } catch (error) {
//       console.error("Error fetching jobs:", error);
//     }

//     setLoading(false); // Stop loading after fetching
//   };

//   const [formData, setFormData] = useState({
//     location: "",
//     fullName: "",
//     email: "",
//     phone: "",
//     position: "",
//     message: "",
//     resume: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     Object.entries(formData).forEach(([key, val]) => data.append(key, val));

//     try {
//       await axios.post("http://localhost:5000/api/career", data);
//       alert("✅ Your application has been submitted!");
//     } catch (error) {
//       alert("❌ Submission failed. Please try again.");
//     }
//   };

//   const CarrerVideoJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "VideoObject",
//     name: "GX - Careers Join Our Team",
//     description:
//       "At GlobalXperts, we are dedicated to fostering a culture of innovation, collaboration, and excellence. As a leading provider of IT solutions, our team is made up of industry experts who are passionate about technology and committed to delivering value to our clients.",
//     thumbnailUrl:
//       "https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/careers-thumbnail.jpg", // Replace with actual thumbnail if available
//     uploadDate: "2025-03-07",
//     contentUrl:
//       "https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/careers.mp4",
//     embedUrl: "https://www.globalxperts.net/Careers",
//   };
//   return (
//     <>
//       <Helmet>
//         <title>Careers - GlobalXperts</title>
//         <meta name="description" content="Join GlobalXperts in Raleigh: grow your IT career with managed services, cloud solutions and a dynamic team delivering enterprise-grade support across the USA. " />
//         <script type="application/ld+json">
//           {JSON.stringify(CarrerVideoJsonLd)}
//         </script>
//       </Helmet>

//       <Navbar />
//       {/* Main Section */}
//       <div className="bg-blueCustomColor p-10 ">
//         <div className="bg-gray-900 text-white py-16 mt-10 px-6 lg:px-12 rounded-md">
//           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
//             {/* Text Section */}
//             <div className="text-center lg:text-left lg:w-1/2 lg:pr-8 space-y-6">
//               <h2 className="text-3xl font-bold sm:text-4xl">Join Our Team</h2>
//               <p className="text-xl text-gray-300">
//                 At GlobalXperts, we are dedicated to fostering a culture of
//                 innovation, collaboration, and excellence. As a leading provider
//                 of IT solutions, our team is made up of industry experts who are
//                 passionate about technology and committed to delivering value to
//                 our clients.
//               </p>
//               <p className="text-xl text-gray-300">
//                 Explore exciting career opportunities with us and be part of a
//                 team that is shaping the future of IT services. From technical
//                 roles in cloud computing, network security, and DevOps to
//                 positions in project management and customer support, we offer a
//                 range of opportunities that cater to diverse skills and
//                 aspirations.
//               </p>
//             </div>

//             {/* Video Section */}
//             <div className="relative mt-12 lg:mt-0 lg:w-1/2">
//               <video
//                 className="w-full rounded-lg shadow-lg"
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/careers.mp4"
//                 alt="Career at GlobalXperts"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Job Search Section */}
//       <div className="flex flex-col lg:flex-row items-center justify-between bg-blueCustomColor text-white p-10">
//         {/* Right Section - Image */}
//         <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
//           <div className="relative w-72 h-72 md:w-96 md:h-96 bg-white rounded-full overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
//             <img
//               src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/careers1.jpg"
//               className="w-full h-full object-cover"
//               alt="Career"
//             />
//           </div>
//         </div>

//         {/* Form Section */}
//         <div className="w-full mb-12 lg:w-1/2 bg-white shadow-lg rounded-lg p-12 md:p-6">
//           <h1 className="text-gray-700 text-3xl md:text-4xl font-bold mb-6">
//             Explore Job Opportunities 🚀
//           </h1>
//           <p className="text-gray-600 text-lg mb-6">
//             Browse the latest job postings on JobDiva and take the next step in
//             your career. Find job openings tailored to your skills and
//             experience.
//           </p>
//           <a
//             href="https://www2.jobdiva.com/portal/?a=i4jdnwdyd80lt06w8peyrz9zo9ol8u0349q4xvd2oead2i0g1ugaoobl01yny7if&compid=0#/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-center bg-blue-800 text-white text-center py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-900 transition transform  shadow-md"
//           >
//             <span className="mr-2">💼</span> View Jobs on JobDiva
//           </a>

//           {/* Help Section */}
//           <div className="mt-6 text-center">
//             <p className="text-gray-600 text-sm">
//               Need Help? Contact our recruitment team.
//             </p>
//             <a
//               href="mailto:careers@globalxperts.net"
//               className="text-blue-500 font-semibold hover:underline"
//             >
//               careers@globalxperts.net
//             </a>
//           </div>
//         </div>
//       </div>


//       <div className="min-h-screen">
//         <div className="">
//           {/* <h2 className="text-3xl font-bold text-center text-blue-700 mt-4">
//             Join Our Team
//           </h2> */}

//           {/* <CareersPage/>     */}

//           {/* If Noida selected, show Google Form CTA */}
//           {formData.location === "Noida, India" ? (
//             <div className="text-center mt-10">
//               <p className="text-gray-700 text-lg mb-4">
//                 For opportunities in <strong>Noida, India</strong>, please apply
//                 via our official Google Form.
//               </p>
//               <a
//                 href="https://forms.gle/nt6rNs4mPBNhS8kY6"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
//               >
//                 Fill Google Form
//               </a>
//             </div>
//           ) : formData.location === "USA" ? (
//            <div className="text-center mt-10">
//               <p className="text-gray-700 text-lg mb-4">
//                 For opportunities in <strong>USA</strong>, please apply
//                 via our Job Diva.
//               </p>
//               <a
//                 href="https://www2.jobdiva.com/portal/?a=i4jdnwdyd80lt06w8peyrz9zo9ol8u0349q4xvd2oead2i0g1ugaoobl01yny7if&compid=0#"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
//               >
//                 Apply via Job Diva
//               </a>
//             </div>
//           ) : null}
//         </div>
//       </div>
//       <div className="mt-8 p-4">
//         <ContactCard />
//       </div>
//       <div className="mt-8">
//         <Footer />
//       </div>{" "}
//     </>
//   );
// };

// export default Careers;

import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ContactCard from "../Contact/ContactCard";
import { Helmet } from "react-helmet";
import axios from "axios";
const Careers = () => {
  // State to store the jobs
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to handle job search
  const handleSearchJobs = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true while fetching data

    try {
      const response = await fetch("/api/jobs"); // Assuming your backend API endpoint is /api/jobs
      const data = await response.json();
      setJobs(data); // Update the jobs state with fetched data
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }

    setLoading(false); // Stop loading after fetching
  };

  const [formData, setFormData] = useState({
    location: "",
    fullName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => data.append(key, val));

    try {
      await axios.post("http://localhost:5000/api/career", data);
      alert("✅ Your application has been submitted!");
    } catch (error) {
      alert("❌ Submission failed. Please try again.");
    }
  };

  const CarrerVideoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "GX - Careers Join Our Team",
    description:
      "At GlobalXperts, we are dedicated to fostering a culture of innovation, collaboration, and excellence. As a leading provider of IT solutions, our team is made up of industry experts who are passionate about technology and committed to delivering value to our clients.",
    thumbnailUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/careers-thumbnail.jpg", // Replace with actual thumbnail if available
    uploadDate: "2025-03-07",
    contentUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/careers.mp4",
    embedUrl: "https://www.globalxperts.net/Careers",
  };
  return (
    <>
      <Helmet>
        <title>Careers - GlobalXperts</title>
        <meta name="description" content="Join GlobalXperts in Raleigh: grow your IT career with managed services, cloud solutions and a dynamic team delivering enterprise-grade support across the USA. " />
        <script type="application/ld+json">
          {JSON.stringify(CarrerVideoJsonLd)}
        </script>
      </Helmet>
      <Navbar />
      {/* Main Section */}
      <div className="bg-blueCustomColor p-10 ">
        <div className="bg-gray-900 text-white py-16 mt-10 px-6 lg:px-12 rounded-md">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
            {/* Text Section */}
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-8 space-y-6">
              <h2 className="text-3xl font-bold sm:text-4xl">Join Our Team</h2>
              <p className="text-xl text-gray-300">
                At GlobalXperts, we are dedicated to fostering a culture of
                innovation, collaboration, and excellence. As a leading provider
                of IT solutions, our team is made up of industry experts who are
                passionate about technology and committed to delivering value to
                our clients.
              </p>
              <p className="text-xl text-gray-300">
                Explore exciting career opportunities with us and be part of a
                team that is shaping the future of IT services. From technical
                roles in cloud computing, network security, and DevOps to
                positions in project management and customer support, we offer a
                range of opportunities that cater to diverse skills and
                aspirations.
              </p>
            </div>

            {/* Video Section */}
            <div className="relative mt-12 lg:mt-0 lg:w-1/2">
              <video
                className="w-full rounded-lg shadow-lg"
                autoPlay
                loop
                muted
                playsInline
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/careers.mp4"
                alt="Career at GlobalXperts"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Job Search Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-blueCustomColor text-white p-10">
        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
          <div className="relative w-72 h-72 md:w-96 md:h-96 bg-white rounded-full overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
            <img
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/careers1.jpg"
              className="w-full h-full object-cover"
              alt="Career"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full mb-12 lg:w-1/2 bg-white shadow-lg rounded-lg p-12 md:p-6">
          <h1 className="text-gray-700 text-3xl md:text-4xl font-bold mb-6">
            Explore Job Opportunities 🚀
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Browse the latest job postings on JobDiva and take the next step in
            your career. Find job openings tailored to your skills and
            experience.
          </p>
          <a
            href="https://www2.jobdiva.com/portal/?a=i4jdnwdyd80lt06w8peyrz9zo9ol8u0349q4xvd2oead2i0g1ugaoobl01yny7if&compid=0#/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-blue-800 text-white text-center py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-900 transition transform  shadow-md"
          >
            <span className="mr-2">💼</span> View Jobs on JobDiva
          </a>

          {/* Help Section */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Need Help? Contact our recruitment team.
            </p>
            <a
              href="mailto:careers@globalxperts.net"
              className="text-blue-500 font-semibold hover:underline"
            >
              careers@globalxperts.net
            </a>
          </div>
        </div>
      </div>
      {/* Job Results Section */}
      {/* <div className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Job Openings</h2>

        {loading ? (
          <p>Loading jobs...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
              >
                <img
                  src={job.image}
                  alt={job.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p>{job.location}</p>
                <p className="text-gray-700 mt-2">{job.description}</p>
              </div>
            ))}
          </div>
        )}
      </div> */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Join Our Team
          </h2>

          {/* Location Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Location
            </label>
            <select
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Location</option>
              <option value="USA">USA</option>
              <option value="Noida, India">Noida, India</option>
            </select>
          </div>

          {/* If Noida selected, show Google Form CTA */}
          {formData.location === "Noida, India" ? (
            <div className="text-center mt-10">
              <p className="text-gray-700 text-lg mb-4">
                For opportunities in <strong>Noida, India</strong>, please apply
                via our official Google Form.
              </p>
              <a
                href="https://forms.gle/nt6rNs4mPBNhS8kY6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Fill Google Form
              </a>
            </div>
          ) : formData.location === "USA" ? (
           <div className="text-center mt-10">
              <p className="text-gray-700 text-lg mb-4">
                For opportunities in <strong>USA</strong>, please apply
                via our Job Diva.
              </p>
              <a
                href="https://www2.jobdiva.com/portal/?a=i4jdnwdyd80lt06w8peyrz9zo9ol8u0349q4xvd2oead2i0g1ugaoobl01yny7if&compid=0#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Apply via Job Diva
              </a>
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-8 p-4">
        <ContactCard />
      </div>
      <div className="mt-8">
        <Footer />
      </div>{" "}
    </>
  );
};

export default Careers;