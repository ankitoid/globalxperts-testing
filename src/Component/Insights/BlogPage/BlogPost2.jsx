import React from 'react';
import Navbar from '../../Navbar';
import ContactCard from '../../Contact/ContactCard';
import Footer from '../../Footer';

const BlogPost2 = () => {
  return (
    <>
      <Navbar />
      <div className="w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-4">
        <div className="max-w-6xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
          {/* Title and Image Row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Left Side: Title and Text */}
            <div className="lg:w-3/5">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                GlobalXperts Takes Pole Position in AWS Storage Expertise
              </h1>
             
            </div>

            {/* Right Side: Image */}
            <div className="lg:w-2/5">
              <img
                src="https://main-website-images1.s3.ap-south-1.amazonaws.com/insight/blogpost2.webp"
                alt="AWS Storage"
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-white p-6 sm:p-8  mt-8 text-gray-800">
            <p className="">
              This prestigious accolade signifies{' '}
              <strong>GlobalXperts’</strong> deep technical prowess and
              unwavering commitment to delivering cutting-edge cloud storage
              solutions. It’s a testament to our team’s expertise in navigating
              the intricate landscape of AWS storage options, from S3 buckets to
              EBS volumes and beyond.
            </p>

            <h2 className="text-lg sm:text-2xl font-semibold mt-6 mb-4 text-blue-600">
              What the FTR Means for You:
            </h2>
            <p className="">
              Earning the FTR badge isn’t just a feather in our cap; it
              translates directly to tangible benefits for our clients. When you
              partner with GlobalXperts, you can rest assured that:
            </p>

            <ul className="list-disc list-inside space-y-3 pl-4 sm:pl-6">
              <li className="">
                <strong>Your Data is in Expert Hands:</strong> Our certified
                specialists know the ins and outs of AWS storage like the back
                of their hand, ensuring your data is secure, scalable, and
                cost-optimized.
              </li>
              <li className="">
                <strong>No Storage Challenge is Too Great:</strong> Whether
                you’re scaling a burgeoning startup or optimizing legacy
                infrastructure, our FTR-wielding warriors have the knowledge and
                experience to craft the perfect AWS storage solution for your
                unique needs.
              </li>
              <li className="">
                <strong>Future-Proofed Confidence:</strong> The FTR isn’t a
                one-and-done deal. We’re continuously honing our skills and
                staying ahead of the curve in the ever-evolving world of AWS
                storage, ensuring your solutions remain robust and future-proof.
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-4 text-blue-600">
              Beyond the Review, Beyond Expectations:
            </h2>
            <p className="">
              Clearing the FTR is just the tip of the iceberg. At{' '}
              <strong>GlobalXperts</strong>, we go beyond mere technical
              expertise. We’re passionate about understanding your business
              objectives and tailoring AWS storage solutions that not only meet
              but exceed your expectations.
            </p>

            <p className="">
              Ready to unleash the power of AWS storage with a team of certified
              champions? Contact <strong>GlobalXperts</strong> today and let us
              craft a solution that propels your data, and your business, to new
              heights. Remember, with <strong>GlobalXperts</strong> and AWS, the
              sky’s the limit!
            </p>
          </div>
          <div className="max-w-7xl mx-auto">
            <ContactCard />
        </div>
        </div>

        {/* Contact Card Section */}
        
      </div>
      <Footer />
    </>
  );
};

export default BlogPost2;
