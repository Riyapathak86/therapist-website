"use client";
import React, { useState } from "react";

const faqList = [
  {
    q: "What are your fees?",
    a: "My sessions range from $100–$150 based on type and length.",
  },
  {
    q: "Do you take insurance?",
    a: "Currently, I provide superbills for out-of-network reimbursement.",
  },
  {
    q: "Do you provide online counseling?",
    a: "Yes, I offer HIPAA-compliant Zoom sessions for all clients.",
  },
  {
    q: "What are your office hours?",
    a: "Monday to Friday, 9 AM to 5 PM. Evening appointments available on request.",
  },
  {
    q: "What geographic areas do you serve?",
    a: "I provide therapy to clients in Virginia, both in-person and via telehealth.",
  },
  {
    q: "What services do you offer?",
    a: "Individual therapy, couples counseling, and Christian-based support.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-[#BEE8ED]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12">
          Frequently Asked Questions
        </h2>

        {faqList.map((item, index) => (
          <div
            key={index}
            className="border-b border-black py-4 transition-all duration-300"
          >
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="flex justify-between items-center w-full text-left text-lg md:text-xl font-semibold text-gray-900 focus:outline-none"
            >
              <span>{item.q}</span>
              <span className="text-2xl">
                {activeIndex === index ? "▴" : "▾"}
              </span>
            </button>

            {activeIndex === index && (
              <p className="mt-3 text-gray-800 leading-relaxed text-[16px]">
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
