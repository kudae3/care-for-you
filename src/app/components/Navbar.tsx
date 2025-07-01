"use client";
import { routes } from "@/routes";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  const serviceDropdown = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={routes.Home}>
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <span className="ml-2 text-xl">Logo</span>
              </div>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center space-x-6 text-sm">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={serviceDropdown}
                className="flex items-center cursor-pointer hover:text-main font-medium transition-colors duration-300"
              >
                Services
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isServiceDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Service Dropdown Menu */}
              {isServiceDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-[#2f4f4f] hover:text-main transition-colors duration-200"
                    >
                      Find a Doctor
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-[#2f4f4f] hover:text-main transition-colors duration-200"
                    >
                      Book Appointment
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-[#2f4f4f] hover:text-main transition-colors duration-200"
                    >
                      Emergency Care
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-[#2f4f4f] hover:text-main transition-colors duration-200"
                    >
                      Health Records
                    </a>
                  </div>
                </div>
              )}
            </div>
            <Link href="#" className="cursor-pointer hover:text-main">
              Articles
            </Link>

            <Link href="#" className="cursor-pointer hover:text-main">
              About Us
            </Link>

            <Link
              href={routes.ContactUs}
              className="cursor-pointer hover:text-main"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {isServiceDropdownOpen && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setIsServiceDropdownOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
