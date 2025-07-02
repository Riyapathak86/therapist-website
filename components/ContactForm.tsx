"use client";
import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 min-h-screen flex items-center justify-center">
      <div className="bg-white max-w-xl w-full rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Get In Touch</h2>
          <p className="text-sm text-gray-600">
            Simply fill out the brief fields below and Dr. Norman will be in touch with
            you soon, usually within one business day. This form is safe, private, and
            completely free.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="w-full border border-gray-300 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#B6D3D3]"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full border border-gray-300 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#B6D3D3]"
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="(555) 234-5678"
            className="w-full border border-gray-300 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#B6D3D3]"
          />
          <textarea
            name="message"
            required
            placeholder="How can I help you?"
            rows={4}
            className="w-full border border-gray-300 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#B6D3D3]"
          ></textarea>

          {/* Contact Time */}
          <div>
            <input
              type="text"
              name="preferredContactTime"
              placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
              className="w-full border border-gray-300 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#B6D3D3]"
            />
            <p className="text-sm text-gray-500 mt-1">
              Let us know when you're typically available for a call or consultation
            </p>
          </div>

          {/* Contact Method */}
          <select
            name="preferredContactMethod"
            className="w-full border border-gray-300 p-3 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#B6D3D3]"
            required
          >
            <option value="" disabled selected>
              Select preferred method
            </option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
          </select>

          {/* Fake Recaptcha */}
          <div className="flex items-center gap-2 border border-gray-300 p-3 rounded-md bg-gray-50">
            <input
              type="checkbox"
              name="notRobot"
              id="notRobotCheckbox"
              className="w-5 h-5 rounded border border-gray-300 appearance-none checked:bg-[#B6D3D3] checked:border-[#B6D3D3] focus:ring-2 focus:ring-[#B6D3D3]"
              required
            />
            <label htmlFor="notRobotCheckbox" className="text-gray-700">
              I'm not a robot
            </label>
            <img
              src="https://www.google.com/recaptcha/static/images/recaptcha_logo_2x.png"
              alt="reCAPTCHA"
              className="ml-auto w-24"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#4A7C59] hover:bg-[#3d664a] text-white py-3 rounded-md font-semibold transition-colors"
          >
            Submit
          </button>

          {/* Consent */}
          <p className="text-xs text-gray-500 text-center mt-4 flex items-center justify-center gap-2">
            <input
              type="checkbox"
              name="consent"
              required
              className="w-4 h-4"
            />
            By clicking submit you consent to receive texts and emails from Dr. Marcia T. Norman
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
