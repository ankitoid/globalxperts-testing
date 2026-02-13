import React, { useState, useEffect, useRef } from "react";

const useCountUp = (end, duration, startCounting) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return; 

    let start = 0;
    const incrementTime = Math.abs(Math.floor(duration / end));
    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(counter);
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, [end, duration, startCounting]);

  return count;
};

function CompaniesLogos() {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  return (
    <div className="bg-gray-100  flex items-center justify-center p-4">
    <div
      className="rounded-lg p-8 w-full max-w-7xl flex flex-col lg:flex-row gap-8"
    >
      <div className="relative flex flex-col items-center w-full lg:w-1/2 lg:pr-12">
        <div className="relative w-60 h-60 lg:w-96 lg:h-96 rounded-full overflow-hidden lg:mr-16 lg:mt-10">
          <img
            src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/glo2.avif"
            alt="Intelligent Engineering and Technology Solutions"
            className="w-full h-full object-cover"
          />
          <h2 className="absolute inset-0 flex items-center justify-center text-center text-xl font-bold text-white bg-opacity-75 rounded-full p-2">
            INTELLIGENT ENGINEERING AND
            <br />
            TECHNOLOGY SOLUTIONS
          </h2>
        </div>
      </div>
  
      <div className="sm:w-full lg:w-full p-4 lg:p-8   ">
        <div className="text-gray-600 mb-8">
          <h3 className="text-3xl md:text-5xl  font-semibold text-black mb-4">
            What We Do
          </h3>
          <p className=" lg:text-lg leading-relaxed mb-4">
            At GlobalXperts, we excel in providing advanced engineering and technology solutions that harness the power of Artificial Intelligence (AI) and Machine Learning (ML). Our mission is to drive digital transformation and innovation, building a digital, autonomous, and sustainable future. We proudly partner with over 300 global customers, including 40% of the top 100 innovators.
          </p>
          <p className="text-base lg:text-lg leading-relaxed">
            Our commitment extends beyond technology. We are dedicated to fostering a culturally inclusive environment, promoting social responsibility, and prioritizing environmental sustainability. Together with our stakeholders, we are shaping a brighter tomorrow through cutting-edge development and groundbreaking technology.
          </p>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="rounded-lg p-6 text-center bg-greenCustomColor2">
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              {customerCount}+
            </h3>
            <p className="text-white mt-2">Customers</p>
          </div>
          <div className="rounded-lg p-6 text-center bg-greenCustomColor2">
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              {countriesCount}
            </h3>
            <p className="text-white mt-2">Countries</p>
          </div>
          <div className="rounded-lg p-6 text-center bg-greenCustomColor2">
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              {associatesCount}+
            </h3>
            <p className="text-white mt-2">Associates</p>
          </div>
        </div> */}
      </div>
    </div>
  </div>
  
  );
}

export default CompaniesLogos;
