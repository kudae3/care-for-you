import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-secondary">
      <div className="h-[600px] sm:h-[400px] md:h-[400px] max-w-6xl mx-auto">
        <div className="sm:grid grid-cols-2 p-10">
          <div className="text-white space-y-7 flex flex-col justify-center items-start">
            <h1 className="heading-title">Contact Us</h1>
            <h2 className="heading-text">
              Contact If you have any questions about our mobile app, services,
              partnership enquiries, or anything else, drop us a note below. We
              will get back to you as soon as possible.
            </h2>
            <button className="btn-primary px-4 py-2 rounded-lg cursor-pointer text-sm">
              Call Us
            </button>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/female-health-gp.png"
              width={300}
              height={300}
              alt="Contact Us Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
