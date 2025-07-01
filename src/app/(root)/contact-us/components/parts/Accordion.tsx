"use client";
import React, { useState } from "react";

type AccordionItemProps = {
  title: string;
  content: string;
};

const AccordionItem = ({ title, content }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left font-medium text-gray-800 hover:bg-gray-50 focus:outline-none transition-all duration-300 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xs md:text-sm">{title}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-500 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-5">
          <p className="text-gray-600 text-xs md:text-sm">{content}</p>
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const faqItems = [
    {
      title: "What services do you offer?",
      content:
        "We offer a wide range of healthcare services including home care, nursing assistance, therapy, and specialized medical support for patients of all ages.",
    },
    {
      title: "How do I schedule an appointment?",
      content:
        "You can schedule an appointment through our website's booking system, by calling our customer service line, or by sending us an email with your preferred date and time.",
    },
    {
      title: "Do you accept insurance?",
      content:
        "Yes, we work with most major insurance providers. Please contact us with your insurance details, and we'll verify your coverage before your appointment.",
    },
    {
      title: "What areas do you serve?",
      content:
        "We currently provide services in [list of areas]. Please check our service area page for the most up-to-date information on our coverage.",
    },
    {
      title: "How experienced are your healthcare professionals?",
      content:
        "All our healthcare professionals are fully certified with a minimum of 5 years of experience in their respective fields. We maintain strict hiring standards to ensure the highest quality of care.",
    },
  ];

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-main py-3 px-6">
        <h3 className="text-lg font-medium text-white">
          Frequently Asked Questions
        </h3>
      </div>
      <div className="divide-y divide-gray-200">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
