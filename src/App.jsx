import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("./Component/Home"));
const Cloud = lazy(() => import("./Component/Solutions/Cloud"));
const CollaborationTechnologies = lazy(() => import("./Component/Solutions/CollaborationTechnologies"));
const DataCenterDesign = lazy(() => import("./Component/Solutions/DataCenterDesign"));
const MultiCloud = lazy(() => import("./Component/Solutions/Cloud/MultiCloud"));
const CyberSecurity = lazy(() => import("./Component/Solutions/CyberSecurity"));
const Education = lazy(() => import("./Component/Industries/Education"));
const NotFound = lazy(() => import("./Component/NotFound"));
const Energy = lazy(() => import("./Component/Industries/Energy"));
const Goverment = lazy(() => import("./Component/Industries/Goverment"));
const Financial = lazy(() => import("./Component/Industries/Financial"));
const Retail = lazy(() => import("./Component/Industries/Retail"));
const Healthcare = lazy(() => import("./Component/Industries/Healthcare"));
const ServiceProvider = lazy(() => import("./Component/Industries/ServiceProvider"));
const MediaEnter = lazy(() => import("./Component/Industries/MediaEnter"));
const SmallandMediumBusiness = lazy(() => import("./Component/Solutions/SmallandMediumBusiness"));

const About = lazy(() => import("./Component/Company/About"));
const ContactUs = lazy(() => import("./Component/ContactUs"));
const Careers = lazy(() => import("./Component/Company/Careers"));
const CompaniesLogos = lazy(() => import("./Component/CompaniesLogos"));
const AImlSoluion = lazy(() => import("./Component/Solutions/AI&MlSolutions"));

const ProfessionalServices = lazy(() => import("./Component/Services/ProfessionalServices"));
const ManagedServices = lazy(() => import("./Component/Services/ManagedService"));

const ServicesHockey = lazy(() => import("./Component/ServicesHockey"));

const Blog = lazy(() => import("./Component/Insights/Blog"));
const Partner = lazy(() => import("./Component/Insights/Partner"));
const BlogPost1 = lazy(() => import("./Component/Insights/BlogPage/BlogPost1"));
const BlogPost4 = lazy(() => import("./Component/Insights/BlogPage/BlogPost4"));

const CaseStudies = lazy(() => import("./Component/Insights/CaseStudies"));
const CaseStudies1 = lazy(() => import("./Component/Insights/CaseStdies/CaseStudies1"));
const CaseStudies2 = lazy(() => import("./Component/Insights/CaseStdies/CaseStudies2"));
const CaseStudies3 = lazy(() => import("./Component/Insights/CaseStdies/CaseStudies3"));
const CaseStudies4 = lazy(() => import("./Component/Insights/CaseStdies/CaseStudies4"));
const CaseStudies5 = lazy(() => import("./Component/Insights/CaseStdies/CaseStudies5"));
const CaseStudies6 = lazy(() => import("./Component/Insights/CaseStdies/CaseStudies6"));
const CaseStudies7 = lazy(() => import("./Component/Insights/CaseStdies/CaseStudies7"));
const CaseStudies8 = lazy(() => import("./Component/Insights/CaseStdies/CaseStudies8"));
const CaseStudies9 = lazy(() => import("./Component/Insights/CaseStdies/CaseStudies9"));
const CaseStudies10 = lazy(() => import("./Component/Insights/CaseStdies/CaseStudies10"));

const MediaLib = lazy(() => import("./Component/Insights/MediaLib"));
const PartnerInfo = lazy(() => import("./Component/Insights/CaseStdies/PartnerInfo"));

const Networking = lazy(() => import("./Component/Solutions/Networking"));
const AcloudVision = lazy(() => import("./Component/Solutions/Networking/AcloudVision"));
const AristaEdge = lazy(() => import("./Component/Solutions/Networking/AristaEdge"));
const AristaSwitches = lazy(() => import("./Component/Solutions/Networking/AristaSwitches"));
const AristaWAN = lazy(() => import("./Component/Solutions/Networking/AristaWAN"));
const AristaWifi = lazy(() => import("./Component/Solutions/Networking/AristaWifi"));
const Mkcamera = lazy(() => import("./Component/Solutions/Networking/MkCamers"));
const MkWireless = lazy(() => import("./Component/Solutions/Networking/MkWireless"));
const MkSwitches = lazy(() => import("./Component/Solutions/Networking/MkSwitches"));
const MkFirewall = lazy(() => import("./Component/Solutions/Networking/MkFirewall"));

