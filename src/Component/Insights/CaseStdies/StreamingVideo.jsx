// src/CaseStudies3.js
import React from "react";
import Navbar from "../../Navbar";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import referenArch from "../../../Assets/referenceArchitecture.png";
import BroadcastingIMg from "../../../Assets/broadcastingImg.png";
const CaseStudies3 = () => {
  return (
    <>
      <Navbar />
      <div className=" mx-auto mt-20 ">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Case Study: Media Streaming Tier 1 Sporting Franchise
            </h2>
          </div>
          {/* Image Section */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <img
              className="w-full rounded-lg"
              src={BroadcastingIMg}
              alt="Service providers working on IT solutions"
            />
          </div>
        </div>
        {/* Header Section */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between text-md text-black mb-8 space-y-2 md:space-y-0 px-4 mt-8">
          <div>
            <span className="font-bold">Service Type:</span> Managed Services
          </div>
          <div>
            <span className="font-bold">Vertical:</span> Media and Entertainment
          </div>
          <div>
            <span className="font-bold">Contract:</span>{" "}
            <span className="text-green-600">Active</span>
          </div>
        </div>

        {/* Challenge Section */}
        <div className=" bg-gradient-to-r from-blue-100 to-blue-500 p-4 text-left  mb-6">
          <h2 className="max-w-6xl mx-auto text-3xl font-bold mb-2">
            Challenge:
          </h2>
        </div>
        <div>
          <p className="text-cl max-w-6xl mx-auto">
            The “Sports Franchise” faced increasing fan frustration due to
            unreliable live streaming during games. Buffering, latency issues,
            and occasional outages plagued their platform, negatively impacting
            fan engagement and potentially costing them valuable revenue.
          </p>
        </div>

        {/* Solution Section */}
        <div className="bg-gradient-to-r from-blue-100 to-blue-500 p-4 text-left mb-6 mt-5">
          <h1 className="max-w-6xl mx-auto text-3xl font-bold mb-2">
            Solution:
          </h1>
        </div>

        <div className="max-w-6xl mx-auto text-left grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Solution Column 1 */}
          <div className="border border-gray-300 p-4 rounded-lg shadow-md space-y-4">
            <div className="border-b border-gray-300 pb-2">
              <h3 className="font-bold">• Real-time Monitoring:</h3>
              <p className="text-md">
                Our 24/7 monitoring system tracked key performance indicators
                (KPIs) like bitrate, latency, and server load, identifying
                potential issues before they impacted viewers.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-2">
              <h3 className="font-bold">• AWS Media Live:</h3>
              <p className="text-md">
                AWS Media Live is a cloud-based service for video processing and
                video compression. It creates streams in different formats like
                HLS, MPEG DASH, RTMP/SP, UDP TS, which can be distributed to
                various platforms.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-2">
              <h3 className="font-bold">• Configuration and Testing:</h3>
              <p className="text-md">
                Dedicated engineers performed pre-game activities like resource
                configuration, starting AWS Media services, encoders, and
                decoders, testing signals, and coordinating with onsite teams.
              </p>
            </div>

            <div className="">
              <h3 className="font-bold">• Data-driven Insights:</h3>
              <p className="text-md">
                We provided detailed reports and analytics, empowering the team
                to understand audience behavior and optimize their content
                strategy.
              </p>
            </div>
          </div>

          {/* Solution Column 2 */}
          <div className="border border-gray-300 p-4 rounded-lg shadow-md space-y-4">
            <div className="border-b border-gray-300 pb-2">
              <h3 className="font-bold">
                • AWS Media Link for Direct Delivery:
              </h3>
              <p className="text-md">
                Video outputs from cameras are sent directly to Cloud using AWS
                Media Link devices, supporting HD/SDI and HDMI inputs. Five
                devices are deployed per arena to meet requirements.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-2">
              <h3 className="font-bold">• AWS S3 for Content Management:</h3>
              <p className="text-md">
                Amazon S3 stores large data volumes at low cost, making it ideal
                for video files. Files are accessed via HTTP, which is perfect
                for serving HLS videos.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-2">
              <h3 className="font-bold">• Proactive Maintenance:</h3>
              <p className="text-md">
                Our team proactively adjusted bitrates during peak viewership
                and optimized server configurations, resolving video/audio
                issues during live streaming.
              </p>
            </div>

            <div className="">
              <h3 className="font-bold">• Post-game Activities:</h3>
              <p className="text-md">
                A dedicated team managed post-game activities, closing AWS
                services, encoders, decoders, and monitoring tools.
              </p>
            </div>
          </div>

          {/* Solution Column 3 */}
          <div className="border border-gray-300 p-4 rounded-lg shadow-md space-y-4">
            <div className="border-b border-gray-300 pb-2">
              <h3 className="font-bold">• AWS Elemental Live:</h3>
              <p className="text-md">
                AWS Elemental Live encodes and publishes streams to platforms,
                supporting inputs like SDI and RTMP/SP. It is installed in a 1+1
                configuration per arena.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-2">
              <h3 className="font-bold">
                • Subjective Monitoring and Ticketing System:
              </h3>
              <p className="text-md">
                Our monitoring platform included professionals for confidence
                monitoring of feeds and ticket management for live streaming
                issues.
              </p>
            </div>

            <div className=" ">
              <h3 className="font-bold">• Rapid Issue Resolution:</h3>
              <p className="text-md">
                Dedicated engineers were on standby to address critical issues
                quickly, ensuring minimal disruption to streams.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-blue-500 p-4 text-left mb-6 mt-5">
          <h1 className="max-w-6xl mx-auto text-3xl font-bold mb-2">Result:</h1>
        </div>

        {/* Results */}
        <div>
          <div className="max-w-6xl mx-auto text-left grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Result Column 1 */}
            <div className="border border-gray-300 p-4 rounded-lg shadow-md space-y-4">
              <div className="border-b border-gray-300 pb-2">
                <h3 className="font-bold">
                  • Significant reduction in buffering and latency:
                </h3>
                <p className="text-md">
                  Viewers experienced a smooth and uninterrupted streaming
                  experience, with buffering incidents reduced by 85%.
                </p>
              </div>

              <div className="border-b border-gray-300 pb-2">
                <h3 className="font-bold">• Increased revenue potential:</h3>
                <p className="text-md">
                  Improved reliability and engagement opened doors for exploring
                  new monetization opportunities.
                </p>
              </div>

              <div className="">
                <h3 className="font-bold">• Improved Reliability:</h3>
                <p className="text-md">
                  The overall system has become more reliable and efficient.
                </p>
              </div>
            </div>

            {/* Result Column 2 */}
            <div className="border border-gray-300 p-4 rounded-lg shadow-md space-y-4">
              <div className="border-b border-gray-300 pb-2">
                <h3 className="font-bold">• Improved fan engagement:</h3>
                <p className="text-md">
                  Increased watch time and positive fan feedback on social media
                  channels.
                </p>
              </div>

              <div className="border-b border-gray-300 pb-2">
                <h3 className="font-bold">
                  • Reduction in Infrastructure Cost:
                </h3>
                <p className="text-md">
                  By deploying AWS services, cost has been reduced by 70 to 80%
                  in comparison to conventional streaming solutions which use
                  costly hardware-based encoders and decoders for video
                  processing and video compression and has extra licensing cost
                  to enhance features. AWS services follow Pay As you Go pricing
                  model to make it less expensive.
                </p>
              </div>

              <div className="">
                <h3 className="font-bold">• Reduced Staff Workload:</h3>
                <p className="text-md">
                  Leveraging AWS freed up staff by 40%, enabling them to focus
                  on new initiatives.
                </p>
              </div>
            </div>

            {/* Result Column 3 */}
            <div className="border border-gray-300 p-4 rounded-lg shadow-md space-y-4">
              <div className="border-b border-gray-300 pb-2">
                <h3 className="font-bold">• Enhanced brand reputation:</h3>
                <p className="text-md">
                  The team solidified its position as a leader in providing
                  innovative fan experiences.
                </p>
              </div>

              <div className="border-b border-gray-300 pb-2">
                <h3 className="font-bold">• Improved Redundancy:</h3>
                <p className="text-md">
                  By transitioning our services to AWS, we gain the ability to
                  implement redundant WAN connections. This has further improved
                  the overall reliability and resilience of our network.
                </p>
              </div>

              <div className="">
                <h3 className="font-bold">• Time Saving Solution:</h3>
                <p className="text-md">
                  Provided solution is time saving in terms of configuring
                  resources, reporting issues, fault recovery and general
                  operations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-blue-500 p-4 text-left mb-6 mt-8">
          <h1 className="max-w-6xl mx-auto text-3xl font-bold mb-2">
            Takeaway:
          </h1>
        </div>
        <div>
          <div className="max-w-6xl mx-auto text-left grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Solution Column 1 */}
            <div className="border border-gray-300 p-4 rounded-lg shadow-md space-y-4">
              <p className="text-md">
                • Proactive monitoring and maintenance are crucial for ensuring
                seamless live streaming experiences.
              </p>
            </div>

            {/* Solution Column 2 */}
            <div className="border border-gray-300 p-4 rounded-lg shadow-md space-y-4">
              <p className="text-md">
                • Data-driven insights can help optimize content and marketing
                strategies, leading to increased engagement and revenue.
              </p>
            </div>

            {/* Solution Column 3 */}
            <div className="border border-gray-300 p-4 rounded-lg shadow-md space-y-4">
              <p className="text-md">
                • Partnering with a managed service provider with expertise in
                live sports streaming can alleviate operational burdens and
                maximize success.
              </p>
            </div>
          </div>
        </div>
        <h1 className="max-w-6xl mx-auto text-left mt-10 font-bold text-xl mb-4">
          {" "}
          GlobalXperts is committed to helping Sports teams and Entertainment
          Professionals deliver exceptional live streaming experiences that
          engage fans and drive growth.
        </h1>
      </div>
      <div className="bg-gradient-to-r from-yellow-100 to-blue-400 p-4 text-left mb-6 mt-8">
        <h1 className="max-w-6xl mx-auto text-3xl font-bold mb-2">
          Disclaimer
        </h1>
      </div>
      <h1 className="max-w-6xl mx-auto text-left  text-xl mb-8">
        GlobalXperts Inc. has a contractual agreement not to expose the end
        client’s name due to contract stipulations. We can share with you some
        clues about this Sports Franchise which has 4-7 billion dollars in
        revenues and well over 1,200 events that are broadcast to their proud
        fans during their season.
      </h1>

      <div className="bg-gradient-to-r from-green-100 to-yellow-300 p-4 text-left mb-6 mt-8">
        <h1 className="max-w-6xl mx-auto text-3xl font-bold mb-2">
          Reference Architecture
        </h1>
      </div>
      <div className="max-w-6xl mx-auto">
        <img src={referenArch} />
      </div>
      <div className="mt-8">
        <ContactCard />
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </>
  );
};

export default CaseStudies3;
