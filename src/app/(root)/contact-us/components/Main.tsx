import React from "react";
import Accordion from "./parts/Accordion";
import ContactForm from "./parts/ContactForm";

const Main = () => {
  return (
    <div className="container space-y-16 md:space-y-20">
      <div className="space-y-5 text-center">
        <h2 className="heading-title">We are Here to Help</h2>
        <p className="heading-subtitle">
          Whether you're curious about features, a free trail or even press-
          we're ready to answer any and all questions
        </p>
      </div>
      <div className="md:flex justify-center gap-8 mb-5 md:mb-10">
        {/* Accordion */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Accordion />
        </div>
        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Main;
