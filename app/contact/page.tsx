"use client";

import type React from "react";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div>
      {/* Contact Hero */}
      <section className="bg-[var(--primary)] py-16">
        <div className="container">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-700 mb-8">
                Whether you have a question about our products, need assistance
                with an order, or want to share your Arctic Chill experience,
                we're here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary)] bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin size={24} className="text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Our Location</h3>
                    <p className="text-gray-700">
                      Ghukna , Ghaziabad
                      <br />
                      Uttar Pradesh,201009
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary)] bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail size={24} className="text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email Us</h3>
                    <p className="text-gray-700">
                      General Inquiries: sakshienterprises@gmail.com
                      <br />
                      Customer Support:sakshienterprises@gmail.com
                      <br />
                      Wholesale:sakshienterprises@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary)] bg-opacity-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone size={24} className="text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Call Us</h3>
                    <p className="text-gray-700">
                      Customer Service:  8047673894
                      <br />
                      Monday - Friday: 9am - 5pm PST
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white hover:bg-[var(--secondary)] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white hover:bg-[var(--secondary)] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white hover:bg-[var(--secondary)] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                {submitSuccess ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    <p>
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Order Status">Order Status</option>
                      <option value="Warranty Claim">Warranty Claim</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-full flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send size={18} className="mr-2" />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
