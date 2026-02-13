import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const HeroSection = () => {
  const texts = [
    "Smart Deployment",
    "Cloud Migration",
    "Cyber Security",
    "SaaS Applications",
    "DevOps Automation",
    "Media Live Streaming",
    "Network Infrastructure",
    "Artificial Intelligence",
  ];

  // track which text is showing, and its opacity for fade
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const intervalId = setInterval(() => {
        setOpacity(0);
        setTimeout(() => {
          setCurrentTextIndex((i) => (i + 1) % texts.length);
          setOpacity(1);
        }, 600);
      }, 4000);
      return () => clearInterval(intervalId);
    }, 2000); // 2s delay after page load for LCP
    return () => clearTimeout(timeout);
  }, []);

  const MainBgVideoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Globalxperts Inc.",
    description:
      "Optimize your network with expert consulting — improving communication, collaboration, and workflow efficiency.",
    thumbnailUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/displayBg.webp", // Replace with actual thumbnail if available
    uploadDate: "2025-03-07",
    contentUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/displayBg.webp",
    embedUrl: "https://www.globalxperts.net/",
  };
  return (
    <>
      <Helmet>
       
        <title>GlobalXperts Inc.</title>
        <meta property="og:type" content="video.other" />
        <meta property="og:title" content="GlobalXperts Inc." />
        <meta
          property="og:description"
          content="Optimize your network with expert consulting."
        />
        <meta
          property="og:image"
          content="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/displayBg.webp"
        />
        <script type="application/ld+json">
          {JSON.stringify(MainBgVideoJsonLd)}
        </script>
      </Helmet>

      <div className="relative h-screen w-full overflow-hidden bg-fixed  transition-opacity duration-300 ease-in-out">
        {/* Background Image */}
        <img
          src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/displayBg.webp"
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="eager"
          fetchpriority="high"
        />

        {/* Overlay Content */}
        <div className="relative z-10 flex items-start justify-start h-full px-6 md:px-8  xl:pt-14 md:pt-20 pt-24">
          <div className="bg-opacity-70 p-2 md:p-5 w-full md:w-[80%] lg:w-[90%] xl:w-[70%] ">
            {/* Main Heading */}
            <h1 className="text-black font-figtree text-xl sm:text-3xl md:text-3xl lg:text-5xl font-bold mb-2">
              Discover Services and Solutions for
            </h1>

            {/* Animated Text */}
            <div className="border-2 border-greenCustomColor rounded-full px-6 py-2 inline-block bg-white bg-opacity-50 transition-opacity duration-700 ease-in-out">
              <p
                className="text-black font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl text-center font-figtree"
                style={{ opacity }}
              >
                {texts[currentTextIndex]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