const AWSPartner = lazy(() => import("./Component/Insights/Partners/AWSPartner"));
const AristaPartner = lazy(() => import("./Component/Insights/Partners/AristaPartner"));
const CisMKPartner = lazy(() => import("./Component/Insights/Partners/CisMKPartner"));
const CiscoPartner = lazy(() => import("./Component/Insights/Partners/CiscoPartner"));
const VMWarePartner = lazy(() => import("./Component/Insights/Partners/VMWarePartner"));
const HewlettPackPartner = lazy(() => import("./Component/Insights/Partners/HewlettPackPartner"));
const MSAzurePartner = lazy(() => import("./Component/Insights/Partners/MSAzurePartner"));
const VeeamPartner = lazy(() => import("./Component/Insights/Partners/VeeamPartner"));
const MicrosoftPartner = lazy(() => import("./Component/Insights/Partners/MicrosoftPartner"));
const TruenasPartner = lazy(() => import("./Component/Insights/Partners/TruenasPartner"));
const SeceonPartner = lazy(() => import("./Component/Insights/Partners/SeceonPartner"));

const Devops = lazy(() => import("./Component/Solutions/Cloud/Devops"));
const AWS = lazy(() => import("./Component/Solutions/Cloud/AWS"));

const IOSA = lazy(() => import("./Component/Solutions/Cloud Solutions/iosa"));
const AccelatorMigration = lazy(() => import("./Component/Solutions/Cloud Solutions/migrationAccelator"));

const SoftwareDevelopment = lazy(() => import("./Component/Services/SoftwareDevelopment"));

const TechnologyRefresh = lazy(() => import("./Component/Services/Field Service/TechnologyRefresh"));
const FieldServiceEng = lazy(() => import("./Component/Services/Field Service/FieldServiceEng"));
const FieldServices = lazy(() => import("./Component/Services/FieldServicesPage"));

const ManagedCollaborationTech = lazy(() => import("./Component/Services/Managed Services/ManagedCollaborationTech"));
const ManagedCyberSecurity = lazy(() => import("./Component/Services/Managed Services/ManagedCyberSecurity"));
const ManagedNetworking = lazy(() => import("./Component/Services/Managed Services/ManagedNetworking"));
const ManagedOpsisStream = lazy(() => import("./Component/Services/Managed Services/ManagedOpsis"));
const ManagedHelpDesk = lazy(() => import("./Component/Services/Managed Services/ManageHelpDesk"));
const ManagedCloud = lazy(() => import("./Component/Services/Managed Services/ManagedCloud"));

const TitanX = lazy(() => import("./Component/Solutions/Cloud Solutions/TitanX"));
const OmniBot = lazy(() => import("./Component/Solutions/Cloud Solutions/OmniBot"));
const HybridCloud = lazy(() => import("./Component/Solutions/Cloud/HybridCloud"));
const AIMLonAWS = lazy(() => import("./Component/Solutions/Cloud Solutions/AIMLonAWS"));
const AWSMigrationService = lazy(() => import("./Component/Solutions/Cloud Solutions/AWSMigrationService"));

const StaffAugmentation = lazy(() => import("./Component/Services/Professional Service/StaffAugmentation"));
const ConsultingAndAdvisory = lazy(() => import("./Component/Services/Professional Service/ConsultingAndAdvisory"));
const Implementation = lazy(() => import("./Component/Services/Professional Service/Implementation"));
const CloudMigration = lazy(() => import("./Component/Services/Professional Service/CloudMigration"));
const SiteSurveys = lazy(() => import("./Component/Services/Professional Service/SiteSurveys"));
const DataCenterMigration = lazy(() => import("./Component/Services/Professional Service/DataCenterMigration"));
const TechStaffAug = lazy(() => import("./Component/Services/Professional Service/TechStaffAug"));

