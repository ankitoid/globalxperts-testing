import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaBolt,
  FaMoneyBill,
  FaHeartbeat,
  FaShoppingBag,
  FaFilm,
  FaLandmark,
  FaCogs,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlane } from 'react-icons/fa';

const industries = [
  { name: "Aviation", icon: <FaPlane />, path: "/industries/aviation" },
  { name: "Education", icon: <FaBook />, path: "/industries/education" },
  { name: "Energy", icon: <FaBolt />, path: "/industries/energy" },
  { name: "Financial", icon: <FaMoneyBill />, path: "/industries/financial" },
  { name: "Healthcare", icon: <FaHeartbeat />, path: "/industries/healthcare" },
  { name: "Retail", icon: <FaShoppingBag />, path: "/industries/retail" },
  {
    name: "Media & Entertainment",
    icon: <FaFilm />,
    path: "/industries/media-entertainment",
  },
  { name: "Government", icon: <FaLandmark />, path: "/industries/government" },
  {
    name: "Service Provider",
    icon: <FaCogs />,
    path: "/industries/service-provider",
  },
];

const TeamGrid = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="">
      <div className="md:bg-white 2xl:bg-white text-gray-700 flex flex-col items-center justify-center py-10">
        <header className="text-center px-4 mb-8">
          <h5 className="text-3xl text-gray-900 md:text-5xl font-bold mb-6">
            Industry-Specific Solutions
          </h5>
          <p className="text-lg md:text-xl text-gray-600 max-w-5xl">
            Explore tailored solutions designed for various industries, helping
            businesses thrive with cutting-edge technology.
          </p>
        </header>

        {/* Industries Slider */}
        <div className="mx-auto w-full max-w-6xl">
          <Slider ref={setSliderRef} {...settings} className="w-full">
            {industries.map((industry, index) => (
              <div key={index} className="flex justify-center md:px-9 px-20">
                <Link
                  to={industry.path}
                  className="relative p-10 w-56 h-52 rounded-lg shadow-lg flex flex-col items-center justify-center bg-blueCustomColor text-white transition-all duration-500 ease-in-out overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <span className="text-5xl mb-3 relative z-10">
                    {industry.icon}
                  </span>
                  <p className="text-lg font-semibold text-gray-200 relative z-10">
                    {industry.name}
                  </p>
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        {/* Learn More Button */}
        
      </div>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10  text-black flex items-center justify-center   sm:right-4 md:right-0 lg:right-0"
      onClick={onClick}
    >
      ❯
    </button>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10  text-black rounded-full flex items-center justify-center   sm:left-4 md:left-0 lg:left-0"
      onClick={onClick}
      style={{ zIndex: 10 }} 

    >
      ❮
    </button>
  );
};

export default TeamGrid;
