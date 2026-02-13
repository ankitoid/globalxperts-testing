import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

import First from "../../Assets/3stLG.png";
import second from "../../Assets/a.png";

const ContactCard = () => {
  const siteKey = "6LfeY00rAAAAAPGTPS3gr0KXyDismzqgpeoNivZU";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [status, setStatus] = useState("");
  const [grecaptchaReady, setGrecaptchaReady] = useState(false);

  // Wait for grecaptcha to load
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.grecaptcha && window.grecaptcha.execute) {
        setGrecaptchaReady(true);
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const onSubmit = async (data) => {
    if (!grecaptchaReady) {
      setStatus("reCAPTCHA is not ready yet, please wait.");
      return;
    }

    setStatus("Sending…");

    try {
      // Get the reCAPTCHA token
      const token = await window.grecaptcha.execute(siteKey, {
        action: "submit",
      });

      // Include token with form data
      const response = await fetch(
        "https://gxi-backend.globalxperts.net.in/api/ContactCard",
        // "http://localhost:5003/api/ContactCard",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, captchaToken: token }),
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
        reset();
      } else {
        const responseData = await response.json();
        setStatus(responseData.error || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center p-4 md:p-0 space-y-6 md:space-y-0 md:space-x-6 max-w-3xl mx-auto">
      <div className="w-full md:w-6/12 xl:w-5/12 p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-extrabold mb-4 text-gray-800">
          Get In Touch
        </h2>
        <p className="mb-4 text-gray-600">
          Fill out the form below, and we’ll be in touch shortly.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters long",
              },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Name can only contain letters and spaces",
              },
            })}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <input
            type="tel"
            placeholder="Phone"
            {...register("phone")}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300"
          />
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <textarea
            placeholder="Message"
            {...register("message", {
              minLength: {
                message: "Message must be at least 10 characters long",
              },
            })}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 h-14"
          />

          <div className="flex items-start">
            <input
              type="checkbox"
              {...register("isAgreed")}
              className="w-4 h-4 text-blue-500 focus:ring-blue-500"
            />
            <label className="ml-2 text-sm text-black">
              I agree to the{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Privacy Policy
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending…" : "Send Message"}
          </button>
        </form>
        {status && <p className="mt-4 text-gray-700">{status}</p>}
      </div>

      <div className="w-full md:w-6/12 xl:w-5/12 p-4 bg-gradient-to-r from-blue-600 to-green-800 text-white rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">Contact Information</h3>
        <div className="mb-4">
          <FiPhone className="inline-block mr-2 text-green-300" />
          Call: +1 919-342-5482
        </div>
        <div className="mb-4">
          <FiMail className="inline-block mr-2 text-green-300" />
          Email: info@globalxperts.net
        </div>
        <div className="mb-4">
          <FiMapPin className="inline-block mr-2 text-green-300" />
          Address: 5540 Centerview Drive, Suite 200, Raleigh, NC 27606
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to=""
            className="flex items-center justify-center relative group"
          >
            <img
            src={First}
              // src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Main-Videos/gx-logo-new.png"
              logo="logo"
              className="w-auto h-8"
              // src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/logo/3stLG.png"
              //   alt="Logo"
              //   className="h-10"
              // />
              // <img
              //   src="https://main-website-images1.s3.ap-south-1.amazonaws.com/Lending-Page-Image/logo/a.png"
              //   alt="Logo"
              //   className="h-20"
            />
            <img src={second} className="h-14 w-auto"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
