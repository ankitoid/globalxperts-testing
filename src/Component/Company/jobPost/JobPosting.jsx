import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";


const JobPosting = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`/api/jobs/${jobId}`);
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  if (loading) {
    return <p>Loading job details...</p>;
  }

  if (!job) {
    return <p>Job not found!</p>;
  }

  return (
    <>
      <Navbar />
      <div className="p-10 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md">
          <h2 className="text-4xl font-bold mb-4">{job.title}</h2>
          <p className="text-gray-700 mb-2">{job.location}</p>
          <h3 className="text-2xl font-bold mb-4">Job Description</h3>
          <p className="text-gray-700 m b-4">{job.description}</p>

          <h3 className="text-2xl font-bold mb-4">Requirements</h3>
          <ul className="list-disc list-inside">
            {job.requirements.map((requirement, index) => (
              <li key={index} className="text-gray-700 mb-2">
                {requirement}
              </li>
            ))}
          </ul>

          <h3 className="text-2xl font-bold mb-4">Qualifications</h3>
          <ul className="list-disc list-inside">
            {job.qualifications.map((qualification, index) => (
              <li key={index} className="text-gray-700 mb-2">
                {qualification}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobPosting;
 
