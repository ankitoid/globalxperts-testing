import ServicesSection from "./Gx connect/ServicesSection";
import ThreeTierSolution from "./Gx connect/ThreeTierSolution";
import GXPartnersNew from "./Gx connect/GXPartnersNew";
import Footer from "../Footer";
import Navbar from "../Navbar";
import FloatingDownloadSlider from "./Gx connect/FloatingDownloadSlider";
import { Link } from "react-router-dom";
import AvatarCard from "./Gx connect/AvatarCard";
import { Helmet } from "react-helmet";

export default function CollaborationTechnologies() {
  const sampleAvatars = [
    {
      name: "97% CSAT Score",
      desc: "Customer Satisfaction",
      imageUrl:
        "https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg",
    },
    {
      name: "Omnibot Live",
      desc: "Automated Response Enabled",
      size: 72,
      imageUrl:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud/omnibot.jpg",
    },
    {
      name: "Call Analytics",
      desc: "",
      badge: "chart",
      imageUrl:
        "https://images.pexels.com/photos/7567553/pexels-photo-7567553.jpeg",
    },
    {
      name: "47 Sec",
      desc: "Response Time",
      badge: "timer",
      imageUrl:
        "https://images.pexels.com/photos/7681985/pexels-photo-7681985.jpeg",
    },
  ];
  return (
    <>
     <Helmet>
        <title> Collaboration Technologies - GlobalXperts</title>
        <meta name="description" content="GlobalXperts empowers US businesses with collaboration technologies—secure, cloud-enabled tools for seamless teamwork, chat, video & unified communication." />
        <meta name="author" content="GlobalXperts" />
        <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://globalxperts.net/solutions/collaboration-technologies" />

      </Helmet>
      <Navbar />

      {/* root background area - decorative SVG has pointer-events-none */}
      <div className="relative min-h-screen bg-gradient-to-b from-[#052A5B] via-[#07224b] to-[#03183a] text-white overflow-hidden mt-4">
        {/* Decorative background lines and circles */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute left-0 top-0 w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1440 600"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#06345b" />
                <stop offset="100%" stopColor="#03204a" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#g1)" />
            {/* soft diagonal lines - keep pointer events off */}
            <g opacity="0.04" pointerEvents="none">
              <path
                d="M0 120 C 400 40, 800 200, 1440 80"
                stroke="#7ee3d7"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M0 260 C 400 180, 800 340, 1440 240"
                stroke="#8b5cf6"
                strokeWidth="3"
                fill="none"
              />
            </g>
          </svg>
        </div>

        {/* content with higher stacking context */}
        <div className="relative z-10 container mx-auto px-6 lg:px-20 py-24 flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center leading-tight max-w-4xl">
            Transform customer engagement through smart automation
          </h1>
          <p className="mt-6 text-center text-lg max-w-2xl text-slate-200">
            Leverage GX’s AI-driven solutions to optimize every stage of the
            customer journey.
          </p>

          <div>
            <div className="mt-10 flex items-center gap-4">
              {/* Brochure: button uses window.open (reliable), plus console.log for quick debug */}
              <button
                onClick={() => {
                  console.log("Brochure clicked");
                  window.open(
                    "https://main-website-brochures1.s3.ap-south-1.amazonaws.com/Customer%20Connect%20Brochure.pdf",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="bg-teal-400 cursor-pointer text-slate-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl transition z-50 relative"
                aria-label="Open brochure"
                type="button"
              >
                Brochure
              </button>

              {/* Contact: plain anchor ensures navigation works even outside Router.
                  Add console log for debugging and high z-index */}
              <a
                href="/contact-us"
                onClick={() => console.log("Contact clicked (anchor)")}
                className="border border-slate-400 cursor-pointer px-6 py-3 rounded-lg hover:bg-white/5 relative z-50"
              >
                Contact us
              </a>
            </div>
          </div>

          {/* Avatars with mini cards (left & right) */}
          <div className="mt-[-60px] w-full relative">
            <div className="absolute -left-8 top-0 flex flex-col gap-12 pointer-events-auto">
              <div style={{ animation: "floaty 4s ease-in-out infinite" }}>
                <AvatarCard {...sampleAvatars[0]} />
              </div>
              <div style={{ animation: "floaty 4.2s ease-in-out infinite" }}>
                <AvatarCard {...sampleAvatars[1]} />
              </div>
            </div>

            <div className="absolute right-8 top-12 flex flex-col gap-12 pointer-events-auto">
              <div style={{ animation: "floaty 4.1s ease-in-out infinite" }}>
                <AvatarCard {...sampleAvatars[2]} />
              </div>
              <div style={{ animation: "floaty 4.3s ease-in-out infinite" }}>
                <AvatarCard {...sampleAvatars[3]} />
              </div>
            </div>

            {/* Brands row (faded) */}
            <div className="mt-48 py-12 flex justify-center opacity-30 pointer-events-none">
              <div className="grid grid-cols-6 gap-8 items-center w-full max-w-4xl">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-8 flex items-center">
                    <div className="h-6 w-full bg-white/10 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom curved white area - pointer-events-none so it doesn't block */}
        <div className="absolute left-0 right-0 bottom-0 pointer-events-none">
          <svg
            viewBox="0 0 1440 120"
            className="w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,120 C360,0 1080,0 1440,120 L1440,120 L0,120 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        {/* Floating download slider (right) */}
        <div className="relative z-30">
          <FloatingDownloadSlider />
        </div>

        {/* inline keyframes used for the icon scroller and floating avatars */}
        <style>{`
          @keyframes scroll-vertical {
            0% { transform: translateY(0%); }
            100% { transform: translateY(-50%); }
          }

          /* slight floating animation for avatar cards */
          @keyframes floaty {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }

          /* ensure CTAs are always clickable */
          .cta-force-top { z-index: 50 !important; position: relative; }
        `}</style>
      </div>

      <ServicesSection />

      <ThreeTierSolution />

      <div className="p-4">
        <GXPartnersNew />
      </div>
      <Footer />
    </>
  );
}
