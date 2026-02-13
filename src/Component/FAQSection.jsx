import React from "react";
import { FaChevronCircleDown } from "react-icons/fa";

const FAQSection = () => {
  return (
    <div className="bg-white p-6 flex-1">
      <h2 className="text-3xl font-semibold text-center mb-2">
        If you have <span className="italic">questions</span>, we have answers
      </h2>
      <div className="space-y-4">
        {[
          {
            question: "What types of IT services does GlobalXperts offer?",
            answer:
              "GlobalXperts provides comprehensive IT solutions: cloud services (migration, management, optimization), professional services (consulting, architecture, deployment), 24 X 7 managed services via global NOC, and field services delivering on-site support in over 120 countries.",
          },
          {
            question: "How do you ensure service quality and accountability?",
            answer:
              "We use standardized frameworks (ITIL, ISO, AWS Well-Architected), assign project managers or service delivery managers per account, and leverage KPIs and regular performance reporting to ensure transparency and results.",
          },
          {
            question: "What’s your approach to security and compliance?",
            answer:
              "We build secure-by-design solutions with layered protection, 24X7 monitoring, threat detection, and backup strategies. We help you meet industry compliance standards including HIPAA, PCI-DSS, SOC 2, and others.",
          },
          {
            question:
              "How do we get started with GlobalXperts?",
            answer:
              "Simply contact us for a free consultation. We’ll assess your needs, propose a customized solution, and walk you through the next steps whether that’s a cloud assessment, managed service onboarding, or field support engagement.",
          },
          {
            question:
              "What is orchestration and automation, and how can GlobalXperts help implement it?",
            answer:
              "Orchestration and automation eliminate manual, repetitive IT tasks by linking systems, tools, and workflows into self-operating sequences. We implement solutions like IaC (Infrastructure as Code) and CI/CD pipelines that increase efficiency, reduce human error, and speed up service delivery.",
          },
          {
            question:
              "Do you offer DevOps consulting or implementation?",
            answer:
              "Yes. We guide organizations through DevOps maturity from toolchain setup to pipeline automation helping development and operations teams work in sync. Our engineers specialize in platforms like Jenkins, GitLab, Docker, Kubernetes, Terraform, and AWS-native DevOps services.",
          },
        ].map((item, index) => (
          <details key={index} className="group border-t border-gray-300">
            <summary className="flex justify-between items-center p-1 cursor-pointer group-hover:bg-gray-100 mt-3 2xl:mt-6 2xl:p-2">
              <span className="font-medium text-left w-full">{item.question}</span>
              <FaChevronCircleDown />
            </summary>
            <div className="p-4">{item.answer}</div>
          </details>
        ))}
      </div>
    </div>
  );
};

const ImpactFilmCard = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg flex-1  ">
      <img
        src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/ld10.jpg"
        alt="Impact Film"
        className="w-full rounded-lg mb-2"
      />
      <h3 className="text-xl font-semibold mb-2">
        How the AI Digital Tools Can Change Lives
      </h3>
      {/* <a href="#" className="text-blue-600 hover:underline">
        Learn more &rarr;
      </a> */}
    </div>
  );
};

const FAQWithImpactFilm = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6 mt-2 h-full  mb-8 lg:mb-0">
      <div className="flex-1 md:w-1/3 ">
        <FAQSection />
      </div>
      <div className="flex-1 md:w-1/3">
        <ImpactFilmCard />
      </div>
    </div>
  );
};

export default FAQWithImpactFilm;
