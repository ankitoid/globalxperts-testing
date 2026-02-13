import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import SliderSection from "./SliderSection";
import Slider2 from "./Slider2";
import TeamGrid from "./TeamGrid";
import FAQWithImpactFilm from "./FAQSection";
import Footer from "./Footer";
import CompaniesLogos from "./CompaniesLogos";
import ContactUs from "./ContactUs";
import { Link } from "react-router-dom";
import Partners from "./Partners";
import Trial from "./Trial";
import GoToTopButton from "./Contact/GoToTopButton";

function Home() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleMouseEnter = () => {
    setIsContactFormOpen(true);
  };

  const handleMouseLeave = () => {
    setIsContactFormOpen(false);
  };

  return (
    <>
      {showNavbar && <Navbar />}
      <div className="w-full  overflow-x-hidden">
        <HeroSection />
        <Slider2 />
        <SliderSection />

        <div className="relative overflow-hidden w-full h-20 bg-white mt-14  max-w-7xl mx-auto  ">
          <div className="absolute flex whitespace-nowrap animate-slide">
            <div className="flex items-center space-x-4 gap-10 mt-2">
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/awsi.svg"
                alt="Logo"
                // className="h-12"
                width="80"
                height="48"
              />
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/google1.png"
                alt="Logo"
                // className="h-12"
                width="62"
                height="48"
              />
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/azure.png"
                alt="Logo"
                // className="h-12"
                width="237"
                height="48"
              />
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/git.png"
                alt="Logo"
                // className="h-12"
                width="130"
                height="48"
              />
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/jen.png"
                alt="Logo"
                //className="h-12"
                width="149"
                height="48"
              />
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/docker.png"
                alt="Logo"
                //className="h-12"
                width="88"
                height="40"
              />
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/kub.png"
                alt="Logo"
                //  className="h-12"
                width="85"
                height="48"
              />
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/cisco.jpg"
                alt="Logo"
                // className="h-12"
                width="85"
                height="48"
              />
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/aris.webp"
                alt="Logo"
                // className="h-12 w-32"
                width="96"
                height="48"
              />
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/mongo.png"
                alt="Logo"
                width="142"
                height="52"
              />
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/ai.jpg"
                alt="Logo"
                // className="h-12"
                width="60"
                height="48"
              />
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/openai.png"
                alt="Logo"
                // className="h-12"
                width="68"
                height="48"
              />
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/nodeIcon.png"
                alt="Logo"
                // className="h-12"
                width="69"
                height="48"
              />
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/reactIcon.png"
                alt="Logo"
                // className="h-12"
                width="60"
                height="48"
              />
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/expressjsIcon.jpg"
                alt="Logo"
                // className="h-12"
                width="100"
                height="48"
              />
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/Technologies/terraform.png"
                alt="Logo"
                // className="h-12"
                width="60"
                height="48"
              />
            </div>
          </div>
        </div>

        <FAQWithImpactFilm />

        <Trial />

        <TeamGrid />

        <Partners />

        <div className="w-full bg-blueCustomColor p-6 md:p-10 py-10 md:py-16 ">
          <div className="md:max-w-7xl md:mx-auto 2xl:w-full flex flex-col md:flex-row items-center md:justify-between ">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h5 className="text-white text-4xl md:text-4xl  font-semibold font-sans mb-4">
                Join our team of experts
              </h5>
              <p className="text-white text-base md:text-lg font-semibold mb-6">
                If you have a restless curiosity and a drive for ingenuity, join
                our team and help shape the industry of IT.
                <br /> We're redefining digital transformation and work culture.
              </p>
              <Link
                to="/careers"
                className="bg-white text-black mt-10 font-bold hover:bg-green-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-full px-4 py-2 transition duration-200 ease-in-out"
              >
                Explore Open Roles
              </Link>
            </div>
            <div className="flex flex-col md:flex-row justify-center text-center w-full items-center mt-10 md:mt-0">
              <div className="flex flex-col items-center mb-5 md:mb-0 md:mr-5">
                <div className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden mb-4">
                  <img
                    src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/AIML.png"
                    alt="AI/ML Service"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden">
                  <img
                    src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/img2.png"
                    alt="Profile 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center mb-5 md:mb-0 md:ml-5">
                <div className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden mb-4">
                  <img
                    src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/img3.jfif"
                    alt="Profile 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden">
                  <img
                    src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/meetImage.webp"
                    alt="Profile 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <ContactTab
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        /> */}
        <CompaniesLogos />

        <ContactUs />
        <Footer />
        <GoToTopButton />
      </div>
    </>
  );
}

export default Home;
