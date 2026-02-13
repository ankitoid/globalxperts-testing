import React from "react";
import { Helmet } from "react-helmet";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import WorldMap from "../WorldMap";
import utcmap from "../../Assets/utc.png"
const Locations = () => {
  const offices = [
    // ================= USA =================
    {
      country: "USA",
      city: "Raleigh, NC",
      title: "Headquarters",
      address:
        "5540 Centerview Drive, Suite 200, Raleigh, NC 27606, United States",
      phone: "+1 919 123 4567",
      email: "info@globalxperts.net",
      mapLink:
        "https://www.google.com/maps/place/5540+Centerview+Dr,+Raleigh,+NC+27606",
      image:
        "https://images.unsplash.com/photo-1600986606214-8c8b9dbeaf2b?auto=format&fit=crop&w=800&q=80",
      fallbackImage:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/locations/usa.png",
      hours: "Monday–Friday: 9:00 AM – 5:00 PM (EST)",
    },
    {
      country: "USA",
      city: "Dallas, TX",
      title: "Dallas Office",
      address:
        "13355 Noel Road, Suite 1100, Dallas, Texas 75240, United States",
      phone: "+1 214 123 4567",
      email: "info@globalxperts.net",
      mapLink:
        "https://www.google.com/maps/search/13355+Noel+Road,+Suite+1100,+Dallas,+Texas+75240",
      image:
        "https://images.unsplash.com/photo-1621904878414-d4ca4756bd7e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fallbackImage:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/locations/usa.png",
      hours: "Monday–Friday: 9:00 AM – 5:00 PM (CST)",
    },
    {
      country: "USA",
      city: "San Jose, CA",
      title: "San Jose Office",
      address:
        "2880 Zanker Road, Suite 203, San Jose, California 95134, United States",
      phone: "+1 408 123 4567",
      email: "info@globalxperts.net",
      mapLink:
        "https://www.google.com/maps/search/2880+Zanker+Road,+Suite+203,+San+Jose,+California+95134",
      image:
        "https://media.istockphoto.com/id/1147892817/photo/san-jose-california.jpg?s=612x612&w=0&k=20&c=eDOeL6Wgjaia6_HXRzXxofC90zv9kbP5tJ88sme_TIU=",
      fallbackImage:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/locations/usa.png",
      hours: "Monday–Friday: 9:00 AM – 5:00 PM (PST)",
    },

    // ================= CANADA =================
    {
      country: "CANADA",
      city: "New Westminster, BC",
      title: "Canada Office",
      address:
        "205 - 810 Quayside Dr, New Westminster, BC V3M 6B9, Canada",
      phone: "+1 604 123 4567",
      email: "info@globalxperts.net",
      mapLink:
        "https://www.google.com/maps/search/205+-+810+Quayside+Dr,+New+Westminster,+BC+V3M+6B9",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOiF4Xv7q-xaojG3ZjxzAoUkqN0JkiGn3cmA&s",
      fallbackImage:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/locations/usa.png",
      hours: "Monday–Friday: 9:00 AM – 5:00 PM (PST)",
    },

    // ================= INDIA =================
    {
      country: "INDIA",
      city: "Noida",
      title: "Noida Office",
      address:
        "902 tower B, Sector 132, Noida, Uttar Pradesh 201301, India",
      phone: "+91 120 123 4567",
      email: "info@globalxperts.net",
      mapLink:
        "https://www.google.com/maps/search/Plot+No.+78,+Sector+62,+Noida,+Uttar+Pradesh+201301",
      image:utcmap,
        // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jlDgx9wcNHD9ZKpHXIbrgQx2B4prNwjXKA&s",
      fallbackImage:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/locations/india.png",
      hours: "Monday–Friday: 9:00 AM – 6:00 PM (IST)",
    },
    {
      country: "INDIA",
      city: "Chennai",
      title: "Chennai Office",
      address:
        "IndiQube Alpine Level 7 & 8, Chennai, Tamil Nadu 600002, India",
      phone: "+91 44 1234 5678",
      email: "info@globalxperts.net",
      mapLink:
        "https://www.google.com/maps/search/IndiQube+Alpine+Level+7+&+8,+Chennai",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
      fallbackImage:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/locations/india.png",
      hours: "Monday–Friday: 9:00 AM – 6:00 PM (IST)",
    },
    {
      country: "INDIA",
      city: "Gurugram",
      title: "Gurugram Office",
      address:
        "DLF Cyber City, Gurugram, Haryana 122002, India",
      phone: "+91 124 123 4567",
      email: "info@globalxperts.net",
      mapLink:
        "https://www.google.com/maps/search/DLF+Cyber+City,+Gurugram,+Haryana+122002",
      image:
        "https://winworldrealty.in/wp-content/uploads/2024/05/Global-City-Gurugram-Project-Gets-Environment-Approval-From-MOEF.jpg",
      fallbackImage:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/locations/india.png",
      hours: "Monday–Friday: 9:00 AM – 6:00 PM (IST)",
    },
    {
      country: "INDIA",
      city: "Delhi",
      title: "Delhi Office",
      address:
        "D-1/107, 1st Floor Aashirwad Complex, Green Park, South Delhi",
      phone: "+91 124 123 4567",
      email: "info@globalxperts.net",
      mapLink:
        "https://www.google.com/maps/search/Green+Park,+South+Delhi",
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
      fallbackImage:
        "https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/locations/india.png",
      hours: "Monday–Friday: 9:00 AM – 6:00 PM (IST)",
    },
  ];


  return (
    <>
      <Helmet>
        <title>GlobalXperts - Office Locations</title>
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-fixed bg-cover bg-center min-h-[90vh] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://main-website-images1.s3.ap-south-1.amazonaws.com/Company/locations/our-office.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/50"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our Global Presence
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            Discover our offices around the world. Whether you're near or far,
            we're always ready to connect with you.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 w-full">
            <WorldMap />
          </div>

          <div className="lg:col-span-6 text-gray-900 space-y-6">
            <h2 className="text-3xl font-bold leading-tight">Our Global Presence</h2>

            <p className="text-md text-gray-600">
              We empower businesses worldwide with secure, scalable, and
              enterprise-grade IT solutions across continents.
            </p>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <h3 className="text-3xl  text-[#0c2b3b]">15+</h3>
                <p className="text-gray-600">Countries Served</p>
              </div>
              <div>
                <h3 className="text-3xl  text-[#0c2b3b]">50+</h3>
                <p className="text-gray-600">Enterprise Clients</p>
              </div>
              <div>
                <h3 className="text-3xl  text-[#0c2b3b]">200+</h3>
                <p className="text-gray-600">Projects Delivered</p>
              </div>
              <div>
                <h3 className="text-3xl  text-[#0c2b3b]">24/7</h3>
                <p className="text-gray-600">Support</p>
              </div>
            </div>

            <a
              href="/contact-us"
              className="inline-block mt-4 px-6 py-3 bg-blue-700 text-white shadow hover:bg-blue-800 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Locations Section — Flat Layout Like Screenshot */}
      <section className="bg-gray-100 py-16">
        <h1 className="text-3xl items-center justify-center flex mb-8 font-semibold">Global Offices</h1>
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2  gap-y-20 gap-10">

            {offices.map((office, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-2 items-start">

                {/* LEFT IMAGE */}
                <img
                  src={office.image}
                  onError={(e) => (e.currentTarget.src = office.fallbackImage)}
                  alt={office.city}
                  className="w-full max-w-[300px] h-[220px] object-cover"
                />


                {/* RIGHT CONTENT */}
                <div className="space-y-2">

                  {/* Country + title inline */}
                  <h3 className="text-2xl font-bold text-black">
                    {office.country}
                    {office.title && (
                      <span className="text-xl font-normal text-gray-600 ml-2">
                        ({office.title})
                      </span>
                    )}
                  </h3>

                  {/* City */}
                  <h4 className="text-xl text-sky-600 font-semibold">
                    {office.city}
                  </h4>

                  {/* Address */}
                  <p className="text-gray-600 leading-relaxed max-w-md">
                    {office.address}
                  </p>

                  {/* Phone */}
                  <div className="flex items-center gap-3 text-sky-600 font-medium pt-2">
                    <FaPhoneAlt className="text-orange-400" />
                    <a href={`tel:${office.phone}`} className="hover:underline">
                      {office.phone}
                    </a>
                  </div>

                  {/* Map */}
                  <div className="flex items-center gap-3 text-sky-600 font-medium">
                    <FaMapMarkerAlt className="text-orange-400" />
                    <a
                      href={office.mapLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      Open in Google Maps
                    </a>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Not Sure Which Office to Contact?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Reach out to our team and we'll direct you to the right location for your needs.
          </p>
          <a
            href="/contact-us"
            className="inline-block px-8 py-4 bg-blue-700 text-white text-lg font-medium hover:bg-blue-800 transition duration-300 shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Locations;
