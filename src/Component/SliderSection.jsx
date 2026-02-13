import ServicesHockey from "./ServicesHockey";
import { Helmet } from "react-helmet";

function SliderSection() {
  const videoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Field Services Overview",
    description:
      "We deliver professional on-site services including dispatch, technology refresh, migrations, and more.",
    thumbnailUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/fieldservices-thumbnail.jpg",
    uploadDate: "2025-03-07",
    contentUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/fieldService.mp4",
    embedUrl: "https://www.globalxperts.net/",
  };

  const networkingVideoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Network Consulting Services",
    description:
      "Optimize your network with expert consulting — improving communication, collaboration, and workflow efficiency.",
    thumbnailUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/networking-thumbnail.jpg", // Replace with actual thumbnail if available
    uploadDate: "2025-03-07",
    contentUrl:
      "https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/networkingCon.mp4",
    embedUrl: "https://www.globalxperts.net/", // Match your website structure
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(videoJsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(networkingVideoJsonLd)}
        </script>
      </Helmet>

      {/* First Section */}
      <div className="bg-white mt-16 flex items-center justify-center ">
        <div className="flex flex-col 2xl:max-w-[100rem] 2xl:mx-auto md:flex-row-reverse items-center justify-between w-full h-full mr-0 md:mr-8">
          {/* Right Section */}
          <div className="w-full md:w-3/5 md:ml-14 sm:py-20 sm:rounded-lg bg-yellow-400 flex items-center justify-center p-10 md:p-44  relative overflow-hidden">
            <video
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/fieldService.mp4"
              className="absolute inset-0 w-full h-full object-cover rounded-sm"
              muted
              autoPlay
              loop
              playsInline
              aria-label="field services "
            ></video>
          </div>

          {/* Left Section */}
          <div className="w-full md:w-3/5 bg-white flex items-center justify-center p-8 md:p-12 ">
            <div className="max-w-lg  2xl:max-w-[100rem] 2xl:mx-auto text-center md:text-left">
              <h4 className="text-3xl md:text-5xl font-bold mb-4">
                Field Services
              </h4>
              <p className="text-gray-600 text-base md:text-lg mb-6">
                We deliver our professional and managed services on-site. We
                perform dispatch services, technology refreshes, site surveys,
                data-center migrations, and more.
              </p>
              <a
                href="/service/field-services"
                className="text-blue-500 hover:text-blue-700 font-bold"
                
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-10 mb-8">
        <ServicesHockey />
      </div>
      {/* Third Section */}
      <div className="bg-white flex items-center justify-center 2xl:max-w-[100rem] 2xl:mx-auto  md:ml-4 2xl:mt-8  ">
        <div className="flex flex-col md:flex-row  items-center justify-between w-full h-full ">
          {/* Left Section */}
          <div className="2xl:ml-10 w-full md:w-3/5  flex items-center justify-center p-16 md:p-48 md:rounded-r-full rounded-l-sm md:rounded-l-none relative overflow-hidden">
            <div className="absolute inset-0 rounded-l-sm sm:py-28 sm:rounded-lg  md:rounded-l-md ">
              <video
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/networkingCon.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                muted
                autoPlay
                loop
                playsInline
              ></video>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:max-w-7xl md:mx-auto w-full md:w-2/5 mt-8 bg-white flex items-center justify-center  md:p-12">
            <div className="max-w-lg text-center md:text-left">
              <h4 className="text-3xl md:text-5xl font-bold mb-4">
                Network Consulting
              </h4>
              <p className="text-gray-600 text-base md:text-lg mb-6 p-5">
                Need experts to work on your network? We can optimize
                communication, enhance collaboration, and streamline workflows
                with tailored networking solutions.
              </p>
              <a
                href="/networking"
                className="text-blue-500 hover:text-blue-700 font-bold"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderSection;
