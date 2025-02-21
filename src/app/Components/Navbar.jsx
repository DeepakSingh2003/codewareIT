"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa"; // Import FaTimes for close icon
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    setOpenMenu(null);
  };

  return (
    <>
      <nav
        className="bg-white shadow-md px-2 fixed top-0 left-0 w-full z-50"
        onMouseLeave={() => handleMouseLeave("Courses")}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                width={80}
                height={90}
                alt="logo"
                className="pt-1"
              />
            </Link>
            <Link href="/">
              <h1 className="text-2xl font-bold text-[#2563EB] cursor-pointer">
                CodewareIT
              </h1>
            </Link>
          </div>

          {/* Mobile Menu Button (Changes Between ☰ and ✕) */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-2xl"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <FaTimes /> : <FaBars />} {/* Switches Icons */}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-12 text-gray-600 items-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>

            {/* Courses Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter("Courses")}
            >
              <Link
                href="/Courses"
                className="flex items-center space-x-1 focus:outline-none"
              >
                <span>Courses</span>
                <FaChevronDown className="text-gray-500" />
              </Link>
              {openMenu === "Courses" && (
                <div className="absolute mt-2 bg-white text-black shadow-lg rounded-lg w-56">
                  <ul className="p-2">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/courses/full-stack">
                        Full Stack Development
                      </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/courses/mern">MERN Stack</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hidden md:block"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-[5rem] left-0 w-full h-screen bg-[url('/mobileimg.jpg')] z-40 p-4 md:hidden">
          <ul className="mt-8 text-white">
            <li className="py-2">
              <Link href="/" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link href="/about" onClick={toggleMobileMenu}>
                About Us
              </Link>
            </li>

            {/* Mobile Courses Dropdown */}
            <li className="py-2 relative">
              <Link
                href="/Courses"
                onClick={toggleMobileMenu}
                className="flex items-center justify-between w-full text-left"
              >
                <span>Courses</span>
                <FaChevronDown
                  className={`text-gray-500 ${
                    openMenu === "MobileCourses" ? "rotate-180" : ""
                  }`}
                />
              </Link>
              {openMenu === "MobileCourses" && (
                <ul className="mt-2 text-black font-bold bg-gray-100 rounded-lg p-2">
                  <li className="py-2 px-4 hover:bg-gray-200">
                    <Link href="/courses/full-stack" onClick={toggleMobileMenu}>
                      Full Stack Development
                    </Link>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-200">
                    <Link href="/courses/mern" onClick={toggleMobileMenu}>
                      MERN Stack
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="py-2">
              <Link href="/blog" onClick={toggleMobileMenu}>
                Blog
              </Link>
            </li>
            <li className="py-2">
              <Link href="/contact" onClick={toggleMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
