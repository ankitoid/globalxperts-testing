import React, { useState, useEffect } from "react";
import Img3 from "../Assets/da.png";
import Img2 from "../Assets/img1.png";
import {Link} from "react-router-dom"
const slides = [
  {
    image: Img3,
    title: "AI and Machine Learning",
    description:
      "We can integrate AI and machine learning into our solutions to provide you with the most powerful software innovation of our time.",
    showButton: true,
  },
  {
    image: Img2,
    title: "Data Analytics",
    description:
      "Hand-in-hand with AI is our data analytics solutions, which can provide powerful insights into the information that you employ.",
    showButton: false,
  },
];

const Trial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Reset transition for smooth looping
  useEffect(() => {
    if (currentSlide === totalSlides) {
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentSlide(0);
      }, 1000);
    } else {
      setIsTransitioning(true);
    }
  }, [currentSlide, totalSlides]);

  return (
    <div className="flex items-center justify-center bg-white relative py-4">
      <div className="relative w-[90%] max-w-7xl overflow-hidden">
        {/* Slideshow Container */}
        <div
          className="flex transition-transform"
          style={{
            transform: `translateX(-${(currentSlide % totalSlides) * 100}%)`,
            transition: isTransitioning ? "transform 1s ease-in-out" : "none",
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 min-w-full">
              {/* Image Section */}
              <div className="relative h-[40vh] md:h-[70vh] overflow-hidden">
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-center p-6 md:p-12 bg-white">
                <span className="uppercase text-xs text-gray-500 tracking-widest">
                  Innovation
                </span>
                <h5 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
                  {slide.title}
                </h5>
                <p className="text-gray-600 mt-3 text-base md:text-lg leading-relaxed">
                  {slide.description}
                </p>
                {slide.showButton && (
                  <Link to="/solutions/ai-ml-solutions"
                   className="mt-5 px-5 py-2 border border-blue-800 hover:text-white font-semibold rounded-lg hover:bg-cyan-500 text-black transition duration-300">
                  Get ahead →
                </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trial;