const CloudSolutions = lazy(() => import("./Component/Solutions/CloudSolutions"));

const Privatepolicy = lazy(() => import("./Component/Company/PrivatePolicy"));

const SmartTransit = lazy(() => import("./Component/Solutions/SmartTransit"));
const AmazonEVS = lazy(() => import("./Component/Solutions/Cloud Solutions/AmazonEVS"));
const CloudSolution = lazy(() => import("./Component/Solutions/Cloud/CloudSolution"));
const IotHealthCare = lazy(() => import("./Component/Solutions/Cloud Solutions/IotHealthCare"));

const Locations = lazy(() => import("./Component/Company/Locations"));
const ITServicesPage = lazy(() => import("./Component/pages/ITServicesPage"));
const CaliforniaITService = lazy(() => import("./Component/pages/template/CaliforniaITService"));
const FloridaITServices = lazy(() => import("./Component/pages/template/FloridaITServices"));
const IllinoisITServices = lazy(() => import("./Component/pages/template/IllinoisITServices"));
const TexasITServices = lazy(() => import("./Component/pages/template/TexasITServices"));
const NewYorkITServices = lazy(() => import("./Component/pages/template/NewYorkITServices"));

const CandidateForm = lazy(() => import("./Component/Company/Careers-Pages/CandidateForm"));
const JobDetails = lazy(() => import("./Component/Company/Careers-Pages/JobDetails/JobDetails"));

const GCCservices = lazy(() => import("./Component/Services/GCC Services/GCCservices"));
const GlobalxpertsServices = lazy(() => import("./Component/pages/GlobalxpertsServices"));
const CaptiveGcc = lazy(() => import("./Component/Services/GCC Services/pages/models/captiveGCC"));

import { Suspense } from "react";
const  GoToTopButton= lazy(()=> import("./Component/Contact/GoToTopButton"));
const ContactSlider = lazy(() => import( "./Component/Contact/ContactSlider"));
const ExternalRedirect = lazy(()=> import ("./Component/Redirect/ExternalRedirect"))
const ScrollToTop = lazy(()=> import ("./Component/ScrollToTop"))

