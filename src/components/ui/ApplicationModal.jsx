import React, { useState, useRef, useEffect } from "react";
import { User, Mail, Phone, CheckCircle } from "lucide-react";
import Modal from "./Modal";
import emailjs from "@emailjs/browser";

const ApplicationModal = ({ isOpen, onClose, programTitle }) => {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  console.log("reCAPTCHA site key:", import.meta.env.VITE_RECAPTCHA_SITE_KEY);

  const formRef = useRef();
  // useRef needed for reCAPTCHA
  const recaptchaRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    console.log("Application submitted:", {
      ...formData,
      program: programTitle,
    });

    // reCAPTCHA logic
    const token = window.grecaptcha.getResponse();

    if (!token) {
      alert("Please verify that you are not a robot.");
      return;
    }

    // EmailJs integration
    emailjs
      .sendForm(
        SERVICE_ID, // service ID
        TEMPLATE_ID, // template ID
        formRef.current, // actual DOM element
        PUBLIC_KEY // public key
      )
      .then(
        () => {
          setIsSubmitted(true);
          console.log("EmailJS success");

          // Reset form after 3 seconds and close modal
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", phone: "" });
            onClose();
          }, 3000);

          window.grecaptcha.reset();
        },
        (error) => {
          window.grecaptcha.reset();
          console.error("EmailJS failed:", error);
          alert("Failed to submit application. Please try again.");
        }
      );
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", phone: "" });
    onClose();
  };

  useEffect(() => {
    if (isOpen && window.grecaptcha) {
      window.grecaptcha.render(recaptchaRef.current, {
        sitekey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
      });
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={`Apply for ${programTitle}`}
      size="md"
    >
      {!isSubmitted ? (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <p className="text-gray-600">
            Please fill out your contact information to apply for this
            opportunity. We'll get back to you shortly!
          </p>

          {/* 🔹 Hidden fields sent to EmailJS */}
          <input type="hidden" name="program" value={programTitle} />
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />

          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Full Name *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email Address *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Phone Number *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="(123) 456-7890"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <div ref={recaptchaRef} />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Submit Application
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center py-8">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Application Submitted!
          </h3>
          <p className="text-gray-600 text-lg">
            Thank you for your interest. We'll contact you shortly at{" "}
            {formData.email}
          </p>
        </div>
      )}
    </Modal>
  );
};

export default ApplicationModal;
