"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Company Info */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold">Codeware IT Pvt Ltd</h2>
          <p className="mt-4 text-gray-300">
            We provide top-notch training in Full Stack Development, Python,
            Java, and other cutting-edge technologies. Master industry-relevant
            skills and build a successful career in tech.
          </p>
        </div>

        {/* Courses */}
        <div>
          <h3 className="font-bold text-lg">Courses</h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li>Full Stack Development</li>
            <li>Python Programming</li>
            <li>Java Development</li>
            <li>Data Structures & Algorithms</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li>Home</li>
            <li>About Us</li>
            <li>Courses</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-bold text-lg">Address</h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li>Codeware IT Pvt Ltd</li>
            <li>
              <FaMapMarkerAlt className="inline mr-2" /> Karanpur Dehradun,
              Uttarakhand 248001
            </li>
            <li>
              <FaEnvelope className="inline mr-2" /> info@codewareit.com
            </li>
            <li>
              <FaPhone className="inline mr-2" /> +91 9837218345
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-8 flex justify-center space-x-6">
        <a href="#" className="text-gray-300 hover:text-white text-2xl">
          <FaFacebookF />
        </a>
        <a href="#" className="text-gray-300 hover:text-white text-2xl">
          <FaTwitter />
        </a>
        <a href="#" className="text-gray-300 hover:text-white text-2xl">
          <FaYoutube />
        </a>
        <a href="#" className="text-gray-300 hover:text-white text-2xl">
          <FaInstagram />
        </a>
        <a href="#" className="text-gray-300 hover:text-white text-2xl">
          <FaLinkedin />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-gray-400 text-sm">
        © 2025 Codeware IT Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}
