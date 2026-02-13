import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Img1 from "../Assets/ima1.png";
import Img2 from "../Assets/img1.png";
import Img3 from "../Assets/da.png";

const Slider3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      percentage: "200%",
      description:
        "Maximize Network Performance using AI-powered, scalable, and secure infrastructure solutions.",
      img: Img1,
    },
    {
      id: 2,
      percentage: "900%",
      description:
        "Leverage AI-driven Cloud Solutions for unparalleled agility, efficiency, and multi-cloud security.",
      img: Img2,
    },
    {
      id: 3,
      percentage: "200K+",
      description:
        "Revolutionize IT Operations with AI-enhanced 24/7 support and intelligent cost optimization strategies.",
      img: Img3,
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Slide changes every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" pl-44 pr-44 ">
      <h5 className="text-3xl md:text-5xl  font-bold text-center mb-8">
        Innovation
      </h5>
      <div className="flex flex-col md:flex-row justify-center items-start">
        {/* Left Side Slider */}
        <div className="md:w-full w-1/2 p-4">
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="relative bg-black rounded-lg overflow-hidden text-white">
                    <img
                      src={slide.img}
                      alt={`Slide ${slide.id}`}
                      className="w-[1250px] h-[300px] md:h-[455px] 2xl:h-[630px] object-contain"
                    />

                    <div className="absolute top-0 left-0 p-4">
                      <p className="text-lg md:text-xl ">{slide.description}</p>

                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Arrows */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between px-4">
              <button
                className="bg-white rounded-full p-2 shadow-md"
                onClick={handlePrev}
              >
                <FaArrowLeft className="text-black" />
              </button>
              <button
                className="bg-white rounded-full p-2 shadow-md"
                onClick={handleNext}
              >
                <FaArrowRight className="text-black" />
              </button>
            </div>
          </div>
          {/* Pagination */}
          <div className="text-center mt-4">
            <span>
              {currentSlide + 1}/{slides.length}
            </span>
          </div>
        </div>

        {/* Right Side Boxes */}
        <div className="w-full md:w-1/3 p-4">
          <div className="mb-4">
            <div className="bg-gray-100 shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">
                AI and Machine Learning
              </h3>
              <div className="border-2 border-blueCustomColor border-dotted   mb-2"></div>

              <p>
                We can integrate AI and machine learning into our solutions to
                provide you with the most powerful software innovation of our
                time.
              </p>
              <a
                href="/solutions/AI-ML-solutions"
                className="text-blue-500 hover:underline mt-2 block"
              >
                Get ahead →
              </a>
            </div>
          </div>
          <div className="mt-8">
            <div className="bg-gray-100 shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold">Data Analytics</h3>
              <div className="border-2 border-blueCustomColor border-dotted  mb-2"></div>
              <p>
                Hand-in-hand with AI is our data analytics solutions, which can
                provide powerful insights into the information that you employ.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider3;
