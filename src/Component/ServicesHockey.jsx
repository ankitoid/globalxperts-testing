import React from "react";

function ServicesHockey() {
  return (
    <div className="flex flex-col gap-8 bg-blueCustomColor text-white p-8">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-5xl font-bold mb-4">
          Key Services and Partnerships
        </h3>
        <p className="lg:text-lg">
          At GlobalXperts, we offer cutting-edge technology solutions that drive
          innovation and operational efficiency across various industries.
          Explore our key services and strategic partnerships that empower
          businesses to excel in today's digital landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:text-lg">
        {/* First card gets a “Learn More” link */}
        <ThoughtCard
          heading="Our Expertise"
          title="GlobalXperts is committed to driving innovation in enterprise solutions by integrating advanced technologies and best practices to deliver scalable and sustainable outcomes."
          buttonText="Learn More"
          link="/solutions/cloud"
          imageUrl="/Assets/driverless-image.jpg"
          alt="Innovation Image"
          description="Explore our wide range of services tailored to meet the needs of businesses across various industries."
          className="row-span-2"
          hoverEffect={false}
          textColor="white"
          aria-label="Learn more about our Cloud Solutions"
        />

        {/* Other cards without a button */}
        <ThoughtCard
          title="Sports Live Streaming"
          imageUrl="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/streaming.png"
          alt="NHL Image"
          description="GlobalXperts provides cutting-edge technology solutions to enhance operational efficiency and fan engagement for live streaming and broadcasting through advanced analytics and digital transformation."
          hoverEffect={true}
          textColor="white"
        />

        <ThoughtCard
          title="Optimized Cloud Servers"
          imageUrl="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/servers.jfif"
          alt="Cloud Server Image"
          description="Leverage our expertise in cloud server management to optimize performance, reliability, scalability, and security, ensuring a seamless cloud experience for your business."
          hoverEffect={true}
          textColor="white"
        />

        <ThoughtCard
          title="AI and Cloud: The Future of Business Operations"
          imageUrl="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/AI2.jpg"
          alt="AI and Cloud Image"
          description="Discover how our AI-powered cloud solutions drive automation, improve decision-making, and enhance operational workflows for businesses of all sizes."
          hoverEffect={true}
          textColor="white"
        />

        <ThoughtCard
          title="Professional Management and Development Services"
          imageUrl="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/development..png"
          alt="Professional Management Image"
          description="GlobalXperts offers comprehensive management and development services to streamline your operations. Our expert solutions integrate management strategies with advanced development practices to help you achieve your goals efficiently."
          hoverEffect={true}
          textColor="white"
        />
      </div>
    </div>
  );
}

function ThoughtCard({
  heading,
  title,
  buttonText,
  link,
  imageUrl,
  alt,
  description,
  className = "",
  hoverEffect = false,
  textColor = "white",
}) {
  return (
    <div
      className={`relative bg-gray-800 p-2 flex flex-col justify-between ${className} ${
        hoverEffect ? "group overflow-hidden cursor-pointer" : ""
      }`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "300px",
      }}
    >
      <div
        className={`absolute inset-0 bg-blueCustomColor opacity-10 ${
          hoverEffect
            ? "group-hover:opacity-50 transition-opacity duration-300"
            : ""
        }`}
      />

      {/* Image blur effect on hover */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          hoverEffect
            ? "group-hover:blur-md group-hover:shadow-lg group-hover:bg-cover"
            : ""
        }`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 flex flex-col justify-between h-full p-4">
        {heading && (
          <h3 className={`text-3xl font-bold text-center text-${textColor}`}>
            {heading}
          </h3>
        )}

        <h2
          className={`text-xl font-medium mb-4 text-${textColor} ${
            hoverEffect
              ? "group-hover:opacity-100 transition-opacity duration-300"
              : ""
          }`}
        >
          {title}
        </h2>

        {/* “Learn More” button, only if both buttonText + link are provided */}
        {buttonText && link && (
          <a
            href={link}
            className="bg-greenCustomColor hover:bg-greenCustomColor2 text-white font-bold py-2 px-4 rounded-full self-center mb-12 inline-block text-center"
          >
            {buttonText}
          </a>
        )}

        {/* Additional slide-up content on hover */}
        {hoverEffect && (
          <div className="transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out mt-auto">
            <p className={`text-${textColor} mb-8 font-semibold`}>
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ServicesHockey;
