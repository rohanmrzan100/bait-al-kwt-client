"use client";

import { useEffect, useRef } from "react";
import React from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  useEffect(() => emailjs.init(process.env.NEXT_PUBLIC_EMAIL_JS as string), []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const data: any = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
      console.log(data);

      const loadingToast = toast.loading("Loading...");

      try {
        await emailjs.send("service_bahm0ic", "template_2cex8ek", data);
        toast.success(`Your message has been sent.\nThank you `);
      } catch (error) {
        console.log("Error:", error);
        toast.error(`Something went wrong.`);
      } finally {
        toast.dismiss(loadingToast);
      }
    }
  };
  return (
    <div>
      {" "}
      <form id="contactForm" ref={formRef} onSubmit={handleSubmit}>
        <div className="mb-6">
          <div className="mx-0 mb-1 sm:mb-4">
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="name"
                className="pb-1 text-xs uppercase tracking-wider"
              ></label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                name="name"
              />
            </div>
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="email"
                className="pb-1 text-xs uppercase tracking-wider"
              ></label>
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                name="email"
              />
            </div>
          </div>
          <div className="mx-0 mb-1 sm:mb-4">
            <label
              htmlFor="textarea"
              className="pb-1 text-xs uppercase tracking-wider"
            ></label>
            <textarea
              id="message"
              name="message"
              cols={30}
              rows={5}
              placeholder="Write your message..."
              className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
            ></textarea>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
