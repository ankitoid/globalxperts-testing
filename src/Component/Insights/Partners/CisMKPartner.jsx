import React from "react";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import Networking from "../../Solutions/Networking";
import { Helmet } from "react-helmet";

const CisMKPartner = () => {
  return (
    <>
      <Helmet>
        <title>cisco meraki partnership</title>
        <meta
          name="description"
          content="Explore our Cisco Meraki partnership enabling secure, scalable network deployments with centralized management and cloud-first architecture."
        />
          <link rel="canonical" href="https://globalxperts.net/partners/cisco-meraki-partnership" />

      </Helmet>
      <Navbar />
      <Networking />

      <ContactCard />
      <Footer />
    </>
  );
};

export default CisMKPartner;
