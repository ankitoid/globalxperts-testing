import React from "react";
import AboutGlobalXperts from "./pages/AboutGlobalXperts";
import GCCGrowthDrivers from "./pages/GCCGrowthDrivers";
import GCC2025Trends from "./pages/GCC2025Trends";
import GlobalXpertsProvides from "./pages/GlobalXpertsProvides";
import GCCSetupSection from "./pages/GCCSetupSection";
import GCCSection from "./pages/GCCSection";
import RegulatoryAndTalentSection from "./pages/RegulatoryAndTalentSection";
import DigitalTechAndTransform from "./pages/DigitalTechAndTransform";
import WhyGlobalXperts from "./pages/WhyGlobalXperts";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaConnectdevelop } from "react-icons/fa";
import { GiClick } from 'react-icons/gi';
const GCCservices = () => {
  return (
    <>
      <Navbar />
      <Helmet>
        <title>Global Capability Centers (GCCs)</title>
          <link rel="canonical" href="https://globalxperts.net/service/gcc-services" />

      </Helmet>
      <div className="min-h-screen mt-8 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 flex items-center justify-center px-6 py-12">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-3 animate-fade-in">
                <span className="text-xs font-medium bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 px-4 py-2 rounded-full border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                  GCC Strategy • Build • Transform
                </span>
                <span className="text-xs font-medium bg-gradient-to-r from-indigo-100 to-indigo-50 text-indigo-700 px-4 py-2 rounded-full border border-indigo-200 shadow-sm hover:shadow-md transition-shadow">
                  India, GCCs, Digital
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Future-Ready</span>
                <br />Global Capability Centers
              </h1>

              {/* Subheading */}
              <div className="flex items-center gap-3 text-sm md:text-base font-semibold text-gray-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span>Driving Innovation</span>
                <span className="text-gray-400">•</span>
                <span>Efficiency</span>
                <span className="text-gray-400">•</span>
                <span>Digital Transformation</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                Partner with GCC specialists who blend <span className="font-semibold text-gray-800">India advantage</span>, regulatory confidence,
                and deep technology expertise to design, build, and transform your global
                capability center.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600 mt-1">GCCs in India</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">1.5M+</div>
                  <div className="text-sm text-gray-600 mt-1">Professionals</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">$40B+</div>
                  <div className="text-sm text-gray-600 mt-1">Industry Value</div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link 
                 to="/contact-us"
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
                  Connect to Build Your GCC
                  <GiClick className="group-hover:scale-110 transition-transform" />
                </Link>

                {/* <button className="bg-white text-gray-700 px-8 py-3.5 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 shadow-sm hover:shadow-md transition-all duration-200">
                  Download Brochure
                </button> */}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end mb-20">
              <div className="relative group">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>

                {/* Video container */}
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                  <video
                    src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Services/gcc-bg-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-xl object-cover w-full h-[420px] lg:h-[460px]"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>

                {/* Floating badge */}
                {/* <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      ✓
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Trusted Partner</div>
                      <div className="text-xs text-gray-500">ISO Certified</div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/*  */}
      <AboutGlobalXperts />
      {/* <WhyGCCsMatter/> */}
      <GCCSection />
      <GCCGrowthDrivers />
      <GCC2025Trends />
      <GlobalXpertsProvides />
      <GCCSetupSection />
      {/* <RegulatoryAndTalentSection />
      <DigitalTechAndTransform />
      <WhyGlobalXperts /> */}

      <Footer />
    </>
  );
};

export default GCCservices;
