"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Add a menu icon (react-icons)

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  // Toggle menu visibility on small screens
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-pink-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            width={50} // Logo width
            height={50} // Logo height
          />
          <h1 className="text-xl font-bold ml-2">Cat Blog</h1>
        </div>

        {/* Navbar for large screens */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#cards-section" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger menu for small screens */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          <FiMenu size={30} />
        </button>
      </div>

      {/* Mobile Menu - Toggles visibility based on state */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-pink-800 text-white py-4`}
      >
        <ul className="space-y-4 text-center">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#cards-section" className="hover:underline">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
