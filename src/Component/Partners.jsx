import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

// Import images

const Partners = () => {
  const partners = [
    {
      src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p1.png",
      alt: "AWS",
      link: "/partners/aws-partnership",
    },
    {
      src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p2.png",
      alt: "Arista",
      link: "/partners/arista-partnership",
    },
    {
      src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p4.png",
      alt: "HPE",
      link: "/partners/hewlett-packard-partnership",
    },
    {
      src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p5.png",
      alt: "Cisco",
      link: "/partners/microsoft-partnership",
    },
    {
      src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p6.png",
      alt: "MS Azure",
      link: "/partners/azure-partnership",
    },
    {
      src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p7.png",
      alt: "TrueNAS",
      link: "/partners/cisco-partnership",
    },
    {
      src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p8.png",
      alt: "TrueNAS",
      link: "/partners/trueNAS-partnership",
    },
    {
      src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p16.png",
      alt: "Veeam",
      link: "/partners/veeam-partnership",
    },
    {
      src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p17.png",
      alt: "Seceon",
      link: "/partners/seceon-partnership",
    },
    {
      src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p11.png",
      alt: "Cisco Meraki",
      link: "/partners/cisco-meraki-partnership",
    },
    {
      src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p12.png",
      alt: "ServiceNow",
      link: "#",
    },
    {
      src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p13.png",
      alt: "Veeam",
      link: "",
    },
    {
      src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p14.png",
      alt: "Seceon",
      link: "",
    },
    {
      src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p15.png",
      alt: "Broadcom (VMware)",
      link: "",
    },
    {
      src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p9.png",
      alt: "GCP",
      link: "#",
    },
    {
      src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p10.png",
      alt: "Calabrio",
      link: "#",
    },
    {
      src: "https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/logos/p3.png",
      alt: "VMware",
      link: "/partners/broadcom-partnership  ",
    },
  ];

  // Custom arrow components
 const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next slide"
    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black text-4xl z-50 p-1"
  >
    <MdNavigateNext aria-hidden="true" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Previous slide"
    className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black text-4xl z-50 p-1"
  >
    <GrFormPrevious aria-hidden="true" />
  </button>
);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="max-w-7xl mx-auto py-10 text-center relative">
      {/* Header Section */}
      <h4 className="text-3xl font-bold mb-2">Technology Partners</h4>
      <div className="flex justify-center gap-2 mb-4">
        <div className="w-80 rounded-lg h-1 bg-blue-500"></div>
      </div>
      <p className="text-gray-600 mb-6">
        We partner with the most innovative technology creators available.
      </p>

      {/* Slider */}
      <div className="relative px-6">
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <div key={index} className="p-4">
              <Link to={partner.link}>
                <div className="border rounded-lg shadow-sm flex justify-center p-4 hover:shadow-md transition">
                  <img src={partner.src} alt={partner.alt} className="h-16" />
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      {/* View More Button */}
      <div className="mt-6">
        <Link
          to="/insights/partners"
          className="bg-blue-600 text-white px-6 py-2 rounded-full"
        >
          VIEW MORE
        </Link>
      </div>
    </section>
  );
};

export default Partners;