const BotGcc = lazy(()=> import("./Component/Services/GCC Services/pages/models/BotGcc"))
const HybridGcc = lazy(()=> import("./Component/Services/GCC Services/pages/models/HybridGCC"))
const ManagedGcc = lazy(()=>import("./Component/Services/GCC Services/pages/models/managedServiceGCC"))
function App() {

  

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <Canonical /> */}
      <ContactSlider />
      <ScrollToTop />

      <div className="flex-grow">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/companiesLogos" element={<CompaniesLogos />} />
          <Route path="/hockey" element={<ServicesHockey />} />
          <Route path="/service/software-development" element={<SoftwareDevelopment />} />

          <Route path="/solutions/cloud" element={<Cloud />} />
          <Route
            path="/solutions/collaboration-technologies"
            element={<CollaborationTechnologies />}
          />
          <Route
            path="/solutions/data-center-design"
            element={<DataCenterDesign />}
          />
          <Route path="/solutions/cyber-security" element={<CyberSecurity />} />
          <Route
            path="/solutions/small-medium-business"
            element={<SmallandMediumBusiness />}
          />
          <Route path="/solutions/ai-ml-solutions" element={<AImlSoluion />} />
          <Route path="/ai-machine-learning-on-aws" element={<AIMLonAWS />} />
          <Route path="/solutions/smart-transit" element={<SmartTransit />} />
          <Route
            path="/solutions/iot-in-healthcare"
            element={<IotHealthCare />}
          />
          <Route path="/networking" element={<Networking />} />
          <Route
            path="/solutions/aws-solutions/aws-migration-service"
            element={<AWSMigrationService />}
          />
          <Route
            path="/solutions/cloud-solutions/amazon-elastic-vmware-service"
            element={<AmazonEVS />}
          />

          {/*  Cloud and Devops */}
          <Route path="/solutions/cloud/devops" element={<Devops />} />
          <Route path="/solutions/cloud/aws" element={<AWS />} />

          <Route path="/solutions/cloud/multi-cloud" element={<MultiCloud />} />
          <Route
            path="/solutions/cloud/cloud-solution"
            element={<CloudSolution />}
          />

          {/* Cloud Solutions */}
          <Route path="/solutions/cloud-solutions/titanx-data-transformation" element={<TitanX />} />
          <Route
            path="/solutions/aws-solutions/piosa-high-performance-storage"
            element={<IOSA />}
          />
          <Route
            path="/migration-acceleration-program-map"
            element={<AccelatorMigration />}
          />

          {/* <Route path="/industries/Aviation" element={<AviationCloud />} /> */}
          <Route
            path="/industries/Aviation"
            element={
              <ExternalRedirect url="https://aviation.globalxperts.net/" />
            }
          />
          {/* Industries */}
          <Route path="/industries/education" element={<Education />} />
          <Route path="/industries/energy" element={<Energy />} />
          <Route path="/industries/government" element={<Goverment />} />
          <Route path="/industries/financial" element={<Financial />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route
            path="/industries/service-provider"
            element={<ServiceProvider />}
          />
          <Route
            path="/industries/media-entertainment"
            element={<MediaEnter />}
          />

          {/* Services */}
          <Route path="/service/field-services" element={<FieldServices />} />

          <Route
            path="/service/managed-services"
            element={<ManagedServices />}
          />
          <Route
            path="/service/professional-services"
            element={<ProfessionalServices />}
          />

          {/* Company */}
          <Route path="/company/about-us" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/job/:slug" element={<JobDetails />} />
          <Route path='/CandidateForm' element={<CandidateForm />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* <Route path="/careers/jobPosting" element={<JobPosting />} /> */}

          {/* Insights */}
          <Route path="/insights/blog" element={<Blog />} />
          <Route path="/insights/caseStudies" element={<CaseStudies />} />
          <Route path="/insights/media-Library" element={<MediaLib />} />
          <Route path="/insights/partners" element={<Partner />} />

          {/* BlogPost */}
          <Route path="/aws-select-partner-status" element={<BlogPost1 />} />
          <Route path="/awarded-8a-stars-iii-gwac" element={<BlogPost4 />} />

          {/* CaseS Study */}
          <Route path="/live-video-streaming" element={<CaseStudies1 />} />
          <Route
            path="/arista-install-entel-chile"
            element={<CaseStudies2 />}
          />
          <Route
            path="/design-installation-webex-meeting"
            element={<CaseStudies3 />}
          />
          <Route path="/nec-wireless-site-survey" element={<CaseStudies4 />} />
          <Route
            path="/global-managed-it-services"
            element={<CaseStudies5 />}
          />
          <Route
            path="/nec-disney-wan-optimization"
            element={<CaseStudies6 />}
          />
          <Route
            path="/cisco-unified-communications"
            element={<CaseStudies7 />}
          />
          <Route
            path="/towne-bank-cisco-telepresence"
            element={<CaseStudies8 />}
          />
          <Route
            path="/close-up-foundation-web-server-troubleshooting"
            element={<CaseStudies9 />}
          />
          <Route
            path="/arista-datacenter-implementation"
            element={<CaseStudies10 />}
          />

          <Route path="/caseStudies2/partner-info" element={<PartnerInfo />} />

          {/* Networking Pages */}
          <Route path="/networking/acloudvision" element={<AcloudVision />} />
          <Route path="/networking/aristaedge" element={<AristaEdge />} />
          <Route
            path="/networking/arista-switches"
            element={<AristaSwitches />}
          />
          <Route path="/networking/aristawan" element={<AristaWAN />} />
          <Route path="/networking/aristawifi" element={<AristaWifi />} />
          <Route path="/networking/mkcamera" element={<Mkcamera />} />
          <Route path="/networking/mkfirewall" element={<MkFirewall />} />
          <Route path="/networking/mkswitches" element={<MkSwitches />} />
          <Route path="/networking/mkwireless" element={<MkWireless />} />

          {/* Partners Pages */}
          <Route path="/partners/aws-partnership" element={<AWSPartner />} />
          <Route
            path="/partners/arista-partnership"
            element={<AristaPartner />}
          />
          <Route
            path="/partners/broadcom-partnership"
            element={<VMWarePartner />}
          />
          <Route
            path="/partners/hewlett-packard-partnership"
            element={<HewlettPackPartner />}
          />
          <Route
            path="/partners/microsoft-partnership"
            element={<MicrosoftPartner />}
          />
          <Route
            path="/partners/azure-partnership"
            element={<MSAzurePartner />}
          />
          <Route
            path="/partners/cisco-Partnership"
            element={<CiscoPartner />}
          />
          <Route
            path="/partners/truenas-partnership"
            element={<TruenasPartner />}
          />
          <Route
            path="/partners/cisco-meraki-partnership"
            element={<CisMKPartner />}
          />
          <Route
            path="/partners/veeam-partnership"
            element={<VeeamPartner />}
          />
          <Route
            path="/partners/seceon-partnership"
            element={<SeceonPartner />}
          />

          <Route path="/company/locations" element={<Locations />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />

          {/* Field Service Page */}
          <Route
            path="/service/field-services/field-engineering-services"
            element={<FieldServiceEng />}
          />
          <Route
            path="/service/field-services/technology-refresh"
            element={<TechnologyRefresh />}
          />

          {/* Managed Services Pages */}
          <Route
            path="/service/managed-services/managed-collaboration-technologies"
            element={<ManagedCollaborationTech />}
          />
          <Route
            path="/service/managed-services/network-operations-center-cybersecurity"
            element={<ManagedCyberSecurity />}
          />
          <Route
            path="/service/managed-services/network-operations-center-enterprise"
            element={<ManagedNetworking />}
          />
          <Route
            path="/solutions/aws-solutions/opsis-live-streaming"
            element={<ManagedOpsisStream />}
          />
          <Route
            path="/service/managed-services/managed-help-desk"
            element={<ManagedHelpDesk />}
          />
          <Route
            path="/service/managed-services/managed-cloud-application"
            element={<ManagedCloud />}
          />

          {/* professional services */}
          <Route
            path="/service/professional-services/staff-augmentation"
            element={<StaffAugmentation />}
          />
          <Route
            path="/service/professional-services/consulting-advisory"
            element={<ConsultingAndAdvisory />}
          />
          <Route
            path="/service/professional-services/implementation"
            element={<Implementation />}
          />
          <Route
            path="/service/professional-services/cloud-migration"
            element={<CloudMigration />}
          />
          <Route
            path="/service/professional-services/site-surveys"
            element={<SiteSurveys />}
          />
          <Route
            path="/service/professional-services/data-center-migration"
            element={<DataCenterMigration />}
          />
          <Route
            path="/service/technical-staff-augmentation"
            element={<TechStaffAug />}
          />

          {/* GCC  Services */}
          <Route path="/service/gcc-services" element={<GCCservices />} />
          <Route path="/service/gcc-services/captive-gcc" element={<CaptiveGcc/>} />
          <Route path="/service/gcc-services/bot-model" element={<BotGcc/>} />
          <Route path="/service/gcc-services/hybrid-gcc" element={<HybridGcc/>} />
          <Route path="/service/gcc-services/managed-services" element={<ManagedGcc/>} />


          {/* Solutions -> Cloud Solutions */}
          <Route path="/solutions/aws-solutions" element={<CloudSolutions />} />
          <Route
            path="/solutions/aws-solutions/omnibot-genai"
            element={<OmniBot />}
          />
          <Route
            path="/solutions/cloud/aws-hybrid-cloud"
            element={<HybridCloud />}
          />
          <Route path="/privacy-policy" element={<Privatepolicy />} />

          {/* Pages */}
          <Route path="/it-services" element={<ITServicesPage />} />
          <Route
            path="/it-services-california"
            element={<CaliforniaITService />}
          />
          <Route path="/it-services-texas" element={<TexasITServices />} />
          <Route path="/it-services-new-york" element={<NewYorkITServices />} />
          <Route path="/it-services-florida" element={<FloridaITServices />} />
          <Route
            path="/it-services-illinois"
            element={<IllinoisITServices />}
          />
          <Route path="/globalxperts-services" element={<GlobalxpertsServices />} />
        </Routes>
        <GoToTopButton />
      </div>
    </Suspense>
  );
}

export default App;
